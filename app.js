// IP ADRESS GENERAL INFO

const locationContent = document.querySelector(".location-content");
const ipAdressContent = document.querySelector(".ip-address-content");
const timezoneContent = document.querySelector(".timezone-content");
const ispContent = document.querySelector(".isp-content");

// INPUT 
const form = document.querySelector('.input_form');
const input = document.querySelector("#input-id");
const buttonSubmit = document.querySelector('.arrow_button');

// INPUT 
//Setting the IP address for the default settings

const ipAddressAPI = async () => {
  const ipAddressContentAPI = await axios.get(
    "https://geo.ipify.org/api/v2/country,city?apiKey=at_5fvRnzxPdwn8JmtfEHNvBnpIGYxlu&ipAddress=79.125.223.156"
  );
  const longitude = ipAddressContentAPI.data.location.lng;
  const latidute = ipAddressContentAPI.data.location.lat;

  //Filing the information card

  locationContent.innerHTML = ipAddressContentAPI.data.location.city;
  ipAdressContent.innerHTML = ipAddressContentAPI.data.ip;
  timezoneContent.innerHTML = `UTC${ipAddressContentAPI.data.location.timezone}`;
  ispContent.innerHTML = ipAddressContentAPI.data.isp;

  //Filing the information card

  // Setting the map view

  const map = L.map("map").setView([latidute, longitude], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([latidute, longitude]).addTo(map).openPopup();
  
  // Setting the map view
};

ipAddressAPI();

// Submiting the IP ADRESS to the MAP 

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    buttonSubmit.addEventListener('click',()=>{
        const inputContent =input.value;
        const ipAddressAPI = async () => {
            try{ 
            const ipAddressContentAPI = await axios.get(
              `https://geo.ipify.org/api/v2/country,city?apiKey=at_5fvRnzxPdwn8JmtfEHNvBnpIGYxlu&ipAddress=${inputContent}`
            );
            console.log(ipAddressContentAPI);
            const longitude = ipAddressContentAPI.data.location.lng;
            const latidute = ipAddressContentAPI.data.location.lat;
          
            //Filing the information card
          
            locationContent.innerHTML = ipAddressContentAPI.data.location.city;
            ipAdressContent.innerHTML = ipAddressContentAPI.data.ip;
            timezoneContent.innerHTML = `UTC${ipAddressContentAPI.data.location.timezone}`;
            ispContent.innerHTML = ipAddressContentAPI.data.isp;
          
            //Filing the information card
          
            // Setting the map view
          
            const map = L.map("map").setView([latidute, longitude], 13);
          
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
              attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(map);
          
            L.marker([latidute, longitude]).addTo(map).openPopup();
        }
        catch{
            console.log('invalid information');
        }
            // Setting the map view
          };
          ipAddressAPI();
    })
})