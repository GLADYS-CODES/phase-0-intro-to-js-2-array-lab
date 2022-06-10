const cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat (name) {
    cats.push(name);
}

function destructivelyAppendDriver (name) {
    drivers.push(name);
}
function destructivelyRemoveLastDriver () {
    drivers.pop();
}


function destructivelyPrependDriver (name) {
    drivers.unshift(name);
}
  function destructivelyPrependCat (name) {
    cats.unshift(name);
  }  

  function removeLastCat () {
    return cats.slice(0, cats.length - 1);
  }
  function destructivelyRemoveFirstCat () {
    cats.shift();
  }
   function destructivelyRemoveLastCat () {
    cats.pop();
   }
  
  function removeLastDriver () {
    return drivers.slice(0, drivers.length - 1);
  }

  function removeFirstDriver () {
    return drivers.slice(1);
  }
  function removeFirstCat (){
    return cats.slice(1);
  }  
  
function appendCat (name) {
    return [...cats, name];
}
function appendDriver (name) {
    return [...drivers, name];
}
function prependDriver (name) {
    return [name, ...drivers];
}
  function prependCat (name) {
    return [name, ...cats];
  }

  