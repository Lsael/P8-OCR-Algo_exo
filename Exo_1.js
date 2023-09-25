const listNumbers = () => {
    const body = document.querySelector('body')
    for(let i=0; i < 10; i++) {
      body.innerHTML += `<span>${i+1}</span><br>`
    }
  }
  
  listNumbers();