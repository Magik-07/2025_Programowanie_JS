/*Po drugie w sytuacji, gdy w ciele funkcji znajduje się tylko jedno wyrażenie1, możemy pominąć nawiasy klamrowe otaczające ciało. Nie używamy także słowa return, a mimo to wynik tego wyrażenia i tak zostanie zwrócony.
* **************************************************************************************************/
const call = () => console.log("Called");
// Zniknął nawias klamrowy

const print = obj => console.log(obj);
// Zniknął nawias klamrowy

const triple = value => value + value + value;
// Zniknął nawias oraz return

const add = (a, b) => a + b;
// Zniknął nawias oraz return

call(); // Called
print("AAA"); // AAA
console.log(triple(1)); // 3
console.log(triple("B")); // BBB
console.log(add("A", "B")); // AB


// Źródło: https://kt.academy/pl/article/js-funkcje-strzalkowe