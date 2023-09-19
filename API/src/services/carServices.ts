import { convertTable, riskKeywords } from "../util/CONSTANT";

// import createHttpError from "http-errors";

interface carValue {
  car_value: number | string;
}

export const getCarValue = (model: string, year: number | string): carValue => {
  let isInvalidModel = false;
  let total = 0;

  if (!model || !year) {
    return { car_value: "request must include both model and year" };
  }

  if (typeof year !== "number" || !Number.isInteger(year)) {
    return { car_value: "Wrong data type: Year should be integer" };
  }

  if (year <= 0) {
    return { car_value: "Invalid input: Negative Year" };
  } else if (year < 1990 || year > 2023) {
    return { car_value: "Invalid input: year should be between 1990 and 2023" };
  }

  const numArr: number[] = model
    .toLowerCase()
    .split("")
    .map((char: string) => {
      // let k: keyof typeof convertTable;

      if (isInvalidModel) return;
      for (const k in convertTable) {
        const keys = Object.keys(convertTable);
        const index = keys.findIndex((i) => i === char);
        if (index !== -1) {
          if (k === char.toLowerCase()) {
            return Number(convertTable[k]);
          }
        } else {
          isInvalidModel = true;
        }
      }
    }) as number[];

  if (!isInvalidModel) {
    total = numArr.reduce((a, b) => {
      return a + b;
    });
  }

  return { car_value: total * 100 + year };
};

interface riskRating {
  risk_rating: number | string;
}

export const getRiskRating = (claim: string): riskRating => {
  if (claim.length === 0) {
    return { risk_rating: "invalid input: empty string" };
  }
  const claimArr: string[] = claim.split(" ");
  let count = 0;
  claimArr.forEach((i) => {
    const index = riskKeywords.findIndex((word) => i.includes(word));
    if (index !== -1) {
      count++;
    }
  });
  return { risk_rating: count };
};

interface quote {
  monthly_premium: number;
  yearly_premium: number;
}

export const getQuote = (carVaule: number, riskRating: number): quote => {
  const yearlyPremium = Number(((carVaule * riskRating) / 100).toFixed(1));
  const mounthlyPremium = Number(((carVaule * riskRating) / 100 / 12).toFixed(1));

  const quote = { monthly_premium: mounthlyPremium, yearly_premium: yearlyPremium };

  return quote;
};
