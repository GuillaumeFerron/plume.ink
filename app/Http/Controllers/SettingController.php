<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Log;

class SettingController extends Controller
{
    /**
     * Returns the object as an array
     *
     * @return mixed
     */
    public function index()
    {
        try {
            return response(['data' => Auth::user()->setting->getSettings()], 200);
        } catch (\Exception $e) {
            Log::error($e);
            return response(['message' => 'Error getting the settings.'], 500);
        }
    }

    /**
     * Returns the setting value given the key
     *
     * @return mixed
     */
    public function get()
    {
        try {
            return response(['data' => Auth::user()->setting->getValueByKey(Input::get('key'))], 200);
        } catch (\Exception $e) {
            Log::error($e);
            return response(['message' => 'Error getting the setting value.'], 500);
        }
    }

    /**
     * Set value given the key
     *
     * @return mixed
     */
    public function update()
    {
        try {
            $new_settings = Auth::user()->setting->setValue(Input::get('key'), Input::get('value'));

            return response([
                'data' => $new_settings,
                'message' => 'Success saving the setting.'
            ], 200);
        } catch (\Exception $e) {
            Log::error($e);
            return response(['message' => 'Error saving the setting value.'], 500);
        }
    }

    /**
     * Reset the settings to initial values
     *
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function reset()
    {
        try {
            $settings = Auth::user()->setting->reset();

            return response([
                'data' => $settings,
                'message' => 'Success resetting the settings.'
            ], 200);
        } catch (\Exception $e) {
            Log::error($e);
            return response(['message' => 'Error resetting the settings.'], 500);
        }
    }
}
