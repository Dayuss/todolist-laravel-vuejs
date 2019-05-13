<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Todo;

class TodoController extends Controller
{
    public function index(){
        $todos = Todo::orderBy('created_at', 'DESC')->paginate(2);
        return response()->json($todos);
    }
}
