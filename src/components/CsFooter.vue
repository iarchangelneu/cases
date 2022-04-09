<template>
    <section class="footer">
        <div class="container">
            <div class="row ak47">
                <img src="@/assets/img/footerAk47.png" alt="">
            </div>
            <div class="row footer__numbersFirst">
                <div class="footer__numbersCont">
                    <span class="footer__number">
                        {{currentlyOpened}}
                    </span>
                    <span class="footer__underNum">
                        Открыто кейсов
                    </span>
                </div>

                <div class="">
                    <img src="../assets/img/header__logo.svg" alt="logo" class="footer__logo">
                </div>

                <div class="footer__numbersCont">
                    <span class="footer__number">
                        {{usersAll}}
                    </span>
                    <span class="footer__underNum">
                        Пользователей
                    </span>
                </div>

                <div class="footer__numbersCont col-12">
                    <span class="footer__number">
                        {{usersOnline}}
                    </span>
                    <span class="footer__underNum">
                       Онлайн
                    </span>
                </div>
            </div>
            
            <div class="footer__nav">
                <the-navbar></the-navbar>
            </div>
            
            <div class="row footer__links">
                <div class="col-6" style="text-align:right">
                    <a href="/terms">Пользовательское соглашение</a>
                </div>
                <div class="col-6">
                    <a href="/privacy">Политика конфиденциальности</a>
                </div>
            </div>


            <div class="adress">
                ТОО “Qazaq case”, г. Алматы, Аксай 2, 39    
            </div>

        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    computed:{
       currentlyOpened(){
           let curDate = new Date();
           return 500000 + Math.floor(((Date.parse(curDate)-Date.parse("2022-04-03T13:51:50.417-07:00"))/60/60/24));
       },
       usersAll(){
           let curDate = new Date();
           return 120000 + Math.floor(((Date.parse(curDate)-Date.parse("2022-04-03T13:51:50.417-07:00"))/60/60/24));
       },
       usersOnline(){
           let curDate = new Date();
           return 5000 + Math.floor(((Date.parse(curDate)-Date.parse("2022-04-03T13:51:50.417-07:00"))/60/60/24));
       } 
    }
}
</script>

<style scoped>
    .footer{
        margin-top: 5.2vw;
        background-color: #202025;
    }
    .ak47{
        justify-content: center;    
    }
    .ak47 img{
        width: 8.854vw;
    }

    /* numbers */
    .footer__numbersFirst{
        color: white;
        align-items: center;
        justify-content: space-around;
        padding-top: 4.688vw;
    }
    .footer__numbersCont{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .footer__numbersCont span{
        text-align: center;
    }
    .footer__number{
        font-size: 3.333vw;
    }
    .footer__underNum{
        font-size: 1.875vw;
    }


    .footer__logo{
        width: 10.260vw;    
    }

    /* NAV */
    .footer__nav{
        margin-top: 5.208vw;
    }
    .navbar{
        justify-content: center;
    }

    /* LINKS */
    .footer__links{
        margin-top: 2.031vw;
    }
    .footer__links a{
        color: #FFFFFF;
        font-style: italic;
        text-decoration: underline;
        font-size: 1.250vw;
    }

    /* ADRESS */
    .adress{
        margin-top: 3.125vw;
        color: #FFFFFF;
        text-align: center;
        font-size: 1.042vw;
    }
    
    @media screen and (max-width: 480px){
    .ak47 img, .footer__logo{
        width: 20vw;
    }       
    .footer__number{
        font-size: 5.3vw;
    }
    .footer__underNum{
        font-size: 2.875vw;
    }
    .footer__links a{
        font-size: 2.25vw;    
    }
    .adress{
        font-size: 2vw;
    }
    }



</style>