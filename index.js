const cats= ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){cats.push("Ralph")};
destructivelyAppendCat("Ralph");
console.log(cats);

function destructivelyPrependCat(){cats.unshift("Bob")};
destructivelyPrependCat("Bob");
console.log(cats);

function destructivelyRemoveLastCat(){cats.pop()}
destructivelyRemoveLastCat();
console.log(cats);

function destructivelyRemoveFirstCat(){cats.shift()}
destructivelyRemoveFirstCat();
console.log(cats);

function appendCat(){const secondCat=[...cats,"Broom"];
return secondCat;
}appendCat("Broom");


function prependCat(){const thirdCat=["Arnold", ...cats];
return thirdCat;
}prependCat("Arnold");

function removeLastCat(){const fourthCat=cats.slice(0,-1);
return fourthCat;}


function removeFirstCat(){const fifthCat=cats.slice(1);
return fifthCat;}


