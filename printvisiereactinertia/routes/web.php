<?php

use App\Http\Controllers\PageController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ReviewController; 
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;


Route::get('/login', function() {
    return Inertia::render('Auth/Login');
})->name('login');

Route::post('/login', function(Illuminate\Http\Request $request) {
    $credentials = $request->validate([
        'email' => ['required', 'email'],
        'password' => ['required'],
    ]);

    if (Auth::attempt($credentials)) {
        $request->session()->regenerate();
        return redirect()->intended('dashboard');
    }

    return back()->withErrors([
        'email' => 'De opgegeven inloggegevens komen niet overeen met onze gegevens.',
    ]);
});


Route::post('/logout', function(Illuminate\Http\Request $request) {
    Auth::logout();
    $request->session()->invalidate();
    $request->session()->regenerateToken();
    return redirect('/');
})->name('logout');


Route::middleware(['auth'])->group(function () {
 
    Route::get('/dashboard', [ReviewController::class, 'index'])->name('dashboard');
    
   
    Route::get('/users', [UserController::class, 'index'])->name('users.index');
     
   
    Route::post('/reviews', [ReviewController::class, 'store'])->name('reviews.store');
    Route::put('/reviews/{review}', [ReviewController::class, 'update'])->name('reviews.update');
    Route::delete('/reviews/{review}', [ReviewController::class, 'destroy'])->name('reviews.destroy');
    
    
    Route::post('/users', [UserController::class, 'store'])->name('users.store');
    Route::put('/users/{user}', [UserController::class, 'update'])->name('users.update');
    Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('users.destroy');

  Route::prefix('dashboard/pages')->name('pages.')->group(function () {
        Route::get('/', [PageController::class, 'adminIndex'])->name('index');
        Route::get('/create', [PageController::class, 'adminCreate'])->name('create');
        Route::post('/store', [PageController::class, 'adminStore'])->name('store');
        Route::get('/edit/{page}', [PageController::class, 'adminEdit'])->name('edit');
        Route::put('/{page}', [PageController::class, 'adminUpdate'])->name('update');
        Route::delete('/{page}', [PageController::class, 'adminDestroy'])->name('destroy');
    });
});


Route::get('/', [PageController::class, 'show'])->name('page.home');


Route::get('/{slug}', [PageController::class, 'show'])->name('page.show');