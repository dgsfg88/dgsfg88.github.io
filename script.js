var isEnglish = false;
document.addEventListener("DOMContentLoaded", (event) => {
  	const btn = document.getElementById('toggle-lang');
	
	document.querySelectorAll('.lang-en').forEach(el => {
        el.classList.toggle('hidden_lang', true);
      });

    btn.addEventListener('click', () => {
      isEnglish = !isEnglish;
      document.querySelectorAll('.lang-it').forEach(el => {
        el.classList.toggle('hidden_lang', isEnglish);
      });
      document.querySelectorAll('.lang-en').forEach(el => {
        el.classList.toggle('hidden_lang', !isEnglish);
      });
    });
});
	
