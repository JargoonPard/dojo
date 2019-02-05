// import { expect } from "chai";
// import {} from "mocha";
// import { Sample } from "../src/sample";

// /* tslint:disable:typedef no-unused-expression */

// describe("Sample", () => {
//     it("can be initialized without an initializer", () => {
//         const s = new Sample();
//         expect(s).to.not.be.null;
//     });
// });

// describe("Sample", () => {
//     it("IsLeapYear returns a Bool", () => {
//         const s = new Sample();
//         const result = s.IsLeapYear(2019);
//         expect(typeof result === "boolean").is.true;
//     });

//     it("IsLeapYear returns true for leap year 2000", () => {
//         const s = new Sample();
//         const result = s.IsLeapYear(2000);
//         expect(result).is.true;

//     });

//     it("IsLeapYear returns false for non-leap year 1900", () => {
//         const s = new Sample();
//         const result = s.IsLeapYear(1900);
//         expect(result).is.false;

//     });

//     it("IsLeapYear returns false for non-leap year 2019", () => {
//         const s = new Sample();
//         const result = s.IsLeapYear(2019);
//         expect(result).is.false;

//     });

//     it("IsLeapYear returns true for leap year 1996", () => {
//         const s = new Sample();
//         const result = s.IsLeapYear(1996);
//         expect(result).is.true;

//     });

//     it("IsLeapYear returns false for year 0", () => {
//         const s = new Sample();
//         const result = s.IsLeapYear(0);
//         expect(result).is.false;

//     });

//     it("IsLeapYear returns false for smallest negative number", () => {
//         const s = new Sample();
//         const result = s.IsLeapYear(-1*Number.MAX_VALUE);
//         expect(result).is.false;
//     });

//     it("IsLeapYear returns false for NaN", () => {
//         const s = new Sample();
//         const result = s.IsLeapYear(NaN);
//         expect(result).is.false;
//     });

//     it("IsLeapYear returns false for null", () => {
//         const s = new Sample();
//         const result = s.IsLeapYear(null);
//         expect(result).is.false;
//     });

//     it("IsLeapYear returns false for 100", () => {
//         const s = new Sample();
//         const result = s.IsLeapYear(100);
//         expect(result).is.false;
//     });

//     it("IsLeapYear returns true for 400", () => {
//         const s = new Sample();
//         const result = s.IsLeapYear(400);
//         expect(result).is.true;
//     });

// });
