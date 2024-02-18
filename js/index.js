function scrollToSection() {
    var targetSection = document.getElementById('buy-ticket');

    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

const seats = document.getElementsByClassName('seat-name');
let count = getElementValueIntById('seat-left');
let selectedSeat = 0;
let discountAmount = 0;
let newTotalPrice = 0;
for (const seat of seats) {
    seat.addEventListener('click', updateTask);

}

function updateTask(event) {
    if (selectedSeat === 4) {
        alert('At most four seat can be selected')
        return;
    }
    const seat = event.target;
    seat.style.backgroundColor = 'rgb(34 197 94)';
    count--;
    selectedSeat++;
    setElementValueById('seat-left', count);
    setElementValueById('selected-seat', selectedSeat);

    // Appending children.
    const appendHere = document.getElementById('append-here');
    const p1 = document.createElement('p');
    p1.innerText = event.target.innerText;
    const p2 = document.createElement('p');
    p2.innerText = 'Economy';
    const p3 = document.createElement('p');
    p3.innerText = '550';
    appendHere.appendChild(p1);
    appendHere.appendChild(p2);
    appendHere.appendChild(p3);

    // Update Total Price
    const currentTotalPrice = getElementValueIntById('total-price');
    newTotalPrice = currentTotalPrice + 550;
    setElementValueById('total-price', newTotalPrice);

     // Update grand Price
     const newGrandPrice = newTotalPrice - discountAmount;
     setElementValueById('grand-price', newGrandPrice);
     
    // Enable button and input field
    if (selectedSeat == 4) {
        removeAttributeById('apply-btn', 'disabled');
        removeAttributeById('coupon-input', 'disabled');
    }
    // Clearing Input field
    seat.removeEventListener("click", updateTask);
}

function applyCoupon(elementId) {
    const element = document.getElementById(elementId).parentNode.childNodes[1];
    const couponCode = element.value;
    if (couponCode === 'NEW15') {
        discountAmount = newTotalPrice * (15 / 100);
        setElementValueById('discount-amount', discountAmount);
        // Update grand Price
        const newGrandPrice = newTotalPrice - discountAmount;
        setElementValueById('grand-price', newGrandPrice);
        hideSection(elementId);
    }
    else if (couponCode === 'Couple 20') {
        discountAmount = newTotalPrice * (20 / 100);
        setElementValueById('discount-amount', discountAmount);
        // Update grand Price
        const newGrandPrice = newTotalPrice - discountAmount;
        setElementValueById('grand-price', newGrandPrice);
        hideSection(elementId);
    }
    else {
        alert('Invalid Coupon Code!');
    }
    element.value = '';
}