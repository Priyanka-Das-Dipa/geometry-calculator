// Reusable function for input field value
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId)
    const inputValueText = inputField.value
    const value = parseFloat(inputValueText)
    return value
}
// Reusable function for calculate and set the inner Text
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId)
    element.innerText = area.toFixed(2)

}
// Triangle Area
function calculateTriangleArea(){
    const base = getInputValue('triangle-base')
    const height = getInputValue('triangle-height')
    const area = 0.5 * base * height 
    setElementInnerText('triangle-area', area) 
    addToCalculationEntry('Triangle', area)
}
// RectangleArea Calculate
function calculateRectangleArea(){
    const width = getInputValue('rectangle-width')
    const length = getInputValue('rectangle-length')
    const area = width * length
    setElementInnerText('rectangle-area', area)
    addToCalculationEntry('Rectangle', area)
}
// Parallelogram
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base')
    const height = getInputValue('parallelogram-height')
    const area = base * height
    setElementInnerText('parallelogram-area', area)
    addToCalculationEntry('Parallelogram', area)

}
// Rhombus Area
function calculateRhombusArea(){
    const diagonal1 = getInputValue('rhombus-diagonal1')
    const diagonal2 = getInputValue('rhombus-diagonal2')
    const area = 0.5 * diagonal1 * diagonal2
    setElementInnerText('rhombus-area', area)
    addToCalculationEntry('Rhombus', area)
}
// calculate Pentagon Area
function calculatePentagonArea(){
    const perimeter = getInputValue('pentagon-perimeter')
    const apothem = getInputValue('pentagon-apothem')
    const area = 0.5 * perimeter * apothem
    setElementInnerText('pentagon-area', area)
    addToCalculationEntry('Pentagon', area)
}
// calculate Ellipse Area
function calculateEllipseArea(){
    const semiMajorAxis = getInputValue('ellipse-semi-major-axis')
    const semiMinorAxis = getInputValue('ellipse-semi-minor-axis')
    const area = 3.1416 * semiMajorAxis * semiMinorAxis
    setElementInnerText('ellipse-area', area)
    addToCalculationEntry('Ellipse', area)
}

// add to calculation area
function addToCalculationEntry(areaType, area){
    const calculationEntry = document.getElementById('calculation-entry')
    const p = document.createElement('p')
    const count = calculationEntry.childElementCount
    p.classList.add('my-3')
    p.innerHTML = `${count+1}. ${areaType}  ${area} cm<sup>2</sup> <button class="btn btn-sm btn-primary">Convert To m<sup>2</sup>`
    calculationEntry.appendChild(p)
    console.log('adding soon')
}
