/*
Aby zamienić klasyczne funkcje anonimowe na funkcje strzałkowe, wystarczy, że pozbędziemy się słowa function, a następnie umieścimy => pomiędzy nawiasem zamykającym parametry a tym określającym ciało funkcji. Poniżej przedstawione są wcześniejsze przykłady, ale zapisane już za pomocą nowej notacji.*/


const call = () => {
    console.log("Called");
};

const print = (obj) => {
    console.log(obj);
};

const triple = (value) => {
    return value + value + value;
};

const add = (a, b) => {
    return a + b;
};

call(); // Called
print("AAA"); // AAA
console.log(triple(1)); // 3
console.log(triple("B")); // BBB
console.log(add("A", "B")); // AB

/*w sytuacji, gdy mamy do czynienia z dokładnie jednym parametrem (co w praktyce zdarza się dość często), nawias otaczający ten parametr jest opcjonalny, a tym samym możemy go pominąć.*/

const call = () => {
    console.log("Called");
};

const print = obj => { // Tutaj zniknął nawias
    console.log(obj);
};

const triple = value => { // Tutaj zniknął nawias
    return value + value + value;
};

const add = (a, b) => {
    return a + b;
};

call(); // Called
print("AAA"); // AAA
console.log(triple(1)); // 3
console.log(triple("B")); // BBB
console.log(add("A", "B")); // AB

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
