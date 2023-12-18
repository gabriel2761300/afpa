let html = '<ul>';
let nalea = 10;
let nalea10 = 0;
for(let i = 0;i < nalea;i++) {
   let tmp = Math.floor(Math.random() * 11);
   if(tmp == 10) {
      nalea10++;
   }
   html = html + '<li>' + tmp + '</li>';
}
html = html + '</ul>';
html = html + '<p>Il y a eu ' + nalea10 + ' tirages de 10.</p>'
document.body.innerHTML = html;