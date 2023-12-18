let tableau = '<table>';
let lignes = prompt("indiqué le nombres de lignes ?");
let colonnes = prompt("indiqué le nombres de colonnes ?");

for(let i = 1;i <= lignes;i++) {
   tableau = tableau + '<tr>';
   for(let k = 1;k <= colonnes;k++) {
      tableau = tableau + '<td>yolo</td>';
   }
   tableau = tableau + '</tr>';
}
tableau = tableau + '</table>';
document.body.innerHTML = tableau;