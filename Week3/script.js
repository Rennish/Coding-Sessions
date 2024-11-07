let country = "Guinea Bissau";
country = country.trim().replace(" ", "-");
console.log(country);

let city = " Sydney   ";
city = city.trim();
console.log(city);

let place = "School";
place = place.toUpperCase();
console.log(place);

let attraction = "Opera House";
attraction = attraction.toLowerCase();
console.log(attraction);

let sentence = `I went to visit the ${attraction} in ${city}, 
right next to my ${place.toLowerCase()}. 
Now, I'm getting ready for my trip to ${country}!`;

console.log(sentence);


let price = 4.5 ;
console.log(Math.round(price));
console.log(Math.floor(price)); 
console.log(Math.max(4,1,3,10)); 
console.log(Math.min(4,1,3,10));
console.log(Math.ceil(price)); 


/*console.log(alert(`the country is ${country}`));*/
