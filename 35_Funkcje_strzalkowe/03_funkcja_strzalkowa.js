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

