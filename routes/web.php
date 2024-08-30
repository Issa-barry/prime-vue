<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
 

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::middleware([
//     'auth:sanctum',
//     config('jetstream.auth_session'),
//     'verified',
// ])->group(function () {
//     Route::get('/dashboard', function () { return Inertia::render('Dashboard'); })->name('dashboard');
// });
 
// Route::fallback(function () {
//     return Inertia::render('views/pages/NotFound', [], 404);
// });

// Route::get('/landing', function () {
//      return Inertia::render('views/pages/Landing'); 
//     })->name('landing');
 

Route::get('/{any}', function () {
    return Inertia::render('App');
})->where('any', '.*');

 