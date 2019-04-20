<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class ApiTokenController extends Controller
{
    /**
     * Update the authenticated user's API token.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function update(Request $request)
    {
        try {
            $token = Str::random(config('api.token_length'));

            $request->user()->forceFill([
                'api_token' => $token,
            ])->save();

            return response(['message' => 'API token successfully generated.', 'token' => $token], 200);
        } catch (\Exception $e) {
            Log::error($e);
            return response(['message' => 'Failed to generate API token.'], 500);
        }
    }
}
