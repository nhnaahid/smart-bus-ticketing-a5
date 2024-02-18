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
    element.classList.add('hidden');
}