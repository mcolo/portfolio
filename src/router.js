import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Thanks from './views/Thanks.vue'
import Work from './views/Work.vue'
import Content from './components/Content.vue'

Vue.use(VueRouter);

const routes = [
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

export default new VueRouter({
  routes: routes,
  linkActiveClass: 'nav__link--active',
  mode: 'history',
});
