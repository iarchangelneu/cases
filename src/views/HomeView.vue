<template>
  <div class="stock" style="overflow-x: hidden">
    <div class="slider__arrows">
      <img src="@/assets/img/leftar.png" class="casesLeft" @click="Prev" />
      <img src="@/assets/img/rightar.png" class="casesRight" @click="Next" />
    </div>
    <div class="inner">
      <div class="stock__images">
        <div class="stock__left">
          <img src="../assets/img/ct.png" alt="" style="width: 34.48vw" />
        </div>
        <div class="stock__right">
          <img src="../assets/img/20.png" alt="" style="width: 61.56vw" />
          <p class="stock__desc2">Для новых пользователей</p>
          <div class="stock__button">
            <button class="stock__btn">Получить бонус!</button>
          </div>
        </div>
      </div>
      <div class="stock__images">
        <div class="stock__left2">
          <img src="../assets/img/2sl.png" alt="" style="width: 37.5vw" />
        </div>
        <div class="slct">
          <img src="@/assets/img/2slct.png" alt="" style="width: 54.69vw" />
        </div>
        <div class="stock__right2">
          <img src="../assets/img/2sltext.png" alt="" style="width: 33.65vw" />
          <p class="stock__desc22">За каждые 5 открытий</p>
          <div class="stock__button2">
            <button class="stock__btn">Получить бонус!</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="cases row">
      <div class="cases__content col-12 col-md-6">
        <img
          src="@/assets/img/textleft.png"
          style="width: 34.84vw; margin-left: 7.57vw"
        />
        <div class="cases__popular">
          <div class="cases__popular__content">
            <div style="margin-right: 3.59vw">
              <img src="../assets/img/glhf.png" alt="" style="width: 15.63vw" />
              <p class="cases__desc">GL HF</p>
              <p class="cases__price">145 ₸</p>
            </div>
            <div>
              <img src="../assets/img/hs.png" alt="" style="width: 15.63vw" />
              <p class="cases__desc">Head Shot</p>
              <p class="cases__price">145 ₸</p>
            </div>
          </div>
          <div class="cases__popular__content">
            <div style="margin-right: 3.59vw">
              <img src="../assets/img/ez.png" alt="" style="width: 15.63vw" />
              <p class="cases__desc">EZ case</p>
              <p class="cases__price">145 ₸</p>
            </div>
            <div>
              <img
                src="../assets/img/spring.png"
                alt=""
                style="width: 15.63vw"
              />
              <p class="cases__desc">Весенний</p>
              <p class="cases__price">145 ₸</p>
            </div>
          </div>
          <div class="cases__popular__content">
            <div>
              <img
                src="../assets/img/violet.png"
                alt=""
                style="width: 15.63vw"
              />
              <p class="cases__desc">Ультрафиолет</p>
              <p class="cases__price">145 ₸</p>
            </div>
          </div>
        </div>
      </div>
      <div class="cases__content col-12 col-md-6" style="overflow-x: hidden">
        <img
          src="@/assets/img/textright.png"
          style="width: 41.41vw; margin-left: 3.17vw"
        />
        <div class="cases__popular cases_p">
          <div class="cases__popular__content">
            <div style="margin-right: 3.59vw">
              <img src="../assets/img/revo.png" alt="" style="width: 15.63vw" />
              <p class="cases__desc">REVOLVER R8</p>
              <p class="cases__price">145 ₸</p>
            </div>
            <div>
              <img src="../assets/img/de.png" alt="" style="width: 15.63vw" />
              <p class="cases__desc">DESERT EAGLE</p>
              <p class="cases__price">145 ₸</p>
            </div>
          </div>
          <div class="cases__popular__content">
            <div style="margin-right: 3.59vw">
              <img src="../assets/img/ak.png" alt="" style="width: 15.63vw" />
              <p class="cases__desc">AK-47</p>
              <p class="cases__price">145 ₸</p>
            </div>
            <div>
              <img src="../assets/img/mac.png" alt="" style="width: 15.63vw" />
              <p class="cases__desc">MAC-10</p>
              <p class="cases__price">145 ₸</p>
            </div>
          </div>
          <div class="cases__popular__content">
            <div>
              <img src="../assets/img/m4.png" alt="" style="width: 15.63vw" />
              <p class="cases__desc">M4A4</p>
              <p class="cases__price">145 ₸</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <how-steps></how-steps>
  <the-faq></the-faq>
