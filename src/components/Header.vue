<template>
  <div class="header">
    
    <div>
      <router-link to="/"><img src="../assets/img/header__logo.svg" alt="logo" class="logo__img" /></router-link>
    </div>
    <the-navbar></the-navbar>
    <div class="navbar" v-if="IsLogged">
      <button class="cart__btn" @click="openHeader()">
          <img
            src="../assets/img/cart.svg"
            alt=""
            style="width: 1.56vw; padding-top: 5px"
          />
          <p class="cart__count">{{cartSum}}₸</p>
          <span></span>
        </button>
      <div class="user">
        <img src="../assets/img/avatar.svg" alt="" style="width: 3.13vw" class="accountHeaderImgPC" />
        <div class="dropdown">
          <img src="../assets/img/avatar.svg" alt="" style="" class="accountHeaderImgM" />
          <p class="name">{{USER_NAME}}</p>
           <p class="purse__count">0 ₸</p>
          <div class="dropdown-content">
            <a href="/account">Профиль</a>
            <a @click="logOut">Выйти</a>
          </div>
        </div>
        <div class="purse">
        <button class="purse__btn" @click="topupMoney()">
          <img src="../assets/img/purse.svg" alt="" style="width: 2.34vw"/>
          <img src="@/assets/img/plusik.svg" style="width:1.56vw" alt="" class="plusik">
        </button>
      </div>
      </div>
    </div>
    <div class="sign__in" v-else>
      <button class="signin" data-toggle="modal" data-target="#LogReg">
        Войти
      </button>
      <form action="https://steamcommunity.com/openid/login" method="post">
        <input type="hidden" name="openid.identity"
               value="http://specs.openid.net/auth/2.0/identifier_select" />
        <input type="hidden" name="openid.claimed_id"
               value="http://specs.openid.net/auth/2.0/identifier_select" />
        <input type="hidden" name="openid.ns" value="http://specs.openid.net/auth/2.0" />
        <input type="hidden" name="openid.mode" value="checkid_setup" />
        <input type="hidden" name="openid.realm" value="https://realcases.kz/" />
        <input type="hidden" name="openid.return_to" value="https://realcases.kz/error" />
        <button class="signin__steam">
          <img src="../assets/img/steam.svg" alt="" style="width: 3.39vw" />
          <p class="steam__text" >Войти через Steam</p>
        </button>
      </form>
      
    </div>
  </div>
  <cart-menu>
  </cart-menu>
</template>

<script>


import CartMenu from '../views/CartMenu.vue'
import {mapGetters, mapActions} from 'vuex'

export default {
  data() {
    return {};
  },
  components:{
    CartMenu
  },

  methods: {
    ...mapActions(["LogOut"]),
    logOut(){
      localStorage.setItem("userName", '');
      localStorage.setItem("userEmail", '');
      localStorage.setItem("userLoged", '');
      this.LogOut();
    },
    openHeader() {
      let sc = $("#cart")[0];
      sc.style.transition = "all 0.8s";
      sc.style.display = "block";
      sc.style.right = 0;
      sc.style.top = 0;
    },
    topupMoney(){
      $("#Money").modal("show");
    }
  },
  mounted() { 
    let header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
      if(window.scrollY > 50){
        header.style.backgroundColor = 'rgba(32, 32, 37, 0.9)';
        header.style.paddingTop = '1vw';
        // header.style.paddingBottom = '0.1vw';

      }
      else{
        header.style.backgroundColor = ''  
      }
    
    });
  },
  computed:{
      ...mapGetters(['CART_PLS','USER_NAME']),
      cartSum(){
        return this.CART_PLS.reduce(
          (previousValue, currentValue) => previousValue + Math.floor(currentValue.cost),
          0
        )
      }
  }
  
};
</script>

<style scoped>
.plusik{
  position: absolute;
  top: 0.36vw;
  left: 3.18vw;
}
.user p{
  margin-bottom:0 !important;
}
.navbar {
  align-items: flex-start !important;
}
.dropdown {
  position: relative;
  display: inline-block;
  text-align: center;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #202025;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(86, 31, 140, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: #fff;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #753ef9;
}

