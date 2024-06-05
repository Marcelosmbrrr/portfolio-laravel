<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WelcomeController;

Route::get('/', [WelcomeController::class, 'index']);
Route::get('/posts/{id}/view', [WelcomeController::class, 'postView']);

Route::middleware(['auth', 'verified'])->group(function () {

    Route::inertia("/dashboard", "Dashboard")->name('dashboard');
    Route::inertia("/technologies", "Technologies")->name('technologies');
    Route::inertia("/projects", "Projects")->name('projects');
    Route::inertia("/posts", "Posts")->name('posts');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
