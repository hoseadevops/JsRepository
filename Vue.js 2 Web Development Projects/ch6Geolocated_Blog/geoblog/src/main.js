import 'babel-polyfill'
import Vue from 'vue'
import VueFetch, { $fetch } from './plugins/fetch'
import App from './components/App.vue'
import router from './router'
import * as filters from './filters'
import store from './store'
import { sync } from 'vuex-router-sync'
import VueGoogleMaps from 'vue-googlemaps'

// Filters
for (const key in filters) {
    Vue.filter(key, filters[key])
}

Vue.use(VueFetch, {
    baseUrl: 'http://localhost:3000/',
})

Vue.use(VueGoogleMaps, { load: {
apiKey: 'AIzaSyAlpfTDHYvzgf1ALkKOmJCYz_OsHPZJieo',
             libraries: ['places'],
           },
})


sync(store, router)

async function main () {

    await store.dispatch('init')
    new Vue({
         ...App,
         el: '#app',
         router, 
         store,
     })
}
main()