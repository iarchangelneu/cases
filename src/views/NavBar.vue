<template>
  <div class="navbar">
      <a href="/" :class="['navbar__btn', {'active': currentPage == '/'}]">Главная</a>
      <a href="#FAQ" :class="['navbar__btn']">FAQ</a>
      <a href="/shop" :class="['navbar__btn', {'active': currentPage == '/shop'}]">Магазин</a>
      <a href="/cases" :class="['navbar__btn', {'active': currentPage == '/cases'}]">Кейсы</a>
    </div>
</template>

<script>
export default {
  computed:{
    currentPage(){
      return this.$route.path;
    }
  }
}
</script>

<style scoped>
.navbar__btn {
  margin-right: 2.24vw;
  font-size: 1.56vw;
  font-weight: 600;
  color: #fff;
}
.active {
  padding: 0.26vw 1.56vw 0.26vw 1.56vw;
  background: linear-gradient(235.92deg, #753ef9 14.85%, #9d75ff 87.62%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: 2px solid;
  /* border-image-source: linear-gradient(
    235.92deg,
    #753ef9 14.85%,
    #9d75ff 87.62%
  ); */
  border-color: #753ef9;
  border-radius: 0.52vw;
  border-image-slice: 1;
}
@media screen and (max-width: 480px){
.navbar__btn {
  font-size: 3vw;  
}
}
</style>