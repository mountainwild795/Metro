import chai from "chai";

import suptertest from "supertest";

const assert = chai.assert;

// const request = suptertest("https://jsonplaceholder.typicode.com");
const request = suptertest("localhost:5000/api/cars");

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

it("POST /api/cars/carValue test-case-1", () => {
  const data = {
    model: "Civic",
    year: 2020,
  };
  return request
    .post("/carValue")
    .send(data)
    .then((res) => {
      assert.equal(res.body.car_value, 2020);
    });
});

it("POST /api/cars/carValue test-case-2", () => {
  const data = {
    model: "911",
    year: 2020,
  };
  return request
    .post("/carValue")
    .send(data)
    .then((res) => {
      assert.equal(res.body.car_value, 2020);
    });
});

it("POST /api/cars/carValue test-case-3", () => {
  const data = {
    model: "Task-Force",
    year: -987,
  };
  return request
    .post("/carValue")
    .send(data)
    .then((res) => {
      assert.equal(res.body.error, "Invalid input: Negative Year");
    });
});

it("POST /api/cars/carValue test-case-4", () => {
  const data = {
    model: "C200",
    year: "twenty twenty",
  };
  return request
    .post("/carValue")
    .send(data)
    .then((res) => {
      assert.equal(res.body.error, "Wrong data type: Year should be integer");
    });
});

it("POST /api/cars/carValue test-case-5", () => {
  const data = {
    model: "C200",
    year: 589,
  };
  return request
    .post("/carValue")
    .send(data)
    .then((res) => {
      assert.equal(res.body.error, "Invalid input: year should be between 1990 and 2023");
    });
});

/*API2 test */
it("POST /api/cars/riskRating test-case-1", () => {
  const data = {
    claim_history: "My only claim was a crash into my house's garage",
  };
  return request
    .post("/riskRating")
    .send(data)
    .then((res) => {
      assert.equal(res.body.risk_rating, "1");
    });
});
it("POST /api/cars/riskRating test-case-2", () => {
  const data = {
    claim_history: "My only claim was a rush into my house's garage",
  };
  return request
    .post("/riskRating")
    .send(data)
    .then((res) => {
      assert.equal(res.body.risk_rating, "0");
    });
});

it("POST /api/cars/riskRating test-case-3", () => {
  const data = {
    claim_history: "My only claim was a crash into my house's garage door that left a scratch on my car. ",
  };
  return request
    .post("/riskRating")
    .send(data)
    .then((res) => {
      assert.equal(res.body.risk_rating, "2");
    });
});
it("POST /api/cars/riskRating test-case-4", () => {
  const data = {
    claim_history: "My only claim was a crash into my house's garage door that left a scratch on my car.  There are no other crashes.",
  };
  return request
    .post("/riskRating")
    .send(data)
    .then((res) => {
      assert.equal(res.body.risk_rating, "3");
    });
});
it("POST /api/cars/riskRating test-case-5", () => {
  const data = {
    claim_history: "",
  };
  return request
    .post("/riskRating")
    .send(data)
    .then((res) => {
      assert.equal(res.body.error, "invalid input: empty string");
    });
});

/*API3 test */
it("POST /api/cars/quote test-case-1", () => {
  const data = {
    car_value: 6614,
    risk_rating: 5,
  };
  return request
    .post("/quote")
    .send(data)
    .then((res) => {
      assert.equal(res.body.yearly_premium, 330.7);
      assert.equal(res.body.monthly_premium, 27.6);
    });
});

it("POST /api/cars/quote test-case-2", () => {
  const data = {
    car_value: 6614,
    risk_rating: 1,
  };
  return request
    .post("/quote")
    .send(data)
    .then((res) => {
      assert.equal(res.body.yearly_premium, 66.1);
      assert.equal(res.body.monthly_premium, 5.5);
    });
});

it("POST /api/cars/quote test-case-3", () => {
  const data = {
    car_value: "6614",
    risk_rating: "1",
  };
  return request
    .post("/quote")
    .send(data)
    .then((res) => {
      assert.equal(res.body.error, "Wrong data type");
    });
});

it("POST /api/cars/quote test-case-4", () => {
  const data = {
    car_value: -6614,
    risk_rating: 5,
  };
  return request
    .post("/quote")
    .send(data)
    .then((res) => {
      assert.equal(res.body.error, "Negative invalid input");
    });
});

it("POST /api/cars/quote test-case-5", () => {
  const data = {
    car_value: 6614,
    risk_rating: 6,
  };
  return request
    .post("/quote")
    .send(data)
    .then((res) => {
      assert.equal(res.body.error, "risk rating should be 1-5");
    });
});
