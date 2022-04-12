<template>
  <div class="inner">
    <div class="container-fluid" style="position: relative">
      <div class="rel__text">
        <img src="@/assets/img/titleraritcases.png" alt="" />
      </div>
      <img
        class="rareLeft"
        src="@/assets/img/rareLeft.png"
        alt=""
        @click="rarePrev"
      />
      <img
        class="rareRight"
        src="@/assets/img/rareRight.png"
        alt=""
        @click="rareNext"
      />
      <div class="rarItems">
        <div class="">
          <div class="item item4" @click="tryToBuy">
            <img src="@/assets/img/casesRar1.png" alt="" class="item__img" />
            <span class="item__name">Тайное</span>
            <span class="item__price item__price4">999 ₸</span>
          </div>
        </div>
        <div class="">
          <div class="item item5" @click="tryToBuy">
            <img src="@/assets/img/casesRar2.png" alt="" class="item__img" />
            <span class="item__name">Нож</span>
            <span class="item__price item__price5">11499 ₸</span>
          </div>
        </div>
        <div class="">
          <div class="item item1" @click="tryToBuy">
            <img src="@/assets/img/casesRar5.png" alt="" class="item__img" />
            <span class="item__name">Армейское</span>
            <span class="item__price item__price1">45 ₸</span>
          </div>
        </div>
        <div class="">
          <div class="item item2" @click="tryToBuy">
            <img src="@/assets/img/casesRar4.png" alt="" class="item__img" />
            <span class="item__name">Запрещенное</span>
            <span class="item__price item__price2">145 ₸</span>
          </div>
        </div>
        <div class="">
          <div class="item item3" @click="tryToBuy">
            <img src="@/assets/img/casesRar3.png" alt="" class="item__img" />
            <span class="item__name">Засекреченное</span>
            <span class="item__price item__price3">345 ₸</span>
            <div style="clear: both"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="cases__classic">
    <div class="rel__text">
      <img src="@/assets/img/allcases.png" alt="" />
    </div>
    <div class="cassesCont">
      <div class="casesclasivNav">
        <div class="NavGroup">
          <div
            @click="activeTab = 'New'"
            :class="[
              'cassesNavTab',
              { cassesNavTabactive: activeTab == 'New' },
            ]"
          >
            Новые
          </div>
          <hr v-if="activeTab == 'New'" />
        </div>
        <div class="NavGroup">
          <div
            @click="activeTab = 'Classik'"
            :class="[
              'cassesNavTab',
              { cassesNavTabactive: activeTab == 'Classik' },
            ]"
          >
            Классические
          </div>
          <hr v-if="activeTab == 'Classik'" />
        </div>
        <div class="NavGroup">
          <div
            @click="activeTab = 'Sale'"
            :class="[
              'cassesNavTab',
              { cassesNavTabactive: activeTab == 'Sale' },
            ]"
          >
            Со скидкой
          </div>
          <hr v-if="activeTab == 'Sale'" />
        </div>
      </div>
      <div class="classicCases" v-if="activeTab == 'New'">
        <div class="case" v-for="cs in newcases" :key="cs" @click="tryToBuy">
          <img :src="'/data/'+cs.link" alt="" class="caseIm" />
          <div class="caseName">{{cs.name}}</div>
          <div class="casePrice">{{Math.floor(cs.cost)}} ₸</div>
        </div>
      </div>

      <div class="classicCases" v-if="activeTab == 'Classik'">
        <div class="case" v-for="cs in cases" :key="cs" @click="tryToBuy">
          <img :src="'/data/'+cs.link" alt="" class="caseIm" />
          <div class="caseName">{{cs.name}}</div>
          <div class="casePrice">{{Math.floor(cs.cost)}} ₸</div>
        </div>
      </div>

      <div class="classicCases" v-if="activeTab == 'Sale'">
        <div class="case" v-for="cs in salecases" :key="cs" @click="tryToBuy">
          <img :src="'/data/'+cs.link" alt="" class="caseIm" />
          <div class="caseName">{{cs.name}}</div>
          <div class="casePrice">{{Math.floor(cs.cost)}} ₸</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cases: [],
      newcases:[],
      salecases: [],
      activeTab: "Classik",
    };
  },
  methods: {
     getCases() {
      const path = "https://realcases.kz/api/cases";
      axios
        .get(path)
        .then((res) => {
          for(let i=31; i<51;i++){
              this.newcases.push(res.data[i])
          }
          for(let i=91; i<111;i++){
              this.cases.push(res.data[i])
          }
          for(let i=51; i<71;i++){
              this.salecases.push(res.data[i])
          }
          // this.cases = res.data;
          console.log(res);
          console.log(this.cases);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    classicPrev() {
      $(".sliderClassik").slick("slickPrev");
    },
    classicNext() {
      $(".sliderClassik").slick("slickNext");
    },
    rarePrev() {
      $(".rarItems").slick("slickPrev");
    },
    rareNext() {
      $(".rarItems").slick("slickNext");
    },
  },
  mounted() {
    $(".rarItems").slick({
      centerMode: true,
      infinite: true,
      slidesToShow: 3,
      // autoplay: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
    this.getCases();
    
  },
  
};
</script>

<style scoped>
.NavGroup {
  text-align: center;
  display: flex;
  flex-direction: column;
}
.classicCases {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  margin-top: 1vw;
}
.casesclasivNav {
  display: flex;
  font-weight: 600;
  font-size: 2.29vw;
  color: white;
  justify-content: space-evenly;
}
.cassesNavTab {
  cursor: pointer;
}
.cassesNavTabactive {
  cursor: pointer;
  color: #f5002a;
}
.case {
  display: flex;
  flex-direction: column;
}
.caseIm {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}
.caseName {
  font-weight: 600;
  font-size: 30px;
  text-align: center;
  color: white;
}
.casePrice {
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;
  text-align: center;
  color: #f5002a;
}

.stock {
  background: no-repeat url("../assets/img/bg1.png");
  background-size: cover;
  -webkit-background-size: cover;
  position: relative;
  padding-bottom: 30px;
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
  /* background: no-repeat url("../assets/img/brightness.png"); */
  /* background-position: right 59px; */
  position: relative;
  z-index: 3;
  color: #fff;
  text-align: center;
  padding-top: 6.19vw;
}
/* LIVE */
.livecontall {
  width: 100%;
  position: relative;
  /* margin-top: 2.604vw; */
}
.livecont {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
.live__star {
  width: 3.75vw;
  position: absolute;
  top: 25%;
  left: 0;
}
.live__images {
  width: 7.292vw;
}
/* LIVE */
.stock__text {
  text-shadow: 5px 4px 30px rgb(255, 0, 0), 2px 4px 4px rgba(255, 0, 0, 0.2);
  color: #f7f7f7;
  font-weight: 800;
  font-size: 3.13vw;
}
hr {
  border: 3px solid #ffffff;
  box-shadow: 0px 2px 4px #f5002a;
  filter: blur(1px);
  width: 10.68vw;
  text-align: center;
}
.rel__text {
  padding-top: 2.604vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.rel__text img {
  width: 31.25vw;
}

/* RELITEMS */
.rarItems {
  margin-top: 3vw;
}
.rareLeft {
  position: absolute;
  left: 5vw;
  top: 40%;
  z-index: 10;
  cursor: pointer;
}
.rareRight {
  position: absolute;
  right: 5vw;
  top: 40%;
  z-index: 10;
  cursor: pointer;
}
.rar__itemssecondrow {
  display: flex;
  justify-content: space-evenly;
}
.item {
  padding-top: 2.917vw;
  display: flex;
  flex-direction: column;
  /* border-bottom: 1px solid #F6F6F6; */
  border-radius: 10px;
  width: 20vw;
  margin-left: auto;
  margin-right: auto;
}

.item__img {
  width: 15.625vw;
  margin-left: auto;
  margin-right: auto;
}
.slick-center img {
  width: 18.625vw;
}
.slick-center .item__price {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #ffffff;
  -webkit-text-stroke: 1px #ffffff;
}
.slick-center .item1 {
  border: 3px solid #4392de;
}
.slick-center .item2 {
  border: 3px solid #9028f6;
}
.slick-center .item3 {
  border: 3px solid #f800f6;
}
.slick-center .item4 {
  border: 3px solid #f5002a;
}
.slick-center .item5 {
  border: 3px solid #f8cb15;
}
.item__name {
  padding-top: 1.042vw;
  font-size: 1.354vw;
  letter-spacing: 2.5%;
}
.item__price {
  padding-top: 1.042vw;
  /* font-style: italic; */
  font-size: 1.875vw;
}
.item__price1 {
  text-shadow: 2px 4px 4px #4392de;
  color: #4392de;
}
.item__price2 {
  text-shadow: 2px 4px 4px #9028f6;
  color: #9028f6;
}
.item__price3 {
  text-shadow: 2px 4px 4px #f800f6;
  color: #f800f6;
}
.item__price4 {
  text-shadow: 2px 4px 4px #f5002a;
  color: #f5002a;
}
.item__price5 {
  text-shadow: 2px 4px 4px #f8cb15;
  color: #f8cb15;
}
/* CASES */
.cases {
  background: no-repeat url("../assets/img/bg2.png");
  /* background-position: right 500px; */
  background-size: cover;
  -webkit-background-size: cover;
  position: relative;
}
.cassesCont {
  background-color: #281f27;
  padding: 30px 15px;
  border-radius: 15px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: -2vw;
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
.cases__avatar {
  padding-top: 6.35vw;
}
.cases__popular {
  margin-top: 3.96vw;
  display: flex;
  justify-content: space-around;
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
  margin-top: 1.563vw;
}

/* CLASSIC */
.cases__classic {
  margin-top: 5vw;
}

.classic__case {
  display: flex;
  flex-direction: column;
}
.classic__img {
  width: 15.625vw;
  margin-left: auto;
  margin-right: auto;
}
.sliderClassikCont {
  position: relative;
  margin-top: 4.167vw;
}
.sliderClassik {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
.casesLeft {
  position: absolute;
  width: 5.729vw;
  left: 10px;
  top: 30%;
  cursor: pointer;
}
.casesRight {
  position: absolute;
  width: 5.729vw;
  right: 10px;
  top: 30%;
  cursor: pointer;
}

@media screen and (max-width: 480px) {
    .caseName{
        font-size:5vw;
    }
    .casePrice{
        font-size:6vw;
    }
  hr {
    border: 1px solid #ffffff;
  }
  .inner {
    padding-top: 17.19vw;
  }
  .live__images {
    width: 13.292vw;
  }
  .item {
      width:27vw;
    margin-top: 2vw;
    /* border-top: 1px solid rgba(0,0,0,0); */
    border-bottom: 1px solid #f6f6f6;
    padding-top: 2vw;
  }
  .item__img {
    width: 24.625vw;
  }
  .item__name {
    font-size: 3.354vw;
  }
  .item__price {
    font-size: 2.875vw;
  }
  .classic__img {
    width: 22vw;
  }
  .cases__desc {
    font-size: 12px;
  }
  .cases__price {
    font-size: 3.5vw;
  }
  .cases__popular__content img {
    width: 27vw !important;
  }
  .cases__popular {
    flex-wrap: wrap;
  }
  .rel__text img {
    width: 5vw;
  }
  .stock__text {
    font-size: 5vw;
  }
  .cases__avatar img {
    width: 5vw !important;
  }

  .classicCases {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    margin-top: 3vw;
  }
  .casesclasivNav {
    flex-direction: column;
    font-size: 4.56vw;
  }
  .rel__text img {
    width: 76vw;
  }
}
</style>