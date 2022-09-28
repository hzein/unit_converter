/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const lengthPara = document.getElementById("length-paragraph")
const volumePara = document.getElementById("volume-paragraph")
const massPara = document.getElementById("mass-paragraph")

convertBtn.addEventListener("click", () => {
   const inputValue = inputEl.value
   lengthPara.textContent = `
        ${inputValue} meters = ${(inputValue * 3.281).toFixed(3)} feet | 
        ${inputValue} feet = ${(inputValue / 3.281).toFixed(3)} meters
    `
    volumePara.textContent = `
        ${inputValue} liters = ${(inputValue * 0.264).toFixed(3)} gallons | 
        ${inputValue} gallons = ${(inputValue / 0.264).toFixed(3)} liters
    `
    massPara.textContent = `
        ${inputValue} kilos = ${(inputValue * 2.204).toFixed(3)} pounds | 
        ${inputValue} pounds = ${(inputValue / 2.204).toFixed(3)} kilos
    `
})