<script lang="ts">
  const metrics = [
    {
      name: 'Кофе',
      fullName: 'Эспрессо, латте, капучино',
      target: '350-450₽',
      description: 'Классические кофейные напитки на основе отборной арабики',
    },
    {
      name: 'Десерты',
      fullName: 'Торты, чизкейки, круассаны',
      target: '250-550₽',
      description: 'Свежая выпечка и авторские десерты от нашего шеф-кондитера',
    },
    {
      name: 'Завтраки',
      fullName: 'С 8:00 до 12:00',
      target: '450-750₽',
      description: 'Сытные завтраки для энергичного старта рабочего дня',
    },
    {
      name: 'Обеды',
      fullName: 'С 12:00 до 16:00',
      target: '550-850₽',
      description: 'Бизнес-ланчи и комплексные обеды для команд разработчиков',
    },
  ];

  const infrastructure = [
    'Профессиональное оборудование La Marzocco',
    'Зёрна свежей обжарки каждую неделю',
    'Фильтрованная вода для идеального вкуса',
    'Альтернативные виды молока (овсяное, соевое)',
    'Система лояльности для постоянных гостей',
    'Доставка кофе в офис',
  ];
</script>

<section class="section" id="methodology">
  <div class="container">
    <h2 class="text-center">Меню и атмосфера</h2>
    <p class="intro">
      Продуманное меню и комфортная атмосфера для работы и отдыха
    </p>

    <div class="content">
      <div class="metrics-section">
        <h3>Основные категории меню</h3>
        <div class="grid grid-2">
          {#each metrics as metric}
            <div class="metric-card">
              <div class="metric-header">
                <span class="metric-name">{metric.name}</span>
                <span class="metric-target">{metric.target}</span>
              </div>
              <div class="metric-full">{metric.fullName}</div>
              <p class="metric-desc">{metric.description}</p>
            </div>
          {/each}
        </div>
      </div>

      <div class="infrastructure-section">
        <h3>Что делает нас особенными</h3>
        <ul class="infrastructure-list">
          {#each infrastructure as item}
            <li>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              {item}
            </li>
          {/each}
        </ul>
      </div>

      <div class="process-section">
        <h3>Как мы готовим</h3>
        <ol class="process-list">
          <li>
            <strong>Выбор зёрен:</strong> только отборная арабика из лучших регионов мира
          </li>
          <li>
            <strong>Обжарка:</strong> средняя обжарка для раскрытия всех нот и ароматов
          </li>
          <li>
            <strong>Помол:</strong> свежий помол перед каждым приготовлением для максимального вкуса
          </li>
          <li>
            <strong>Экстракция:</strong> точная температура и давление для идеального эспрессо
          </li>
          <li>
            <strong>Подача:</strong> красивая презентация и внимание к деталям в каждой чашке
          </li>
        </ol>
      </div>
    </div>
  </div>
</section>

<style>
  .intro {
    text-align: center;
    font-size: 1.125rem;
    max-width: 700px;
    margin: var(--spacing-md) auto var(--spacing-xl);
    color: var(--color-text-light);
  }

  .content {
    max-width: 1000px;
    margin: 0 auto;
  }

  .metrics-section,
  .infrastructure-section,
  .process-section {
    margin-bottom: var(--spacing-3xl);
  }

  .metrics-section h3,
  .infrastructure-section h3,
  .process-section h3 {
    text-align: center;
    margin-bottom: var(--spacing-xl);
    color: var(--color-primary);
  }

  .metric-card {
    background: white;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--spacing-lg);
    transition: all 0.2s ease;
  }

  .metric-card:hover {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-md);
  }

  .metric-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacing-sm);
  }

  .metric-name {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--color-primary);
    font-family: var(--font-montserrat);
  }

  .metric-target {
    background: var(--color-bg-alt);
    padding: 0.25rem 0.75rem;
    border-radius: var(--radius-sm);
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-primary);
  }

  .metric-full {
    font-weight: 600;
    margin-bottom: var(--spacing-xs);
    color: var(--color-text);
  }

  .metric-desc {
    font-size: 0.95rem;
    color: var(--color-text-light);
    margin: 0;
  }

  .infrastructure-list {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--spacing-md);
    max-width: 900px;
    margin: 0 auto;
  }

  .infrastructure-list li {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-md);
    background: white;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    font-size: 1rem;
    color: var(--color-text);
    transition: all 0.2s ease;
  }

  .infrastructure-list li:hover {
    box-shadow: var(--shadow-md);
    transform: translateX(4px);
  }

  .infrastructure-list li svg {
    flex-shrink: 0;
    color: var(--color-primary);
  }

  .process-list {
    list-style: none;
    counter-reset: step-counter;
    max-width: 800px;
    margin: 0 auto;
  }

  .process-list li {
    counter-increment: step-counter;
    position: relative;
    padding-left: 4rem;
    margin-bottom: var(--spacing-lg);
    font-size: 1.05rem;
    line-height: 1.7;
    color: var(--color-text-light);
  }

  .process-list li::before {
    content: counter(step-counter);
    position: absolute;
    left: 0;
    top: 0;
    width: 2.5rem;
    height: 2.5rem;
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.25rem;
    font-family: var(--font-montserrat);
  }

  .process-list li :global(strong) {
    color: var(--color-text);
    font-weight: 600;
  }

  @media (max-width: 768px) {
    .infrastructure-list {
      grid-template-columns: 1fr;
    }
    
    .process-list li {
      padding-left: 3.5rem;
      font-size: 1rem;
    }
    
    .process-list li::before {
      width: 2rem;
      height: 2rem;
      font-size: 1rem;
    }
  }
</style>
