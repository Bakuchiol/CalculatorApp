let screen = document.querySelector(".screen");

// show value of button clicked
const uploadToScreen = (number) => {
    screen.append(number);
};

// clear screen when CLR button is clicked
const clearScreen = () => {
    screen.innerHTML = "";
};

// calculate
const calculateTerms = (x, y, sign) => {
    if(sign === '+') {
        screen.innerHTML = (parseInt(x)+parseInt(y))
    } else if(sign === '-') {
        screen.innerHTML = (parseInt(x)-parseInt(y))
    } else if(sign === 'X') {
        screen.innerHTML = (parseInt(x)*parseInt(y))
    } else if(sign === '/') {
        screen.innerHTML = (parseInt(x)/parseInt(y))
    } else {
        alert('something is wrong')
    }
};

const splitInput = () => {
    let nput = screen.textContent;
    console.log(nput);
    //split into 2 containers
    if(nput.includes('+')) {
        let solve = nput.split("+");
        console.log('input:', solve);
        calculateTerms(solve[0], solve[1], '+');
    } else if (nput.includes('-')){
        let solve = nput.split('-');
        console.log("input:", solve);
        calculateTerms(solve[0]. solve[1], '-');
    } else if (nput.includes('X')){
        let solve = nput.split('X');
        console.log("input:", solve);
        calculateTerms(solve[0]. solve[1], 'X');
    } else if (nput.includes('/')){
        console.log("input:", solve);
        calculateTerms(solve[0]. solve[1], '/');
    } else {
        alert('You need to add a  symbol in order to calculate');
    }
}