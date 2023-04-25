// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

const addTwoNumbers = (l1,l2) => {
    // const l1Rev = +l1.reverse().toString().replaceAll(',','')
    // const l2Rev = +l2.reverse().toString().replaceAll(',','')
    // const addedString= (l1Rev + l2Rev).toString()
    // return addedString.split('').reverse() 
    let l1Reversed = ''
    let l2Reversed = ''
    const newAns = []
    for (let i = l1.length - 1; i >= 0; i--) {
        const element = l1[i]
        l1Reversed += element
    }
    for (let i = l2.length -1; i >= 0; i--) {
        const element = l2[i]
        l2Reversed += element
    }
    const l1Num = parseInt(l1Reversed)
    const l2Num = parseInt(l2Reversed)
    const addedNumRev = (l1Num + l2Num).toString().split('')
    for (let i = addedNumRev.length -1; i >= 0; i--) {
        const element = parseInt(addedNumRev[i])
        newAns.push(element)
        
    }
    return newAns
}

addTwoNumbers([2,4,3],[5,6,4])
// It appears to work when I run code, but it's not accepting solution