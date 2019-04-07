console.log('Jesus is good');
console.log('------------------------');
console.log('------------------------');
axios.get('https://open.rocket.chat/api/v1/info').then(response => console.log(response.data));