const express = require('express');
const db = require('../config/database');
const Gig = require('../models/Bus');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


// Get Bus List
module.exports.homepage_get = (req, res)=>{
  Gig.findAll() 
  .then(gigs =>{
    console.log(gigs);
    res.render("home", {
      bus:gigs
    });
  }).catch(err => console.log(err));
}

// get bus result

module.exports.result_get = (req, res)=>{
  Gig.findAll() 
  .then(gigs =>{
    console.log(gigs);
    res.render("result", {
      bus:gigs
    });
  }).catch(err => console.log(err));
}


// display add bus page

// Add a Bus
module.exports.addBus_get =(req, res)=>{
  res.render('add');
}
module.exports.addBus_post = (req, res)=>{
  let { company, routing, price, date } = req.body;
  // validate fields
  let errors = [];
  if(!company){
    errors.push({text: 'please provide company name'})
  }
  if(!routing){
    errors.push({text: 'please provide routing'})
  }
  if(!price){
    errors.push({text: 'please provide price'})
  }
  if(!date){
    errors.push({text: 'please provide date'})
  }
  if(errors.length > 0){
    res.render('add',{
      errors, 
      company,
      routing,
      price,
      date
    });
  }else{
      // insert the data into table 
  Gig.create({
    company,
    routing,
    price,
    date
  })
  .then(gigs => {
    console.log(`${gigs} uploaded`);
    res.send('sent data');
  })
  .catch(err => console.log(err));
  }

}


// search for seats bus company
module.exports.search_post = (req, res)=>{
  const {term} = req.query;
  const {date} =req.query;
  console.log(term);
  // console.log(`Searching for ${term}`);
  Gig.findAll({ where: {routing: { [Op.like]: '%' + term + '%' }}}),
  Gig.findAll({ where: {date: { [Op.like]: '%' + date + '%' }}})
  .then(gigs => res.render('companies',{gigs}))
  .catch(err => console.log(err));
}

// get details after bus selected

module.exports.selected_get = (req, res)=>{
  busId = req.params.id;
  res.render('customer',{busId});
}