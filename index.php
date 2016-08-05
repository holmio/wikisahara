<!DOCTYPE html>
<html ng-app="app">
<head>
	<base href="<?php $url_info = parse_url( home_url() ); echo trailingslashit( $url_info['path'] ); ?>">
	<title>Home | Biblioteca Sahara</title>
	<?php wp_head(); ?>
</head>
<body>
	
	<div class="container-padre">
		
		<div class="header">
			<header>
				<div class="cabecera">
					<div class="item-bar logo" ng-class="noShow">
						<a href="/">Biblioteca Sahara</a>
					</div>
					<div ng-show="homepage" class="item-bar buscador"><nav><search-form></search-form></nav></div>
					<div class="item-bar menu-bar"><menu-responsive></menu-responsive></div>
				</div>
			</header>
		</div>

		<div class="container"><div ng-view></div></div>
		<footer>
			<?php wp_footer(); ?>
			&copy; <?php echo date( 'Y' ); ?>
		</footer>
	</div>

	
</body>
</html>