let count = 0

document.getElementById('submitBtn').addEventListener('click', async function() {
    const data = await fetchAdvice()
    const advice = data.slip.advice;    
    document.getElementById('advice-container').textContent = `Advice ${count}`;
    document.getElementById('advice-result').innerHTML = `<span>"${advice}"</span>`;
})


async function fetchAdvice(){
    const response = await fetch("https://api.adviceslip.com/advice");
  // waits until the request completes...
  count += 1
    return response.json();
}