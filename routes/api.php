<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Auth\AuthController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;


Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);


Route::middleware('auth:sanctum')->get('/auth/check', function (Request $request) {
    $user = $request->user();
    if ($user instanceof \App\Models\Student) {
        $role = 'student';
    } elseif ($user instanceof \App\Models\User) {
        $role = 'admin';
    } else {
        $role = 'unknown';
    }
    return response()->json([
        'authenticated' => true,
        'role' => $role,
        'user' => $user,
    ]);
});

Route::post('admin', [AdminController::class, 'adminStore']);
Route::get('/admins', [AdminController::class, 'getAdmin']);

Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);