.dropdown:hover .dropdown-content {
  display: block;
}

/* .dropdown:hover .name {
  background-color: #3e8e41;
} */
.steam__text {
  font-weight: 600;
  font-size: 1.25vw;
  text-align: center;
  color: #fff;
  padding-left: 0.52vw;
}
.sign__in {
  display: flex;
}
.signin {
  border: 0;
 background: linear-gradient(83.8deg, #c62c44 15.62%, #ff0027 91.62%);
  border-radius: 1.56vw;
  color: #fff;
  font-weight: 700;
  font-size: 1.35vw;
  padding: 0.78vw 1.41vw 0.78vw 1.41vw;
  margin-right: 2.24vw;
  height: 3.54vw;
}
.signin__steam {
  display: flex;
  align-items: center;
  background: linear-gradient(83.8deg, #c62c44 15.62%, #ff0027 91.62%);
  border-radius: 1.56vw;
  border: 0;
  padding: 1.04vw 1.25vw 0.42vw 0.52vw;
  height: 3.54vw;
}
.header {
  width: 100%;
  z-index: 5;
  position: fixed;
  padding-top: 2.6vw;
  padding-left: 2.6vw;
  padding-right: 1.35vw;
  display: flex;
  justify-content: space-between;
}
.logo__img {
  width: 9.26vw;
}
.navbar__btn:hover {
  background: linear-gradient(235.92deg, #753ef9 14.85%, #9d75ff 87.62%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.purse {
  position: relative;
  display: flex;
}
.purse__btn {
  display: flex;
  border: 0;
  background: linear-gradient(83.8deg, #C62C44 15.62%, #FF0027 91.62%);
border-radius: 10px;
  width: 4.01vw;
  height: 2.24vw;
}
.purse__count {
  font-weight: 500;
  font-size: 1.46vw;
  color: #fff;
  margin-left: 8px;
}

.name {
  cursor: pointer;
  color: #fff;
  font-weight: 500;
  font-size: 1.15vw;
  padding-left: 0.68vw;
  padding-right: 0.68vw;
}
.user {
  display: flex;
  margin-left: 0.78vw;
  margin-right: 0.78vw;
  align-items: flex-start;
}
.cart__btn {
  padding: 0.10vw 0.73vw 0.78vw 0.73vw;
  height: 2.24vw;
  background: linear-gradient(83.8deg, #C62C44 15.62%, #FF0027 91.62%);
border-radius: 10px;
  border: 0;
  display: flex;
}
.cart__count {
  font-weight: 500;
  font-size: 1.46vw;
  color: #fff;
  padding-left: 7px;
}
@media screen and (min-width:481px){
  .accountHeaderImgM{
    display: none;
  }
}
@media screen and (max-width:480px){
  .header{
    position: fixed;
    align-items: center;
    background-color: rgb(32, 32, 37);
  }
  .signin__steam{
    display: none;
  }
  .logo__img{
    width: 14.26vw;
  }
  .signin{
    font-size: 3vw;
    height: unset;  
  }
  .purse{
    display: none;
  }
  .user{
    /* flex-direction: column; */
    align-items: center;
  }
  .name{
    /* margin-bottom: 0;
    font-size:12px; */
    display: none;
  }
  .navbar{
    padding: 0.5rem 0.5rem;
  }
  .accountHeaderImgPC{
    display: none;
  }
  .accountHeaderImgM{
    width: 7vw;
  }
  .cart__btn{
    width: 9vw;
    height: 6vw;
    align-items: center;
    padding: 0;
    justify-content: center;
    margin-left: 10px;
  }
  .cart__btn img{
    padding-top: 0 !important;
    width: 3vw !important;
  }
  .cart__count{
    margin-bottom: 0;
    display: none;
  }
  .dropdown-content{
    min-width: unset;
  }
  .dropdown-content a{
    padding: 5px 5px;
  }
}
</style>