<template>
  <div
    class="modal fade"
    id="OutputMoney"
    tabindex="-1"
    aria-labelledby="OutputMoney"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="money__main">
            <p>Вывод средств</p>
            <div class="money__type">
              <div class="money__typecontent">
                <button class="money__btn" @click="topUp()">
                  Пополнение баланса
                </button>
                <button class="money__btn money__active">
                  Вывод средств
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <div class="money__system">
            <div class="warning">
              <img src="../assets/img/warning.svg" alt="" style="width: 1.4vw; margin-right:0.26vw" />
              <p class="warning__text">
                В случае указание неправильного номера кошелька средства не
                возвращаются.
              </p>
            </div>
            <div class="warning">
              <img src="../assets/img/warning.svg" alt="" style="width: 1.4vw; margin-right:0.26vw" />
              <p class="warning__text">
                Процесс обработки заявки обычно занимает меньше часа, но может
                занять до 3-х рабочих дней.
              </p>
            </div>
            <p class="system__main">Порядок действий для пополнения баланса</p>
            <p class="money__text">1. Выберите платежную систему</p>
            <div class="system__type">
              <div
                :class="[
                  'type__img__one',
                  { payment__active: payment == 'onevision' },
                ]"
                @click="payment = 'onevision'"
              >
                <img
                  src="../assets/img/one__vision.png"
                  alt=""
                  class="pay_img"
                />
              </div>
              <div
                data-toggle="modal"
                data-target="#PaymentError"
                :class="[
                  'type__img__one',
                  { payment__active: payment == 'visa' },
                ]"
                @click="payment = 'visa'"
              >
                <img src="../assets/img/visa.png" alt="" class="pay_img" />
              </div>
              <div
                data-toggle="modal"
                data-target="#PaymentError"
                :class="[
                  'type__img__one',
                  { payment__active: payment == 'mastercard' },
                ]"
                @click="payment = 'mastercard'"
              >
                <img
                  src="../assets/img/mastercard.png"
                  alt=""
                  style=""
                  class="pay_img"
                />
              </div>
            </div>
            <div class="money__text__block">
              <p class="money__text">
                2. Подтвердите Ваше согласие с правилами нашей системы
              </p>
              <div class="money__checkbox">
                <input type="checkbox" id="policy" name="policy" />
                <label for="policy" class="money__label"
                  >Я согласен с <a href="/terms">пользовательским соглашением</a> и
                  <a href="/privacy">политикой конфиденциальности</a></label
                >
                <p class="money__text mt">
                  3. Введите сумму, которую Вы хотите вывести на свой счет
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <div class="money__complete">
            <input
              type="number"
              name="money"
              id="money"
              class="money__input"
              placeholder="Cумма ₸"
              v-model="paySum"
            />
            <button class="complete__btn" @click="purchase">Вывести</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      payment: "",
      paySum: '',
    };
  },
  methods: {
    topUp() {
      $("#OutputMoney").modal("hide");
      $("#Money").modal("show");
    },
    purchase(){
        if(this.paySum != ''){
          axios
          .post('https://realcases.kz/api/vision_pay/', {cost: this.paySum})
          .then((res) => {
              console.log(res)
              window.location.href=res.data.url
          })
          .catch((error) => {
            console.error(error);
          });
        }
        else{
          alert('Введите сумму пополнения!')
        }
      },
  },
};
</script>

<style scpoed>
.modal-body{
  margin-top: -3.5vw;
}
.warning{
    display: flex;
    align-items: flex-start
}
.warning__text {
  font-weight: 500;
  font-size: 1vw;
  color: #fff;
}
.complete__btn {
  background: linear-gradient(83.8deg, #C62C44 15.62%, #FF0027 91.62%);
border-radius: 1.56vw;
  color: #fff;
  padding: 0.99vw 1.61vw 0.99vw 1.61vw;
  font-weight: 700;
  font-size: 1.56vw;
  border: 0;
}
::placeholder {
  font-size: 1.56vw;
}
.money__input {
  padding-left: 1.82vw;
  background: #171717;
  border: 3px solid rgba(247, 247, 247, 0.6);
  box-sizing: border-box;
  border-radius: 5px;
  font-weight: 500;
  font-size: 2.08vw;
  color: #fff;
  width: 13.54vw;
  margin-right: 1.77vw;
}
.money__complete {
  display: flex;
  padding-left: 7.40vw;
  padding-bottom: 1.44vw;
}
.mt {
  margin-top: 1.50vw;
  margin-bottom: 0.1vw;
}
.money__checkbox {
  margin-top: 1.50vw;
}
input[type="checkbox"] {
  transform: scale(1.5);
  padding: 0.52vw;
}
.money__label {
  margin-left: 1.30vw;
  font-weight: 500;
  font-size: 1.35vw;
  color: #fff;
}
.money__label a {
  text-decoration: underline;
  color: #fff;
}
.type__img__one {
  border: 3px solid #f7f7f7;
  box-sizing: border-box;
  border-radius: 7px;
  margin-right: 4.69vw;
  padding: 0.52vw 1.56vw 0.52vw 1.56vw;
  cursor: pointer;
  width: 11vw;
  display: flex;
  align-items: center;
}
.payment__active {
  border: 3px solid #C62C44;
}
.pay_img {
  width: 100%;
}

.type__img__visa {
  border: 3px solid #f7f7f7;
  box-sizing: border-box;
  border-radius: 7px;
  margin-right: 4.69vw;
  padding: 2.45vw 1.77vw 2.45vw 1.77vw;
  cursor: pointer;
}
.type__img__master {
  border: 3px solid #f7f7f7;
  box-sizing: border-box;
  border-radius: 7px;
  padding: 1.04vw 1.77vw 1.04vw 1.77vw;
  cursor: pointer;
}

.system__type {
  display: flex;
  margin-top: 1.08vw;
}
.money__system {
  margin-top: 3.65vw;
  padding-left: 7.50vw;
  padding-right: 5.26vw;
}
.money__active {
  border-bottom: 3px solid #ffffff;
  box-shadow: 0px 2px 4px #FF0000;
  width: 23.39vw;
  text-align: center;
}
.money__typecontent {
  display: flex;
  margin-left: 5.21vw;
  margin-right: 5.21vw;
  background: #171717;
  border-radius: 0.63vw;
  padding-left: 3.33vw;
  padding-top: 1vw;
  padding-bottom: 1vw;
  justify-content: space-evenly
}
.money__btn {
  z-index:4;
  padding:0.49vw 0.78vw 0.49vw 0.78vw;
  display: flex;
  background: transparent;
  border: 0;
  box-sizing: border-box;
  border-radius: 0.63vw;
  font-weight: 700;
  font-size: 1.35vw;
  color: #fff;
  margin-right: 2.24vw;
  align-items: flex-end;
}
.modal-dialog {
  min-width: 89.32vw;
}
.modal-content {
  background: #281F27;
  border-radius: 20px;
}
.modal-header,
.modal-footer {
  border-bottom: 0;
  border-top: 0;
}
.modal-footer {
  display: contents;
}
@media screen and (max-width: 480px){
  .money__active{
    width: unset;
  }
  .warning__text{
    font-size: 2.5vw !important;
  }
  .warning img{
    width:4.08vw !important;
  }
}
.payment__active {
  border: 3px solid #C62C44 !important;
}
</style>