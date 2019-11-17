<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Plume.ink') }}</title>
    <!-- Primary Meta Tags -->
    <meta name="title" content="Plume.ink">
    <meta name="description"
          content="Got something on your mind? Forget about overkill note-taking apps with way too many useless features and focus on what's important. Start writing now with Plume.ink !">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ config('app.url', 'Plume.ink') }}">
    <meta property="og:title" content="{{ config('app.name', 'Plume.ink') }}">
    <meta property="og:description"
          content="Got something on your mind? Forget about overkill note-taking apps with way too many useless features and focus on what's important. Start writing now with Plume.ink !">
    <meta property="og:image"
          content="{{ asset('images/og_image.jpg') }}">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="{{ config('app.url', 'Plume.ink') }}">
    <meta property="twitter:title" content="{{ config('app.name', 'Plume.ink') }}">
    <meta property="twitter:description"
          content="Got something on your mind? Forget about overkill note-taking apps with way too many useless features and focus on what's important. Start writing now with Plume.ink !">
    <meta property="twitter:image"
          content="{{ asset('images/og_image.jpg') }}">

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">
    <link rel="shortcut icon" href="{{ asset('images/logo.ico') }}" type="image/x-icon">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">


    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id={{ env('GA_TAG') }}"></script>
    <script>
      window.dataLayer = window.dataLayer || []

      function gtag() {
        dataLayer.push(arguments)
      }

      gtag('js', new Date())

      gtag('config', {{ env('GA_TAG') }})
    </script>
</head>
<body>
<div id="app">
    <main>
        <div class="row m-0 pt-3 log-buttons">
            @if(Route::current()->getName() === 'login')
                <a class="btn btn-outline-secondary ml-auto mr-3"
                   href="{{ route('register') }}">{{ __('Register') }}</a>
            @elseif(Route::current()->getName() === 'register')
                <a class="btn btn-outline-secondary ml-auto mr-3" href="{{ route('login') }}">{{ __('Login') }}</a>
            @endif
        </div>
        @yield('content')
    </main>
</div>
</body>
</html>

@auth
    <script>
      window.laravel = {!! json_encode([
       'csrfToken' => csrf_token(),
       'apiToken' => \Illuminate\Support\Facades\Auth::user() ? \Illuminate\Support\Facades\Auth::user()->api_token : null,
   ]) !!}

        window.maxLength = {{ intval(config('api.post_max_size') / config('api.utf8_max_char_size')) }}

        window.user = {!! Illuminate\Support\Facades\Auth::user() !!}

        window.settings = {!! json_encode(\App\Setting::getAllPossibleSettings()) !!}
    </script>
@endauth
