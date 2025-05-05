<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Student;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request)
    {

        $validated = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if (Auth::attempt(['email' => $validated['email'], 'password' => $validated['password']])) {

            $user = Auth::user();
            $token = $user->createToken('admin')->plainTextToken;
            return response()->json([
                'token' => $token,
                'role' => 'admin'
            ]);
        } elseif(Auth::guard('student')->attempt(['email' => $validated['email'], 'password' => $validated['password']])) {
            $student = Auth::guard('student')->user();
            $token = $student->createToken('student')->plainTextToken;
            return response()->json([
                'token' => $token,
                'role' => 'student',
            ]);
        }

        else {
            return response()->json([
                'message' => 'Login failed. Please check your credentials.',
            ], 401);
        }
    }

    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required',
            'middle_name' => 'nullable',
            'last_name' => 'required',
            'email' => 'required|email|unique:students,email',
            'password' => 'required',
        ]);

        if($validator->fails()) {
            return response([
                'error' => $validator->errors(),
            ], 404);
        }

        $validated = $validator->validated();

        Student::create([
            'first_name' => $validated['first_name'],
            'middle_name' => $validated['middle_name'],
            'last_name' => $validated['last_name'],
            'email' => $validated['email'],
            'password' => $validated['password'],
        ]);

        return response([
            'success' => "Student Successfully Created",
        ], 200);


    }

    public function logout(Request $request)
    {
        if(Auth::guard('web')->check()) {
            $request->user()->tokens()->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'Logged out successfully',
            ]);
        } elseif (Auth::guard('student')->check()) {
            $student = Auth::guard('student')->user();
            $student->tokens()->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'Logged out successfully',
            ]);
        }
    }
}
