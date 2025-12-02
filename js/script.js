const form = document.querySelector("form")
// const height = parseInt(document.querySelector("#height").value) height ko form event ke andr access krenge because ye trika empty value dega
// const weight = parseInt(document.querySelector("#weight").value) weight ko form event ke andr access krenge because ye trika empty value dega

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")

    if (height === "" || height <= 0 || isNaN(height)) {
        results.innerHTML = `please give a valid height ${height}`
    } else if (weight === "" || weight <= 0 || isNaN(weight)) {
        results.innerHTML = `please give a valid weight ${weight}`
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        // show the result
        results.innerHTML = `<span>${bmi}</span>`
    }
});