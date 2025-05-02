
function triggerDeanGaffney(postcodeDB) {
  const postcodes = Object.keys(postcodeDB);
  const randomIndex = Math.floor(Math.random() * postcodes.length);
  const pc = postcodes[randomIndex];
  const [lat, lng] = postcodeDB[pc];
  const factList = [
    "Dean Gaffney once tried to parallel park a horse in Soho.",
    "Dean Gaffney can hear a postcode being mispronounced from 3 miles away.",
    "In 2006, Dean Gaffney briefly held the record for fastest UK sausage roll tour.",
    "Dean Gaffney has a loyalty card for every Greggs in the country.",
    "The Loch Ness Monster once asked Dean Gaffney for directions.",
    "Dean Gaffney once tried to book a table at a postcode.",
    "Dean Gaffney is the only man to receive a speeding ticket on foot in Slough.",
    "Dean Gaffney thinks GPS stands for 'Gaffney Positioning System'."
  ];
  const fact = factList[Math.floor(Math.random() * factList.length)];

  const marker = L.marker([lat, lng]).addTo(window.gmap);
  marker.bindPopup(`<b>Dean Gaffney could visit:</b><br>${pc}<br><em>${fact}</em>`).openPopup();
}
