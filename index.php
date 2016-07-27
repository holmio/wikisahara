<!DOCTYPE html>
<html ng-app="app">
<head>
	<base href="<?php $url_info = parse_url( home_url() ); echo trailingslashit( $url_info['path'] ); ?>">
	<title>Home | Wikipedia Sahara</title>
	<?php wp_head(); ?>
</head>
<body>
	
	<div id="page">
		<header>
			<div class="menu-bar">
				<span id="logo">
					<a href="<?php echo home_url(); ?>">Wikipedia Sahara</a>
				</span>
				<nav id="menu"><a class="nav-mobile" id="nav-mobile" href="#">AAAA</a>
					<ul>
						<li><a href="/">Inicio</a></li>
						<li><a href="#">Sobre el Proyecto</a></li>
						<li><a href="#">Populares</a></li>
						<li><a href="#">Categorias</a></li>
					</ul>
				</nav>
			</div>
			
		</header>

		<div ng-view></div>

		<footer>
			&copy; <?php echo date( 'Y' ); ?>
		</footer>
	</div>

	<?php wp_footer(); ?>
</body>
</html>