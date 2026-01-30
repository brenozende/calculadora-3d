export function calculateMaterialCost(weigthGrams, pricePerKg) {
    return (pricePerKg / 1000) * weigthGrams;
}