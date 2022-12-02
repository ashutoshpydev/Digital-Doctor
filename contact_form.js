  const scriptURL = 'https://script.google.com/macros/s/AKfycbxxNOeurZzqN44YTgnVDfKs5-Mo_AOKK3s_JbJZS6-gvHOkhP06LCFaBlBS8FNLGyLM/exec'
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