const Sequelize = require('sequelize');
const db = require('../config/database');

const Gig = db.define('gig', {
    company:{
        type: Sequelize.STRING
    },
    routing:{
        type: Sequelize.STRING
    },
    price:{
        type: Sequelize.INTEGER
    },
    date:{
        type: Sequelize.STRING
    },
})

module.exports = Gig;