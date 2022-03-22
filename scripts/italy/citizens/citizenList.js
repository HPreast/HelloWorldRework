import { citizen } from "./citizen.js";
import { getCitizens } from "./citizenData.js";

export const citizenList = () => {
    const citizens = getCitizens();
    const inputLocation = document.querySelector(".citizens");
    citizens.forEach(
        (citizenObj) => {
            inputLocation.innerHTML += citizen(citizenObj)
        }
    );
};