function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const fields = {
    name: { selector: '#name', required: true, minLength: 2, message: 'Ingresá tu nombre' },
    email: { selector: '#email', required: true, type: 'email', message: 'Ingresá un email válido' },
    company: { selector: '#company', required: false },
    service: { selector: '#service', required: true, message: 'Seleccioná un servicio' },
    budget: { selector: '#budget', required: true, message: 'Seleccioná un presupuesto estimado' },
    message: { selector: '#message', required: true, minLength: 10, message: 'Contanos sobre tu proyecto (mín. 10 caracteres)' }
  };

  function validateField(name) {
    const field = fields[name];
    const input = document.querySelector(field.selector);
    const errorEl = input.parentElement.querySelector('.form-error');
    let isValid = true;

    const value = input.value.trim();

    if (field.required && !value) {
      isValid = false;
      showError(input, errorEl, field.message);
    } else if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        showError(input, errorEl, 'Ingresá un email válido');
      } else {
        clearError(input, errorEl);
      }
    } else if (field.minLength && value.length > 0 && value.length < field.minLength) {
      isValid = false;
      showError(input, errorEl, field.message);
    } else if (value) {
      clearError(input, errorEl);
    } else if (!field.required && !value) {
      clearError(input, errorEl);
    } else {
      clearError(input, errorEl);
    }

    return isValid;
  }

  function showError(input, errorEl, message) {
    input.classList.add('error');
    if (!errorEl) {
      const el = document.createElement('span');
      el.className = 'form-error';
      el.textContent = message;
      input.parentElement.appendChild(el);
    } else {
      errorEl.textContent = message;
    }
  }

  function clearError(input, errorEl) {
    input.classList.remove('error');
    if (errorEl) errorEl.textContent = '';
  }

  Object.keys(fields).forEach(name => {
    const field = fields[name];
    const input = document.querySelector(field.selector);
    if (input) {
      input.addEventListener('blur', () => validateField(name));
      input.addEventListener('input', () => {
        if (input.classList.contains('error')) validateField(name);
      });
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let allValid = true;
    Object.keys(fields).forEach(name => {
      if (!validateField(name)) allValid = false;
    });

    if (allValid) {
      const formContent = form.innerHTML;
      form.innerHTML = `
        <div class="form-success reveal">
          <div class="form-success-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h3>Mensaje enviado</h3>
          <p>Gracias por contactarnos. Te responderemos en las próximas 48 horas hábiles.</p>
        </div>
      `;
    }
  });
}

document.addEventListener('DOMContentLoaded', initContactForm);
