var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://cricket-live-data.p.rapidapi.com/match/2432999',
  headers: {
    'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
    'x-rapidapi-key': 'fccdf3c86cmsh44c51c269f2d5c5p1dcff1jsnb90c71af449d'
  }
};

axios.request(options).then(function (response) {
	console.log("Match Title : "+response.data.results.fixture.match_title);
  console.log("Venue : "+response.data.results.fixture.venue);
  console.log("Start date : "+response.data.results.fixture.start_date);
  console.log("End date : "+response.data.results.fixture.end_date);
  console.log("date : "+response.data.results.fixture.dates[0].date);
  console.log("Match Subtitle : "+response.data.results.fixture.dates[0].match_subtitle);
}).catch(function (error) {
	console.error(error);
});