import { createApp } from 'vue'
import './assets/style/fonts.css'
import App from './App.vue'
import router from './router'
import store from './store'
import Header from './components/Header'
import Footer from './components/CsFooter'
import NavBar from './views/NavBar'
import Shop from './components/Shop'
import Cases from './components/Cases'
import FAQ from './views/FAQ'
import HowSteps from './views/HowSteps'
import Account from './components/Account'
import CartPage from './components/CartPage'
import OpsModal from './views/OpsModal'
import LogReg from './views/LogReg'
import RegModal from './views/RegModal'
import MoneyModal from './views/MoneyModal'
import PaymentError from './views/PaymentError'
import OutputModal from './views/OutputModal'

const Mixin = {
    data(){
        return{
            IsLoggedIn: true,
            products: [
                {
                    img: require("./assets/img/voi__cart.png"),
                    name: "M4A4 | Вой",
                    rare: "Редкость: Тайное",
                    state: "Состояние: Well-Worm",
                    price: "32237.27 ₸",
                  },
                  {
                    img: require("./assets/img/tacti__cart.png"),
                    name: "M4A4 | Вой",
                    rare: "Редкость: Тайное",
                    state: "Состояние: Well-Worm",
                    price: "32237.27 ₸",
                  },
           ],
        }
    }
}

const app  = createApp(App).use(store).use(router).mixin(Mixin)

app.component('the-header', Header)
app.component('the-footer', Footer)
app.component('the-navbar', NavBar)
app.component('the-shop', Shop)
app.component('the-cases', Cases)
app.component('the-faq',FAQ)
app.component('how-steps', HowSteps)
app.component('the-account', Account)
app.component('cart-page', CartPage)
app.component('ops-modal', OpsModal)
app.component('log-reg', LogReg)
app.component('reg-modal', RegModal)
app.component('money-modal', MoneyModal)
app.component('payment-error', PaymentError)
app.component('output-modal', OutputModal)



app.mount('#app')

