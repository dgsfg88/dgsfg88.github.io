var isEnglish = false;
document.addEventListener("DOMContentLoaded", (event) => {
  	const btn = document.getElementById('toggle-lang');
	
	ToggleLang();

    btn.addEventListener('click', () => {
		ToggleLang();
    });
});


function ToggleLang()
{
      isEnglish = !isEnglish;
      document.querySelectorAll('.lang-it').forEach(el => {
        el.classList.toggle('hidden_lang', isEnglish);
      });
      document.querySelectorAll('.lang-en').forEach(el => {
        el.classList.toggle('hidden_lang', !isEnglish);
      });
}

	
