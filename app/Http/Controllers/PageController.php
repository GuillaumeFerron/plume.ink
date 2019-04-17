<?php

namespace App\Http\Controllers;

use App\Page;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Log;

class PageController extends Controller
{
    public function index()
    {
        try {
            $pages = Auth::user()->pages;
            Log::debug(json_encode($pages));
            return response(['data' => $pages], 200);
        } catch (\Exception $e) {
            return response(['message' => 'Couldn\'t fetch the user pages.'], 500);
        }
    }

    public function edit()
    {
        try {
            $page = Page::where('id', Input::get('page_id'))->first();

            $page->body = Input::get('body');

            $page->save();

            return response(['message' => 'Page saved.'], 200);

        } catch (\Exception $e) {
            return response(['message' => 'Couldn\'t save the pages.'], 500);
        }
    }
}
