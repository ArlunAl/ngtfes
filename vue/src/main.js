import Vue from "vue"
import App from "./App.vue"
import router from "./router"
// TODO: vue-router

new Vue({
    el: "#app",
    components: {
        App,
    },
    render: h => h(App),
    router,
})