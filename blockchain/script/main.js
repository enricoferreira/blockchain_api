// const url = "https://blockchain.info/ticker";
const tableTitle = document.querySelector(".table-title h3");

function construirTabela(jsonDados, key){

    // console.log("passou 10 segundos")
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

async function request(url){
    const dados = await fetch(url);
    const jsonDados = await dados.json();    
    tableTitle.innerText = "Buy Price BlockChain Table";
    popularTabela(jsonDados);
    gerarGrafico(jsonDados);
}

request('https://blockchain.info/ticker');
// setInterval(request, 10000, url);
function gerarGrafico(jsonDados){

    const categoriesData = Object.keys(jsonDados);

    const chartDataBuy = Object.keys(jsonDados).map(key => {
        return jsonDados[key].buy;
    })
    console.log(chartDataBuy);

    const populandografico = Object.keys(jsonDados).map(key => {
        // return 
    })
        Highcharts.chart('chart-box', {
            chart: {
                type: 'bar',
                height: 300
            },
            title: {
                text: 'Buy Price BlockChain Chart',
                align: 'left',
                style:{
                    fontSize: 22
                }
            },
            subtitle: {
                text: 'Source: <a href="https://blockchain.info/ticker">Data</a>',
                align: 'left'
            },
            xAxis: {
                categories: categoriesData,
                title: {
                    text: null
                }
            },
            yAxis: {
                title: {
                    text: null
                }
            },
            tooltip: {
                formatter: function (){
                    return '<b>' + this.x + '</b>' + ": " + this.y.toLocaleString('pt-Br');
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true,
                        formatter: function(){

                            return this.y > 40000 ? this.y.toLocaleString('pt-BR') : null;
                        }
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{                
                data: chartDataBuy
            }]
        });
    
    }    