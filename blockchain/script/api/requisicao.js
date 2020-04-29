export const request = (url) => fetch(url)
.then(r => r.json())
.then(json => json);
