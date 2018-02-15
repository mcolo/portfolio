<template>
	<div class="work">
		<app-work-sample
			v-for="w in works"
			:content="w">
		</app-work-sample>
	</div>
</template>

<script type="text/javascript">
	import WorkSample from './WorkSample.vue';

	export default {
		data() {
			return{
				works: [
					{
						title: 'Mobile Steam Unit',
						summary: [
							'"Part brand, part band,” Mobile Steam Unit needed a site to accurately reflect the recent corporate infusion to their blue collar rock band. From new musical themes that touch on office life to live streaming "quarterly press conferences" to crafting jingles for startups, they were headed into uncharted territory that required an apt web presence. I designed this site to capture the feel of a modern startup drawing influence from companies like Stripe, Slack, Oscar, Handy and more. The color palette is bright and fun to match the vibrant energy the band delivers.',
							'My favorite aspect of the site is the team section profile pictures. Each band member has a cheesy corporate photo that upon hover reveals a shot of them on stage. I really wanted to recreate this effect on mobile and came up with the idea to trigger the reveal based on the scroll position. I\'m thrilled with how it and the rest of the site came out!'
						],
						contributions: ['design', 'development'],
						imgPath: '/static/steam-sample-img.png',
						link: {
							url: 'https://mcolo.github.io/msu',
							title: 'Mobile Steam Unit Website'
						}
					},
					{
						title: 'Sweet Synth Prince',
						summary: [
							'A new mysterious band with minimal social media presence came to me with the idea of creating a site for their band, or as they like to refer to it their “cult”. Pure Waveform is a mantra or motto they imparted to me and was the main inspiration behind the SVG wave effect in the header section (my favorite bit of the site, the effect is most fluid with a trackpad as opposed to mouse scroll wheel).',
							'A small part of inspiration came from antiquated cult sites like Heavens Gate, Angels Light and others that spew tons of information and pictures without any semblance of coherence. While there isn\'t a ton of content and there is some structure we decided that the random waveform graphs and bizarre text & imagery would be powerful enough.'
						],
						contributions: ['design', 'development'],
						imgPath: '/static/ssp-sample-img.png',
						link: {
							url: 'http://sweetsynthprince.com/',
							title: 'Sweet Synth Prince Website'
						}
					},
					{
						title: 'Michael & Sophia\'s Wedding',
						summary: [
							'This website was made for the wedding of my brother and his wife. They had searched for a simple wedding template on various CMS services but found them all to be too tacky and flashy for their taste. Since it was a destination wedding there was a lot of information about both the venue and the country that they wanted to share. All of this in combination with the likelihood that most guests would be browsing the site on a mobile device while on their visit led me create a very simple layout that was easy to navigate.'
						],
						contributions: ['design', 'development'],
						imgPath: '/static/ms-sample-img.png',
						link: {
							url: 'https://mcolo.github.io/ms-wedding',
							title: 'Michael & Sophia\'s Wedding Website'
						}
					},
				],
			}
		},
		components: {
			appWorkSample: WorkSample
		}
	}
</script>

<style lang="sass" scoped>
	.work {
		position: relative;
	}
</style>