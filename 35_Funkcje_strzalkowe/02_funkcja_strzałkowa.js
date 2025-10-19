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


