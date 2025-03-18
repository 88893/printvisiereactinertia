<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReviewController extends Controller
{
   
    public function index(Request $request)
    {
      
        $reviews = Review::all();
        
      
        $user = $request->user();
        
        return Inertia::render('Dashboard', [
            'reviews' => $reviews,
            'auth' => [
                'user' => $user ? [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                ] : null,
            ],
            'flash' => [
                'message' => session('success'),
                'success' => session()->has('success'),
            ],
        ]);
    }

  
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image_path' => 'nullable|string|max:255',
        ]);

        Review::create($validated);

        return redirect()->route('dashboard')->with('success', 'Referentie succesvol toegevoegd!');
    }


    public function update(Request $request, Review $review)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image_path' => 'nullable|string|max:255',
        ]);

        $review->update($validated);

        return redirect()->route('dashboard')->with('success', 'Referentie succesvol bijgewerkt!');
    }


    public function destroy(Review $review)
    {
        $review->delete();

        return redirect()->route('dashboard')->with('success', 'Referentie succesvol verwijderd!');
    }
}