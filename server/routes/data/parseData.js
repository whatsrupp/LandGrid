const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const parseData = async (filePath) => {

    const data = await readFile(filePath)
    const  rows = data.toString().split("\n");

    let maxPrice = 0;
    const parsedData = rows.reduce((acc, row)=>{
        const columns = row.split(' ')
        const [x, y, price] = columns;
        
        if(parseInt(price) > maxPrice){
            maxPrice = price;
        }

        acc.push({x: parseInt(x), y: parseInt(y), price: parseInt(price)})

        return acc
    }, [])

    const enhancedData = parsedData.map((row)=>{

        const percentile = (row.price/maxPrice) * 100;
        return [row.x, row.y, row.price, percentile]
    })
    return enhancedData
}

module.exports = parseData
