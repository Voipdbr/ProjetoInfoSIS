var chai = require('chai');
var chaiHttp = require('chai-http');
const getAll = require('../module/index').getAll;
const postData = require('../module/index').postData;
const putData = require('../module/index').putData;
const deleteData = require('../module/index').deleteData;

chai.use(chaiHttp);

describe('Teste de rotas do back-end', () =>{


    //URL DE CONEXÃO COM O BANCO
    const url = 'http://localhost:5500'


    //OBJETO PARA CRIAR DADOS
    const criar = {
        placa: 'FNB8450',
        renavam: '14521452145',
        chassi: '1452115465465445142514522',
        modelo: 'Foasdasdrd',
        marca: 'Foasdasdrd',
        ano: 204515
        };


    //OBJETO PARA ATUALIZAR UM DADO
    const atualizar = {
        id: 81,
        placa: 'asasdasdd',
        chassi: 'aasd',
        renavam: 'reasda',
        modelo: 'addmasdasdasodel',
        marca: 'addmarca',
        ano: 2000

    };


    //OBJETO PARA DELETAR UM DADO
    const deletar = {
        id: 92
    };

    describe('Rota de Teste /api/cars | método de teste (GET) /api/cars', () => {
        it('A rota deve receber os dados do banco de dados', async () => {
                return new Promise( async function(done){
                    console.log((await getAll()).AllData),
                    done();
                }
                )
            });
        });

    describe('Rota de Teste /api/cars | método de teste (POST) /api/cars', () => {
        it('A rota deve adicionar os dados no banco de dados', function(done){
            chai
            .request(url)
            .post('/api/cars/')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(criar)
            .end(function(error, response, body) {
                if (error) {
                    done(error);
                } else {
                    done();
                }
            });

        });
    });

    describe('Rota de Teste /api/cars/:id | método de teste (PUT) /api/cars/:id', () => {
        it('A rota deve atualizar os dados no banco de dados', () => {
            const id = atualizar.id
            delete atualizar.id;
            return putData(id, atualizar);
        });
    });

    describe('Rota de Teste /api/cars/:id | método de teste (DELETE) /api/cars/:id', () => {
        it('A rota deve deletar o dado no banco de dados', () => {
            return deleteData(deletar.id);
        })
    });

});