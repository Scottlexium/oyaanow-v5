const dotenv = require('dotenv');
dotenv.config();

const Sequelize = require('sequelize');
// module.exports = new Sequelize('Oyaanow', 'postgres', 'password', {
//     host: 'localhost',
//     dialect:  'postgres'
//   });


// module.exports = new Sequelize('d8p91js1v8lqq7', 'fajurpiimxbxln', '1d73b5b8bef428dae14dd073f443c38b21edead3ba96aa38079ab935c07b73c8', {
//     host: 'ec2-3-219-204-29.compute-1.amazonaws.com',
//     dialect:  'postgres'
//   });



const sequelize = new Sequelize('postgres::memory:')
module.exports = new Sequelize(process.env.DATABASE_URL,{
  dialect:  'postgres'
}) // Example for postgres

  