const url = 'https://kitsu.io/api/edge'

fetch(url)
    .then(res => res.json())
    .then(convertedResponse => {
        console.log(convertedResponse)
        console.log(convertedResponse.results[0])
        console.log(convertedResponse.results[0].name)
    })
    .catch(err => {
        console.log("Something went wrong", err)
    })