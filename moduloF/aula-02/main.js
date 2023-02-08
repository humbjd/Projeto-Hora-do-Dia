/*function parimpar(n) {
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}

let res = parimpar(4)
console.log(res)
*/

function soma(n1,n2) {
    return n1 + n2
}

console.log(soma(2, 5))


//Recursividade

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial (n-1)
    }
}

console.log(fatorial(5))

/*

5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n x (n-1)!
1! = 1

*/