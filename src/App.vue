<template>
    <div>
    	<transition :name="routeTransition" mode="out-in">
	    	<router-view></router-view>
	    </transition>
    </div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				routeTransition: '',
			}
		},
		watch: {
			'$route'(to, from) {
				const fromChild = this.isChild(from.name);
				const toChild = this.isChild(to.name);
				const fromHome = from.name == 'home';
				const toHome = !fromHome;

				switch(true) {
					case fromChild && toHome:
						this.routeTransition = 'child-home';
						break;
					case fromHome && toChild:
						this.routeTransition = 'home-child';
						break;
					default:
						this.routeTransition = 'faded';
						break;
				}
			}
		},
		methods: {
			isChild(page) {
				return page == 'work' 
					|| page == 'about' 
					|| page == 'contact'
					|| page == 'thanks';
			}
		}
	}
</script>

<style lang="sass" scoped>
	@import url('https://unpkg.com/normalize.css@8.0.0/normalize.css');
	@import url('https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz|Lato:300');

	.faded-leave-active {
		animation: faded-out 150ms ease-in;
	}

	.faded-enter-active {
		animation: faded-in 150ms ease-out;
	}

	.child-home-leave-active {
		animation: faded-out 150ms ease-in;
	}

	.child-home-enter-active {
		animation: maximize 200ms ease-out;
	}

	.home-child-leave-active {
		animation: minimize 200ms ease-in;
	}

	.home-child-enter-active {
		 animation: faded-in 200ms ease-out;
	}

	@keyframes maximize {
		from { transform: translateY(-100%); }
		to { transform: translateY(0); }
	}

	@keyframes minimize {
		from { transform: translateY(0); }
		to { transform: translateY(-100%); }
	}

	@keyframes faded-in {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	@keyframes faded-out {
		from { opacity: 1; }
		to { opacity: .9; }
	}
</style>
