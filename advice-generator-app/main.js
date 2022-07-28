document.querySelector('button').addEventListener('click', updateAdvice)

const url = `https://api.adviceslip.com/advice`

async function getAdvice() {
    const res = await fetch(url)
    const obj = await res.json()
    return obj.slip
}

async function updateAdvice() {
    const slip = await getAdvice()
    document.querySelector('#advice-id').textContent = `Advice #${slip.id}`
    document.querySelector('#advice-text').textContent = `${slip.advice}`
}

updateAdvice()