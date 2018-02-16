# app/js/index.js
SimpleStorage.set(100);
SimpleStorage.get().then(function(value) { console.log(value.toNumber()) });
SimpleStorage.storedData().then(function(value) { console.log(value.toNumber()) });
