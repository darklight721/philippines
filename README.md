# Philippines

This provides a complete list of Philippine towns, cities, provinces and regions.

References:

- http://en.wikipedia.org/wiki/Regions_of_the_Philippines
- http://en.wikipedia.org/wiki/Provinces_of_the_Philippines
- http://en.wikipedia.org/wiki/List_of_cities_and_municipalities_in_the_Philippines

Installation:

```
npm install philippines
```

Usage:

```
// returns { regions: [...], provinces: [...], citiies: [...] }
var philippines = require('philippines');

// to get the raw json files
var regions = require('philippines/regions.json');
var provinces = require('philippines/provinces.json');
var cities = require('philippines/cities.json');
```
