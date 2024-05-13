# NodeJS-MongooseJS
This code is using the Mongoose library to interact with a MongoDB database. It defines a schema for a ‘Ciudadano’ with ‘nombre’ and ‘edad’ fields, creates a model using the schema, creates instances of the model, adds a method to the schema, saves an instance to the database, and performs find operations on the model. The actual interaction with the database is done inside the callback function that is executed once the database connection is open. This could include things like defining schemas, creating models, and performing operations on the data. 

# Getting Started
This command is used to initialize a new Node.js project. It will prompt you to enter some information such as the project’s name, version, description, etc. The information is stored in a new package.json file.
```PS
npm init
```

 This command installs all the dependencies for your project that are listed in your package.json file. These dependencies are necessary for your project to run correctly.
```PS
npm install
```

This command installs Mongoose, a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
```PS
npm install mongoose
```

This command starts your Node.js application by running the app.js file. This file typically contains the main logic of your application.
```PS
node .\app.js
```

# MongoDB Compass
![MongoDB test database](/images/db.png "test collection")
