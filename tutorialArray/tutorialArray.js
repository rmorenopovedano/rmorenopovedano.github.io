window.addEventListener("load", function(){
  document.getElementById("pop").addEventListener("click", function(){
  popAndpush();
  });
  document.getElementById("shift").addEventListener("click", function(){
  shiftAndunshit();
  });
  document.getElementById("iterating").addEventListener("click", function(){
  iterating();
  });
  document.getElementById("join").addEventListener("click", function(){
  joinAndsplit();
  });
  document.getElementById("array").addEventListener("click", function(){
  arrayIsobject();
  });
  document.getElementById("splice").addEventListener("click", function(){
  Splice();
  });
  document.getElementById("sort").addEventListener("click", function(){
  Sort();
  });
  document.getElementById("newArray").addEventListener("click", function(){
  newArray();
  });
});
function popAndpush(){
  //Create an array styles with elements “Jazz”, “Blues”.
  var array=["Jazz", "Blues"];
  //Append a value “Rock’n’Roll”
  array.push("Rock'n'Roll");
  console.log(array);
  //Replace the second value from tail by “Classic”. The array should become “Jazz”,”Classic”,”Rock’n’Roll”. The code should work for any array length.
  array[array.length-2]="Classic";
  console.log(array);
  //Extract the last value from the array and alert it.
  console.log(array.pop());
}
function shiftAndunshit(){
  //Write a code to alert a random value from array arr:
  var arr = ["Plum","Orange","Donkey","Carrot","JavaScript"];
  console.log(arr);
  //The code to get a random integer from min to max (inclusive) is:
  var rand = Math.floor(Math.random()*arr.length);
  console.log(arr[rand]);
}
function iterating(){
//Create a function find(arr,value) which finds a value in given array and returns its index, or -1 if not found.
var arr = [ "test", 2, 1.5, false ];
console.log(arr);
console.log(find(arr,"test"));
console.log(find(arr, 2));
console.log(find(arr, 1.5));
console.log(find(arr, 0));
  function find(array, value){
    if(array.indexOf)return array.indexOf(value);
  }
//Create a function filterNumeric(arr) which takes an array and returns new array which contains only numeric values from arr.
var arr = ["a", 1, "b", 2];
console.log(arr);
console.log(filterNumeric(arr));
  function filterNumeric(array){
    var arrayNuevo=Array();
    for (var i = 0; i < array.length; i++) {
      if(!isNaN(array[i]))
       arrayNuevo.push(array[i]);
    }
    return arrayNuevo;
  }
}
function joinAndsplit(){
/*
An object has a className property which keeps it’s class names delimited by spaces:
var obj = {
  className: 'open menu'
}
Write a function addClass(obj, cls) which adds a class cls, but only if it doesn’t yet exist:
*/
  var objeto = {
    className: 'open menu'
  }
  console.log("Objeto original: "+objeto.className);
  addClass(objeto, "new");
  console.log(objeto.className);
  addClass(objeto, "open");
  console.log(objeto.className);
  addClass(objeto, "me");
  console.log(objeto.className);
  function addClass(objeto, string){
    var nuevoArray=objeto.className.split(" ");
    for (var i = 0; i < nuevoArray.length; i++) {
      if(nuevoArray[i]==string) return;

    }
    objeto.className+=" "+string;
  }
  //Create a function camelize(str) which transforms a string from “my-short-string” to “myShortString”.
  function camelize(string){
    var array=string.split("-");
    for (var i = 1; i < array.length; i++) {
      array[i] = array[i].charAt(0).toUpperCase()+array[i].substr(1);
    }
    return array.join("");

  }
  console.log(camelize("my-short-string"));
}
function arrayIsobject(){
  //What will be the result? Why?
  var arr =['a', 'b'];
  arr.push(function() { alert(this) } );
  arr[arr.length-1]();
  console.log("arr[arr.length-1]() = arr[2] . Por tanto mostraría un alert con el contenido del array");
}
function Splice(){
  /*An object has a className property which keeps it’s class names delimited by spaces:
var obj = {
  className: 'open menu'
}
Write a function removeClass(obj, cls) which removes a class cls if it is set:
*/
  var objeto={
    className:"open menu me"
  }
  console.log("Objeto original: "+objeto.className);
  removeClass(objeto, "new");
  console.log(objeto.className);
  removeClass(objeto, "open");
  console.log(objeto.className);
  removeClass(objeto, "me");
  console.log(objeto.className);
  function removeClass(objeto, string){
    var nuevoArray=objeto.className.split(" ");
    for (var i = 0; i < nuevoArray.length; i++) {
      if(nuevoArray[i]==string)
        nuevoArray.splice(i,1);
    }
    objeto.className=nuevoArray.join(" ");
  }
//Create a function filterNumericInPlace(arr) which takes an array and removes all non-numeric values from it.
arr = ["a", 1, "b", 2];
console.log("Array original con números: "+arr)
console.log("Array solo números: "+filterNumericInPlace(arr));
  function filterNumericInPlace(arr){
    for (var i = 0; i < arr.length; i++) {
      if(isNaN(arr[i]))
        arr.splice(i,1);
    }
    return arr;
  }
}
function Sort(){
var john = { name: "John Smith", age: 23 };
var mary = { name: "Mary Key", age: 18 };
var bob = { name: "Bob-small", age: 6 };
var people = [ john, mary, bob ];
console.log(john,mary,bob);
ageSort(people);
console.log("Por orden de edad: ");
for (var i = 0; i < people.length; i++) {
  console.log(i+1+". "+people[i].name);
}
  function ageSort(people){
    people.sort(compare);
  }
  function compare(a, b){
    if (a.age > b.age) return 1;
    else if (a.age < b.age) return -1;
    return 0;
  }
}
function newArray(){
  /*
  Make a generic function filter(arr, func) which filters an array using given function.
Only those elements for which func(elem) returns true should compose the result.

Every element which pass through and returns new array which contains only numeric values from arr.
  */
  var arr = ["a", -1, 2, "b"];
  arr = filter(arr, isNumeric(arr[0]));
  console.log("Array con el filtro numérico: "+arr);
  function filter(arr, func){
    for (var i = 0; i < arr.length; i++) {
      if(isNaN(arr[i]))
      arr.splice(i,1);
    }
    return arr;
  }
  function isNumeric(valor){
    if(!isNaN(valor))return true;
    else return false;
  }
/*
A prime number is a natural number which has exactly two distinct natural number divisors: 1 and itself.

To find all the prime numbers less than or equal to a given integer n by Eratosthenes’ Sieve:

Create a list of consecutive integers from two to n: (2, 3, 4, ..., n).
Set p=2, the first prime number.
Strike from the list all multiples of p less than or equal to n. (2p, 3p, 4p, etc.)
Set p to first not striked number in the list after p.
Repeat steps 3-4 until p*p > n.
All the remaining numbers in the list are prime.
*/
var arrayPrimos = [];
for (var i = 2; i < 100; i++) {
  arrayPrimos.push(i);
}
for (var i = 0; i < arrayPrimos.length; i++) {
  var p = arrayPrimos[i];
  for (var j = i+1; j < arrayPrimos.length; j++) {
    if (arrayPrimos[j] % p == 0)
      arrayPrimos.splice(j, 1);
  }
}
console.log(arrayPrimos);
  }
