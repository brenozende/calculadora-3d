export function calculateTaxRate({
    marketplaceShopee,
    marketplaceM1,
    icmsSelected,
    issSelected,
    icmsRate,
}) {
    const marketplaceRate = (marketplaceShopee ? 0.15 : 0) + (marketplaceM1 ? 0.17 : 0)
    const issRate = issSelected ? 0.05 : 0;
    const icmsVal = icmsSelected ? icmsRate / 100 : 0;
    return marketplaceRate + issRate + icmsVal;
}