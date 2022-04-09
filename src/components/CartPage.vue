<template>
  <div class="cart__page pl__pr">
    <div class="cart__pagecontent p__content">
      <p class="cart__main">Корзина</p>
      <cart-item-page :cart_data="CART_PLS"></cart-item-page>
      <hr />
      <div class="total">
        <div class="product__summary">
          <p style="margin-right: 7.55vw">Итого</p>
          <p>{{ cartSum }} ₸</p>
        </div>
        <div>
          <button
            class="buy__btn"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Перейти к оформлению
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartItemPage from "../views/CartItemPage.vue";
export default {
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      showModal: false,
      productTotal: 1,
    };
  },
  components: {
    CartItemPage,
  },
  computed: {
    ...mapGetters(["CART_PLS"]),
    cartSum() {
      console.log(this.CART_PLS);
      return this.CART_PLS.reduce(
        (previousValue, currentValue) => previousValue + currentValue.price,
        0
      );
    },
  },
  methodsdeleteCart() {
    this.$emit("deleteCart");
  },
};
</script>

<style scoped>
.buy__btn {
  background: linear-gradient(83.8deg, #c62c44 15.62%, #ff0027 91.62%);
  border-radius: 1.56vw;
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
  display:flex;
  justify-content: space-between
}
.product__overflow::-webkit-scrollbar {
  background: #181820;
  border-radius: 0.78vw;
  width: 0.47vw;
}
.product__overflow::-webkit-scrollbar-thumb {
  border-radius: 0.78vw;
  background-color: #833e3e;
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
  background: #36353c;
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
  background: #281f27;
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