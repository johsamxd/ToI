const number = document.querySelector("#inputNumb");
const result = document.querySelector("#resultFirstExercise");
function sumArray(arg1) {
  let a = arg1.toString().split(" ");
  let sum = 0;
  a.forEach((el) => {
    sum += Number(el);
  });
  return sum;
}
number.addEventListener("input", () => {
  result.textContent = sumArray(number.value);
});
//-----------------------------------------------------------------
const temper = document.querySelector("#inputTemp");
const result1 = document.querySelector("#resultSecondExercise");
function getAboveZero(arg1) {
  let a = arg1.toString().split(" ");
  let b = a.filter((t) => t >= 0);
  return b.toString();
}
temper.addEventListener("input", () => {
  result1.textContent = getAboveZero(temper.value);
});
//-----------------------------------------------------------------
const pony = document.querySelector("#inputPony");
const result2 = document.querySelector("#resultThirdExercise");
const listPony = [
  "TwilightSparkle",
  "RainbowDash",
  "AppleJack",
  "Rarity",
  "Pinkie Pie",
  "Fluttershy",
];
function getPonies(arg1) {
  return listPony.includes(arg1.toString()) ? arg1.toString() : false;
}
pony.addEventListener("input", () => {
  result2.textContent = getPonies(pony.value);
});
//-----------------------------------------------------------------
const tr = document.querySelector("#inputTr");
const result3 = document.querySelector("#resultFourthExercise");
const listTr = ["0xaea0", "0x8f80", "0xf3ad", "0x17ec"];
function isTxIncluded(arg1) {
  return listTr.includes(arg1.toString());
}
tr.addEventListener("input", () => {
  result3.textContent = isTxIncluded(tr.value);
});
//-----------------------------------------------------------------
const w = document.querySelector("#inputW");
const result4 = document.querySelector("#resultFifthExercise");
function isTxIncluded(arg1) {
  let a = arg1.toString().split(" ");
  let b = [];
  a.forEach((el) => {
    b.push(el.length);
  });
  return b.toString();
}
w.addEventListener("input", () => {
  result4.textContent = isTxIncluded(w.value);
});
//-----------------------------------------------------------------
const w1 = document.querySelector("#inputW1");
const result5 = document.querySelector("#resultSixthExercise");
function getWithSpaces(arg1) {
  let a = arg1.toString().split(" ");
  let l = 0;
  let b = [];
  b.push(a.join(" "));
  a.forEach((el) => {
    l += el.length;
  });
  b.push(l);
  return b.toString();
}
w1.addEventListener("input", () => {
  result5.textContent = getWithSpaces(w1.value);
});
//-----------------------------------------------------------------
const ani = document.querySelector("#inputA");
const result6 = document.querySelector("#resultSeventhExercise");
const anime = [
  {
    name: "Naruto",
    episodes: "700+",
  },
  {
    name: "Hajime no Ippo",
    episodes: 127,
  },
  {
    name: "Samurai X",
    episodes: 95,
  },
  {
    name: "Bleech",
    episodes: 366,
  },
];
function getEpisodes(arg1) {
  let a = anime.find((el) => el.name == arg1.toString());
  if (a) {
    return "Аниме " + a.name + " включает " + a.episodes + " серий";
  } else {
    return "Такого названия нет в списке";
  }
}
ani.addEventListener("input", () => {
  result6.textContent = getEpisodes(ani.value);
});
//-----------------------------------------------------------------
const ch = document.querySelector("#inputCh");
const result7 = document.querySelector("#resultEighthExercise");
const triple = (arg1) => {
  return Number(arg1) * 3;
};
ch.addEventListener("input", () => {
  result7.textContent = triple(ch.value);
});
//-----------------------------------------------------------------
const gl = document.querySelector("#inputGl");
const result8 = document.querySelector("#resultNinthExercise");
const getAvgGlucose = (arg1) => {
  let a = arg1.split(",");
  let sr = 0;
  a.forEach((el) => {
    sr += Number(el);
  });
  sr = sr / a.length;
  return sr.toFixed(1);
};
gl.addEventListener("input", () => {
  result8.textContent = getAvgGlucose(gl.value);
});
//-----------------------------------------------------------------
