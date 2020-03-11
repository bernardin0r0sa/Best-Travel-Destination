const express = require('express');
const app = express();
const countryRoute = express.Router();
const queryObj = {};

// Country model
let Country = require('../models/Country');

// Get Countries
countryRoute.route('/find/').get((req, res) => {
  Country.find(getCleanQuery(req.query), (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

// Get All Countries
countryRoute.route('/').get((req, res) => {
  Country.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

function getCleanQuery(query){
cleanQuery ={};
Object.entries(query).forEach(([key, value]) => {
  if(String(value).length!=0 && !String(value).match("###")){
    cleanQuery[key]=value;
  }     
});
return cleanQuery;
}

module.exports = countryRoute;  