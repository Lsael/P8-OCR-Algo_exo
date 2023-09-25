// Créez votre fonction ici
const calculateAverage = (array) => {
    if(typeof(array) !== array || array.length === 0) {
        return 'No numbers to calculate average'
    }

    let total = 0;
    array.forEach(element => {
        total += element
    });
    return total / array.length
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average