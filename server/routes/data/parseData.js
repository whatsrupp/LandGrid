const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const parseData = async (filePath) => {

    const data = await readFile(filePath)
    const  rows = data.toString().split("\n");
    const parsedData = rows.reduce((acc, row)=>{
        const columns = row.split(' ')
        const [x, y, price] = columns
        acc.push({x: parseInt(x), y: parseInt(y), price: parseInt(price)})
        return acc
    }, [])
    


    return parsedData

}

module.exports = parseData
