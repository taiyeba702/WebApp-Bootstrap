
const scriptURL = 'https://script.google.com/macros/s/AKfycbxRx1e8HoY8kFBYIK9wWaeZUfAIxmq_L8XOrfDRw10I6osiDzRTIPQr2VUdlwitUxquFg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})