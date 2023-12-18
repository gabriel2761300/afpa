let html = 'declaration';
let k = 0;

while(k <= 20) {
   html = html + k + '<br />';
   k = k + 2;
}
document.body.innerHTML = html;