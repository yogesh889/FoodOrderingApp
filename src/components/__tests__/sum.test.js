import {Sum} from "../Sum"

test("sum function should calculate the sum of two function", () => {
    const result = Sum(3, 4);

    //Assertion
    expect(result).toBe(7)
} )
