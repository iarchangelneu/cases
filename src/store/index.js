import { createStore } from 'vuex'
let cart = window.localStorage.getItem('cart');

export default createStore({
  state: {
    cart: cart ? JSON.parse(cart) : [],
    userLoged: localStorage.getItem('userLoged') ? localStorage.getItem('userLoged') : false,  
    userName: localStorage.getItem('userName') ? localStorage.getItem('userName') : false,
  },
  getters: {
    CART_PLS(state){
      return state.cart;
    },
    IsLogged(state){
      return state.userLoged; 
    },
    USER_NAME(state){
      return state.userName;  
    }
  },
  mutations: {
    SETCART:(state, product) => {
       state.cart.push(product)
    },
    saveCart(state) {
      window.localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    remove(state){
      window.localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    RemoveCart:(state, i) => {
      state.cart.splice(i, 1)
    },
    Logout:(state) => {
      state.userName = '';
      state.userLoged = '';
    },
  },
  actions: {
    AddToCart({commit}, product){
      commit('SETCART', product)
      this.commit('saveCart');
      $('#ProductModal').modal('hide')
    },
    DeleteFromCart({commit}, i){
      commit('RemoveCart', i)
      this.commit('remove')
    },
    LogOut({commit}){
      commit('Logout')
    },
  },
  modules: {
  }
})
