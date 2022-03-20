const express=require('express');

const morgan=require('morgan');
const app=express();

app.use(morgan('dev'))
    .use(express.json())
    .set('port',process.env.PORT || 3001)
    .use(require('./routes/Employees.routes'))

module.exports=app;