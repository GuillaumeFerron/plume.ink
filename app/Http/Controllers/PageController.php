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
            return response(['data' => $pages], 200);
        } catch (\Exception $e) {
            return response(['message' => 'Couldn\'t fetch the user pages.'], 500);
        }
    }

    public function edit()
    {
        try {
            $page = Page::updateOrCreate([
                'user_id' => Auth::id(),
                'page_index' => Input::get('page_index')
            ], [
                'user_id' => Auth::id(),
                'page_index' => Input::get('page_index'),
                'body' => Input::get('body')
            ]);

            if (Input::get('last')) {
                Page::where('user_id', Auth::id())->where('page_index', '>', Input::get('page_index'))->delete();
            }

            return response(['message' => 'Page saved.'], 200);

        } catch (\Exception $e) {
            Log::error($e);
            return response(['message' => 'Couldn\'t save the pages.'], 500);
        }
    }
}
