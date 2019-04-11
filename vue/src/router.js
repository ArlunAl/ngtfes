import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeContainer from "./page/PageHome.vue"
import InterviewContainer from"./page/PageInterview.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: HomeContainer,
  },
  {
    path: "/interview",
    component: InterviewContainer,
  },
]

export default new VueRouter({
  mode: 'history',
  routes,
});