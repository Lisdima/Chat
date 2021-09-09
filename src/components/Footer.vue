<template>
  <v-footer id="footer">
    <div class="container__responsive footer__container">
      <div class="footer__item">
        <div class="footer__copyright">Copyright &#169; 2020 MyStartup</div>
        <div class="footer__copyright">Все права защищены.</div>
      </div>
      <div class="footer__item">
        <ul class="footer__menu">
          <li><a href="#">Главная</a></li>
          <li><a href="#">Наша миссия</a></li>
          <li><a href="#">Наша команда</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
        <div class="footer__socials">
          <a href="#"><i class="icon icon-vk"></i></a>
          <a href="#"><i class="icon icon-instagram"></i></a>
          <a href="#"><i class="icon icon-facebook"></i></a>
          <a href="#"><i class="icon icon-twitter"></i></a>
          <a href="#"><i class="icon icon-telegram"></i></a>
        </div>
      </div>
      <ul class="footer__item _mobile footer__menu">
        <li><a href="#">Главная</a></li>
        <li><a href="#">Наша миссия</a></li>
        <li><a href="#">Наша команда</a></li>
        <li><a href="#">Контакты</a></li>
      </ul>
      <div class="footer__item">
        <a href="#" class="radius-button support-button dotted">Поддержка</a>
        <a href="#" class="footer__link">Пользовательское соглашение</a>
        <a href="#" class="footer__link">Политика конфиденциальности</a>
      </div>
      <div class="footer__item _mobile">
        <div class="footer__copyright _mobile">
          Copyright &#169; 2020 Bitswap.
        </div>
        <div class="footer__copyright _mobile">Все права защищены.</div>
      </div>
    </div>
  </v-footer>
</template>
<style lang="scss">
$mediumLaptop: 1199px;
$ipadPro: 1023px;
$mini: 599px;

#footer {
  padding: 76px 0;
  background: #131722;
  color: #fff;
  display: block;
  @media (max-width: $mini) {
    padding: 30px 0;
  }
  .container__responsive {
    max-width: none;
    padding: 0 76px;
    margin: 0 auto;
    @media (max-width: $mediumLaptop) {
      padding: 0 20px;
    }
  }
  .footer__container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-gap: 40px 0;
    align-items: center;
    @media (max-width: $mediumLaptop) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: $mini) {
      align-items: stretch;
      grid-gap: 40px 20px;
    }
    ._mobile {
      display: none;
      @media (max-width: $mini) {
        display: block;
      }
    }
  }

  .footer__logo {
    margin-bottom: 60px;
    height: 40px;
  }

  .footer__copyright {
    opacity: 0.5;
    margin-bottom: 30px;
    font-size: 0.85rem;
    @media (max-width: $ipadPro) {
      margin-bottom: 10px;
    }
    @media (max-width: $mini) {
      display: none;
      margin-bottom: 0px;
    }
  }

  .footer__copyright:last-child {
    margin-bottom: 0;
  }

  .footer__menu {
    display: flex;
    font-weight: 400;
    margin-bottom: 80px;
    @media (max-width: $mini) {
      display: none;
      margin-bottom: 0px;
    }
    .v-application ul,
    .v-application ol {
      padding: 0px;
    }
  }

  .footer__menu a {
    margin: 0 15px;
    color: #fff;
    text-decoration: none;
    @media (max-width: $mini) {
      margin: 0;
      display: block;
      margin-bottom: 12px;
    }
  }
  .footer__menu li {
    list-style: none;
  }

  .footer__socials {
    display: flex;
    justify-content: center;
    @media (max-width: $mini) {
      justify-content: space-between;
    }
  }

  .footer__socials a {
    margin: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 1px solid transparent;
    transition: none;
    font-size: 24px;
    -o-border-image: linear-gradient(90deg, #583f2b 0%, #e4b273 100%);
    border-image: linear-gradient(90deg, #583f2b 0%, #e4b273 100%);
    border-image-slice: 1;
    @media (max-width: $mini) {
      margin: 0;
    }
  }

  .footer__socials a .icon::before {
    background: linear-gradient(90deg, #583f2b 0%, #e4b273 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #583f2b;
  }

  .footer__socials a:hover {
    -o-border-image: linear-gradient(90deg, #8b6444 0%, #f0d5b3 100%);
    border-image: linear-gradient(90deg, #8b6444 0%, #f0d5b3 100%);
    border-image-slice: 1;
  }

  .footer__socials a:hover .icon::before {
    background: linear-gradient(90deg, #8b6444 0%, #f0d5b3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #8b6444;
  }

  .footer__link {
    display: block;
    color: #fff;
    margin-bottom: 30px;
    text-decoration: underline;
    font-size: 0.85rem;
    @media (max-width: $ipadPro) {
      margin-bottom: 10px;
    }
    @media (max-width: $mini) {
      margin-bottom: 12px;
    }
  }

  .footer__link:last-child {
    margin-bottom: 0;
  }
  .footer__item ul {
    padding: 0;
  }
  .footer__item:first-child {
    @media (max-width: $mediumLaptop) {
      grid-row: 2;
    }
    @media (max-width: $mini) {
      grid-row: 1;
      grid-column: 1/3;
      justify-self: center;
    }
  }
  .footer__item:nth-child(2) {
    justify-self: center;
    @media (max-width: $mediumLaptop) {
      grid-column: 1/3;
    }
    @media (max-width: $mini) {
      grid-row: 3;
      justify-self: stretch;
    }
  }
  .footer__item a:hover {
    color: #e4b273;
  }
  .footer__item .dotted:hover {
    color: #fff;
    border: none;
    background: #1ab4ed;
    background: linear-gradient(90deg, #1ab4ed 0%, #0956c6 100%);
  }
  .footer__item:nth-child(3) {
    @media (max-width: $mini) {
      grid-row: 2;
    }
  }

  .footer__item:nth-child(4) {
    justify-self: end;
    display: flex;
    align-items: flex-end;
    text-align: right;
    flex-direction: column;
    @media (max-width: $mini) {
      align-items: flex-start;
      text-align: left;
    }
  }
  .footer__item:last-child {
    @media (max-width: $mini) {
      grid-row: 4;
      text-align: center;
      grid-column: 1/3;
      justify-self: stretch;
    }
  }
}
</style>
