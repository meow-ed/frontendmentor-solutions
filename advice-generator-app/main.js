document.querySelector('button').addEventListener('click', updateQuote)

const url = `https://api.adviceslip.com/advice`

async function getQuote() {
    const res = await fetch(url)
    const obj = await res.json()
    return obj.slip
}

async function updateQuote() {
    const slip = await getQuote()
    document.querySelector('#advice-id').textContent = `Advice #${slip.id}`
    document.querySelector('#quotation').textContent = `${slip.advice}`
}

updateQuote()