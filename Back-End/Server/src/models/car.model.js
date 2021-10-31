var dbConnection = require('../../config/db.config');

var Car = function(car){
    this.placa = car.placa;
    this.chassi = car.chassi;
    this.renavam = car.renavam;
    this.modelo = car.modelo;
    this.marca = car.marca;
    this.ano = car.ano;
}

    Car.create = function(newCar, result){
        dbConnection.query("INSERT INTO `car` set ?", newCar, function (err, response) {
            if(err){
                console.log("error: ", err);
                result(err, null);
            }else{
                console.log(response.insertId);
                result(null, response.insertId);
            }
        });
    };

    Car.findAll = function(result){
        dbConnection.query("Select * from `car`", function(err, response){
            if(err){
                console.log("error: ", err);
            }else{
                console.log("car: ", response);

                result(null, response);
            }
        });
    };

    Car.findById = function (id, result) {
        dbConnection.query("Select * from `car` where `id` = ? ", id, function (err, response) {
        if(err) {
          console.log("error: ", err);
          result(err, null);
        }
        else{
          result(null, response);
        }
        });
    };

    Car.update = function(id, car, result){
            dbConnection.query(`UPDATE car set placa=?, chassi=?, renavam=?, modelo=?, marca=?, ano=? WHERE id = ?`, [car.placa, car.chassi, car.renavam, car.modelo, car.marca, car.ano, id], (err, rows, response) => {
            if(err){
                console.log("error: ", err);

                result(null, err);
            }else{
                result(null, response);
            }
            });
    };

Car.delete = function(id, result){
        dbConnection.query("DELETE FROM `car` WHERE `id` = ?", [id], function(err, response){
            if(err){
                console.log("error: ", err);

                result(null, err);
            }else{
                result(null, response);
            }
        });
    };

module.exports = Car;