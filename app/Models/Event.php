<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $primaryKey = 'event_id';

    protected $fillable = [
        'event_name', 'date', 'time', 'venue_id', 'admin_id', 'image',
    ];

    public function admin() {
        return $this->belongsTo(User::class, 'admin_id');
    }

    public function student() {
        return $this->hasMany(Student::class, 'event_id');
    }
}
