const express = require('express');
const app = new express();
const port = 8080;

const React = require('react');
const ReactDOMServer = require('react-dom/server');

require('@babel/register');
const Main = require('./main').default;

const html = React.createElement(Main);

app.use('/static', express.static('public'));
app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>${ReactDOMServer.renderToString(html)}`);
});
app.listen(port, () => { console.log('Bombas Test Active!'); });