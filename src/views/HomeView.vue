<template>
  <div class="stock">
    <div class="inner">
      <p class="stock__text">Акции</p>
      <hr />
      <div class="stock__images">
        <div class="stock__left">
          <img src="../assets/img/stock__left.png" alt="" style="width:43.54vw"/>
          <p class="stock__desc">К ЛЮБОМУ ПОПОЛНЕНИЮ ПРЯМО СЕЙЧАС!</p>
        </div>
        <div class="stock__right">
          <img src="../assets/img/stock__right.png" alt="" style="width:37.19vw"/>
          <p class="stock__desc2">
            Шанс редкого дропа с каждого 10 кейса <br />увеличен В 5 РАЗ!
          </p>
        </div>
      </div>
      <div class="stock__button">
        <button class="stock__btn">
          <img
            src="../assets/img/stock__btn.svg"
            alt=""
            style="width: 2.08vw; margin-right: 1.04vw"
            class="stock__img"
          />
          Получить бонусы
        </button>
      </div>
    </div>
  </div>
  <div class="cases">
    <div class="cases__content">
      <div class="cases__avatar">
        <img
          src="../assets/img/cases__avatar.svg"
          alt=""
          style="width: 2.6vw"
        />
      </div>
      <p class="stock__text">Популярные кейсы</p>
      <hr />
      <div class="cases__popular">
        <div class="cases__popular__content">
          <img
            src="../assets/img/homeless__case.png"
            alt=""
            style="width: 15.63vw"
          />
          <p class="cases__desc">Кейс Бомжа</p>
          <p class="cases__price">145 ₸</p>
        </div>
        <div class="cases__popular__content">
          <img
            src="../assets/img/red__case.png"
            alt=""
            style="width: 15.63vw"
          />
          <p class="cases__desc">Красный кейс</p>
          <p class="cases__price">145 ₸</p>
        </div>
        <div class="cases__popular__content">
          <img
            src="../assets/img/neon__case.png"
            alt=""
            style="width: 15.63vw"
          />
          <p class="cases__desc">Неон</p>
          <p class="cases__price">145 ₸</p>
        </div>
        <div class="cases__popular__content">
          <img
            src="../assets/img/vip__case.png"
            alt=""
            style="width: 15.63vw"
          />
          <p class="cases__desc">VIP кейс</p>
          <p class="cases__price">145 ₸</p>
        </div>
        <div class="cases__popular__content">
          <img
            src="../assets/img/deputat__case.png"
            alt=""
            style="width: 15.63vw"
          />
          <p class="cases__desc">Кейс сына депутата</p>
          <p class="cases__price">145 ₸</p>
        </div>
      </div>
      <div class="cases__avatar">
        <img src="../assets/img/cases__usp.svg" alt="" style="width: 2.6vw" />
      </div>
      <p class="stock__text">Популярные предметы</p>
      <hr />
      <div class="cases__popular cases_p">
        <div class="cases__popular__content">
          <img src="../assets/img/usp.png" alt="" style="width: 15.63vw" />
          <p class="cases__desc">USP-S</p>
          <p class="cases__price">145 ₸</p>
        </div>
        <div class="cases__popular__content">
          <img src="../assets/img/glock.png" alt="" style="width: 15.63vw" />
          <p class="cases__desc">GLOCK-17</p>
          <p class="cases__price">145 ₸</p>
        </div>
        <div class="cases__popular__content">
          <img src="../assets/img/deagle.png" alt="" style="width: 15.63vw" />
          <p class="cases__desc">DESERT EAGLE</p>
          <p class="cases__price">145 ₸</p>
        </div>
        <div class="cases__popular__content">
          <img
            src="../assets/img/five-seven.png"
            alt=""
            style="width: 15.63vw"
          />
          <p class="cases__desc">FIVE-SEVEN</p>
          <p class="cases__price">145 ₸</p>
        </div>
        <div class="cases__popular__content">
          <img src="../assets/img/tec9.png" alt="" style="width: 15.63vw" />
          <p class="cases__desc">TEC-9</p>
          <p class="cases__price">145 ₸</p>
        </div>
      </div>
    </div>
  </div>
  <how-steps></how-steps>
  <the-faq></the-faq>
