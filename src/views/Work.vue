<template>
  <div class="child-page work">
    <app-work-sample
      v-for="w in works"
      :key="w.id"
      :content="w">
    </app-work-sample>
  </div>
</template>

<script type="text/javascript">
  import WorkSample from '../components/WorkSample.vue'

  export default {
    data() {
      return{
        works: [
          {
            id: 1,
            title: 'Mobile Steam Unit',
            summary: [
              '"Part brand, part band,” Mobile Steam Unit needed a site to accurately reflect the recent corporate infusion to their blue-collar rock band. From new musical themes that touch on office life to live streaming "quarterly press conferences" to crafting jingles for startups, they were headed into uncharted territory that required an apt web presence. I designed this site to capture the feel of a modern startup drawing influence from companies like Stripe, Slack, Oscar, Handy and more. The color palette is bright and fun to match the vibrant energy the band delivers.',
              'My favorite aspect of the site is the team section profile pictures. Each band member has a cheesy corporate photo that upon hover reveals a shot of them on stage. I really wanted to recreate this effect on mobile and came up with the idea to trigger the reveal based on the scroll position. I\'m thrilled with how it and the rest of the site came out!'
            ],
            imgData: {
              browser: 'https://res.cloudinary.com/ddkucvkg0/image/upload/v1520655193/portfolio/steam-browser.jpg',
              phone: 'https://res.cloudinary.com/ddkucvkg0/image/upload/v1520650214/portfolio/steam-phone.jpg'
            },
            link: {
              url: 'https://mcolo.github.io/msu',
              title: 'Mobile Steam Unit Website'
            }
          },
          {
            id: 2,
            title: 'Sweet Synth Prince',
            summary: [
              'A new mysterious band with minimal social media presence asked me to create a site for their band, or as they like to refer to it their “cult”. Pure Waveform is a mantra or motto they imparted to me and was the main inspiration behind the SVG wave effect in the header section (my favorite bit of the site, the effect is most fluid with a trackpad as opposed to mouse scroll wheel).',
              'A small part of the inspiration came from antiquated cult sites like Heavens Gate, Angels Light and others that spew tons of information and pictures without any semblance of coherence. While there isn\'t a ton of content and there is some structure we decided that the random waveform graphs and bizarre text & imagery would be powerful enough.'
            ],
            imgData: {
              browser: 'https://res.cloudinary.com/ddkucvkg0/image/upload/v1520650214/portfolio/ssp-browser.jpg',
              phone: 'https://res.cloudinary.com/ddkucvkg0/image/upload/v1520650214/portfolio/ssp-phone.jpg'
            },
            link: {
              url: 'http://sweetsynthprince.com/',
              title: 'Sweet Synth Prince Website'
            }
          },
          {
            id: 3,
            title: 'Michael & Sophia\'s Wedding',
            summary: [
              'This website was made for my brother and his wife\'s wedding. They had searched for a simple wedding template on various CMS services but found them all to be too tacky and flashy for their taste. Since it was a destination wedding there was a lot of information about both the venue and the country that they wanted to share. All of this in combination with the likelihood that most guests would be browsing the site on a mobile device while on their visit led me to create a very simple layout that was easy to navigate.'
            ],
            imgData: {
              browser: 'https://res.cloudinary.com/ddkucvkg0/image/upload/v1520650214/portfolio/ms-browser.jpg',
              phone: 'https://res.cloudinary.com/ddkucvkg0/image/upload/v1520650214/portfolio/ms-phone.jpg'
            },
            link: {
              url: 'https://mcolo.github.io/ms-wedding',
              title: 'Michael & Sophia\'s Wedding Website'
            }
          },
          {
            id: 4,
            title: 'Animated Icon Customizer',
            summary: [
              'After finding myself creating the same icon animations over and over I decided to create an interactive interface to generate the code for me. Previously, every time I would want to use one of these icons with slightly different sizes it required re-doing some math so the animations would be be precise. Now it’s as easy as moving a couple sliders. This was written in Angular, my framework of choice at the time.'
            ],
            imgData: {
              browser: 'https://res.cloudinary.com/ddkucvkg0/image/upload/v1520892619/portfolio/icon-browser.jpg'
            },
            link: {
              url: 'http://mxmrcl.com/icons/#/',
              title: 'Animated Icon Customizer Website'
            }
          }
        ],
      }
    },
    components: {
      appWorkSample: WorkSample
    }
  }
</script>
