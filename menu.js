document.getElementById('litanyFear').addEventListener('click', () => {
  chrome.action.setPopup({ popup: 'menu.html' });
  window.location.href = 'litany_fear.html';
});

document.getElementById('litanyVoid').addEventListener('click', () => {
  chrome.action.setPopup({ popup: 'menu.html' });
  window.location.href = 'litany_void.html';
});
