  const scriptURL = 'https://script.google.com/macros/s/AKfycbxl8E8f-3oknhWsU9sutua5MLEXrGjMdHvuiJOvOMUBG4Sa2lEu2ZcVHiYuhcaYCTJ7/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
                        msg.innerHTML = "We will contact you soon !"
                        setTimeout(function(){
                          msg.innerHTML = ""
                        },5000)
                        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })