import { calculateMaterialCost } from "./material";
import { calculateOperationalCost, calculateFinishingCost } from "./operational";
import { calculateTaxRate } from "./taxes";
import { psychologicalRound } from "../../utils/rounding";

export function calculatePro(inputData) {
    const {
        materialType,
        weight,
        pricePerKg,
        printHours,
        postProcessHours,
        isExclusive,
        kitQuantity,
        kitDiscountPercent,
        hourlyRate,
        machineHourlyCost,
        energyCostPerKwh,
        machineEfficiency,
        icmsRate,
        marketplaceShopee,
        marketplaceM1,
        includeFreight,
        freightValue,
        icmsSelected,
        issSelected,
    } = inputData;


    // 1) Calculate costs
    const materialCost = calculateMaterialCost(weight, pricePerKg);
    const operationalCost = calculateOperationalCost(
        energyCostPerKwh,
        materialType.multiplier,
        machineEfficiency,
        machineHourlyCost,
        printHours
    );

    const finishingCost = calculateFinishingCost(postProcessHours, hourlyRate);

    let baseProductionCost = materialCost + operationalCost;

    // add risk 10% exclusive
    if (inputData.includeRisk) {
        baseProductionCost *= 1.10;
    }

    // 2) Calculate profit multiples
    const profitMultipliers = isExclusive
        ? [inputData.exclusiveMultiplier, inputData.exclusiveMultiplier * 1.3, inputData.exclusiveMultiplier * 1.6]
        : [2.5, 3.5, 5.0];

    // 3) Calculate taxes
    const taxRate = calculateTaxRate({
        marketplaceShopee,
        marketplaceM1,
        icmsSelected,
        issSelected,
        icmsRate,
    });

    // 4) Calculate final values
    const finalValues = profitMultipliers.map((mult) => {
        const priceBase = baseProductionCost * mult + finishingCost;
        const priceWithTax = taxRate < 1
            ? priceBase / (1 - taxRate)
            : priceBase;
        
        let rounded = psychologicalRound(priceWithTax);

        if (includeFreight) rounded += freightValue;

        return rounded;
    });

    // Apply kit discount
    const kitFactor = kitQuantity > 1 ? 1 - kitDiscountPercent / 100 : 1;
    const kitFinalValues = finalValues.map((v) => v * kitQuantity * kitFactor);

    return {
        unit: finalValues,
        kit: kitFinalValues,
    };
}