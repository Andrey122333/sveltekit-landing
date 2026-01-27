<script lang="ts">
  const frameworks = [
    {
      name: 'Next.js Espresso',
      version: 'Двойной шот',
      description: 'Мощный эспрессо для быстрого старта. Идеален для утреннего кодинга',
      features: [
        'Двойная порция арабики',
        'Насыщенный вкус с нотками шоколада',
        'Готовится за 25 секунд',
        'Бодрит как хороший рефакторинг',
      ],
      color: '#000000',
    },
    {
      name: 'SvelteKit Latte',
      version: 'С молочной пенкой',
      description: 'Нежный латте с идеальным балансом. Лёгкий и эффективный',
      features: [
        'Мягкий вкус молока и эспрессо',
        'Минимум калорий, максимум удовольствия',
        'Красивый латте-арт',
        'Быстрая подача как компиляция',
      ],
      color: '#ff3e00',
    },
    {
      name: 'Nuxt Cappuccino',
      version: 'С корицей',
      description: 'Классический капучино с авторским подходом. Гармония вкусов',
      features: [
        'Идеальная пропорция молока и кофе',
        'Посыпка корицей сверху',
        'Модульная подача в три слоя',
        'Универсален как Vue компоненты',
      ],
      color: '#00dc82',
    },
  ];
</script>

<section class="section alt-bg" id="menu">
  <div class="container">
    <h2 class="text-center">Наши фирменные напитки</h2>
    <p class="intro">
      Три авторских кофейных напитка, вдохновлённых современными технологиями
    </p>
    
    <div class="grid grid-3">
      {#each frameworks as framework}
        <article class="card framework-card">
          <div class="icon" style="color: {framework.color}">
            <div class="icon-placeholder"></div>
          </div>
          <h3 class="name">{framework.name}</h3>
          <div class="version">Версия {framework.version}</div>
          <p class="description">{framework.description}</p>
          <ul class="features">
            {#each framework.features as feature}
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7 10l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {feature}
              </li>
            {/each}
          </ul>
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

  .framework-card {
    text-align: center;
    border: 2px solid transparent;
    transition: all 0.3s ease;
  }

  .framework-card:hover {
    border-color: var(--color-primary);
  }

  .icon {
    width: 80px;
    height: 80px;
    margin: 0 auto var(--spacing-md);
  }

  .icon-placeholder {
    width: 100%;
    height: 100%;
    background: currentColor;
    opacity: 0.1;
    border-radius: 50%;
  }

  .name {
    font-size: 1.75rem;
    margin-bottom: var(--spacing-xs);
    color: var(--color-text);
  }

  .version {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: var(--color-bg-alt);
    border-radius: var(--radius-sm);
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-primary);
    margin-bottom: var(--spacing-md);
  }

  .description {
    font-size: 1rem;
    margin-bottom: var(--spacing-md);
    min-height: 3rem;
  }

  .features {
    list-style: none;
    text-align: left;
    margin-top: var(--spacing-md);
  }

  .features li {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-xs);
    margin-bottom: var(--spacing-sm);
    font-size: 0.95rem;
    color: var(--color-text-light);
  }

  .features li svg {
    flex-shrink: 0;
    margin-top: 0.125rem;
    color: var(--color-primary);
  }

  @media (max-width: 768px) {
    .icon {
      width: 60px;
      height: 60px;
    }
    
    .name {
      font-size: 1.5rem;
    }
    
    .features li {
      font-size: 0.9rem;
    }
  }
</style>