</template>

<script>
export default {
  methods: {
    Prev() {
      $(".inner").slick("slickPrev");
    },
    Next() {
      $(".inner").slick("slickNext");
    },
  },
  mounted() {
    $(".inner").slick({
      infinite: true,
      rows: 1,
      slidesToShow: 1,
      slidesPerRow: 5,
      slidesToScroll: 1,
      // autoplay: true,
      arrows: false,
      draggable: true,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesPerRow: 3,
          },
        },
      ],
    });
  },
};
</script>
<style scoped>
.slct {
  position: absolute;
  left: 45%;
  bottom: 0;
}
.cases__popular__content {
  display: flex;
  justify-content: center;
}
.casesLeft {
  position: absolute;
  width: 1.35vw;
  left: 10px;
  top: 50%;
  cursor: pointer;
  z-index: 4;
}
.casesRight {
  position: absolute;
  width: 1.35vw;
  right: 10px;
  top: 50%;
  cursor: pointer;
  z-index: 4;
}
.cases_p {
  padding-bottom: 5.83vw;
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
  background: linear-gradient(83.8deg, #c62c44 15.62%, #ff0027 91.62%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-shadow: 5px 4px 30px #9a1f36, 2px 4px 4px #9a1f36;
}
.cases__desc {
  font-size: 1.35vw;
  text-align: center;
  color: #fff;
}
.cases__popular {
  display: grid;
  margin-top: 3.96vw;
}
.cases__avatar {
  padding-top: 6.35vw;
}
.stock__btn {
  border: 0;
  background: linear-gradient(83.8deg, #c62c44 15.62%, #ff0027 91.62%);
  border-radius: 1.56vw;
  font-weight: 700;
  font-size: 1.46vw;
  color: #fff;
  padding: 0.89vw 1.46vw 0.89vw 1.46vw;
}
.stock__button {
  margin-left: 5vw;
  padding-bottom: 5.21vw;
}
.stock__button2 {
  padding-bottom: 5.21vw;
}
.stock__desc22 {
  font-weight: 700;
  font-size: 2.08vw;
  color: #fff;
}
.stock__desc2 {
  margin-left: 5vw;
  font-weight: 700;
  font-size: 2.08vw;
  color: #fff;
  margin-top: -10.15vw;
}
.stock__left {
  margin-top: 21.41vw;
  margin-left: 4.48vw;
}
.stock__left2 {
  margin-top: 4.53vw;
  margin-left: 4.48vw;
}
.stock__right2 {
  margin-top: 11.04vw;
}
.stock__images {
  display: flex;
  justify-content: space-between;
}
.stock {
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
  background: rgba(40, 31, 39, 1);
  position: relative;
  z-index: 3;
  color: #fff;
  text-align: center;
}
.cases {
  margin-top: 5.63vw;
  position: relative;
}

.cases__content {
  position: relative;
  color: #fff;
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
@media screen and (max-width: 480px) {
  .stock__desc,
  .stock__desc2 {
    font-size: 2.67vw;
  }
  .inner {
    padding-top: 18.18vw;
    background: 0;
  }
  .stock__text {
    font-size: 3.93vw;
  }
  .stock__btn {
    font-size: 2.67vw;
  }
  .stock__img {
    width: 4.08vw !important;
  }
  hr {
    border: 2px solid #ffffff;
  }
  .cases__popular {
    flex-wrap: wrap;
  }
  .cases__popular__content img {
    width: 27vw !important;
  }
  .cases__avatar img {
    width: 7vw !important;
  }
  .cases__desc {
    font-size: 3.2vw;
  }
  .cases__price {
    font-size: 3.5vw;
  }
}
</style>
