<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home/CreativeAgency');
});

Route::get('/home-two', function () {
    return Inertia::render('Home/PersonalPortfolio');
});

Route::get('/home-three', function () {
    return Inertia::render('Home/DigitalAgency');
});

Route::get('/about-us', function () {
    return Inertia::render('About/AboutUs');
});

Route::get('/about-me', function () {
    return Inertia::render('About/AboutMe');
});

Route::get('/team', function () {
    return Inertia::render('Team/TeamPage');
});

Route::get('/team-details', function () {
    return Inertia::render('Team/TeamPageDetails');
});

Route::get('/project-details', function () {
    return Inertia::render('PortfolioDetailsPage');
});

Route::get('/services-details', function () {
    return Inertia::render('ServicesDetailsPage');
});

Route::get('/contact', function () {
    return Inertia::render('ContactPage');
});

Route::get('/blog', function () {
    return Inertia::render('Blog/BlogPage');
});

Route::get('/blog-details', function () {
    return Inertia::render('Blog/BlogDetailsPage');
});
