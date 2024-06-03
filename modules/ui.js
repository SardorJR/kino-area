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