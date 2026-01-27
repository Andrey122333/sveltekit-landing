<script lang="ts">
  const currentYear = new Date().getFullYear();

  const links = {
    frameworks: [
      { name: 'Next.js', url: 'https://nextjs.org/docs' },
      { name: 'SvelteKit', url: 'https://kit.svelte.dev/docs' },
      { name: 'Nuxt', url: 'https://nuxt.com/docs' },
    ],
    resources: [
      { name: 'Core Web Vitals', url: 'https://web.dev/vitals/' },
      { name: 'Lighthouse', url: 'https://developer.chrome.com/docs/lighthouse/' },
      { name: 'Performance API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Performance_API' },
    ],
  };
</script>

<footer class="footer">
  <div class="container">
    <div class="content">
      <div class="section">
        <h3 class="title">НИР3</h3>
        <p class="description">
          Научное исследование производительности SSR-фреймворков
        </p>
      </div>

      <div class="section">
        <h4 class="heading">Документация фреймворков</h4>
        <ul class="links">
          {#each links.frameworks as link}
            <li>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                class="link"
              >
                {link.name}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <div class="section">
        <h4 class="heading">Ресурсы</h4>
        <ul class="links">
          {#each links.resources as link}
            <li>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                class="link"
              >
                {link.name}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <div class="section">
        <h4 class="heading">Контакты</h4>
        <ul class="links">
          <li>
            <a href="mailto:research@nir3.dev" class="link">
              research@nir3.dev
            </a>
          </li>
          <li>
            <a href="https://github.com/nir3" target="_blank" rel="noopener noreferrer" class="link">
              GitHub
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="bottom">
      <p class="copyright">
        © {currentYear} НИР3. Все права защищены.
      </p>
      <p class="tech">
        Собрано с помощью SvelteKit 2+
      </p>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: var(--color-text);
    color: rgba(255, 255, 255, 0.9);
    padding: var(--spacing-3xl) 0 var(--spacing-xl);
    margin-top: var(--spacing-3xl);
  }

  .content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-xl);
    margin-bottom: var(--spacing-xl);
  }

  .section {
    min-width: 0;
  }

  .title {
    font-size: 1.75rem;
    font-weight: 800;
    margin-bottom: var(--spacing-sm);
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .description {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }

  .heading {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: var(--spacing-md);
    color: white;
  }

  .links {
    list-style: none;
  }

  .links li {
    margin-bottom: var(--spacing-sm);
  }

  .link {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.2s ease;
  }

  .link:hover {
    color: white;
  }

  .link svg {
    flex-shrink: 0;
    opacity: 0.5;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--spacing-md);
    padding-top: var(--spacing-xl);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: var(--spacing-xl);
  }

  .copyright,
  .tech {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);
    margin: 0;
  }

  @media (max-width: 768px) {
    .footer {
      padding: var(--spacing-2xl) 0 var(--spacing-md);
    }
    
    .content {
      grid-template-columns: 1fr;
      gap: var(--spacing-xl);
    }
    
    .bottom {
      flex-direction: column;
      text-align: center;
    }
  }
</style>
