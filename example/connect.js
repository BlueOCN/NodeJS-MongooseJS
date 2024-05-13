// Importing the mongoose module
var mongoose = require('mongoose');

// Connecting to a MongoDB database named 'test' located on the local machine
mongoose.connect('mongodb://localhost/test');

// Getting a reference to the database connection
var db = mongoose.connection;

// If there is an error while connecting to the database, it will be logged in the console
db.on('error', console.error.bind(console, 'connection error.'));

// Once the database connection is open, the callback function will be executed
db.once('open', function(){

    var ciudadanoSchema = new mongoose.Schema({
        nombre: String,
        edad: Number
    });

    var Ciudadano = mongoose.model('Ciudadano', ciudadanoSchema);

    var unCiudadano = new Ciudadano({ nombre: 'Pedro', edad: 21});
    console.log(unCiudadano.nombre);

    ciudadanoSchema.methods.saludar = function () {
        var saludo = this.nombre
            ?"Hola, mi nombre es" + this.name
            :"Hola, no tengo nombre";
        console.log(saludo);
    }

    var otroCiudadano = new Ciudadano({ nombre: 'Pedros', edad: 23});
    otroCiudadano.saludar();

    otroCiudadano.save(function(err, otroCiudadano){
        if (err) return console.log(err);
        otroCiudadano.saludar();
    });

    Ciudadano.find({ nombre: /^Pedro/ }, callback);


}); 
