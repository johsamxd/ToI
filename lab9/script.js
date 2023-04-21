const number = document.querySelector("#inputNumb");
const result = document.querySelector("#resultFirstExercise");
function getNumb(arg1) {
  return arg1.toString();
}
number.addEventListener("input", () => {
  result.textContent = getNumb(number.value);
});
//-----------------------------------------------------------------
const age = document.querySelector("#inputAge");
const result1 = document.querySelector("#resultSecondExercise");
function getAge(arg1) {
  let a = Number(arg1) + 1;
  return a.toString();
}
age.addEventListener("input", () => {
  result1.textContent = getAge(age.value);
});
//-----------------------------------------------------------------
const btn = document.querySelector("#send");
const n1 = document.querySelector("#inputNum1");
const n2 = document.querySelector("#inputNum2");
const result2 = document.querySelector("#resultThirdExercise");
function getRemainder(arg1, arg2) {
  let a = Number(arg1) % Number(arg2);
  return a.toString();
}
btn.addEventListener("click", () => {
  result2.textContent = getRemainder(n1.value, n2.value);
});
//-----------------------------------------------------------------
const btn1 = document.querySelector("#send1");
const vozrast = document.querySelector("#inputVozrast");
const result3 = document.querySelector("#resultFourthExercise");
function faceControl(arg1) {
  return Number(arg1) >= 18 ? "Welcome" : "Otkaz";
}
btn1.addEventListener("click", () => {
  result3.textContent = faceControl(vozrast.value);
});
//-----------------------------------------------------------------
const age1 = document.querySelector("#inputAge1");
const result4 = document.querySelector("#resultFifthExercise");
function getNextAge(arg1) {
  let a =
    Number(arg1) === 0 || arg1 === NaN || arg1 === null || arg1 === undefined
      ? 0
      : Number(arg1) + 1;
  return a.toString();
}
age1.addEventListener("input", () => {
  result4.textContent = getNextAge(age1.value);
});
//-----------------------------------------------------------------
const h = document.querySelector("#inputHeight");
const result5 = document.querySelector("#resultSixthExercise");
function canRide(arg1) {
  let a = Number(arg1) >= 140 ? true : false;
  return a.toString();
}
h.addEventListener("input", () => {
  result5.textContent = canRide(h.value);
});
