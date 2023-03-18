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

function arrayDiff(a, b) {
    let result = [];

    result = a.filter(e => !~b.indexOf(e));
    b.forEach(element => {
        if (!a.includes(element)) {
            result.push(element);
        }
    });
    return console.log(result);
}


arrayDiff([1, 2, 2], [1, 3]);

