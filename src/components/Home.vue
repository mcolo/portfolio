<template>
	<div class="home-page" id="home-page">
		<router-link to="/work" class="link" style="z-index:12;" >Work</router-link> <!-- @mouseenter.native="setBg(blue)" @mouseleave.native="setBg(green)" -->
		<router-link to="/about" class="link" style="z-index:10;">About</router-link>
		<router-link to="/contact" class="link">Contact</router-link>
		<div class="logo">
			<app-logo></app-logo>
			<span class="title">
				MAX MIRACOLO // Frontend Developer &amp; UI Designer
			</span>
		</div>
	</div>
</template>

<script type="text/javascript">
	import Logo from './Logo.vue';

	export default {
		data() {
			return {
				blue: 'blue',
				red: 'red',
				orange: 'orange',
				green: '#2db684'
			}
		},
		methods: {
			setBg(val) {
				document.getElementById('home-page').style.backgroundColor = val;
			}
		},
		components: {
			appLogo: Logo
		}
	}
</script>

<style type="text/css" lang="sass" scoped>
	.home-page {
		align-items: center;
		background-color: #2db684;
		display: flex;
		flex-direction: column;
		height: 100vh;
		justify-content: center;
		width: 100vw;

		.link {
			color: #fff;
			display:block;
			font-family: 'Yanone Kaffeesatz', sans-serif;
			font-size: 60px;
			line-height: .8;
			text-decoration: none;
			text-transform: uppercase;
			transition: 130ms cubic-bezier(.4, 1, .8, 1.7);
			position: relative;
			-webkit-font-smoothing: antialiased;

			&:hover {
				letter-spacing: 6px;
				text-indent: 6px;
			}

			&:active {
				letter-spacing: 8px;
				text-indent: 8px;
			}
		}

		.logo {
			bottom: 30px;
			left: 30px;
			position: absolute;

			svg {
				display: inline-block;
				fill: #155b44;
				height: 60px;
				width: 60px;
				vertical-align: middle;
			}

			.title {
				color: #155b44;
				display: inline-block;
				font-family: 'Yanone Kaffeesatz', sans-serif;
				line-height: 40px;
				vertical-align: bottom;
			}
		}
	}
</style>
