function setBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.style.backgroundColor = 'rgb(34 197 94)';
}
function getElementValueIntById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueInt = parseInt(element.innerText);
    return elementValueInt;
}
function getElementValueTextById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueInt = element.innerText;
    return elementValueInt;
}
function setElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}
function removeAttributeById(elementId, attributeName) {
    const element = document.getElementById(elementId);
    element.removeAttribute(attributeName);
}
function hideSection(elementId){
    const element = document.getElementById(elementId).parentNode;
    // console.log(element.classList);
    element.classList.add('hidden');
}