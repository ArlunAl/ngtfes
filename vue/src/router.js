import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeMain from "./container/HomeMain.vue"
import InterviewMain from"./container/InterviewMain.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: HomeMain,
  },
  {
    path: "/interview",
    component: InterviewMain,
  },
]

export default new VueRouter({
  mode: 'history',
  routes,
});