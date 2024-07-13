function checkMark(mark) {
    if (mark >= 85) {
        console.log('A');
    }
    else if (mark >= 70 && mark <= 85) {
        console.log('B');
    }
    else if (mark >= 40 && mark < 70) {
        console.log('C');
    }
    else {
        console.log('D');
    }
}

// checkMark(50)
// checkMark(90)
// checkMark(30)
// checkMark(70)
// checkMark(85)


// function isEven(n) {
//     if (n % 2 == 0) { 
//         console.log(`${n} là số chẵn`);
//     }
//     else {
//         console.log(`${n} là số lẻ`);
//     }
// }

// isEven(85) 
// isEven(90) 

// function isDevice3n5(n) {
//     if (n % 3 == 0 && n % 5 == 0) {
//         console.log(`${n} chia hết cho cả 3 và 5`);
//     } else {
//         console.log(`${n} không chia hết cho cả 3 và 5`);
//     }
// }

// isDevice3n5(15)

function isEqual(a, b, c) {
    if (c == a + b) {
        console.log(`${c} bằng ${a} + ${b}`);
    } else {
        console.log(`${c} không bằng ${a} + ${b}`);
    }
}

isEqual (2, 3, 5)











