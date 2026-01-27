<script lang="ts">
  const features = [
    {
      title: 'Высокоскоростной Wi-Fi',
      description: 'Бесплатный гигабитный интернет для комфортной работы. Стабильное соединение как production сервер',
    },
    {
      title: 'Зёрна премиум класса',
      description: 'Отборная арабика из Эфиопии и Колумбии. Каждая чашка — результат тщательного отбора и обжарки',
    },
    {
      title: 'Комфортное пространство',
      description: 'Удобные рабочие места, розетки у каждого стола и эргономичные кресла для продуктивной работы',
    },
    {
      title: 'Работаем 24/7',
      description: 'Открыты круглосуточно, потому что лучшие идеи приходят в любое время. Ночной режим для совместимости',
    },
    {
      title: 'Тематические мероприятия',
      description: 'Хакатоны, митапы и воркшопы для разработчиков. Networking в неформальной обстановке',
    },
    {
      title: 'Бизнес-ланч',
      description: 'Специальное меню для команд и митингов. Code review становится продуктивнее за чашкой кофе',
    },
  ];
</script>

<section class="section alt-bg" id="features">
  <div class="container">
    <h2 class="text-center">Почему мы?</h2>
    <p class="intro">
      Всё для комфортной работы и отличного отдыха разработчиков
    </p>
    
    <div class="grid grid-3">
      {#each features as feature}
        <article class="card feature-card">
          <div class="icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3 class="title">{feature.title}</h3>
          <p class="description">{feature.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .alt-bg {
    background: var(--color-bg-alt);
  }

  .intro {
    text-align: center;
    font-size: 1.125rem;
    max-width: 700px;
    margin: var(--spacing-md) auto var(--spacing-xl);
    color: var(--color-text-light);
  }

  .feature-card {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .icon {
    width: 64px;
    height: 64px;
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    border-radius: var(--radius-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-bottom: var(--spacing-md);
    transition: transform 0.2s ease;
  }

  .feature-card:hover .icon {
    transform: scale(1.1);
  }

  .icon svg {
    width: 32px;
    height: 32px;
  }

  .title {
    font-size: 1.25rem;
    margin-bottom: var(--spacing-sm);
    color: var(--color-text);
  }

  .description {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--color-text-light);
    margin: 0;
  }

  @media (max-width: 768px) {
    .icon {
      width: 56px;
      height: 56px;
    }
    
    .icon svg {
      width: 28px;
      height: 28px;
    }
    
    .title {
      font-size: 1.1rem;
    }
  }
</style>
