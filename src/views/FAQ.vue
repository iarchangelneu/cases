<template>
<a name="FAQ"></a>
    <div class="faq">
    <div class="faq__bg pl__pr">
      <p class="faq__main">Часто задаваемые вопросы</p>
      <div class="faq__collapse">
        <details>
          <summary>
            Что делать, если после пополнения баланса деньги не поступили на
            счет?
          </summary>
          <p class="faq__answer">
            Нет, к сожалению Steam не предоставляет никаких способов для вывода
            средств с их счета.
          </p>
        </details>
        <details>
          <summary>
            Что делать, если предмет не пришел или вы не можете его забрать?
          </summary>
          <p class="faq__answer">
            Нет, к сожалению Steam не предоставляет никаких способов для вывода
            средств с их счета.
          </p>
        </details>
        <details>
          <summary>
            Что делать, если к вам в стим добавился “наш сотрудник” и предлагает
            вам двойной баланс за ваши вещи?
          </summary>
          <p class="faq__answer">
            Нет, к сожалению Steam не предоставляет никаких способов для вывода
            средств с их счета.
          </p>
        </details>
        <details open>
          <summary>Можно ли перевести средства со счета Steam?</summary>
          <p class="faq__answer">
            Нет, к сожалению Steam не предоставляет никаких способов для вывода
            средств с их счета.
          </p>
        </details>
        <details>
          <summary>Как продать или вывести предмет с сайта?</summary>
          <p class="faq__answer">
            Нет, к сожалению Steam не предоставляет никаких способов для вывода
            средств с их счета.
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
  color: #7b5acb;
}
summary ~ * {
  padding: 0 1em 0 1em;
}
summary:focus {
  outline: 0;
  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.3), inset 0 0 2px rgba(0, 0, 0, 0.3);
}
details {
  background: #252331;
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