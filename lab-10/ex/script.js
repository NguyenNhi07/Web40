// BÀI 1
console.log("BÀI 1:");
function maxOfThree(a, b, c) {
    return Math.max (a, b, c)
}
const so1 = 3
const so2 = 4
const so3 = 5

const result = maxOfThree (so1, so2, so3)
console.log(`Số lớn nhất trong 3 số ${so1}, ${so2}, ${so3}  là: ${result}`);

//BÀI 2
console.log("BÀI 2:");
function findSeason(month) {
    if (month === 12 || month === 1 || month === 2) {
        return 'Winter';
    } else if (month === 3 || month === 4 || month === 5) {
        return 'Spring';
    } else if (month === 6 || month === 7 || month === 8) {
        return 'Summer';
    } else if (month === 9 || month === 10 || month === 11) {
        return 'Fall';
    } else {
        return 'Invalid month';
    }
}

const month1 = 5
const wether = findSeason(month1)
console.log(`Tháng ${month1} thuộc mùa: ${wether}`);


//BÀI 3
console.log("BÀI 3:");
function isLeafYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return 'Năm nhuận';
    } else {
        return 'Không nhuận';
    }
}

const year1 = 2020;

console.log(`Năm ${year1} có phải là năm nhuận không? ${isLeafYear(year1)}`); 


//BÀI 4
console.log("BÀI 4:");
function isLeafYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function findDayOfMonth(month, year) {
    switch(month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            return 31;
        case 4: case 6: case 9: case 11:
            return 30;
        case 2:
            return isLeafYear(year) ? 29 : 28;
        default:
            return 'Invalid month'; 
    }
}

const month = 2;
const year = 2020;
console.log(`Tháng ${month} năm ${year} có số ngày: ${findDayOfMonth(month, year)}`); 


// BÀI 5
console.log("BÀI 5:");
function calcGrade(point) {
        if (point < 4.0) {
            return 'F';
        } else if (point < 5.5) {
            return 'D';
        } else if (point < 7.0) {
            return 'C';
        } else if (point < 8.5) {
            return 'B';
        } else if (point <= 10) {
            return 'A';
        } else {
            return 'Invalid point'; 
        }
}

const point1 = 3.5;
console.log(`Điểm trung bình ${point1} xếp loại: ${calcGrade(point1)}`);



// BÀI 6
console.log("BÀI 6:");
function calcTaxiFee(km) {
    const phiMoCua = 10000; 
    const gia30KmDau = 11000; 
    const giaTu31Km = 9500; 

    let tongTienCuoc = phiMoCua; 

    if (km <= 30) {
        tongTienCuoc += km * gia30KmDau;
    } else {
        tongTienCuoc += 30 * gia30KmDau + (km - 30) * giaTu31Km;
    }

    return tongTienCuoc;
}

const km1 = 35;
const kmHon = (km1 - 30) *9500
const tienCuoc = calcTaxiFee(km1);
console.log (`Tổng số km đã đi là ${km1}, 30km đầu có giá 11.000đ, ${km1-30} tiếp theo có giá trị ${kmHon}`)
console.log(`Vậy tổng tiền là: `, calcTaxiFee(km1));


// BÀI 7
console.log("BÀI 7:");
function solveEquation(a, b, c) {
    if (a === 0 && b === 0 && c === 0) {
        return Infinity;
    }
    else if (a === 0 && b === 0) {
        return null;
    }
    else if (a === 0) {
        return -c / b;
    }

    const delta = b * b - 4 * a * c;

    // Nếu delta < 0 thì phương trình vô nghiệm
    if (delta < 0) {
        return null;
    }
    // Nếu delta = 0 thì phương trình có nghiệm kép
    else if (delta === 0) {
        const x = -b / (2 * a);
        return x;
    }
    // Nếu delta > 0 thì phương trình có 2 nghiệm phân biệt
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return [x1, x2];
}

const a = 1, b = -3, c = 2;
const ketQua = solveEquation(a, b, c);
console.log(`Nghiệm của phương trình ${a}x^2 + ${b}x + ${c} = 0 là: `, ketQua);