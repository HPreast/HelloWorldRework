import { getCitizens } from './citizenData.js';
import { citizen } from './citizen.js';

export const citizenList = () => {
    const citizens = getCitizens();
    const inputLocation = document.querySelector(".citizens");
    citizens.forEach(
        (citizenObj) => {
            inputLocation.innerHTML += citizen(citizenObj)
        }
    );
};