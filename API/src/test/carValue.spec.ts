// import chai from "chai";

// import suptertest from "supertest";

import { getCarValue, getRiskRating, getQuote } from "../services/carServices";

describe("car value tests", () => {
  it("POST /api/cars/carValue test-case-1", () => {
    const model = "Civic";
    const year = 2020;
    const expected = 6620;

    const result = getCarValue(model, year);
    const actual = result.car_value;

    expect(actual).toBe(expected);
  });

  it("POST /api/cars/carValue test-case-2", () => {
    const model = "911";
    const year = 2020;
    const expected = 2020;

    const result = getCarValue(model, year);
    const actual = result.car_value;

    expect(actual).toBe(expected);
  });

  it("POST /api/cars/carValue test-case-3", () => {
    const model = "Task-Force";
    const year = -978;
    const expected = "Invalid input: Negative Year";

    const result = getCarValue(model, year);
    const actual = result.car_value;

    expect(actual).toBe(expected);
  });

  it("POST /api/cars/carValue test-case-4", () => {
    const model = "C200";
    const year = "twenty twenty";
    const expected = "Wrong data type: Year should be integer";

    const result = getCarValue(model, year);
    const actual = result.car_value;

    expect(actual).toBe(expected);
  });

  it("POST /api/cars/carValue test-case-5", () => {
    const model = "C200";
    const year = 589;
    const expected = "Invalid input: year should be between 1990 and 2023";

    const result = getCarValue(model, year);
    const actual = result.car_value;

    expect(actual).toBe(expected);
  });
});

describe("risk rating tests", () => {
  it("POST /api/cars/riskRating test-case-1", () => {
    const claim = "My only claim was a crash into my house's garage";

    const result = getRiskRating(claim);
    const actual = result.risk_rating;

    const expected = 1;

    expect(actual).toBe(expected);
  });
  it("POST /api/cars/riskRating test-case-2", () => {
    const claim = "My only claim was a rush into my house's garage";

    const result = getRiskRating(claim);
    const actual = result.risk_rating;

    const expected = 0;

    expect(actual).toBe(expected);
  });

  it("POST /api/cars/riskRating test-case-3", () => {
    const claim = "My only claim was a crash into my house's garage door that left a scratch on my car. ";

    const result = getRiskRating(claim);
    const actual = result.risk_rating;

    const expected = 2;

    expect(actual).toBe(expected);
  });

  it("POST /api/cars/riskRating test-case-4", () => {
    const claim = "My only claim was a crash into my house's garage door that left a scratch on my car.  There are no other crashes.";

    const result = getRiskRating(claim);
    const actual = result.risk_rating;

    const expected = 3;

    expect(actual).toBe(expected);
  });
  it("POST /api/cars/riskRating test-case-5", () => {
    const claim = "";

    const result = getRiskRating(claim);
    const actual = result.risk_rating;

    const expected = "invalid input: empty string";

    expect(actual).toBe(expected);
  });
});

describe("quote tests", () => {
  it("POST /api/cars/quote test-case-1", () => {
    const carValue = 6614;
    const riskRating = 5;

    const actual = getQuote(carValue, riskRating);
    const expected = { yearly_premium: 330.7, monthly_premium: 27.6 };

    expect(actual).toEqual(expected);
  });
  it("POST /api/cars/quote test-case-2", () => {
    const carValue = 6614;
    const riskRating = 1;

    const actual = getQuote(carValue, riskRating);
    console.log(actual);

    const expected = { yearly_premium: 66.1, monthly_premium: 5.5 };

    expect(actual).toEqual(expected);
  });
  it("POST /api/cars/quote test-case-3", () => {
    const carValue = 6614;
    const riskRating = 2;

    const actual = getQuote(carValue, riskRating);
    const expected = { yearly_premium: 132.3, monthly_premium: 11 };

    expect(actual).toEqual(expected);
  });
  it("POST /api/cars/quote test-case-4", () => {
    const carValue = 6614;
    const riskRating = 3;

    const actual = getQuote(carValue, riskRating);
    const expected = { yearly_premium: 198.4, monthly_premium: 16.5 };

    expect(actual).toEqual(expected);
  });
  it("POST /api/cars/quote test-case-5", () => {
    const carValue = 6614;
    const riskRating = 4;

    const actual = getQuote(carValue, riskRating);
    const expected = { yearly_premium: 264.6, monthly_premium: 22 };

    expect(actual).toEqual(expected);
  });
});

