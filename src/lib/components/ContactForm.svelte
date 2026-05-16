<script lang="ts">
  let formData = {
    name: '',
    email: '',
    phone: '',
    guests: '2',
    date: '',
    time: '',
    message: '',
  };

  let errors: Record<string, string> = {};
  let isSubmitting = false;
  let submitStatus: 'idle' | 'success' | 'error' = 'idle';

  function validateForm() {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Поле обязательно для заполнения';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Поле обязательно для заполнения';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Поле обязательно для заполнения';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Сообщение должно содержать минимум 10 символов';
    }

    errors = newErrors;
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(event: Event) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    isSubmitting = true;
    submitStatus = 'idle';

    try {
      // Имитация отправки формы
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Отправка формы:', formData);
      
      submitStatus = 'success';
      formData = { name: '', email: '', phone: '', guests: '2', date: '', time: '', message: '' };
      errors = {};
      
      // Сброс статуса через 3 секунды
      setTimeout(() => submitStatus = 'idle', 3000);
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
      submitStatus = 'error';
    } finally {
      isSubmitting = false;
    }
  }

  function handleChange(field: string) {
    if (errors[field]) {
      errors = { ...errors, [field]: '' };
    }
  }
</script>

<section class="section" id="contact">
  <div class="container">
    <div class="wrapper">
      <div class="header">
        <h2>Свяжитесь с нами</h2>
        <p>
          Есть вопросы по исследованию или предложения по улучшению методологии?
          Мы будем рады вашей обратной связи.
        </p>
      </div>

      <form class="form" on:submit={handleSubmit} novalidate>
        <div class="field">
          <label for="name" class="label">
            Ваше имя <span class="required">*</span>
          </label>
          <input
            id="name"
            type="text"
            bind:value={formData.name}
            on:input={() => handleChange('name')}
            class="input"
            class:input-error={errors.name}
            placeholder="Иван Иванов"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {#if errors.name}
            <span id="name-error" class="error" role="alert">
              {errors.name}
            </span>
          {/if}
        </div>

        <div class="field">
          <label for="email" class="label">
            Электронная почта <span class="required">*</span>
          </label>
          <input
            id="email"
            type="email"
            bind:value={formData.email}
            on:input={() => handleChange('email')}
            class="input"
            class:input-error={errors.email}
            placeholder="ivan@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {#if errors.email}
            <span id="email-error" class="error" role="alert">
              {errors.email}
            </span>
          {/if}
        </div>

        <div class="field">
          <label for="message" class="label">
            Ваше сообщение <span class="required">*</span>
          </label>
          <textarea
            id="message"
            bind:value={formData.message}
            on:input={() => handleChange('message')}
            class="textarea"
            class:input-error={errors.message}
            placeholder="Расскажите, что вас интересует..."
            rows="5"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          ></textarea>
          {#if errors.message}
            <span id="message-error" class="error" role="alert">
              {errors.message}
            </span>
          {/if}
        </div>

        <button
          type="submit"
          class="btn btn-primary submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Отправка...' : 'Отправить'}
        </button>

        {#if submitStatus === 'success'}
          <div class="success-message" role="status">
            Спасибо! Ваше сообщение успешно отправлено.
          </div>
        {/if}

        {#if submitStatus === 'error'}
          <div class="error-message" role="alert">
            Произошла ошибка при отправке. Пожалуйста, попробуйте позже.
          </div>
        {/if}
      </form>
    </div>
  </div>
</section>

<style>
  .wrapper {
    max-width: 700px;
    margin: 0 auto;
  }

  .header {
    text-align: center;
    margin-bottom: var(--spacing-xl);
  }

  .header h2 {
    margin-bottom: var(--spacing-md);
  }

  .header p {
    font-size: 1.125rem;
    color: var(--color-text-light);
  }

  .form {
    background: white;
    padding: var(--spacing-xl);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-lg);
  }

  .field {
    margin-bottom: var(--spacing-lg);
  }

  .label {
    display: block;
    font-weight: 600;
    margin-bottom: var(--spacing-xs);
    color: var(--color-text);
    font-size: 0.95rem;
  }

  .required {
    color: #ef4444;
  }

  .input,
  .textarea {
    width: 100%;
    padding: 0.875rem 1rem;
    font-size: 1rem;
    font-family: var(--font-inter);
    color: var(--color-text);
    background: white;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-md);
    transition: all 0.2s ease;
  }

  .input:focus,
  .textarea:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  .input::placeholder,
  .textarea::placeholder {
    color: var(--color-text-light);
    opacity: 0.6;
  }

  .input-error {
    border-color: #ef4444;
  }

  .input-error:focus {
    border-color: #ef4444;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }

  .textarea {
    resize: vertical;
    min-height: 120px;
  }

  .error {
    display: block;
    margin-top: var(--spacing-xs);
    font-size: 0.875rem;
    color: #ef4444;
  }

  .submit {
    width: 100%;
    margin-top: var(--spacing-md);
    font-size: 1.125rem;
    padding: 1rem 2rem;
  }

  .submit:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }

  .success-message,
  .error-message {
    margin-top: var(--spacing-md);
    padding: var(--spacing-md);
    border-radius: var(--radius-md);
    font-weight: 500;
    text-align: center;
  }

  .success-message {
    background: #d1fae5;
    color: #065f46;
    border: 2px solid #10b981;
  }

  .error-message {
    background: #fee2e2;
    color: #991b1b;
    border: 2px solid #ef4444;
  }

  @media (max-width: 768px) {
    .form {
      padding: var(--spacing-lg);
    }
    
    .header p {
      font-size: 1rem;
    }
  }
</style>
