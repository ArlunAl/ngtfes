import Vue from "vue"
import App from "./App.vue"
// TODO: vue-router

new Vue({
    el: "#app",
    components: {
        App,
    },
    render: h => h(App),
})