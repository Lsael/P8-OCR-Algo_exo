// Créez votre fonction ici
const calculateAverage = (arr) => {
    if(!Array.isArray(arr) || arr.length === 0) {
        return 'No numbers to calculate average'
    }

    /*
    let total = 0;
    arr.forEach(element => {
        total += element
    });
   return total / arr.length
   */

    // Méthode alternatve avec Array.reduce : 
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / arr.length;
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average
