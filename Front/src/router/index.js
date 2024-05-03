import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PecheView from '../views/PecheView.vue'
import ProductView from '../views/ProductView.vue'
import InventaireView from '../views/InventaireView.vue'
import AboutView from '../views/AboutView.vue'


const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/product',
        name: 'product',
        component: ProductView
    },
    {
        path: '/peche',
        name: 'peche',
        component: PecheView
    },
    {
        path: '/Inventaire',
        name: 'Inventaire',
        component: InventaireView
    },
    {
        path: '/Apropos',
        name: 'Apropos',
        component: AboutView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router