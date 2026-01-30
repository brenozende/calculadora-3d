export function calculateOperationalCost(
    energyCostPerKwh,
    materialTypeMultiplier,
    machineEfficiency,
    machineHourlyCost,
    printHours
) {
    const energyFactor = energyCostPerKwh * materialTypeMultiplier * machineEfficiency;
    return (energyFactor + machineHourlyCost) * printHours;
}

export function calculateFinishingCost(postProcessHours, hourlyRate) {
    return postProcessHours * hourlyRate;
}