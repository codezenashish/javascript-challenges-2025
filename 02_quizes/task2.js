function Q1(){
    const newStr = 'Hello World'
    const secondStr = 'javascript'

    let reversingStr = newStr.split('').reverse().join('')
    let secondReversingStr = secondStr.split('').reverse().join('')
    console.log(reversingStr)
    console.log(secondReversingStr)
    console.log(reversingStr + ' ' + secondReversingStr)
}

Q1()

