const parseData = require('../parseData')
const path = require('path');

describe("dataParser()", () => {
    it("extracts x coordinate, y coordinate and price into an array of objects from a text file and calculates the percentile", async () => {
        const filePath = path.resolve(__dirname, 'data.test.txt');

        const expected = [{
            x: 1,
            y: 2,
            price: 3,
            percentile: 50,
        }, {
            x: 4,
            y: 5,
            price: 6,
            percentile: 100,
        }]

        const result = await parseData(filePath);

        expect(result).toEqual(expected)
    });
});