<template>
<a name="FAQ"></a>
    <div class="faq">
    <div class="faq__bg pl__pr">
      <p class="faq__main">Часто задаваемые вопросы</p>
      <div class="faq__collapse">
        <details>
          <summary>
            У меня есть деньги на Steam аккаунте, а тут они не отображаются. Почему?
          </summary>
          <p class="faq__answer">
            Деньги Steam не действуют на этом сайте. Пополнять аккаунт необходимо отдельно
          </p>
        </details>
        <details>
          <summary>
            Пополнил счет, а деньги не пришли. Что делать?
          </summary>
          <p class="faq__answer">
            Деньги могут прийти не сразу - подождите 1 час. Если не пришли в течение часа - создайте запрос с соответствующей пометкой в тех.поддержку и впишите туда подробные данные платежа, которые указаны в квитанции
          </p>
        </details>
        <details>
          <summary>
            Как пополнить баланс?
          </summary>
          <p class="faq__answer">
            Нажмите на кнопку "Пополнить" в правом верхнем углу страницы и в открывшемся окне выберите удобный для Вас способ оплаты, подтвердите Ваше согласие с правилами нашей системы, введите сумму пополнения и завершите платеж
          </p>
        </details>
        <details open>
          <summary>Как открыть кейс, чтобы выпал желаемый предмет?</summary>
          <p class="faq__answer">
            Нажмите на понравившийся кейс на странице кейсов.  Далее укажите количество кейсов, которое хотите открыть и нажмите “Открыть кейс”. Игра начинается, запускается игровой барабан с различными скинами CSGO, которые можно получить из данного кейса. Через несколько секунд он останавливается, и только от Вашей удачи зависит, какой именно скин Вы получите!
          </p>
        </details>
        <details>
          <summary>Что делать если выдает ошибку “Ваш инвентарь скрыт”?</summary>
          <p class="faq__answer">
            Зайдите сюда и сделайте свой профиль и инвентарь видимыми для всех https://steamcommunity.com/id/me/edit/settings/. Потом попробуйте вывести предмет
          </p>
        </details>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.faq__answer {
  font-weight: 400;
  font-size: 1.56vw;
  color: #fff;
}
.faq {
  margin-top: 5vw;
  margin-bottom:10.78vw;
}
.faq__main {
  font-weight: 800;
  font-size: 2.29vw;
  letter-spacing: 0.025em;
  color: #ffffff;
  text-align: center;
}
.pl__pr {
  margin-left: 2.86vw;
  margin-right: 2.86vw;
}
summary::-webkit-details-marker {
  display: none;
}
summary::-moz-list-bullet {
  list-style-type: none;
}
summary::marker {
  display: none;
}
summary {
  display: inline-block;
  padding: 0.3em 0.5em 0.3em 1.09vw;
  font-weight: 400;
  font-size: 1.56vw;
  cursor: pointer;
  color: #fff;
}
summary:before {
  content: "+";
  margin-right: 0.3em;
}
details[open] > summary:before {
  content: "–";
}
details[open] > summary {
  color: #F5002A;
}
summary ~ * {
  padding: 0 1em 0 1em;
}
summary:focus {
  outline: 0;
  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.3), inset 0 0 2px rgba(0, 0, 0, 0.3);
}
details {
  background: #281F27;
  border-radius: 0.78vw;
  display: block;
  margin-bottom: 1.56vw;
  border: 0;
  outline: 0;
}
@media screen and (max-width: 480px){
  .faq__main{
    font-size: 3.5vw;
  }
  summary, .faq__answer{
    font-size:2.5vw;
  }
}
</style>