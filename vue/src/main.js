import Vue                    from "vue"
import registerBaseComponents from "./registerBaseComponents"
import App                    from "./App.vue"
import router                 from "./router"

registerBaseComponents()
// console.log(Vue.options.components)
// console.log("register!!")

// document.addEventListener('DOMContentLoaded', () => {
//     const app = new App
//     app.$mount('#app')
// })

new Vue({
    el: "#app",
    components: {
        App,
    },
    render: h => h(App),
    router,
})

