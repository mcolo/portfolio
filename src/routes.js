import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Content from './components/Content.vue'
import Thanks from './components/Thanks.vue'
import Work from './components/Work.vue'

export const routes = [
	{
		path: '/',
		component: Home,
		name: 'home'
	},
	{
		path: '/work',
		component: Content,
		children: [
			{
				path: '',
				component: Work,
				name: 'work'
			},
			{
				path: '/about',
				component: About,
				name: 'about'
			},
			{
				path: '/contact',
				component: Contact,
				name: 'contact'
			},
		]
	},
	{
		path: '/thanks',
		component: Thanks,
		name: 'thanks'
	},
	{
		path: '*',
		redirect: '/'
	}
];
