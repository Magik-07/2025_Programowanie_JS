/*
Osławione już funkcje strzałkowe (ang. arrow functions) to krótszy zapis dla funkcji anonimowych, czyli funkcji bez nazwy. W innych językach programowania znane są najczęściej jako funkcje lambda, ale przyjęło się określać je tak a nie inaczej, gdyż nazwa pochodzi od charakterystycznej strzałki => w ich definicji. Aby pokazać, w jaki sposób je definiujemy, */

//zacznijmy od kilku przykładów klasycznych funkcji anonimowych.

const call = function () {
    console.log("Called");
};

const print = function (obj) {
    console.log(obj);
};

const triple = function (value) {
    return value + value + value;
};

const add = function (a, b) {
    return a + b;
};

call(); // Called
print("AAA"); // AAA
console.log(triple(1)); // 3
console.log(triple("B")); // BBB
console.log(add("A", "B")); // AB