// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
if (navToggle && navMenu){
  navToggle.addEventListener('click', () => navMenu.classList.toggle('show'));
  // close menu on link click (mobile)
  navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navMenu.classList.remove('show');
  }));
}

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Subscribe form (demo)
function subscribe(e){
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('formMsg');
  if(!email){
    msg.textContent = "Please enter a valid email.";
    return false;
  }
  msg.textContent = "Thanks! We’ll send you our freshest roasts.";
  e.target.reset();
  return false;
}
window.subscribe = subscribe;

// Dark mode toggle (persist in localStorage)
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

const dark = {
  '--bg':'#0f0d0c','--bg-alt':'#171311','--text':'#f2eae5','--muted':'#cdbfb6',
  '--accent':'#d6a77a','--card':'#1f1916','--brand':'#f7f3ef','--btn':'#d6a77a','--btn-text':'#241b17'
};
const light = {
  '--bg':'#faf7f4','--bg-alt':'#fff','--text':'#2a201c','--muted':'#6d5f58',
  '--accent':'#9a6b3d','--card':'#ffffff','--brand':'#2a201c','--btn':'#2a201c','--btn-text':'#ffffff'
};

function applyTheme(t){
  const vars = t === 'light' ? light : dark;
  Object.entries(vars).forEach(([k,v]) => root.style.setProperty(k, v));
  localStorage.setItem('theme', t);
  if(themeToggle) themeToggle.checked = (t === 'light');
}

const saved = localStorage.getItem('theme');
applyTheme(saved || 'dark');

if (themeToggle){
  themeToggle.addEventListener('change', (e) => applyTheme(e.target.checked ? 'light' : 'dark'));
}
``