const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {

    // While we are looping through, we have the innerText E M A I L 
    label.innerHTML = label.innerText

        // We are splitting it into an array, which will put each alphabet as it's own item in the array
        .split('')

        // Then we are mapping it to create an array of the   letter with a <span> around it
        .map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`)

        // We are turning it back to a string
        .join('')
    // You won't see any difference on screen, right click on the window and inspect the element, and look at label element

})