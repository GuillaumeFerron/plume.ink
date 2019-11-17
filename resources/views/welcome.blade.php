<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ config('app.name', 'Plume.ink') }}</title>
    <!-- Primary Meta Tags -->
    <meta name="title" content="Plume.ink">
    <meta name="description" content="Got something on your mind?
Forget about overkill note-taking apps with way too many useless features and focus on what's important.
Start writing now with Plume.ink !">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ config('app.url', 'Plume.ink') }}">
    <meta property="og:title" content="{{ config('app.name', 'Plume.ink') }}">
    <meta property="og:description" content="Got something on your mind?
Forget about overkill note-taking apps with way too many useless features and focus on what's important.
Start writing now with Plume.ink !">
    <meta property="og:image"
          content="{{ asset('images/og_image.jpg') }}">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="{{ config('app.url', 'Plume.ink') }}">
    <meta property="twitter:title" content="{{ config('app.name', 'Plume.ink') }}">
    <meta property="twitter:description" content="Got something on your mind?
Forget about overkill note-taking apps with way too many useless features and focus on what's important.
Start writing now with Plume.ink !">
    <meta property="twitter:image"
          content="{{ asset('images/og_image.jpg') }}">

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link rel="shortcut icon" href="{{ asset('images/logo.ico') }}" type="image/x-icon">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">

    <!-- Styles -->
    <style>
        html, body {
            background-color: #fff;
            color: #636b6f;
            font-family: monospace;
            font-weight: 200;
            height: 100vh;
            margin: 0;
        }

        .full-height {
            height: 100vh;
        }

        .flex-center {
            align-items: center;
            display: flex;
            justify-content: center;
        }

        .position-ref {
            position: relative;
        }

        .top-right {
            position: absolute;
            right: 10px;
            top: 18px;
        }

        .content {
            text-align: center;
        }

        .title {
            font-size: 84px;
        }

        .links > a {
            color: #636b6f;
            padding: 0 25px;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: .1rem;
            text-decoration: none;
            text-transform: uppercase;
        }

        .m-b-md {
            margin-bottom: 30px;
        }
    </style>
</head>
<body>
<div class="flex-center position-ref full-height">
    @if (Route::has('login'))
        <div class="top-right links">
            @auth
                <a href="{{ url('/') }}">Home</a>
            @else
                <a href="{{ route('login') }}">Login</a>

                @if (Route::has('register'))
                    <a href="{{ route('register') }}">Register</a>
                @endif
            @endauth
        </div>
    @endif

    <div class="content">
        <div class="title m-b-md">
            <i class="fa fa-feather"></i>&nbsp;<span>Plume</span>
        </div>
    </div>
</div>
</body>
</html>
