let a;
let b;
reponse=prompt("donner la valeur de a");
a= parseInt(reponse);
reponse=prompt("donner la valeur de b");
b=parseInt(reponse);

console.log (a);
console.log (b);

function pgcd(a,b){
    a=Math.abs(a);
    b=Math.abs(b);
    if(b>a){
        var tmp =a;
        a=b;
        b=tmp;
    }
    while(true){
        if(b == 0) return a;
        a %=b;
        if(a == 0) return b;
        b %=a;
    }
}

console.log(pgcd(a,b));
//2eme facon davoir le pgcd
function pgcd(a, b) {
    if (b) {
        return pgcd(b, a % b);
    } else {
        return Math.abs(a);
    }
}

console.log(pgcd(a,b));