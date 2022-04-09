import { createStore } from 'vuex'
let cart = window.localStorage.getItem('cart');

export default createStore({
  state: {
    cart: cart ? JSON.parse(cart) : []
  },
  getters: {
    CART_PLS(state){
      return state.cart;
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
    }
  },
  actions: {
    AddToCart({commit}, product){
      commit('SETCART', product)
      this.commit('saveCart');
    },
    DeleteFromCart({commit}, i){
      commit('RemoveCart', i)
      this.commit('remove')
    }
  },
  modules: {
  }
})
