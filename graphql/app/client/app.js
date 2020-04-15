const GRAPHQL_URL = 'http://localhost:8080/'

async function fetchGreeting() {
  const response = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query: `
        query {
          greeting
        }
      `
    })
  })
  const body = await response.json()
  return body.data
}

fetchGreeting().then(({ greeting }) => {
  setTimeout(() => {
    const titleElement = document.querySelector('h1')
    titleElement.textContent = greeting
  }, 2000)
})
