export function gerarGrafico(jsonDados){

    const categoriesData = Object.keys(jsonDados);

    const chartDataBuy = Object.keys(jsonDados).map(key => {
        return jsonDados[key].buy;
    })    

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