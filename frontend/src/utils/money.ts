export const EuroMoney = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
});

export const formatEuroMoney = (value: number): string =>
  EuroMoney.format(value);
