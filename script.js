const color = document.querySelector('.hex-color');
const button = document.querySelector('.generate-btn');

button.addEventListener('click', setColor);
color.addEventListener('click', copyHex);

function setColor() {
    let randomHexColor = `#${ (("00000" + Math.random().toString(16).slice(2,8)).slice(-6)) }`;
    document.body.style.backgroundColor = randomHexColor;
    color.innerText = randomHexColor;
}

/* copy hex value */
function copyHex() {
    // Create a <textarea> element
    const el = document.createElement('textarea');  

    // Set its value to the string that you want copied
    // Make it readonly to be tamper-proof
    el.value = color.innerHTML;
    el.setAttribute('readonly', '');            

    // Move outside the screen to make it invisible
    // Append the <textarea> element to the HTML document
    el.style.position = 'absolute';                 
    el.style.left = '-9999px';
    document.body.appendChild(el);

    // Check if there is any content selected previously
    // Store selection if found
    // Mark as false to know no selection existed before
    const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
    
    // Select the <textarea> content    
    el.select();                   
    
    // Copy - only works as a result of a user action (e.g. click events)
    document.execCommand('copy');

    // Remove the <textarea> element
    // If a selection existed before copying
    document.body.removeChild(el);                  
    if (selected) {                    
        // Unselect everything on the HTML document             
        document.getSelection().removeAllRanges();
        // Restore the original selection
        document.getSelection().addRange(selected);   
    }
    
    alert(`${color.innerText} copied to clipboard`)
};
