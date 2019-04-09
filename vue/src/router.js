import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeContainer from "./container/HomeContainer.vue"
import InterviewContainer from"./container/InterviewContainer.vue"

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