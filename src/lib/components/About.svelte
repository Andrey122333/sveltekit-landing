<section class="section" id="about">
  <div class="container">
    <div class="content">
      <h2 class="text-center">О нашем кафе</h2>
      <div class="text">
        <p>
          <strong>«Три Фреймворка»</strong> — это не просто кафе, это пространство, где
          технологии встречаются с гастрономией. Мы создали уникальную концепцию,
          вдохновлённую тремя легендарными веб-фреймворками: Next.js, SvelteKit и Nuxt.
          Каждый напиток в нашем меню — это дань уважения современным технологиям.
        </p>
        <p>
          Наше кафе — место встречи разработчиков, дизайнеров и всех, кто ценит качество
          и инновации. Здесь вы найдёте не только отличный кофе, но и комфортное
          пространство для работы с <strong>высокоскоростным Wi-Fi</strong>, удобными
          рабочими местами и атмосферой креативности.
        </p>
        <p>
          Мы тщательно подбираем зёрна, экспериментируем с рецептами и создаём напитки,
          которые заряжают энергией так же, как хорошо написанный код. Приходите, чтобы
          попробовать наши фирменные напитки и стать частью сообщества технологических
          энтузиастов!
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  .content {
    max-width: 800px;
    margin: 0 auto;
  }

  .text {
    margin-top: var(--spacing-xl);
  }

  .text p {
    font-size: 1.125rem;
    line-height: 1.8;
    margin-bottom: var(--spacing-md);
    color: var(--color-text-light);
  }

  .text :global(strong) {
    color: var(--color-primary);
    font-weight: 600;
  }

  @media (max-width: 768px) {
    .text p {
      font-size: 1rem;
    }
  }
</style>
