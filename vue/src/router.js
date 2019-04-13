import Vue           from 'vue';
import VueRouter     from 'vue-router';
import PageHome      from "./page/PageHome.vue"
import PageInterview from "./page/PageInterview.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: PageHome,
  },
  {
    path: "/interview",
    component: PageInterview,
  },
]

export default new VueRouter({
  // QUESTION: historyを使うと、--history-api-fallbackが必要になる。
  // つまりサーバーがないと、history mode は使えない？
  // mode: 'history',
  routes,
});