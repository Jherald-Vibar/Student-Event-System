<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Laravel\Passport\PersonalAccessTokenResult;

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

            $token = $user->createToken('EMS')->accessToken;

            return response()->json([
                'token' => $token,
            ]);
        } else {

            return response()->json([
                'message' => 'Login failed. Please check your credentials.',
            ], 401);
        }
    }

    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ]);
        }

        $validated = $validator->validate();

        $user = new User();


        $user->create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => $validated['password'],
        ]);

        return response()->json([
            'message' => 'Registration successful. Please check your credentials.',
        ], 200);


    }

}
