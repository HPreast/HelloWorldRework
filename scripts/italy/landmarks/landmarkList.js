import { landmark } from "./landmark.js";
import { getLandmarks } from "./landmarkData.js";

export const landmarkList = () => {
    const landmarks = getLandmarks();
    const inputLocation = document.querySelector(".landmarks");
    landmarks.forEach(
        (landmarkObj) => {
            inputLocation.innerHTML += landmark(landmarkObj)
        }
    );
};