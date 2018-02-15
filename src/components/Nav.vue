<template>
	<nav class="nav">
		<router-link to="/"><app-logo class="nav__logo"></app-logo></router-link>
		<router-link to="/contact" class="nav__link nav__link--contact">contact</router-link>
		<router-link to="/about" class="nav__link nav__link--about">about</router-link>
		<router-link to="/work" class="nav__link nav__link--work">work</router-link>
	</nav>
</template>

<script type="text/javascript">
	import Logo from './Logo.vue';

	export default {
		components: {
			appLogo: Logo
		}
	}
</script>

<style lang="sass" scoped>
	.nav {
		background-color: #2db684;
		height: 60px;
	}

	.nav__logo {
		//fill: rgba(0,0,0, .5);
		fill: #fff;
		margin: 10px 0 0 10px;
		height: 40px;
		transition: 150ms;
		width: 40px;

		&:hover {
			transform: rotate(360deg);
		}
	}

	.nav__link {
		//color: rgba(0,0,0, .5);
		color: #fff;
		display: inline-block;
		float: right;
		font-family: 'Yanone Kaffeesatz', sans-serif;
		font-size: 42px;
		line-height: 60px;
		margin: 0 0 0 10px;
		text-decoration: none;
		text-transform: uppercase;
		transition: 100ms cubic-bezier(.4, 1, .8, 1.7);
		transform: translateY(-25px);
		-webkit-font-smoothing: antialiased;

		&.nav__link--active {
			//color: #2db684;
			transform: translateY(0);
		}

		&.nav__link--work { 
			//color: #2db684;
		}
		
		&.nav__link--about {
			//color: #0a9cdf;
		}
		
		&.nav__link--contact {
			//color: #9e69aa;
			margin-right: 10px;
		}

		&:hover {
			transform: translateY(0);
		}
	}

</style>
