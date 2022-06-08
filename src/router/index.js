import Vue from 'vue'
import VueRouter from 'vue-router'

//Main welcome page
const HomeView = () => import('@/views/HomeView.vue');

//About Me Views
const AboutView = () => import('@/views/AboutView.vue');
const InterestsView = () => import('@/views/InterestsView.vue');

//Contact Us Views
const ContactView = () => import('@/views/ContactView.vue');

Vue.use(VueRouter)


const routes = [
  {
    path: "/",
    component: {
        render(c) {
            return c("router-view");
        }
    },
    children: [
      {
        path: '/', name: 'HomeView', component: HomeView
      },
      {
        path: '/about', name: 'AboutView', component: AboutView
      },
      {
        path: '/contact', name: 'ContactView', component: ContactView
      },
      {
        path: '/interests', name: 'InterestsView', component: InterestsView
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
