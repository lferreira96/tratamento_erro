/* // Utilizando a instrução Return

function verificaPalindromo(string) {
    
    if (!string) return "String Inválida";
    
    if (String.prototype.toUpperCase(string) === String.prototype.toUpperCase(string.split('').reverse().join(''))){
        return `A palavra ${string} é um palíndromo`;
    } else {
        return `A palavra ${string} não é um palíndromo`;
    }
}

console.log(verificaPalindromo('Ava'));

// Utilizando a instrução Throw

function verificaPalindromo2(string) {
    
    if (!string) throw "String Inválida";
    
    if (String.prototype.toUpperCase(string) === String.prototype.toUpperCase(string.split('').reverse().join(''))){
        return `A palavra ${string} é um palíndromo`;
    } else {
        return `A palavra ${string} não é um palíndromo`;
    }
}

console.log(verificaPalindromo2(''));

// Utilizando a instrução Try Catch

function verificaPalindromo2(string) {
    console.log(string);
    if (!string) return "String Inválida";
    
    console.log( (String.prototype.toUpperCase(string) === String.prototype.toUpperCase(string.split('').reverse().join(''))));
    if (String.prototype.toUpperCase(string) === String.prototype.toUpperCase(string.split('').reverse().join(''))){
        console.log(`A palavra ${string} é um palíndromo`);
        return `A palavra ${string} é um palíndromo`;
    } else {
        console.log(`A palavra ${string} não é um palíndromo`);
        return `A palavra ${string} não é um palíndromo`;
    }
}

function tryCatchExemplo (string2){
    try {
        verificaPalindromo2(string2);
    } catch(e){
        console.log(e);
    }
}

tryCatchExemplo('Ava');

function verificaPalindromo2(string) {
    if (!string) return "String Inválida";
    
    console.log( (String.prototype.toUpperCase(string) === String.prototype.toUpperCase(string.split('').reverse().join(''))));
    if (String.prototype.toUpperCase(string) === String.prototype.toUpperCase(string.split('').reverse().join(''))){
        console.log(`A palavra ${string} é um palíndromo`);
        return `A palavra ${string} é um palíndromo`;
    } else {
        console.log(`A palavra ${string} não é um palíndromo`);
        return `A palavra ${string} não é um palíndromo`;
    }
}

function tryCatchExemplo (string2){
    try {
        verificaPalindromo2(string2);
    } catch(e){
        throw(e);
    } finally{
        console.log('Mesmo que passe no try ou no catch, esta instrução ainda assim será executado');
    }
}

tryCatchExemplo('macaco'); */

function validaArray (arr, num){
    try{
        if (!arr && !num) throw new ReferenceError('Envie os parâmetros');
        if (typeof arr !='object') throw new TypeError('Array precisa ser do tipo object');
        if (typeof mun !='number') throw new TypeError('Array precisa ser do tipo number');
        if (arr.length !== num) throw new RangeError('Tamanho inválido');
        
        return arr;
    }
    catch(e){
        if (e instanceof ReferenceError){
            console.log('Este erro é um ReferenceError!');
            console.log(e.message);
        } else if (e instanceof TypeError){
            console.log('Este erro é um TypeError!');
            console.log(e.message);
        } else if (e instanceof RangeError){
            console.log('Este erro é um RangeError!');
            console.log(e.message);
        }else {
            console.log('Tipo de erro não esperado: ' + e);
        }
    }
}

console.log(validaArray([1,2,3,4,5],5));