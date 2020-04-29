function construirTabela(jsonDados, key){

    // console.log("passou 10 segundos")
    // return
    // `
    // <tr>
    //     <td>${key}</td>
    //     <td>${jsonDados[key].buy}</td>
    //     <td>${jsonDados[key].sell}</td>
    //     <td>${jsonDados[key].symbol}</td>        
    // </tr>
    // `;
    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    tdName.innerText = key;             
    const tdBuy = document.createElement("td");
    tdBuy.innerText = jsonDados[key].buy;
    const tdSell = document.createElement("td");
    tdSell.innerText = jsonDados[key].sell;        
    const tdSymbol = document.createElement("td");
    tdSymbol.innerText = jsonDados[key].symbol;        

    tr.appendChild(tdName);
    tr.appendChild(tdBuy);
    tr.appendChild(tdSell);
    tr.appendChild(tdSymbol);
console.log(tr);

    return tr;
}

function criandoCabecalho(jsonDados){
    const thead = document.createElement("thead");
    
    const trHead = document.createElement("tr");
    const thName = document.createElement("th");
    thName.innerText = "Name"
    const thBuy = document.createElement("th");
    thBuy.innerText = "Buy"
    const thSell = document.createElement("th");
    thSell.innerText = "Sell"
    const thSymbol = document.createElement("th");
    thSymbol.innerText = "Symbol"

    thead.appendChild(trHead);
    trHead.appendChild(thName);    
    trHead.appendChild(thBuy);
    trHead.appendChild(thSell);
    trHead.appendChild(thSymbol);

    return thead;

}

const popularTabela = (jsonDados) => {
    
    const tableBox = document.querySelector(".table-box");    
    
    const table = document.createElement("table");
    table.classList.add('ui', 'table', 'striped', 'celled');

    const cabecalho = criandoCabecalho(jsonDados);

    tableBox.appendChild(table);
    table.appendChild(cabecalho);

    const result = Object.keys(jsonDados).map(key => {
        const tableData = construirTabela(jsonDados, key);
        return tableData;
    })

    result.forEach(linha => {
        table.appendChild(linha);
    })
    table.classList.add("table-style");
}

export {construirTabela, criandoCabecalho, popularTabela};