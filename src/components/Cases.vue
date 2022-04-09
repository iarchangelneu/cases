<template>
        <div class="inner">

            <div class="container-fluid" style="position: relative;">
                <div class="rel__text">
                    <img src="@/assets/img/titleraritcases.png" alt="">
                </div>
                <img class="rareLeft" src="@/assets/img/rareLeft.png" alt="" @click="rarePrev">
                <img class="rareRight" src="@/assets/img/rareRight.png" alt="" @click="rareNext">
                <div class="rarItems">
                    <div class="">
                        <div class="item item4">
                            <img src="@/assets/img/casesRar1.png" alt="" class="item__img">
                            <span class="item__name">Тайное</span>
                            <span class="item__price item__price4">999 ₸</span>
                        </div>
                    </div>
                    <div class="">
                        <div class="item item5">
                            <img src="@/assets/img/casesRar2.png" alt="" class="item__img">
                            <span class="item__name">Нож</span>
                            <span class="item__price item__price5">11499 ₸</span>
                        </div>
                    </div> 
                    <div class="">
                        <div class="item item1">
                            <img src="@/assets/img/casesRar5.png" alt="" class="item__img">
                            <span class="item__name">Армейское</span>
                            <span class="item__price item__price1">45 ₸</span>
                        </div>
                    </div>
                    <div class="">
                        <div class="item item2">
                            <img src="@/assets/img/casesRar4.png" alt="" class="item__img">
                            <span class="item__name">Запрещенное</span>
                            <span class="item__price item__price2">145 ₸</span>
                        </div>
                    </div>
                    <div class="">
                        <div class="item item3">
                            <img src="@/assets/img/casesRar3.png" alt="" class="item__img">
                            <span class="item__name">Засекреченное</span>
                            <span class="item__price item__price3">345 ₸</span>
                            <div style="clear:both"></div>
                        </div>
                    </div>  
                    
                    
                </div>

                    
            </div>
        </div>
    
    <div class="cases">
    <div class="cases__content">
      <div class="cases__avatar">
        <img
          src="../assets/img/cassesNew.png"
          alt=""
          style="width: 2.6vw"
        />
      </div>
      <p class="stock__text">Новые кейсы</p>
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
        <img
          src="../assets/img/classikcases.png"
          alt=""
          style="width: 2.6vw"
        />
      </div>
      <p class="stock__text">Классические кейсы</p>
      <hr />
    </div>
  </div>

  <div class="cases__classic">
      <div class="sliderClassikCont">
          <img src="@/assets/img/casesLeft.png" class="casesLeft" @click="classicPrev" alt="">
          <img src="@/assets/img/casesRight.png" class="casesRight" @click="classicNext">
        <div class="sliderClassik">
            <div v-for="item in cases" :key="item">
                <div class="classic__case">
                    <img src="../assets/img/homeless__case.png" alt="" class="classic__img"/>
                    <p class="cases__desc">{{item.name}}</p>
                    <p class="cases__price">{{item.price}} ₸</p>
                </div>   
            </div>
        </div>
      </div>
  </div>


</template>

<script>
export default {
    data(){
        return{
            cases: [{img:'../assets/img/homeless__case.png',name:'Кейс бомжа',price: '145'},
                    {img:'../assets/img/homeless__case.png',name:'Кейс бомжа2',price: '300'},
                    {img:'../assets/img/homeless__case.png',name:'Кейс бомжа2',price: '300'},
                    {img:'../assets/img/homeless__case.png',name:'Кейс бомжа2',price: '300'},
                    {img:'../assets/img/homeless__case.png',name:'Кейс бомжа2',price: '300'},
                    {img:'../assets/img/homeless__case.png',name:'Кейс бомжа2',price: '300'},
                    {img:'../assets/img/homeless__case.png',name:'Кейс бомжа2',price: '300'},
                    {img:'../assets/img/homeless__case.png',name:'Кейс бомжа2',price: '300'},
                    {img:'../assets/img/homeless__case.png',name:'Кейс бомжа2',price: '300'},
                    {img:'../assets/img/homeless__case.png',name:'Кейс бомжа2',price: '300'},
                    {img:'../assets/img/homeless__case.png',name:'Кейс бомжа',price: '145'},
                    {img:'../assets/img/homeless__case.png',name:'Кейс бомжа2',price: '300'},
                    {img:'../assets/img/homeless__case.png',name:'Кейс бомжа2',price: '300'},
                    {img:'../assets/img/homeless__case.png',name:'Кейс бомжа2',price: '300'},
                    {img:'../assets/img/homeless__case.png',name:'Кейс бомжа2',price: '300'},
                    {img:'../assets/img/homeless__case.png',name:'Кейс бомжа2',price: '300'},
                    {img:'../assets/img/homeless__case.png',name:'Кейс бомжа2',price: '300'},
                    {img:'../assets/img/homeless__case.png',name:'Кейс бомжа2',price: '300'},
                    {img:'../assets/img/homeless__case.png',name:'Кейс бомжа2',price: '300'},
                    {img:'../assets/img/homeless__case.png',name:'Кейс бомжа2',price: '300'},
            ]
        }
    },
    methods:{
        classicPrev(){
            $('.sliderClassik').slick('slickPrev');
        },
        classicNext(){
            $('.sliderClassik').slick('slickNext');
        },
        rarePrev(){
            $('.rarItems').slick('slickPrev');
        },
        rareNext(){
            $('.rarItems').slick('slickNext');
        }
    },
    mounted() {
    $('.sliderClassik').slick({
        infinite: true,
        rows: 2,
        slidesToShow: 1,
        slidesPerRow: 5,
        slidesToScroll: 1,
        // autoplay: true,
        arrows: false,
        draggable: false,
        responsive: [
            {
            breakpoint: 480,
            settings: {
               slidesPerRow: 3,
            }
            },
        ]
        });
    $('.rarItems').slick({
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        // autoplay: true,
        arrows: false,
        responsive: [
            {
            breakpoint: 480,
            settings: {
               slidesPerRow: 3,
            }
            },
        ]
        });
    }
}
</script>

