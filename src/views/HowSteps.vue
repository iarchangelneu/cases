<template>
  <div class="how__faq">
    <div class="how pl__pr">
      <div class="how__content">
        <div class="how__padding">
          <p class="how__main">Как это работает?</p>
          <div class="how__images">
            <div class="chel">
              <img src="@/assets/img/chel.png" alt="" style="width:91.04vw;"/>
            </div>
            <div class="how__flex" style="margin-left:29.74vw">
              <div class="how__steps">
                <img
                  src="../assets/img/step1.png"
                  alt=""
                  style="width: 8.13vw"
                />
                <p class="how__text" style="width:12.92vw; margin-left:-2vw">
                  Войдите через Steam и привяжите аккаунт
                </p>
              </div>
              <div class="how__steps">
                <img
                  src="../assets/img/step2.png"
                  alt=""
                  style="width: 8.13vw"
                />
                <p class="how__text" style="width:13.13vw; margin-left:-2.2vw">
                  Пополните счет удобным Вам способом
                </p>
              </div>
              <div class="how__steps">
                <img
                  src="../assets/img/step3.png"
                  alt=""
                  style="width: 8.13vw"
                />
                <p class="how__text" style="15.31vw; margin-left:-2.5vw">
                 Выводите скины в Steam<br> или продайте<br> и играйте дальше!
                </p>
              </div>
            </div>
            <div class="how__flex2" style="margin-left:39.28vw">
              <div class="how__steps">
                <img
                  src="../assets/img/step4.png"
                  alt=""
                  style="width: 8.13vw"
                />
                <p class="how__text" >
                 Введите свою<br> Trade-ссылку
                </p>
              </div>
              <div class="how__steps" style="margin-right:10.98vw">
                <img
                  src="../assets/img/step5.png"
                  alt=""
                  style="width: 8.13vw"
                />
                <p class="how__text" style="margin-left:-1.5vw">
                  Открывайте кейсы по<br> выгодным ценам!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.how__flex {
  display: flex;
  justify-content: space-between;
}
.how__flex2 {
  display: flex;
  justify-content: space-between;
}
.how__faq {
  margin-left: -2.08vw;
}
.pl__pr {
  margin-right: 3.46vw;
}
.chel {
  left: 0;
  bottom: 0;
  position: absolute;
}
.how__text {
  font-weight: 400;
  font-size: 1.15vw;
  color: #fff;
  text-align: center;
  margin-top: 0.94vw;
}
.how__images {
  margin-top: -2vw;
}
.how__padding {
  padding-left: 6.46vw;
  padding-right: 6.46vw;
  padding-top: 1.15vw;
  padding-bottom: 4.32vw;
}
.how__main {
  font-weight: 800;
  font-size: 2.29vw;
  text-align: left;
  letter-spacing: 0.025em;
  color: #fff;
}
.how__content {
  position: relative;
  background: #281f27;
  height: 34.74vw;
  border-top-right-radius: 2.6vw;
  border-bottom-right-radius: 2.6vw;
}
@media screen and (max-width: 480px) {
  .how__flex{
    margin-left: 32.73vw !important;
    margin-top:-8vw !important;
  }
  .how__text {
    font-size: 1.2vw;
  }
  .how__main {
    font-size: 3.2vw;
  }
  .how__padding {
    padding-left: 3.46vw;
  }
}
</style>