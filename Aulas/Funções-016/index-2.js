function fato(n) {
    if (n == 1) {
        return 1
    }
    else {
        return n * fato(n-1)
    }
}

console.log(fato(5))
