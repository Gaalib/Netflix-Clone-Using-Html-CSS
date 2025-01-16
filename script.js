document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const plus = button.querySelector('.plus');
  
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        plus.style.transform = 'rotate(0deg)';
      } else {
        document.querySelectorAll('.faq-answer').forEach(item => item.style.maxHeight = null);
        document.querySelectorAll('.plus').forEach(item => item.style.transform = 'rotate(0deg)');
        
        answer.style.maxHeight = answer.scrollHeight + 'px';
        plus.style.transform = 'rotate(45deg)';
      }
    });
  });
  