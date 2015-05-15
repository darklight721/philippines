var rawRegions = require('./data/regions.json');
var rawProvinces = require('./data/provinces.json');
var rawCities = require('./data/cities.json');

module.exports = {
  regions: JSON.parse(rawRegions),
  provinces: JSON.parse(rawProvinces),
  cities: JSON.parse(rawCities)
};
