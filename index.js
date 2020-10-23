// Import stylesheets
import "./style.css";
const places = [
  {
    id: 1,
    price: 100,
    coordinates: [[1, 2], [3, 4], [5, 6]]
  },
  {
    id: 2,
    price: 200,
    coordinates: [[7, 8], [9, 10], [11, 12]]
  },
  {
    id: 3,
    price: 300,
    coordinates: [[12, 13], [14, 15], [16, 17]]
  },
  {
    id: 4,
    price: 400,
    coordinates: [[17, 18], [19, 20]]
  }
];

// from id 1 to 2 only
const trip1 = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12]];

// from id 1 to 2 to 3
const trip2 = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
  [9, 10],
  [11, 12],
  [12, 13],
  [14, 15],
  [16, 17]
];

// from id 1 to 2 to 3 to 4
const trip3 = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
  [9, 10],
  [11, 12],
  [12, 13],
  [14, 15],
  [16, 17],
  [17, 18],
  [19, 20]
];

function fetchPlaces(trip) {
  const trp = trip.toString();
  const tripPlaces = [];
  places.map((place, i) => {
    const tst = place.coordinates.toString();
    if (trp.includes(tst)) {
      const placeId = places[i].id;
      tripPlaces.push(placeId);
      // console.log(placeId);
      // console.log(trp);
    }
  });

  console.log(`Places ids for this trip:`, tripPlaces);
  calcTripPrice(tripPlaces);
  return tripPlaces;
}

function calcTripPrice(tripPlacesIds) {
  let tripPrice = 0;

  tripPlacesIds.map(id => {
    const placePrice = places.find(p => p.id === id).price;
    tripPrice = tripPrice + placePrice;
    // console.log(placePrice);
  });

  console.log(`Total amount for this trip is ${tripPrice}$`);
  return tripPrice;
}

fetchPlaces(trip1);
fetchPlaces(trip2);
fetchPlaces(trip3);

// calcTripPrice(fetchPlaces(trip1));
// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `
  <h1>this-is-trips-calculator</h1>
  <span>--check the console for outpup</span>
`;
