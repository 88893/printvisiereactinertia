<?php

use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Home page route (defaults to a page with slug 'home')
Route::get('/', [PageController::class, 'show'])->name('page.home');

// Dynamic page route - this will match any slug
Route::get('/{slug}', [PageController::class, 'show'])->name('page.show');
