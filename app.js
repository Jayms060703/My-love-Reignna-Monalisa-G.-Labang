onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);

    // Show the MY LOVE button shortly after flower animations (timings in CSS go up to ~5.5s)
    const showDelay = 5800; // ms - small assumption based on CSS animation delays
    const btn = document.getElementById('myLoveBtn');
    const letter = document.getElementById('letter');
    const closeBtn = document.querySelector('.letter__close');
    const flowers = document.querySelector('.flowers');

    setTimeout(() => {
      if (btn) {
        btn.classList.add('show');
        btn.setAttribute('aria-hidden', 'false');
      }
    }, showDelay);

    if (btn) {
      btn.addEventListener('click', () => {
        // Hide the button and reveal the letter "flowing out"
        btn.classList.remove('show');
        btn.setAttribute('aria-hidden', 'true');
        if (letter) {
          letter.classList.add('show');
          letter.setAttribute('aria-hidden', 'false');
        }
        if (flowers) {
          flowers.classList.add('blurred');
        }
      });
    }

    function closeLetter() {
      if (letter) {
        letter.classList.remove('show');
        letter.setAttribute('aria-hidden', 'true');
      }
      if (flowers) {
        flowers.classList.remove('blurred');
      }
      // bring back the button after closing
      setTimeout(() => {
        if (btn) {
          btn.classList.add('show');
          btn.setAttribute('aria-hidden', 'false');
        }
      }, 600);
    }

    if (closeBtn) closeBtn.addEventListener('click', closeLetter);

    // click outside letter paper closes it
    if (letter) {
      letter.addEventListener('click', (e) => {
        if (e.target === letter) closeLetter();
      });
    }

    // ESC to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && letter && letter.classList.contains('show')) {
        closeLetter();
      }
    });
  };