<!DOCTYPE html>
<html>
	<head>

		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, shrink-to-fit=no, initial-scale=1">
		<meta name="description" content="">
		<meta name="author" content="">

		<title>@yield('page-title')</title>
	
		<link rel="stylesheet" type="text/css" href="{{ asset('css/app.min.css') }}">		

	</head>

	<body>
		@yield('content')

		<script type="text/javascript" src="{{ asset('js/vendor.min.js') }}"></script>
		<script type="text/javascript" src="{{ asset('js/app.min.js') }}"></script>
		@yield('script')
	</body>
</html>