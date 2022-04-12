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

import {mapGetters} from 'vuex'

const Mixin = {
    data(){
        return {
            username: '',
            password: '',
            usernameR: '',
            passwordR: '',
            emailR: ''
        }
    },
    methods: {
        reg() {
            const path = "https://realcases.kz/api/register";
            axios
                .post(path, { login: this.usernameR, password: this.passwordR, e_mail: this.emailR })
                .then((res) => {
                    if(this.usernameR.length == '' && this.passwordR.length == '' && this.emailR.length == ''){
                        Swal.fire({
                            icon: 'error',
                            title: 'Упс',
                            text: 'Что-то введено неверно',
                          })
                    }
                    else{
                        Swal.fire({
                            icon: 'success',
                            title: 'Успешно',
                            text: 'Теперь вы можете авторизоваться',
                          })
                        console.log(res);
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        login() {

            const path = "https://realcases.kz/api/login";
            axios
                .post(path, { login: this.username, password: this.password })
                .then((res) => {
                    if (res.data.success == false) {
                        Swal.fire({
                            title: 'Ошибка',
                            text: 'Данные не верны',
                            icon: 'error',
                            confirmButtonText: 'Ок'
                        })
                    }
                    else {
                        console.log(res)
                        localStorage.setItem("userName", res.data.login);
                        localStorage.setItem("userEmail", res.data['e-mail']);
                        localStorage.setItem("userLoged", true);
                        window.location = "/account"
                    }
                })
                .catch((error) => {
                    console.error(error);
                    console.log('Неверно')
                });
        },
        tryToBuy(){
            if(this.IsLogged){
                $("#exampleModal").modal("show");
            }
            else{
                console.log('asd')
                $("#exampleModal").modal("show");
            }
        },
    },
    computed: {
        ...mapGetters(['IsLogged']),
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