</template>

<script>
export default {
};
</script>
<style scoped>

.cases_p{
  padding-bottom:5.83vw;
}
.pl__pr {
  margin-left: 2.86vw;
  margin-right: 2.86vw;
}
.cases__price {
  font-weight: 800;
  font-size: 1.88vw;
  line-height: 2.5vw;
  text-align: center;
  letter-spacing: 0.065em;
  color: #9028f6;
  text-shadow: 2px 4px 4px #561f8c, 2px 4px 4px #561f8c;
}
.cases__desc {
  font-size: 1.35vw;
  text-align: center;
  color: #fff;
}
.cases__popular {
  margin-top: 3.96vw;
  display: flex;
  justify-content: space-around;
}
.cases__avatar {
  padding-top: 6.35vw;
}
.stock__btn {
  display: flex;
  align-items: center;
  border: 0;
  background: linear-gradient(235.92deg, #753ef9 14.85%, #9d75ff 87.62%);
  border-radius: 9px;
  font-weight: 700;
  font-size: 1.46vw;
  color: #fff;
  padding: 1.09vw 0.47vw 1.09vw 1.88vw;
}
.stock__button {
  display: flex;
  justify-content: center;
padding-bottom: 5.21vw;
}
.stock__desc {
  font-weight: 700;
  font-size: 1.46vw;
  color: #fff;
}
.stock__desc2 {
  font-weight: 700;
  font-size: 1.46vw;
  color: #fff;
  margin-top: -1.15vw;
}
.stock__left {
  margin-left: 4.48vw;
}
.stock__right {
  padding-right: 10.42vw;
}
.stock__images {
  display: flex;
  justify-content: space-between;
}
.stock {
  background: no-repeat url("../assets/img/bg1.png");
  background-size: cover;
  -webkit-background-size: cover;
  position: relative;
}
.stock:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(32, 32, 37, 0.96);
}
.inner {
  background: no-repeat url("../assets/img/brightness.png");
  background-position: right 59px;
  position: relative;
  z-index: 3;
  color: #fff;
  text-align: center;
  padding-top: 12.19vw;
}
.cases {
  background: no-repeat url("../assets/img/bg2.png");
  background-position: right 500px;
  background-size: cover;
  -webkit-background-size: cover;
  position: relative;
}
.cases:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(32, 32, 37, 0.96);
}
.cases__content {
  background-position: right 59px;
  position: relative;
  z-index: 3;
  color: #fff;
  text-align: center;
  /* padding-top: 12.19vw; */
}
.stock__text {
  text-shadow: 5px 4px 30px #561f8c, 2px 4px 4px #561f8c;
  color: #f7f7f7;
  font-weight: 800;
  font-size: 3.13vw;
}
hr {
  border: 3px solid #ffffff;
  box-shadow: 0px 2px 4px #9028f6;
  filter: blur(1px);
  width: 10.68vw;
  text-align: center;
}
@media screen and (max-width:480px){
  .stock__desc, .stock__desc2{
    font-size: 2.67vw;
  }
  .inner{
    padding-top: 18.18vw;
    background: 0;
  }
  .stock__text{
    font-size: 3.93vw;
  }
  .stock__btn{
    font-size: 2.67vw;
  }
  .stock__img{
    width: 4.08vw !important;
  }
  hr {
  border: 2px solid #ffffff;
  }
  .cases__popular{
    flex-wrap: wrap;
  }
  .cases__popular__content img{
    width: 27vw !important;
  }
  .cases__avatar img{
    width: 7vw !important;
  }
  .cases__desc{
    font-size: 3.20vw;
  }
  .cases__price{
    font-size: 3.5vw;
  }
}

</style>
