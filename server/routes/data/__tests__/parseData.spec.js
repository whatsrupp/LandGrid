const parseData = require('../parseData')
const path = require('path');

describe("dataParser()", () => {
    it("extracts x coordinate, y coordinate and price into an array of objects from a text file and calculates the percentile", async () => {
        const filePath = path.resolve(__dirname, 'data.test.txt');
        const expected = [[1,2,3,50], [4,5,6,100]]

        const result = await parseData(filePath);

        expect(result).toEqual(expected)
    });
});