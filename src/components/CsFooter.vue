<template>
  <section class="footer">
    <div class="container-fluid footer__ska">
      <div class="d-flex">
        <div class="footer__navl">
          <img
            src="../assets/img/footer__logo.png"
            alt="logo"
            class="footer__logo"
          />
          <the-navbar class="footer__bar"></the-navbar>
        </div>
        <div class="row footer__numbersFirst">
          <div class="footer__padding">
            <div class="footer__flex">
              <div class="d-flex col-6">
                <img src="@/assets/img/key.svg" alt="" style="width: 4.06vw" />
                <div class="footer__numbersCont">
                  <span class="footer__number">
                    {{ currentlyOpened }}
                  </span>
                  <span class="footer__underNum"> Открыто кейсов </span>
                </div>
              </div>
              <div class="d-flex col-6" style="padding-left: 2.6vw">
                <img
                  src="@/assets/img/peoples.svg"
                  alt=""
                  style="width: 4.38vw"
                />
                <div class="footer__numbersCont">
                  <span class="footer__number">
                    {{ usersAll }}
                  </span>
                  <span class="footer__underNum"> Пользователей </span>
                </div>
              </div>
            </div>
            <div class="heart__flex col-6">
              <img src="@/assets/img/heart.svg" alt="" style="width: 4.38vw" />
              <div class="footer__numbersCont col-12">
                <span class="footer__number">
                  {{ usersOnline }}
                </span>
                <span class="footer__underNum"> Онлайн </span>
              </div>
            </div>
          </div>
          <div>
            <img
              src="@/assets/img/tt.png"
              class="tt"
              alt=""
              style="width: 15.57vw"
            />
          </div>
        </div>
      </div>

      <div class="footer__nav"></div>

      <div class="row footer__links">
        <div class="col-6" style="text-align: right">
          <a href="/terms">Пользовательское соглашение</a>
        </div>
        <div class="col-6">
          <a href="/privacy">Политика конфиденциальности</a>
        </div>
      </div>

      <div class="adress">
        ТОО “Нейтрон”, Республика Казахстан, г.Алматы,<br />
        площадь Республики, дом13, офис 630
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    currentlyOpened() {
      let curDate = new Date();
      return (
        500000 +
        Math.floor(
          (Date.parse(curDate) - Date.parse("2022-04-03T13:51:50.417-07:00")) /
            60 /
            60 /
            24
        )
      );
    },
    usersAll() {
      let curDate = new Date();
      return (
        120000 +
        Math.floor(
          (Date.parse(curDate) - Date.parse("2022-04-03T13:51:50.417-07:00")) /
            60 /
            60 /
            24
        )
      );
    },
    usersOnline() {
      let curDate = new Date();
      return (
        5000 +
        Math.floor(
          (Date.parse(curDate) - Date.parse("2022-04-03T13:51:50.417-07:00")) /
            60 /
            60 /
            24
        )
      );
    },
  },
};
</script>

<style scoped>
.footer__ska{
    padding-top: 7vw;
}
.footer__navl{
    padding-left: 4vw;
    width:5.21vw;
}
.footer__bar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: 0;
}
.footer__padding {
  padding-top: 2.5vw;
  padding-left: 3.65vw;
}
.tt {
  position: absolute;
  bottom: 0;
  right: 0;
}
.heart__flex {
  padding-left: 15vw;
  display: flex;
  padding-bottom: 2.5vw;
}
.footer__flex {
  display: flex;
}
.footer {
  margin-top: 5.2vw;
  background-color: #202025;
}
.ak47 {
  justify-content: center;
}
.ak47 img {
  width: 8.854vw;
}

/* numbers */

.footer__numbersFirst {
  position: relative;
  margin-left: 28.3vw;
  width: 70.21vw;
  background: #1F1F23;
  border-radius: 50px 0px 0px 50px;
  color: white;
  /* align-items: center;
  justify-content: space-around; */
}
.footer__numbersCont {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.footer__numbersCont span {
  text-align: center;
}
.footer__number {
  font-size: 3.333vw;
}
.footer__underNum {
  font-size: 1.875vw;
}

.footer__logo {
  width: 20.31vw;
}

/* NAV */
.footer__nav {
  margin-top: 5.208vw;
}
.navbar {
  justify-content: center;
}

/* LINKS */
.footer__links {
  margin-top: 2.031vw;
}
.footer__links a {
  color: #ffffff;
  font-style: italic;
  text-decoration: underline;
  font-size: 1.25vw;
}

/* ADRESS */
.adress {
  margin-top: 3.125vw;
  color: #ffffff;
  text-align: center;
  font-size: 1.042vw;
}

@media screen and (max-width: 480px) {
  .ak47 img,
  .footer__logo {
    width: 20vw;
  }
  .footer__number {
    font-size: 5.3vw;
  }
  .footer__underNum {
    font-size: 2.875vw;
  }
  .footer__links a {
    font-size: 2.25vw;
  }
  .adress {
    font-size: 2vw;
  }
}
</style>