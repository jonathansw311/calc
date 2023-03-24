values = {};
values.amount=20000;
values.years=5;
values.rate=5;

describe('these are payment tests', function() {

it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment(values)).toEqual('377.42');
 });


it("should return a result with 2 decimal places", function() {
 
 expect((calculateMonthlyPayment(values).split('.')[1].length)).toBe(2)
});




})