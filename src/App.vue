<template>
  <the-header></the-header>
  <router-view />
  <the-footer></the-footer>

  <ops-modal v-if="IsLogged">
    <template #header>
      <div class="modal__header">
        <img src="./assets/img/balance.svg" alt="" style="width: 6.25vw" />
      </div>
    </template>
    <template #body>
      <div class="modal__body">
        <p class="modal__text">Упс...</p>
        <p class="modal__text">Пополните баланс</p>
      </div>
    </template>
    <template #footer>
      <div class="modal__btn">
        <button class="modal__button">
          <a class="modal__href" @click="openTopUp()">Пополнить</a>
        </button>
      </div>
    </template>
  </ops-modal>

  <ops-modal v-else>
    <template #header>
      <div class="modal__header">
        <img src="./assets/img/signin.svg" alt="" style="width: 6.25vw" />
      </div>
    </template>
    <template #body>
      <div class="modal__body">
        <p class="modal__text">Упс...</p>
        <p class="modal__text">Сначала авторизуйтесь</p>
      </div>
    </template>
    <template #footer>
      <div class="modal__btn">
        <button class="modal__button">
          <a class="modal__href" @click="openSignIn()">Войти</a>
        </button>
      </div>
    </template>
  </ops-modal>

  <log-reg>
    <template #header>
      <div class="logreg__main">Авторизация</div>
    </template>
    <template #body>
      <div class="modal__inputs">
        <form>
        <label for="login" class="modal__label">Логин</label><br />
        <input
          type="text"
          name="loggin"
          id="loggin"
          class="modal__input"
          placeholder="Введите Логин"
          v-model="username"
        />

        <label for="password" class="modal__label">Пароль</label><br />
        <input
          type="password"
          name="password"
          id="password"
          class="modal__input"
          placeholder="Введите пароль"
          v-model="password"
        />
        </form>
      </div>
      <div class="modal__btn">
        <button class="modal__signin" @click="login">Войти</button>
      </div>
      
    </template>
    <template #footer>
      <div class="modal__haveacc">
        <p class="haveacc__main">Нет аккаунта?</p>
        <div class="haveacc__btn">
          <button class="haveacc__button">
            <img
              src="./assets/img/steamlog.svg"
              alt=""
              style="width: 3.39vw; margin-right: 0.52vw"
            />Войти через Steam
          </button>
          <a class="haveacc__href" @click="openReg()">Зарегистрироваться</a>
        </div>
      </div>
    </template>
  </log-reg>

  <reg-modal>
    <template #header>
      <div class="logreg__main">Регистрация</div>
    </template>
    <template #body>
      <div class="modal__inputs">
        <label for="email" class="modal__label">E-mail</label><br />
        <input
          type="email"
          name="email"
          id="email"
          class="modal__input"
          placeholder="Введите e-mail"
          v-model="emailR"
        />

        <label for="login" class="modal__label">Логин</label><br />
        <input
          type="text"
          name="login"
          id="login"
          class="modal__input"
          placeholder="Введите логин"
          v-model="usernameR"
        />
        <label for="repeat-password" class="modal__label"
          >Введите пароль</label
        ><br />
        <input
          type="password"
          name="repeat-password"
          id="repeat-password"
          class="modal__input"
          placeholder="Введите пароль"
          v-model="passwordR"
        />
      </div>
    </template>
    <template #footer>
      <div class="modal__haveacc">
        <div class="haveacc__btn2">
          <button class="haveacc__button" style="margin-right: 4.9vw" @click="reg">
            Зарегистрироваться
          </button>
          <button class="haveacc__button">
            <img
              src="./assets/img/steamlog.svg"
              alt=""
              style="width: 3.39vw; margin-right: 0.52vw"
            />Войти через Steam
          </button>
        </div>
      </div>
    </template>
  </reg-modal>

  <money-modal> </money-modal>

  <output-modal> </output-modal>

  <payment-error>
    <template #header>
      <div class="modal__header">
        <img src="./assets/img/signin.svg" alt="" style="width: 6.25vw" />
      </div>
    </template>
    <template #body>
      <div class="modal__body">
        <p class="modal__text">Упс...</p>
        <p class="modal__text">Попробуйте другую платежную систему</p>
      </div>
    </template>
    <template #footer>
      <div class="modal__btn">
        <button class="modal__button" @click="closeError()">Понятно</button>
      </div>
    </template>
  </payment-error>
