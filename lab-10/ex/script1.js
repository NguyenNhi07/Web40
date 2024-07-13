//BÀI 1
console.log("BÀI 1:");
function isNumber(soBatKy) {
    if (soBatKy % 3 == 0 && soBatKy % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (soBatKy % 3 == 0) { 
        console.log("Fizz");
    }
    else {
        console.log("Buzz");
    }
}

const autoNumber = 20;
console.log(isNumber(autoNumber));

//BÀI 2
console.log("BÀI 2:");
function giaiPhuongTrinhBacNhat(a, b) {
    if (a === 0) {
        if (b === 0) {
            return 'Phương trình có vô số nghiệm';
        } else {
            return 'Phương trình vô nghiệm';
        }
    } else {
        const x = -b / a;
        return `Nghiệm của phương trình là x = ${x}`;
    }
}

const a1 = 2, b1 = 3;
console.log(`Phương trình ${a1}x + ${b1} = 0: ${giaiPhuongTrinhBacNhat(a1, b1)}`); 


//BÀI 3
console.log("BÀI 3:");
function giaiPhuongTrinhBac2(a, b, c) {
    const delta = b * b - 4 * a * c;

    if (delta < 0) {
        return 'Phương trình vô nghiệm';
    }
    else if (delta === 0) {
        const x = -b / (2 * a);
        return `Phương trình có nghiệm kép x1 = x2 = ${x}`;
    }
    else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return `Phương trình có 2 nghiệm phân biệt x1 = ${x1}, x2 = ${x2}`;
    }
}

const x = 1, y = -3, z = 2;
console.log(`Phương trình ${x}x^2 + ${y}x + ${z} = 0: ${giaiPhuongTrinhBac2(x, y, z)}`); // Phương trình có 2 nghiệm phân biệt x1 = 2, x2 = 1


//BÀI 4
console.log("BÀI 4:");
function BMI (width, height) {
    return width / height;
}

const myWidth = 43;
const myHeight = 1.5;
console.log(`Chỉ số BMI của tôi là: `, BMI(myWidth, myHeight));

//BÀI 5
console.log("BÀI 5:");
function doiDoC(doC) {
    return (doC * 9 / 5) + 32;
}

const myDoC = 43;
console.log(`${myDoC} đổi sang độ F là : `, doiDoC(myDoC));
