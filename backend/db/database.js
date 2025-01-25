const mongoose = require("mongoose")

const connectdatabase = () => {
    mongoose
    .connect(process.env.DB_URL)
    .then((data)=>{
        console.log(`mongoDB connected with server: ${data.connection.host}`);
    })
    .catch((err)=>{
        console.error(`database connection failed: ${err.message}`);
        process.exit(1);
    });

    
};
module.exports = connectdatabase;