<style scoped>
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
    .livecontall{
        width: 100%;
        position: relative;
        /* margin-top: 2.604vw; */
    }
    .livecont{
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }
    .live__star{
        width: 3.750vw;  
        position: absolute; 
        top: 25%; 
        left: 0;
    }
    .live__images{
        width: 7.292vw;
    }
/* LIVE */
    .stock__text {
        text-shadow: 5px 4px 30px rgb(255, 0, 0), 2px 4px 4px rgba(255, 0, 0,0.2);
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
    .rel__text{
        padding-top: 2.604vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .rel__text img{
        width: 31.250vw;    
    }

    /* RELITEMS */
    .rarItems{
        margin-top: 3vw;
    }
    .rareLeft{
        position: absolute;
        left: 5vw;
        top:40%;
        z-index: 10;
        cursor: pointer;
    }
    .rareRight{
        position: absolute;
        right: 5vw;
        top:40%;
        z-index: 10;
        cursor: pointer;
    }
    .rar__itemssecondrow{
        display: flex;
        justify-content: space-evenly;
    }
    .item{
        padding-top: 2.917vw;
        display: flex;
        flex-direction: column;
        /* border-bottom: 1px solid #F6F6F6; */
        border-radius: 0 0 10px 10px;
        width: 20vw;
        margin-left: auto;
        margin-right: auto;
    }
    
    .item__img{
        width: 15.625vw;  
        margin-left: auto;
        margin-right: auto;  
    }
    .slick-center img{
        width: 18.625vw;     
    }
    .slick-center .item__price{ 
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #ffffff;
        -webkit-text-stroke: 1px #ffffff;
    }
    .slick-center .item1{ 
        border: 3px solid #4392DE;
    }
    .slick-center .item2{ 
        border: 3px solid #9028F6;
    }
    .slick-center .item3{ 
        border: 3px solid #F800F6;
    }
    .slick-center .item4{ 
        border: 3px solid #F5002A;
    }
    .slick-center .item5{ 
        border: 3px solid #F8CB15;
    }
    .item__name{
        padding-top: 1.042vw;
        font-size: 1.354vw;    
        letter-spacing: 2.5%;
    }
    .item__price{
        padding-top: 1.042vw;
        /* font-style: italic; */
        font-size: 1.875vw;
    }
    .item__price1{
        text-shadow: 2px 4px 4px #4392DE;
        color: #4392DE;
    }
    .item__price2{
        text-shadow: 2px 4px 4px #9028F6;
        color: #9028F6;
    }
    .item__price3{
        text-shadow: 2px 4px 4px #F800F6;
        color: #F800F6;
    }
    .item__price4{
        text-shadow: 2px 4px 4px #F5002A;
        color: #F5002A;
    }
    .item__price5{
        text-shadow: 2px 4px 4px #F8CB15;
        color: #F8CB15;
    }
/* CASES */
.cases {
  background: no-repeat url("../assets/img/bg2.png");
  /* background-position: right 500px; */
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
.cases__classic{
    margin-bottom: 9.896vw;
}

.classic__case{
    display: flex;
    flex-direction: column;    
}
.classic__img{
    width: 15.625vw; 
    margin-left: auto;
    margin-right: auto;
}
.sliderClassikCont{
    position: relative;
    margin-top: 4.167vw;
}
.sliderClassik{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
}
.casesLeft{
    position: absolute;
    width: 5.729vw;
    left: 10px;
    top: 30%;
    cursor: pointer;
}
.casesRight{
    position: absolute;
    width: 5.729vw;
    right: 10px;
    top: 30%;
    cursor: pointer;
}

@media screen and (max-width: 480px){
.inner{
    padding-top: 17.19vw;    
}
.live__images{
    width: 13.292vw;
}   
.item{
    margin-top: 2vw;
    /* border-top: 1px solid rgba(0,0,0,0); */
    border-bottom: 1px solid #F6F6F6;
    padding-top: 2vw;
}
.item__img{
    width: 24.625vw;
}
.item__name{
    font-size: 3.354vw;
}
.item__price{
    font-size: 2.875vw;    
}
.classic__img{
    width: 22vw;
}
.cases__desc{
    font-size: 12px;
}
.cases__price{
    font-size: 3.5vw;
}
.cases__popular__content img{
    width: 27vw !important;
}
.cases__popular{
    flex-wrap: wrap;
}
.rel__text img{
    width: 5vw;
}
.stock__text{
    font-size: 5vw;
}
.cases__avatar img{
    width: 5vw !important;
}
}

</style>