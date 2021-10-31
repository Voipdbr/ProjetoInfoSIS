const axios = require('axios');

module.exports = {
    data1:{
        id: 0,
        placa: '',
        renavam: '',
        chassi: '',
        modelo: '',
        marca: '',
        ano: 0
    },

    async getAll(){
        const AllData = await axios.get(`http://localhost:5500/api/cars`)
        return { AllData };
    },

    postData(data1){
        return axios.post('http://localhost:5500/api/cars/'+ data1)
        .then(response=>{
            console.log('Carro criado com sucesso!')
        })
        .catch(error => console.log(error));
    },

    putData(id, data){
        return axios.put('http://localhost:5500/api/cars/' + id, data)
        .then(response => {
            console.log('Carro atualizado com sucesso!')
        })
        .catch(error => console.log(error));
    },

    deleteData(id){
        return axios.delete('http://localhost:5500/api/cars/' + id)
        .then(response => {
            console.log('Carro deletado com sucesso!')
        })
        .catch(error => console.log(error));
    }
    
}