import { city } from "./city.js";
import { getCities } from "./cityData.js";

export const cityList = () => {
    const cities = getCities();
    const inputLocation = document.querySelector(".cities");
    cities.forEach(
        (cityObj) => {
            inputLocation.innerHTML += city(cityObj)
        }
    );
};