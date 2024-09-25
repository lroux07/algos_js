// // let nbr = prompt('Entre un chiffre');

// function calcul(nbr) {
//     let depart = 1;

//     for (let i = 1; i <= nbr; i++) {
//         depart *= i;
//     }
    
//     let result = depart;

//     return result;
// }

// // console.log(calcul(nbr));

// let y = calcul(50) / (calcul(5) * calcul(50 - 5))
// let x = calcul(12) / (calcul(2) * calcul(12 - 2))
// console.log(y * x)


// ------------------------------------------------


// let demande = parseInt(prompt('Entre le prix d\'un article'));

// let euros10 = 0;
// let euros5 = 0;
// let euros1 = 0;

// let i = 0;
// while (demande > 0) {
//     i += demande
//     demande = parseInt(prompt('Entre le prix d\'un article'));
// }
// alert('Tu dois: ' + i + '€');

// let donne = prompt('Tu me donne combien ?');

// if (donne >= i) {
//     let devoir = donne - i;

//     while (devoir > 0) {
//         if (devoir >= 10) {
//             euros10++;
//             devoir -= 10
//         } else if (devoir >= 5) {
//             euros5++;
//             devoir -= 5
//         } else if (devoir >= 1) {
//             euros1++;
//             devoir -= 1
//         }
//     }
//     alert('Je donne: ' + euros10 + ' de billets de 10');
//     alert('Je donne: ' + euros5 + ' de billets de 5');
//     alert('Je donne: ' + euros1 + ' de pieces de 1');
// }


// ------------------------------------------------


// let tab1 = [4, 8, 7, 9, 1, 5, 4, 6];
// let tab2 = [7, 6, 5, 2, 1, 3, 7, 4];
// let result = [];

// function calcul(tab1, tab2, result) {
//     for (let i = 0; i < tab1.length; i++) {
//         result.push(tab1[i] + tab2[i]);
//     }

//     return result;
// }
// console.log(calcul(tab1, tab2, result));


// ------------------------------------------------


// let tab1 = [4, 8, 7, 12];
// let tab2 = [3, 2];
// let result

// for (let i = 0; i < tab2.length; i++) {
//     for (let j = 0; j < tab1.length; j++) {
//         result += tab2[i] * tab1[j];
//     }
// }
// console.log(result);


// ------------------------------------------------


let notes = prompt('Entre une note');
let moyenne = [];
let result;

while (notes >= 0) {
    moyenne.push(notes);
    notes = parseInt(prompt('Entre une note'));
}
alert(moyenne);

let calculMoyenne = 0

for (let i = 0; i < moyenne.length; i++) {
    calculMoyenne += parseInt(moyenne[i])
}
result = calculMoyenne / moyenne.length

alert(result);