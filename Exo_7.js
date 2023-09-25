const convertToBinary = () => {
    const resultDOMElement = document.querySelector('#binaryResult')
    resultDOMElement.innerText = ''
    const userInput = document.querySelector('#decimalInput').value
    let currentNumber = userInput
    let binaryNumber = []
  
    while(currentNumber > 0) {
      binaryNumber.push(currentNumber % 2)
      currentNumber = Math.floor(currentNumber / 2)
    }
  
    binaryNumber.reverse()
  
    for(let i=0; i < binaryNumber.length; i++) {
        resultDOMElement.innerText += binaryNumber[i]
    }
  }