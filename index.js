// code your solution here

function saturdayFun(activity = 'roller-skate', msg = 'This Saturday, I want to') {
    return `${msg} ${activity}!`
}

function mondayWork(work = 'go to the office', msg = 'This Monday, I will') {
    return `${msg} ${work}.`
}

function wrapAdjective(para = '*') {
    return function (str = 'special') {
        return `You are ${para}${str}${para}!`
    }
}