<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Inertia\Inertia;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class PageController extends Controller
{
   
    public function show($slug = 'home')
    {
      
        $page = Cache::remember('page_'.$slug, 3600, function () use ($slug) {
            return Page::where('slug', $slug)
                ->where('is_active', true)
                ->select('id', 'title', 'slug', 'content', 'meta_title', 'meta_description', 'meta_keywords', 'meta_image', 'imports', 'scripts')
                ->firstOrFail();
        });
        
        $reviews = Review::all();

      
        $components = $page->content;
        
        
        if (!is_array($components)) {
            $components = [];
        }

        return Inertia::render('DynamicPage', [
            'page' => [
                'title' => $page->title ?? 'Default Title',
                'meta_title' => $page->meta_title ?? null,
                'meta_description' => $page->meta_description ?? null,
                'meta_keywords' => $page->meta_keywords ?? null,
                'meta_image' => $page->meta_image ?? null,
                'components' => $components,
                'testemonials' => $reviews ?? '',
            ],
        ]);
    }

    
    public function adminIndex()
    {
        $pages = Page::select('id', 'title', 'slug', 'is_active', 'updated_at')
            ->orderBy('updated_at', 'desc')
            ->get();

        return Inertia::render('Dashboard/PagesDashboard', [
            'pages' => $pages
        ]);
    }

  
    public function adminCreate()
    {
        return Inertia::render('Dashboard/Create', [
            'page' => [
                'title' => '',
                'slug' => '',
                'content' => [],
                'meta_title' => '',
                'meta_description' => '',
                'meta_keywords' => '',
                'meta_image' => '',
                'is_active' => true,
            ]
        ]);
}   

    
    public function adminStore(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:page,slug',
            'content' => 'array',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:255',
            'meta_keywords' => 'nullable|string|max:255',
            'meta_image' => 'nullable|string|max:255',
            'is_active' => 'boolean',
        ]);

            Page::create($validated);

        return redirect()->route('pages.index')
            ->with('success', 'Page created successfully.');
    }

    
    public function adminEdit(Page $page)
    {
        return Inertia::render('Dashboard/Edit', [
            'page' => $page
        ]);
    }

    public function adminUpdate(Request $request, Page $page)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255|unique:page,title,' . $page->id,
            'slug' => 'required|string|max:255|unique:page,slug,' . $page->id,
            'content' => 'required|array',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:255',
            'meta_keywords' => 'nullable|string|max:255',
            'meta_image' => 'nullable|string|max:255',
            'is_active' => 'boolean',
        ]);

     
        $oldSlug = $page->slug;
        
        $page->update($validated);

 
        Cache::forget('page_' . $oldSlug);
        if ($oldSlug !== $validated['slug']) {
            Cache::forget('page_' . $validated['slug']);
        }

        return redirect()->route('pages.index')
            ->with('success', 'Page updated successfully.');
    }

   
    public function adminDestroy(Page $page)
    {
    
        Cache::forget('page_' . $page->slug);
        
        $page->delete();

        return redirect()->route('pages.index')
            ->with('success', 'Page deleted successfully.');
    }

    public function getPage(Page $page)
    {
        return response()->json($page);
    }
}