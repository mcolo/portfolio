<template>
	<div>
		<app-nav></app-nav>
			<router-view></router-view>
<!-- 		<transition name="fade" mode="out-in">
		</transition> -->
	</div>
</template>

<script>
	import Nav from './Nav.vue'
    export default {
    	components: {
    		appNav: Nav
    	}
    }
</script>

<style type="text/css" scoped>
	.fade-leave-active {
		animation: fade-out 150ms ease-in;
	}

	.fade-enter-active {
		animation: fade-in 150ms ease-out;
	}

	@keyframes fade-in {
		from { opacity: 0; transform: scale(.9); }
		to { opacity: 1; transform: scale(1);}
	}

	@keyframes fade-out {
		from { opacity: 1; transform: scale(1);}
		to { opacity: 0; transform: scale(.9);}
	}
</style>