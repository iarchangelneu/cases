<template>
  <div class="steam__error">
    <div>
      <p class="steam__title">Произошла непредвиденная ошибка.</p>
      <p class="steam__desc">
        Повторите попытку позже или выберите другой способ авторизации.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
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