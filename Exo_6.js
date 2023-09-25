const input = document.querySelector('#display')

const appendToDisplay = (userInput) => {
  const list = input.value.split(' ')

  // if operation already has 3 factor or previous calc is an error
  if((list.length === 3 && isNaN(prop) || list[0] === "Error")) {
    return
  }
  
  const lastChar = list.pop()

  // if both input and previous input are operators
  if(isNaN(lastChar) && isNaN(userInput)) {
    return
  }

  // else append input
  if(isNaN(userInput) !== isNaN(lastChar)) {
    input.value += " " + userInput
  } else {
    input.value += userInput
  }
}

const clearDisplay = () => {
  input.value = ''
}

const calculateResult = () => {
  const calcDatas = input.value.split(" ")
  const number1 = parseInt(calcDatas[0])
  const number2 = parseInt(calcDatas[2])
  const operator = calcDatas[1]
  let result = ''

  if(calcDatas.length < 3) {
    return
  }

  switch(operator) {
      case "+":
        result = number1 + number2
        break
      case "-":
        result = number1 - number2
        break
      case "*":
        result = number1 * number2
        break
      case "/":
        if(number2 !== 0) {
          result = number1 / number2
          break
        } else {
          result = "Error"
          break
        }
  }
  
  input.value = result
}