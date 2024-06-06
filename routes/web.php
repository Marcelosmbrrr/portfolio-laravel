<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\Authenticated\DashboardController;
use App\Http\Controllers\Authenticated\ProjectController;
use App\Http\Controllers\Authenticated\PostController;
use App\Http\Controllers\Authenticated\TechnologyController;
use App\Http\Controllers\Authenticated\ProfileController;

Route::get('/', [WelcomeController::class, 'index']);
Route::get('/posts/{id}/view', [WelcomeController::class, 'postView']);

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get("/dashboard", DashboardController::class)->name('dashboard');
    Route::resource("/projects", ProjectController::class)->names('projects');
    Route::resource("/technologies", TechnologyController::class)->names('technologies');
    Route::resource("/posts", PostController::class)->names('posts');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

});

require __DIR__ . '/auth.php';