// const assert = chai.assert;

// const request = suptertest("https://jsonplaceholder.typicode.com");
// const request = suptertest("localhost:5000/api/cars");

// const test = function () {
//   return "hello";
// };
// describe("App", function () {
//   it("app should return hello", function () {
//     // console.log(app());
//     assert.equal(test(), "hello");
//   });
// });

// it("GET /api/cars", () => {
//   // Make a GET request to the users route
//   return request
//     .get("/")
//     .expect(200)
//     .then((res) => {
//       // assert data bieng return to not be empty
//       assert.isNotEmpty(res.body);
//     });
// });

/*API2 test */
// it("POST /api/cars/riskRating test-case-1", () => {
//   const data = {
//     claim_history: "My only claim was a crash into my house's garage",
//   };
//   return request
//     .post("/riskRating")
//     .send(data)
//     .then((res) => {
//       assert.equal(res.body.risk_rating, "1");
//     });
// });
// it("POST /api/cars/riskRating test-case-2", () => {
//   const data = {
//     claim_history: "My only claim was a rush into my house's garage",
//   };
//   return request
//     .post("/riskRating")
//     .send(data)
//     .then((res) => {
//       assert.equal(res.body.risk_rating, "0");
//     });
// });

// it("POST /api/cars/riskRating test-case-3", () => {
//   const data = {
//     claim_history: "My only claim was a crash into my house's garage door that left a scratch on my car. ",
//   };
//   return request
//     .post("/riskRating")
//     .send(data)
//     .then((res) => {
//       assert.equal(res.body.risk_rating, "2");
//     });
// });
// it("POST /api/cars/riskRating test-case-4", () => {
//   const data = {
//     claim_history: "My only claim was a crash into my house's garage door that left a scratch on my car.  There are no other crashes.",
//   };
//   return request
//     .post("/riskRating")
//     .send(data)
//     .then((res) => {
//       assert.equal(res.body.risk_rating, "3");
//     });
// });
// it("POST /api/cars/riskRating test-case-5", () => {
//   const data = {
//     claim_history: "",
//   };
//   return request
//     .post("/riskRating")
//     .send(data)
//     .then((res) => {
//       assert.equal(res.body.error, "invalid input: empty string");
//     });
// });

// /*API3 test */
// it("POST /api/cars/quote test-case-1", () => {
//   const data = {
//     car_value: 6614,
//     risk_rating: 5,
//   };
//   return request
//     .post("/quote")
//     .send(data)
//     .then((res) => {
//       assert.equal(res.body.yearly_premium, 330.7);
//       assert.equal(res.body.monthly_premium, 27.6);
//     });
// });

// it("POST /api/cars/quote test-case-2", () => {
//   const data = {
//     car_value: 6614,
//     risk_rating: 1,
//   };
//   return request
//     .post("/quote")
//     .send(data)
//     .then((res) => {
//       assert.equal(res.body.yearly_premium, 66.1);
//       assert.equal(res.body.monthly_premium, 5.5);
//     });
// });

// it("POST /api/cars/quote test-case-3", () => {
//   const data = {
//     car_value: "6614",
//     risk_rating: "1",
//   };
//   return request
//     .post("/quote")
//     .send(data)
//     .then((res) => {
//       assert.equal(res.body.error, "Wrong data type");
//     });
// });

// it("POST /api/cars/quote test-case-4", () => {
//   const data = {
//     car_value: -6614,
//     risk_rating: 5,
//   };
//   return request
//     .post("/quote")
//     .send(data)
//     .then((res) => {
//       assert.equal(res.body.error, "Negative invalid input");
//     });
// });

// it("POST /api/cars/quote test-case-5", () => {
//   const data = {
//     car_value: 6614,
//     risk_rating: 6,
//   };
//   return request
//     .post("/quote")
//     .send(data)
//     .then((res) => {
//       assert.equal(res.body.error, "risk rating should be 1-5");
//     });
// });