</template>
<script>
$(document).on("hidden.bs.modal", function (event) {
  if ($(".modal:visible").length) {
    $("body").addClass("modal-open");
  }
});
export default {
  methods: {
    openReg() {
      $("#LogReg").modal("hide");
      $("#Reg").modal("show");
    },
    closeError() {
      $("#PaymentError").modal("hide");
    },
    openTopUp() {
      $("#exampleModal").modal("hide");
      $("#Money").modal("show");
    },
    openSignIn() {
      $("#exampleModal").modal("hide");
      $("#LogReg").modal("show");
    },
  },
};
</script>
<style scoped>
.haveacc__btn {
  display: flex;
  justify-content: space-around;
  margin-bottom: 2.71vw;
}
.haveacc__btn2 {
  margin-top: 1.98vw;
  display: flex;
  justify-content: center;
  margin-bottom: 2.71vw;
}
.haveacc__button {
  display: flex;
  font-weight: 600;
  font-size: 1.35vw;
  box-sizing: border-box;
  background: linear-gradient(83.8deg, #c62c44 15.62%, #ff0027 91.62%);
  border-radius: 1.56vw;
  align-items: center;
  color: #fff;
  border: 0;
}
.haveacc__href {
  cursor: pointer;
  font-weight: 500;
  font-size: 1.56vw;
  letter-spacing: 0.03em;
  text-decoration-line: underline;
  color: #fff;
}
.haveacc__main {
  font-weight: 600;
  font-size: 1.56vw;
  letter-spacing: 0.03em;
  color: #fff;
  text-align: center;
}
::placeholder {
  font-weight: 500;
  font-size: 1.25vw;
  color: rgba(247, 247, 247, 0.3);
}
.modal__btn {
  text-align: center;
}
.modal__inputs {
  padding-top:50px;
  padding-left: 50px;
}
.modal__input {
  background: #171717;
  border-radius: 2.6vw;
  width: 40.63vw;
  height: 3.39vw !important;
  border: 0;
  outline: 0;
  color: #fff;
  padding-left: 1.15vw;
  font-size: 1.25vw;
}
.modal__label {
  font-weight: 500;
  font-size: 1.56vw;
  letter-spacing: 0.03em;
  color: #fff;
}
.modal__signin {
  border: 0;
<<<<<<< HEAD
  background: linear-gradient(235.92deg, #c62c44 14.85%, #ff0027 87.62%);
=======
  background: linear-gradient(83.8deg, #c62c44 15.62%, #ff0027 91.62%);
>>>>>>> 74f26b68a5161a9f81804f11a12886fee69a4fcb
  border-radius: 0.63vw;
  padding: 0.78vw 1.41vw 0.78vw 1.41vw;
  font-weight: 700;
  font-size: 1.35vw;
  color: #fff;
}
.logreg__main {
  text-align: center;
  font-weight: 800;
  font-size: 2.29vw;
  letter-spacing: 0.025em;
  color: #fff;
  padding-top: 1.93vw;
}
.modal__href {
  color: #fff;
}
.modal__href:hover {
  text-decoration: none;
}
.modal__button {
  background: linear-gradient(83.8deg, #c62c44 15.62%, #ff0027 91.62%);
  border-radius: 30px;
  padding: 0.78vw 2.4vw 0.78vw 2.4vw;
  border: 0;
  font-weight: 700;
  font-size: 1.35vw;
  color: #fff;
  text-align: center;
}
.modal__btn {
  padding-top: 2.45vw;
  text-align: center;
  padding-bottom: 2.81vw;
}
.modal__header {
  padding-left: 19.79vw;
  padding-right: 21.35vw;
  padding-top: 3.49vw;
}
.modal__body {
  padding-top: 3.02vw;
}
.modal__text {
  font-weight: 700;
  font-size: 2.55vw;
  text-align: center;
  color: #fff;
}
@media screen and (max-width: 480px) {
  .modal__text {
    font-size: 3.5vw !important;
  }
  .modal__button {
    font-size: 2.4vw !important;
  }
  .modal__header {
    padding-left: 38.79vw !important;
  }
  .modal__header img {
    width: 16.25vw !important;
  }
  .logreg__main {
    font-size: 3.5vw !important;
  }
  .modal__label {
    font-size: 3.2vw !important;
  }
  .modal__input {
    height: 3.9vw !important;
    font-size: 2.5vw !important;
    width: 62.62vw !important;
  }
  .modal__signin,
  .haveacc__button,
  .haveacc__href,
  .haveacc__main {
    font-size: 2.5vw !important;
  }
  .haveacc__button img {
    width: 5.39vw !important;
  }
}
</style>
