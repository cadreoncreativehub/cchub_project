// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import AcercaLayout from '~/layouts/Acerca.vue'
import Navegacion from '~/components/Navegacion.vue'
import Titular from '~/components/Titular.vue'
import Footer from '~/components/Footer.vue'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


export default function(Vue, { router, head, isClient }) {
    head.link.push({
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Nunito&display=swap'
        })
        // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)
    Vue.component('Footer', Footer)
        // Layout de páginas como acerca de
    Vue.component('Acerca', AcercaLayout)
    Vue.use(BootstrapVue)
    Vue.use(BootstrapVueIcons)
    Vue.component('Navegacion', Navegacion)
    Vue.component('Titular', Titular)
}