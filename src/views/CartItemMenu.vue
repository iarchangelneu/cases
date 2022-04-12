<template>
  <div
    class="test" v-if="cart_data.length !== 0">
    <div 
    class="cart__products pl__pr"
    v-for="(item, i) in cart_data"
    :key="item"
    :cart_item_data="item"
    @deleteCart="deleteCart(i)"
    >
     <div class="cart__product">
        <img
          :src="'/data/'+item.item_model_id"
          alt=""
          style="width: 8.96vw"
          class="cart__productIMG"
        />
        <div class="product__desc">
          <p class="product__name">{{ item.full_type }} {{ item.name }}</p>
          <p class="product__text">{{ item.rarity }}</p>
          <p class="product__text">{{ item.quality }}</p>
        </div>
        <div class="product__price">
          <p class="product__count">{{ Math.floor(item.cost) }} ₸</p>
        </div>
        <div class="product__close">
          <img
            src="../assets/img/close.svg"
            alt=""
            style="width: 2.6vw; cursor: pointer"
            @click="deleteCart(i)"
          />
        </div>
      </div>
      
    </div>
  </div>
  <div class="pure" v-else>
    <p
      style="
        color: #fff;
        text-align: center;
        font-size: 1.56vw;
        margin-top: 2.6vw;
      "
    >
      Корзина пуста
    </p>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods:{
    ...mapActions(['DeleteFromCart']),
    deleteCart(i){
      this.DeleteFromCart(i)
    }
  },
   computed:{
     
  }
};
</script>

<style>
</style>