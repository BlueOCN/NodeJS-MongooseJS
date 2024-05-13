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

    // Defining a schema for 'Ciudadano' with 'nombre' and 'edad' fields
    var ciudadanoSchema = new mongoose.Schema({
        nombre: String,
        edad: Number
    });

    // Adding a method 'saludar' to 'ciudadanoSchema'
    ciudadanoSchema.methods.saludar = function () {
        var saludo = this.nombre
            ? "Hola, mi nombre es " + this.nombre
            : "Hola, no tengo nombre";
        console.log(saludo);
    }

    // Creating a model 'Ciudadano' using the 'ciudadanoSchema'
    var Ciudadano = mongoose.model('Ciudadano', ciudadanoSchema);

    // Creating an instance of 'Ciudadano' with 'nombre' as 'Pedro' and 'edad' as 21
    var unCiudadano = new Ciudadano({ nombre: 'Pedro', edad: 21});
    // Logging the 'nombre' of 'unCiudadano'
    console.log(unCiudadano.nombre);

    // Creating another instance of 'Ciudadano' with 'nombre' as 'Pedros' and 'edad' as 23
    var otroCiudadano = new Ciudadano({ nombre: 'Pedros', edad: 23});
    // Calling the 'saludar' method of 'otroCiudadano'
    otroCiudadano.saludar();

    // Saving 'otroCiudadano' to the database
    otroCiudadano.save()
        .then(function(otroCiudadano) {
            // Calling the 'saludar' method of 'otroCiudadano' after saving
            otroCiudadano.saludar();
        })
        .catch(function(err) {
            console.log(err);
        });

    // Finding all 'Ciudadano' in the database and logging them
    Ciudadano.find()
        .then(function(ciudadanos) {
            console.log(ciudadanos);
        })
        .catch(function(err) {
            console.error(err);
        });

    // Finding 'Ciudadano' with 'nombre' starting with 'Pedro'
    Ciudadano.find({ nombre: /^Pedro/ })
        .then(function(ciudadanos) {
            console.log(ciudadanos);
        })
        .catch(function(err) {
            console.error(err);
        });

});
