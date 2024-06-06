export function createHeader(place){
    place.innerHTML+=`
    <div class="logo">
    <img src="/img/Логотип.png" alt="">
    <img src="/img/ддд.png" alt="">
  </div>
  <div class="center">
    <a href="#" >Афиша</a>
    <a href="#"> Медиа</a>
    <a href="#popular_box"> Фильмы</a>
    <a href="#elem2">Актёры</a>
    <a href="#new_post">Новости</a>
    <a href="#">Подборки</a>
    <a href="#"> Категории</a>
  </div>
  <div class="right">
    <button class="search">
      <img src="/img/search.png" alt="">
    </button>
    <button class="signin">Войти</button>
  </div>
    `
}

export function createFooter(place){
  place.innerHTML+=`
  <img src="/public/img/Логотип (1).png" alt="">
        <h2>Подпишитесь на E-mail рассылку</h2>
        <h3>Если хотиет быть в курсе последних новостей и новинок кино - заполните форму ниже и оформите бесплатную E-mail рассылку!</h3>
        <div class="inputs">
          <input type="search" placeholder="Введите свой E-mail адрес">
          <button>Подписаться</button>
        </div>
        <div class="switch">
          <input type="checkbox">
          <span>Соглашаюсь на условия <a href="#">политики конфиденциальности</a></span>
        </div>
  `
}