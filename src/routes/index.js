const route = require('express').Router();
const Home = require('../views/Home');

route.get('/', (req, res) => res.renderComponent(Home));
