/* 
// input

const members = [[81, 13], [63, 25], [62, 7], [64, 3], [33, 14], [59, 0], [81, 16]];

//output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data) {
    const arr = [];
    data.forEach(function(item, i){
        if (item[0] >= 55 && item[1] > 7){
            arr.push("Senior");
        } else {
            arr.push("Open");
        }
    });
    return console.log(arr);
}
openOrSenior(members); */

/* spinWords("Hey fellow warriors") => returns "Hey wollef sroirraw"
spinWords("This is a test") => returns "This is a test"
spinWords("This is another test")=> returns "This is rehtona test" */



/* function spinWords(string) {
    const result = string.split(' ');
    
    result.forEach((element, i) => {
        if (element.length >= 5) {
            result.splice(i, 1, element.split("").reverse().join(""));
        }
    });

    if (result.length > 1) {
        console.log(result.join(' '));
    } else {
        console.log(result.join());
    }

    
}
spinWords("Hey fellow warriors"); */


// arrayDiff([1,2],[1]) == [2]

// function arrayDiff(a, b) {
//     let result = [];

//     result = a.filter(e => !~b.indexOf(e));
//     b.forEach(element => {
//         if (!a.includes(element)) {
//             result.push(element);
//         }
//     });
//     return console.log(result);
// }


// arrayDiff([1, 2, 2], [1, 3]);



// Task 20

// const films = [
//     {
//         name: 'Titanic',
//         rating: 9
//     },
//     {
//         name: 'Die hard 5',
//         rating: 5
//     },
//     {
//         name: 'Matrix',
//         rating: 8
//     },
//     {
//         name: 'Some bad film',
//         rating: 4
//     }
// ];

// function showGoodFilms(arr) {
//     return arr.filter(item => item.rating >= 8);
// }
// console.log(showGoodFilms(films));

// function showListOfFilms(arr) {

//     return arr.map(item => item.name).join(', ');
    
// }
// console.log(showListOfFilms(films));

// function setFilmsIds(arr) {
//     let result = [];
//     arr.forEach(function(item, index) {
//         item.id = index;
//         result.push(item);
//     });
//     return result;
// }

// // console.log(setFilmsIds(films));

// const tranformedArray = setFilmsIds(films);

// function checkFilms(arr) {
//     return arr.every(item => item.id >= 0);
// }

// console.log(checkFilms(tranformedArray));

// task 21

const funds = [
    { amount: -1400 },
    { amount: 2400 },
    { amount: -1000 },
    { amount: 500 },
    { amount: 10400 },
    { amount: -11400 }
];

const getPositiveIncomeAmount = (data) => {
    let calc = 0;
    data.filter(item => item.amount > 0).forEach(item => calc += item.amount);
    return calc;

};

const getTotalIncomeAmount = (data) => {
    let calc = 0;
    if (data.some(item => item.amount < 0)) {
        data.forEach(item => calc += item.amount);
        return calc;
    } else {
        return getPositiveIncomeAmount(data);
    }
};

console.log(getTotalIncomeAmount(funds));