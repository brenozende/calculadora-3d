export function psychologicalRound(value) {
    const integerPart = Math.floor(value);
    const decimalPart = value - integerPart;

    if (decimalPart <= 0.49) return integerPart + 0.49;

    return integerPart + 0.99;
}
