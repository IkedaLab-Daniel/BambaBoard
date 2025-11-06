<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Quiz;
use Illuminate\Http\Request;

use function PHPUnit\Framework\returnSelf;

class QuizController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $quizes = Quiz::all();
        return response()->json(['data' => $quizes]);       
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'question' => 'required',
            'answer' => 'required'
        ]);

        $quiz = Quiz::create($validated);

        return response()->json([
            'message' => 'Quiz Added!',
            'data' => $quiz
        ], 201);
        
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $quiz = Quiz::find($id);

        if (!$quiz) return response()->json(['message' => 'Quiz not found']);

        return response()->json(['data' => $quiz]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'question' => 'required',
            'answer' => 'required'
        ]);

        $quiz = Quiz::find($id);

        if (!$quiz) return response()->json(['message' => 'Quiz not found']);

        $quiz->update($validated);

        return response()->json([
            'message' => 'Quiz updated successfully',
            'data' => $quiz
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $quiz = Quiz::find($id);

        if (!$quiz) return response()->json(['message' => 'Quiz not found']);

        $quiz->delete();

        return response()->json(['message' => 'Quiz deleted']);
    }
}
