// Mail Sending
const messageBtn = document.getElementById('messageBtn');
document.getElementById('contactForm')
 .addEventListener('submit', function(event) {
   event.preventDefault();
   messageBtn.value = 'Sending...';
   const serviceID = 'service_igcqvgk';
   const templateID = 'template_5nf2lzv';
   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      messageBtn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      messageBtn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
