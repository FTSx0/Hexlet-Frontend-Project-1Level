export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const getRandomID = (data) => Math.floor(Math.random() * data.length);
