let html = '';
let nalea = 12;
for(let i = 0;i < nalea;i++) {
   let tmp = Math.floor(Math.random() * 1080);
   html = html + '<img src="https://picsum.photos/id/' + tmp + '/350/350" />';
}
document.body.innerHTML = html;