let html = '<ul>';
let nalea = 10;
for(let i = 0;i < nalea;i++) {
   html = html + '<li>' + Math.floor(Math.random() * 100) + '</li>';
}
html = html + '</ul>';
document.body.innerHTML = html;