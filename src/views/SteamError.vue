<template>
  <div class="steam__error">
    <div>
      <p class="steam__title">{{title}}</p>
      <p class="steam__desc">
        {{errorMessege}}  
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title: 'Идёт авторизация...',
      errorMessege: ''
    }
  },
  mounted(){
    let urlParams = new URLSearchParams(window.location.search);
    let test = urlParams.get('openid.claimed_id')
    axios({
      method: 'get',
      url: `https://bestcases.kz/api/get_user_openid/${test.slice(37)}`,
    })
      .then((response) => {
        console.log(response.data.name)
        if(response.data.name){
          localStorage.setItem("userName", response.data.name);
          localStorage.setItem("userLoged", true);
          this.title = 'Авторизация прошла успешно!'
          this.errorMessege = 'Перенаправляем на страницу профиля'
          window.location = "/account"
        }
        else{
          this.title = 'Произошла непредвиденная ошибка.'
          this.errorMessege = 'Повторите попытку позже или выберите другой способ авторизации.'
        }
        console.log(response)
      })
      .catch((error) => {
        this.title = 'Произошла непредвиденная ошибка.'
        this.errorMessege = 'Повторите попытку позже или выберите другой способ авторизации.'
        console.error(error);
      })
  }
};
</script>

<style>
.steam__desc{
    color: #fff;
    font-size: 2vw;
    text-align: center;
}
.steam__title {
  color: #fff;
  font-size: 4vw;
}
.steam__error {
    padding-top:8vw;
  display: flex;
  justify-content: center;
}
@media screen and (max-width: 480px){
    .steam__error {
    padding-top: 58vw;
    padding-bottom: 84vw;
}
}
</style>