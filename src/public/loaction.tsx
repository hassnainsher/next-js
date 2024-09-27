// console.log('====================================');
// console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
// console.log('====================================');
// function getLocation() {

//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition);
//     } else { 
//       x.innerHTML = "Geolocation is not supported by this browser.";
//     }
//   }
  
//   function showPosition(position) {
//     x.innerHTML = "Latitude: " + position.coords.latitude + 
//     "<br>Longitude: " + position.coords.longitude;
//   }
//   getLocation();



// ====================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>this is a additional library but it's still not in working   I dont know what is the isue

// import React, { useState } from 'react';

// const GeolocationComponent: React.FC = () => {
//   const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);

//   function getLocation(): void {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition, showError);
//     } else {
//       setErrorMessage('Geolocation is not supported by this browser.');
//     }
//   }

//   function showPosition(position: GeolocationPosition): void {
//     setLocation({
//       latitude: position.coords.latitude,
//       longitude: position.coords.longitude,
//     });
//   }

//   function showError(error: GeolocationPositionError): void {
//     switch (error.code) {
//       case error.PERMISSION_DENIED:
//         setErrorMessage('User denied the request for Geolocation.');
//         break;
//       case error.POSITION_UNAVAILABLE:
//         setErrorMessage('Location information is unavailable.');
//         break;
//       case error.TIMEOUT:
//         setErrorMessage('The request to get user location timed out.');
//         break;
//       case error.UNKNOWN_ERROR:
//       default:
//         setErrorMessage('An unknown error occurred.');
//         break;
//     }
//   }

//   return (
//     <div>
//       <button onClick={getLocation}>Get Location</button>
//       {location ? (
//         <p>
//           Latitude: {location.latitude}
//           <br />
//           Longitude: {location.longitude}
//         </p>
//       ) : (
//         <p>{errorMessage || 'Click the button to get your location.'}</p>
//       )}
//     </div>
//   );
// };

// export default GeolocationComponent;
