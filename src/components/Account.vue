<template>
  <div class="user pl__pr">
    <div class="user__content">
      <div class="user__info">
        <img
          src="../assets/img/user__avatar.svg"
          alt=""
          style="width: 4.74vw; border: 2px solid white"
          class="user__ava"
        />
        <p class="user__name">IlyuhaTopCSer</p>
        <a href="#"
          ><img
            src="../assets/img/user__steam.svg"
            alt=""
            style="width: 2.76vw"
            class="steam__ico"
        /></a>
        <p class="user__count">1 ₸</p>
        <button
          class="user__button left"
          data-toggle="modal"
          data-target="#Money"
        >
          <img
            src="../assets/img/user__topup.svg"
            alt=""
            style="width: 1.98vw; margin-right: 0.68vw"
          />
          Пополнить
        </button>
        <button class="user__button" data-toggle="modal" data-target="#OutputMoney">
          <img
            src="../assets/img/user__output.svg"
            alt=""
            style="width: 1.98vw; margin-right: 0.68vw"
          />
          Вывод средств
        </button>
      </div>
      <div class="user__trade__email pl">
        <div class="user__tradeblock">
          <div class="user__labels">
            <label for="trade" class="user__trade">
              <img
                src="../assets/img/user__trade.svg"
                alt=""
                style="width: 2.08vw; margin-right: 0.47vw"
              />
              Трейд-ссылка</label
            >
            <a href="#" class="user__how">Как получить?</a>
          </div>
          <input
            type="text"
            name="trade"
            id="trade"
            class="user__input trade"
            placeholder="https://steamcommunity.com/tradeoffer/new/?partner=969138412&token=NJff8Nnr"
          />
          <button class="user__savebtn">Сохранить</button>
        </div>
        <div class="user__emailblock">
          <label for="email" class="user__email">E-mail</label><br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Ваш E-mail"
            class="user__input all__inputs"
          />
          <button class="user__savebtn">Изменить</button>
        </div>
        <div class="user__passwordblock">
          <div>
            <p class="user__email">Пароль</p>

            <div>
              <label for="current__password" class="user__password"
                >Текущий пароль</label
              ><br />
              <input
                type="password"
                name="current__password"
                id="current__password"
                class="user__input all__inputs user__password"
              />
            </div>

            <div>
              <label for="new__password" class="user__password"
                >Новый пароль</label
              ><br />
              <input
                type="password"
                name="new__password"
                id="new__password"
                class="user__input all__inputs user__password"
              />
            </div>

            <div>
              <label for="accept__password" class="user__password"
                >Подвердите пароль</label
              ><br />
              <input
                type="password"
                name="accept__password"
                id="accept__password"
                class="user__input all__inputs user__password"
              />
            </div>
            <button class="user__savebtn user__btn">Сменить пароль</button>
          </div>
          <div class="user__img">
            <img
              src="../assets/img/user__img.png"
              alt=""
              style="width: 44.06vw"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <how-steps style="padding-top: 5.78vw"></how-steps>
  <the-faq></the-faq>
</template>

<script>
export default {
  
};
</script>

<style scoped>
.user__btn {
  margin-top: 1.25vw;
  margin-bottom: 1.67vw;
}
.user__passwordblock {
  margin-top: 2.6vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.user__password {
  font-weight: 500;
  font-size: 1.04vw;
  color: #fff;
  margin-top: 0.52vw;
}
.all__inputs {
  width: 34.84vw;
  height: 3.39vw;
  margin-right: 1.41vw;
}
.user__emailblock {
  margin-top: 2.86vw;
}
.user__email {
  font-weight: 600;
  font-size: 2.08vw;
  color: #fff;
}
.user__savebtn {
  padding: 0.78vw 1.3vw 0.78vw 1.3vw;
  background: linear-gradient(235.92deg, #753ef9 14.85%, #9d75ff 87.62%);
  border-radius: 0.63vw;
  text-transform: uppercase;
  color: #fff;
  font-size: 1.35vw;
  border: 0;
}
.user__how {
  margin-left: 36.93vw;
  font-weight: 500;
  font-size: 1.35vw;
  text-decoration-line: underline;
  color: #fff;
}
.user__labels {
  display: flex;
}
::placeholder {
  color: #fff;
  font-size: 0.94vw;
  padding-left: 1.41vw;
}
.trade {
  width: 56.09vw;
  height: 3.39vw;
  margin-right: 1.41vw;
}
.user__input {
  background: #1e1c2a;
  border-radius: 0.63vw;
  border: 0;
  outline: 0;
  color: #fff;
  font-size: 1.35vw;
}
.user__trade {
  display: flex;
  font-weight: 500;
  font-size: 1.35vw;
  color: #fff;
}
.pl {
  padding-left: 5.78vw;
}
.left {
  margin-left: 1.77vw;
}
.user__button {
  display: flex;
  border: 0;
  background: #4c9c5c;
  border-radius: 0.63vw;
  font-weight: 700;
  font-size: 1.35vw;
  color: #fff;
  padding-bottom: 0.78vw;
  padding-right: 0.68vw;
  margin-right: 1.3vw;
  align-items: flex-end;
}
.user__count {
  left: 5.99vw;
  top: 1.82vw;
  position: absolute;
  display: flex;
  font-weight: 700;
  font-size: 1.88vw;
  color: #fff;
}
.user__info {
  position: relative;
  display: flex;
  align-items: flex-start;
}
.user__name {
  font-weight: 500;
  font-size: 1.56vw;
  color: #f7f7f7;
  padding-left: 1.41vw;
}
.pl__pr {
  margin-left: 2.86vw;
  margin-right: 2.86vw;
}
.user {
  padding-top: 9.27vw;
}
.user__content {
  padding-top: 1.09vw;
  padding-left: 1.46vw;
  background: #252331;
  border-radius: 1.46vw;
}
@media screen and (max-width: 480px){
  .user{
    padding-top: 15.27vw;
  }
  .user__ava{
    width: 7.3vw !important;
  }
  .user__name{
    font-size: 3.2vw;
  }
  .user__count{
    font-size: 3.2vw;
    left: 8.69vw;
    top:3.8200000000000003vw;
  }
  .steam__ico{
    width: 5vw !important;
    margin-top: -2.92vw !important;
  }
  .user__button{
    font-size: 2.5vw;
  }
  .user__button img{
    width: 3vw !important;
  }
  .user__trade, .user__how, .user__email, .user__password{
    font-size: 2.8vw;
  }
  .user__trade img{
    width: 4.5vw !important;
  }
  .user__tradeblock{
    margin-top: 2vw;
  }
  .user__how{
    margin-left:26.93vw;
  }
  .trade{
    height: 6vw;
  }
  .user__input{
    font-size: 2.8vw;
  }
  ::placeholder{
    font-size: 2.2vw;
  }
  .user__savebtn{
    font-size: 2.2vw;
  }
  .all__inputs{
    height: 6vw;
  }
}
</style>