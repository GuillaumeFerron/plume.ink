<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::group([
    'prefix' => config('api.version'),
    'middleware' => ['auth']
], function () {

    // PAGES //
    Route::get('/pages', 'PageController@index');
    Route::post('/pages', 'PageController@edit');

    // SETTINGS //
    Route::get('/settings', 'SettingController@index');
    Route::get('/setting', 'SettingController@get');
    Route::post('/setting', 'SettingController@update');
});
