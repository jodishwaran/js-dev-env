// var express = require('express');
// var path = require('path');

import express from 'express';
import path from 'path';
import config from '../webpack.config.dev';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';

const app = express();
const port = 3001;
const webpackMiddlewareinstance = webpackMiddleware(webpack(config), {
    noInfo: false, publicPath: config.output.path
});



app.use(express.static(path.join(__dirname, '../src')));
app.use(webpackMiddlewareinstance);
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../src/index.html"));
})

app.listen(port, function (err) {
  if(err)
    console.log(err); //eslint-disable-line no-console
})
