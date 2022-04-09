<template>
  <div class="product__overflow" v-if="cart_data.length !== 0">
    <div
      class="products"
      v-for="(item, i) in cart_data"
      :key="item"
      :cart_item_data="item"
      @deleteCart="deleteCart(i)"
    >
      <div class="product__content">
        <img
          :src="item.img"
          alt=""
          style="width: 16.46vw"
          class="product__img"
        />
        <div class="product__desc">
          <p class="product__name">{{ item.name }} {{ item.collection }}</p>
          <p class="product__text">{{ item.rarity }}</p>
          <p class="product__text">{{ item.float }}</p>
        </div>
        <p class="product__total">{{ item.price }} ₸</p>
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
import { mapActions } from "vuex";
export default {
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    ...mapActions(["DeleteFromCart"]),
    deleteCart(i) {
      this.DeleteFromCart(i);
    },
  },
};
</script>

<style scoped>
.product__img {
  background: rgba(48, 47, 56, 0.5);
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 0.99vw;
}
.buy__btn {
  background: linear-gradient(235.92deg, #753ef9 14.85%, #9d75ff 87.62%);
  border-radius: 0.63vw;
  padding: 0.68vw 0.83vw 0.68vw 0.83vw;
  font-weight: 700;
  font-size: 1.88vw;
  color: #fff;
  border: 0;
}
.product__summary {
  display: flex;
  font-weight: 500;
  font-size: 2.08vw;
  color: #fff;
  justify-content: flex-end;
}
.total {
  text-align: right;
}
.product__overflow::-webkit-scrollbar {
  background: #181820;
  border-radius: 0.78vw;
  width: 0.47vw;
}
.product__overflow::-webkit-scrollbar-thumb {
  border-radius: 0.78vw;
  background-color: #483e83;
}
.product__overflow::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  border-radius: 0.78vw;
  background-color: #181820;
}
.product__overflow {
  height: 44.27vw;
  overflow-x: hidden;
  overflow-y: scroll;
}
.product__close {
  top: 0;
  left: 79.69vw;
}
.product__total {
  font-weight: 600;
  font-size: 2.08vw;
  color: #f7f7f7;
}
.right {
  border-left: 3px solid #f7f7f7 !important;
}
.left {
  border-right: 3px solid #f7f7f7 !important;
}
.product__sumbtn {
  border: 0;
  background: transparent;
  color: #fff;
  font-size: 1.67vw;
}
.product__sum {
  font-weight: 600;
  font-size: 2.08vw;
  color: #ffffff;
  padding-left: 1.72vw;
  padding-right: 1.72vw;
}
.product__countbtns {
  border: 3px solid #f7f7f7;
  box-sizing: border-box;
  border-radius: 5px;
  width: 11.46vw;
  height: 3.02vw;
  display: flex;
}
.product__content {
  position: relative;
  display: flex;
  background: transparent;
  border-radius: 5px;
  align-items: center;
  justify-content: space-around;
  margin-right: 1.04vw;
  margin-bottom: 2.71vw;
}
.cart__main {
  text-align: center;
  color: #fff;
  font-weight: 800;
  font-size: 3.13vw;
  letter-spacing: 0.025em;
}
.cart__page {
  padding-top: 8.54vw;
  margin-bottom: 6.41vw;
}
.cart__pagecontent {
  background: #252331;
  border-radius: 0.78vw;
}
.pl__pr {
  padding-left: 1.77vw;
  padding-right: 1.77vw;
}
.p__content {
  padding-top: 2.76vw;
  padding-bottom: 2.76vw;
  padding-left: 5.78vw;
  padding-right: 5.47vw;
}
.product__sumbtn img {
  width: 100%;
}
@media screen and (max-width: 480px) {
  .product__total {
    font-size: 12px;
  }
  .product__summary {
    font-size: 16px;
  }
  .buy__btn {
    font-size: 14px;
  }
}
</style>