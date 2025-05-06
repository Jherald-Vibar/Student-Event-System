<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Auth\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('login',    [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/auth/check', function (Request $request) {
        $user = $request->user();
        $role = $user instanceof \App\Models\Student
              ? 'student'
              : ($user instanceof \App\Models\User ? 'admin' : 'unknown');
        return response()->json([
            'authenticated' => true,
            'role'          => $role,
            'user'          => $user,
        ]);
    });

    Route::post('/admin',       [AdminController::class, 'adminStore']);
    Route::get('/admins',       [AdminController::class, 'getAdmin']);


    Route::post('/admin/event', [AdminController::class, 'storeEventAdmin']);
    Route::get('/admin/events', [AdminController::class, 'getEvents']);
    Route::put('/admin/event/{event_id}/edit', [AdminController::class, 'editEvents']);
    Route::post('/logout', [AuthController::class, 'logout']);
});
