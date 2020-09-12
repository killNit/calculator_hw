class Calculator {
    constructor(previousTextElement, currentTextElement) {
        this.previousTextElement = previousTextElement
        this.currentTextElement = currentTextElement
    }

    clear() {
        this.current = ''
        this.previous = ''
        this.operation = undefined
    }

    delete() {
        this.current = this.current.toString().slice(0, -1)
    }

    newNumber(number) {
        this.current = this.current.toString() + number.toString()
    }
    chooseOperation(operation) {
        if (this.current === '') return
        if (this.previous !== '') {
            this.compute
        }
        this.operation = operation
        this.previous = this.current
        this.current = ''

        }

    compute () {
        let computation 
        const prev = parseFloat(this.previous)
        const current = parseFloat(this.current)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
            break

            case '-':
                computation = prev + current
            break

            case '*':
                computation = prev + current
            break

            case '/':
                computation = prev + current
            break

            default:
                return
        }
        this.current = computation
        this.operation = undefined
        this.previous = ''
        }

    updateDisplay () {
        this.currentTextElement.innerText = this.current
        this.previousTextElement.innerText = this.previous
    }


    
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[delete-equal]')
const previousTextElement = document.querySelector('[data-previous]')
const currentTextElement = document.querySelector('[data-current]')

const calculator = new Calculator(previousTextElement, currentTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.newNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

clearButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})