<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Event;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
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


    public function storeEventAdmin(Request $request) {
        $admin = Auth::user();

        $validator = Validator::make($request->all(), [
            'event_name' => 'required',
            'date' => 'required',
            'time' => 'required',
            'image' => 'nullable|image|mimes:png,jpg',
        ]);

        if($validator->fails()) {
            return response([
                'error' => $validator->errors(),
            ], 404);
        }

        $validated = $validator->validated();

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $fileName = time() . '.' . $file->getClientOriginalExtension();


            $file->move(public_path('event_images'), $fileName);


            $validated['image'] = $fileName;
        }


        Event::create([
            'event_name' => $validated['event_name'],
            'date' => $validated['date'],
            'time' => $validated['time'],
            'image' => $fileName,
            'admin_id' => $admin->id,
        ]);

        return response([
            'message' => "Event Successfully Created!",
        ], 200);
    }

    public function getEvents()
    {
        $today = Carbon::today()->toDateString();
        $events = Event::where('date', '>=', $today)
                       ->orderBy('date', 'desc')
                       ->get();

        return response()->json($events, 200);
    }

    public function editEvents(Request $request, $id)
    {
        $validated = $request->validate([
            'event_name' => 'required|string|max:255',
            'date' => 'required',
            'time' => 'required',
        ]);

        $updateData = [
            'event_name' => $validated['event_name'],
            'date' => $validated['date'],
            'time' => $validated['time'],
        ];


        $event = Event::findOrFail($id);
        $event->update($updateData);

    return response()->json(['message' => 'Events Updated Successfully!'], 200);
    }

    public function eventDelete($id) {

    }

}
