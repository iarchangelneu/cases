<template>
  <div class="how__faq">
    <div class="how pl__pr">
      <div class="how__content">
        <div class="how__padding">
          <p class="how__main">Как это работает?</p>
          <div class="how__images">
            <div class="how__steps">
              <img
                src="../assets/img/step1.png"
                alt=""
                style="width: 18.13vw"
              />
              <p class="how__text" style="width: 12.92vw; margin-left: -2.34vw">
                Войдите через Steam и привяжите аккаунт
              </p>
            </div>
            <div class="how__steps">
              <img
                src="../assets/img/step2.png"
                alt=""
                style="width: 18.13vw"
              />
              <p class="how__text" style="width: 8.02vw; margin-left: 0.26vw">
                Введите свою Trade-ссылку
              </p>
            </div>
            <div class="how__steps">
              <img
                src="../assets/img/step3.png"
                alt=""
                style="width: 18.13vw"
              />
              <p class="how__text" style="width: 13.13vw; margin-left: -2.34vw">
                Пополните счет удобным Вам способом
              </p>
            </div>
            <div class="how__steps">
              <img
                src="../assets/img/step4.png"
                alt=""
                style="width: 18.13vw"
              />
              <p class="how__text" style="width: 12.03vw; margin-left: -1.56vw">
                Открывайте кейсы по выгодным ценам!
              </p>
            </div>
            <div class="how__steps">
              <img
                src="../assets/img/step5.png"
                alt=""
                style="width: 8.13vw; margin-right: 3.8vw"
              />
              <p class="how__text" style="width: 15.31vw; margin-left: -3.39vw">
                Выводите скины на свой аккаунт в Steam или продайте и играйте
                дальше!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.pl__pr {
  margin-left: 2.86vw;
  margin-right: 2.86vw;
}
.how__text {
  font-weight: 400;
  font-size: 1.15vw;
  color: #fff;
  text-align: center;
  margin-top: 0.94vw;
}
.how__images {
  display: flex;
}
.how__padding {
  padding-left: 6.46vw;
  padding-right: 6.46vw;
  padding-top:1.15vw;
  padding-bottom: 4.32vw;
}
.how__main {
  font-weight: 800;
  font-size: 2.29vw;
  text-align: center;
  letter-spacing: 0.025em;
  color: #fff;
  padding-bottom: 3.44vw;
}
.how__content {
  background: #252331;
  border-radius: 0.78vw;
}
@media screen and (max-width:480px){
  /* .how__steps img{
    width: 14vw !important;
  } */
  .how__text{
    font-size: 2.2vw;
  }
  .how__main{
    font-size: 3.2vw;
  }
 .how__padding{
   padding-left: 3.46vw;
 }
}
</style>