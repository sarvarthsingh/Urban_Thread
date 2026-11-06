const PRICE_MULTIPLIER = 20;
const MINIMUM_PRICE = 1000;

export function getDisplayPrice(price) {
  return Math.max(Number(price) * PRICE_MULTIPLIER, MINIMUM_PRICE);
}
