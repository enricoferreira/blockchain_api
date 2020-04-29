import { request } from './api/requisicao.js';
import { popularTabela } from './view/update-table.js';
import { gerarGrafico } from './view/update-chart.js';

request('https://blockchain.info/ticker').then(json => {
    popularTabela(json);
    gerarGrafico(json);
});