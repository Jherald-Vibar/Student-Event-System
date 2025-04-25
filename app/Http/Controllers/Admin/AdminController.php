<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    public function adminStore(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required',
            'name' => 'required',
            'password' => 'required'
        ]);

        if($validator->fails()) {
            return response([
                'error' => $validator->errors(),
            ]);
        }

        $validated = $validator->validate();

        $user = new User();

        $user->create([
            'email' => $validated['email'],
            'name' => $validated['name'],
            'password' => $validated['password']
        ]);

        return response([
            'Success' => "Successfully Created Admin",
        ], 200);

    }

    public function getAdmin() {

        $admins = User::all();

        return response()->json($admins);
    }
}
