// Example: Form handling (if you add a contact form)
document.getElementById('contact-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Here you can add additional code to handle form submission, such as sending the data to a server.
    
    // Reset the form
    this.reset();
});
