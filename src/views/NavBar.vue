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
 color:#C62C44;
  text-decoration: underline;

}
@media screen and (max-width: 480px){
.navbar__btn {
  font-size: 3vw;  
}
}
</style>