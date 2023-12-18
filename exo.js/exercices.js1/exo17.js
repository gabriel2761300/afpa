let html = '<ul>';
let nalea = 10;
for(let i = 0;i < nalea;i++) {
   let tmp = Math.floor(Math.random() * 11);
   if(tmp == 10) {
        console.log('Le nombre 10 fait parti du tirage.');
   }
   html = html + '<li>' + tmp + '</li>';
}
html = html + '</ul>';
document.body.innerHTML = html;