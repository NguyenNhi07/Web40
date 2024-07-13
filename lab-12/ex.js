//BÀI 1
console.log("BÀI 1");
function checkStringExist(originalStr, strToCheck) {
  if (originalStr.includes(strToCheck)) {
    return true;
  }
  return false;
}

console.log(checkStringExist("i love you", "you"));
console.log(checkStringExist("i love you", "hate"));

//BÀI 2
console.log("BÀI 2");
function shortenString(str) {
  if (str.length <= 8) {
    return str;
  } else {
    const strTotal = str.slice(0, 8) + "...";
    return strTotal;
  }
}

console.log(shortenString("Xin chào các bạn"));
console.log(shortenString("Hello"));

//BÀI 3
console.log("BÀI 3");
function symmertryStr(newStr) {
  const strtoLower = newStr.toLowerCase().replace(" ", "");
  const a = strtoLower.split("").reverse().join("");
  if (a === strtoLower) {
    return true;
  }
  return false;
}
console.log(symmertryStr("Race car"));

//BÀI 4
console.log("BÀI 4");
function sortNumber(number) {
  const numberToStr = number.toString();
  for (let i = 0; i < numberToStr.length; i++) {
    if ((numberToStr[i] = 0)) {
    }
  }
}

//BÀI 5
console.log("BÀI 5");
function strToLowerCase(myStr) {
  console.log(myStr.replace(" ", "_").toLowerCase());
}
strToLowerCase("XIN CHÀO");
