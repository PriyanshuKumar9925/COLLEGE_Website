// Chatbot toggle and message handling
  function toggleChat() {
    const bot = document.getElementById('chatbot');
    bot.style.display = bot.style.display === 'flex' ? 'none' : 'flex';
  }

  function sendMsg() {
    const input = document.getElementById('chatInput');
    const body = document.getElementById('chatBody');
    if (input.value.trim() !== '') {
      body.innerHTML += '<br><b>You:</b> ' + input.value;
      body.innerHTML += '<br><b>Bot:</b> Please contact college office for more details.';
      input.value = '';
      body.scrollTop = body.scrollHeight;
    }
  }

  // Login dropdown click toggle
  const loginBtn = document.querySelector('.login-btn');
  const loginMenu = document.querySelector('.login-menu');

  loginBtn.addEventListener('click', () => {
    loginMenu.classList.toggle('show');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.login-dropdown')) {
      loginMenu.classList.remove('show');
    }
  });

  // Image upload functionality
  const imageInput = document.getElementById('imageInput');
  const galleryContainer = document.getElementById('galleryContainer');

  imageInput.addEventListener('change', (e) => {
    const files = Array.from(e.target.files);
    
    files.forEach((file, index) => {
      const reader = new FileReader();
      
      reader.onload = (event) => {
        const img = document.createElement('img');
        img.src = event.target.result;
        img.style.animation = `slideUp 0.6s ease-out forwards`;
        img.style.animationDelay = (index * 0.1) + 's';
        galleryContainer.appendChild(img);
      };
      
      reader.readAsDataURL(file);
    });
    
    // Reset input
    imageInput.value = '';
  });

