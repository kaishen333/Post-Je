var myHeaders = new Headers();
myHeaders.append("apikey", "V6M4f74h9UVB5akc");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "service": "PD",
  "from_point": "PGEON_P_E",
  "to_postcode": "11700",
  "weight": "10"
});

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://public-api-sandbox.pgeon.delivery/public/rate", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));