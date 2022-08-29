import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import App from './App.vue'
import HomePage from './components/HomePage.vue'
import ProductDisplay from './components/ProductDisplay.vue'
import AddProduct from './components/AddProduct.vue'
import ProductAdmin from './components/ProductAdmin.vue'
import ProductEdit from './components/ProductEdit.vue'
const router = createRouter({
    routes:[
        {path:'/',component:HomePage},
        {path:'/ProductDisplay',component:ProductDisplay},
        {path:'/ProductAdmin',component:ProductAdmin},
        {path:'/AddProduct',component:AddProduct},
        {path:'/ProductEdit/:id',component:ProductEdit}
    ],
    history:createWebHistory()
})
const app = createApp(App)
app.use(router)
app.mount('#app')
//createApp(App).mount('#app')
