<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    /**
     * Display the specified page by its slug.
     */
    public function show($slug = 'home')
    {
        $page = Page::where('slug', $slug)
            ->where('is_active', true)
            ->firstOrFail();

        return Inertia::render('DynamicPage', [
            'page' => $page,
        ]);
    }
}
