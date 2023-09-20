import { faker } from "@faker-js/faker";

type Book = {
  make: string;
  model: string;
  year: string;
};
export const generateRandomBook = (): Book => {
  return {
    make: faker.vehicle.manufacturer(),
    model: faker.vehicle.model(),
    year: faker.number.int({ min: 2010, max: 2023 }).toString(),
  };
};

export const BOOKS: Book[] = faker.helpers.multiple(generateRandomBook, {
  count: 10,
});
