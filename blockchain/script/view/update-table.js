const criandoCabecalho = (jsonDados) =>
    `
        <th>Name</th>
        <th>Buy</th>
        <th>Sell</th>
        <th>Symbol</th>
    `

const criandoBody = (json) =>
    Object.keys(json).map(key => 
        `
            <tr>
                <td>${key}</td>
                <td>${json[key].buy}</td>
                <td>${json[key].sell}</td>
                <td>${json[key].symbol}</td>
            </tr>
        `).join('');

const popularTabela = (jsonDados) => {    
    const tableHead = document.querySelector('table thead');
    const tableBody = document.querySelector('table tbody');
    tableHead.innerHTML = criandoCabecalho(jsonDados);
    tableBody.innerHTML = criandoBody(jsonDados);
}
export { popularTabela};