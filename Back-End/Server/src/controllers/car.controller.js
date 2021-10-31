const Car = require('../models/car.model');

exports.findAll = function(request, response){
    Car.findAll(function(err, car){
        console.log('controller');
        if(err)

        response.send(err);

        console.log('res', car);

        response.send(car);
    });
};

exports.create = function(request, response){
    const new_car = new Car(request.body);
    if(request.body.constructor === Object && Object.keys(request.body).length === 0){
        response.status(400).send({
            error: true,
            message: "Porfavor providêncie todas os campos requeridos"
        });   
    }else{
        Car.create(new_car, function(err, car){
            if(err)

            response.send(err);

            response.json({
                error: false,
                message: "Carro adicionado com sucesso!",
                data: car
            });
        });
    };
};

exports.findById = function(request, response){
    Car.findById(request.params.id, function(err, car){
        if(err)

        response.send(err);

        response.json(car);
    });
};

exports.update = function(request, response){
    if(request.body.constructor === Object && Object.keys(request.body).length === 0){
        response.status(400).send({
            error: true,
            message: "Porfavor providêncie todos os campos requeridos"
        });
    }else{
        Car.update(request.params.id, new Car(request.body), function(err, car){
            if(err)

            response.send(err);

            response.json({
                error: false,
                message: "Carro atualizado com sucesso."
            });
        });
    };
};

exports.delete = function(request, response){
    Car.delete(request.params.id, function(err, car){
        if(err)

        response.send(err);

        response.json({
            error: false,
            message: "Carro deletado com sucesso."
        });
    });
};