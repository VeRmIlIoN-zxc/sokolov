function sum(a,b) 
{
    return a.value+b.value    
}



let btn = document.querySelector('section button')

btn.addEventListener('click', function (){
    let nums = document.querySelector('section input')
    let rezult = document.querySelector('section p')
    rezult.innerHTML = `Сумма: ${nums[0].value} + ${nums[1].value} = ${sum(nums[0], nums[1])}`
})



