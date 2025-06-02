/*
  -------------------
  Reprodução dos Métodos
  -------------------
*/

function newMap(array, callback, thisArg) {
  const resultado = [];

  for (let i = 0; i < array.length; i++) {
    if (i in array) {
      resultado.push(callback.call(thisArg, array[i], i, array));
    }
  }

  return resultado;
}

function newFilter(array, callback, thisArg) {
  const resultado = [];

  for (let i = 0; i < array.length; i++) {
    if (i in array) {
      if (callback.call(thisArg, array[i], i, array)) {
        resultado.push(array[i]);
      }
    }
  }

  return resultado;
}

function newFind(array, callback, thisArg) {
  for (let i = 0; i < array.length; i++) {
    if (i in array) {
      if (callback.call(thisArg, array[i], i, array)) {
        return array[i];
      }
    }
  }

  return undefined;
}

function newReduce(array, callback, initialValue) {
  let acumulador;
  let i = 0;

  if (initialValue !== undefined) {
    acumulador = initialValue;
  } else {
    while (i < array.length && !(i in array)) {
      i++;
    }
    if (i >= array.length) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    acumulador = array[i];
    i++;
  }

  for (; i < array.length; i++) {
    if (i in array) {
      acumulador = callback(acumulador, array[i], i, array);
    }
  }

  return acumulador;
}
