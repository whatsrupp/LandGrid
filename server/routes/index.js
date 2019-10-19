const express = require('express');
const router = express.Router();
const path = require('path')

const parseData = require('./data/parseData')

router.get('/', async (req, res) => {

  const dataFile =  path.resolve(__dirname, 'data/data.txt');
  try{
    const data = await parseData(dataFile)
    res.send(data)

  }catch(err){
    res.send(err)
  }  

});

module.exports = router;
