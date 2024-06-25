function toggleMode() {
  const body = document.querySelector('body');
  const modeText = document.getElementById('mode-text');
  const dayImage = document.getElementById('day-image');

  if (body.classList.contains('night-mode')) {
    body.classList.remove('night-mode');
    modeText.innerText = 'Without you';
    dayImage.style.display = 'block';
    body.classList.add('show-day-text');
    
    
  } else {
    body.classList.add('night-mode');
    modeText.innerText = 'With you';
    dayImage.style.display = 'none';
  }
}

