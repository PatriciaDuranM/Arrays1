/*1. Crea una función que reciba un array de 5 números, imprime por consola una posición aleatoria del array.*/

const randomNumber = (numbers) => {
  const random = Math.floor(Math.random() * numbers.length);
  console.log(numbers[random]);
};

randomNumber([1, 2, 3, 4, 5]);

/*2. Crea una función que reciba un array con 3 números. La función deberá imprimir por consola.

  - "La suma de todos los números es:[suma]"
  - "La media de todos los números es:[media]"
  - "El mayor es [mayor] y el menor es [menor]"*/

const ej2 = (numeros) => {
  if (numeros.length === 3) {
    const suma = numeros[0] + numeros[1] + numeros[2];
    console.log(`La suma de todos los números es: ${suma}`);

    const media = suma / 3;
    console.log(`La media de todos los números es:${media}`);

    const mayor = Math.max(numeros[0], numeros[1], numeros[2]);
    const menor = Math.min(numeros[0], numeros[1], numeros[2]);
    console.log(`El mayor es ${mayor} y el menor es ${menor}`);
  }
  return "El array no tiene 3 números.";
};

ej2([1, 2, 3]);

/*3. Crea una función que reciba un array con 5 números del 0 al 10 (a tu elección). Dentro de la función genera un número aleario entre 0 y 10. La función deberá decir si el array contiene ese número y en qué posición está o si no lo contiene.*/

const ej3 = (numbers3) => {
  const randomNumber = Math.floor(Math.random() * numbers3.length);

  if (numbers3.includes(randomNumber)) {
    console.log(` El array contiene el número y está en la posición 
    ${numbers3.indexOf(randomNumber)}`);
  }
  return `El array no tiene el número generado`;
};

ej3([1, 2, 3, 4, 5]);

/*4.Crea una función que reciba un array vacío y lo devuelva con 3 números aleatorios entre 0 y 100.*/

const ejer = (array4) => {
  const aleatorio1 = Math.floor(Math.random() * 100);
  const aleatorio2 = Math.floor(Math.random() * 100);
  const aleatorio3 = Math.floor(Math.random() * 100);
  array4.push(aleatorio1, aleatorio2, aleatorio3);
  console.log(array4);
};

ejer([]);

/*5. Crea una función llamada dniLetter que recibirá un número de DNI sin la letra. Dentro de esa función pon este array ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'] La letra del DNI se calcula a través del resto de dividir el número de DNI entre 23, ese número te dará la posición del array donde se encuentra la letra correspondiente a ese DNI. Imprime por consola el DNI con su letra correspondiente.*/

const dniLetter = (number) => {
  const array = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
  ];
  const calculeDniLetter = array[number % 23];
  console.log(number + calculeDniLetter);
};

dniLetter(57962531);

/*6. Crea una función que reciba un array con 3 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O']*/

const ej6 = (words) => {
  const letters = [];
  letters.push(
    words[0].charAt(0).toUpperCase(),
    words[0].charAt(words[0].length - 1).toUpperCase(),
    words[1].charAt(0).toUpperCase(),
    words[1].charAt(words[1].length - 1).toUpperCase(),
    words[2].charAt(0).toUpperCase(),
    words[2].charAt(words[2].length - 1).toUpperCase()
  );

  console.log(letters);
};

ej6(["buenas", "comida", "pelo"]);

/*7. Crea una función que reciba un array con 3 números y te diga cuántos números pares tiene ese array.*/

const ej7 = (array7) => {
  let contador = 0;
  if (array7[0] % 2 === 0) {
    contador = contador + 1;
  }
  if (array7[1] % 2 === 0) {
    contador = contador + 1;
  }

  if (array7[2] % 2 === 0) {
    contador = contador + 1;
  }
  console.log(`Hay ${contador} números pares`);
};

ej7([8, 5, 4]);

/*8. Crea una función que reciba un array con 3 números y devuelva un nuevo array con los mismos números pero en orden inverso.*/

/*Poner el array dentro para que luego printee un array de resultado, corregir*/

const ej8 = (array8) => {
  const newNumbers = [];
  newNumbers.push(array8[2], array8[1], array8[0]);
  return Newnumbers;
};

ej8([4, 5, 6]);

/*9. Crea una función que reciba un array con 3 palabras y devuelva un nuevo array con las mismas palabras pero en mayúsculas.*/

const ej9 = (array9) => {
  console.log(
    array9[0].toUpperCase(),
    array9[1].toUpperCase(),
    array9[2].toUpperCase()
  );
};

ej9(["casa", "comer", "avion"]);
