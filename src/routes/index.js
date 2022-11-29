const route = require('express').Router();
const Home = require('../views/Home');
const SignInForm = require('../views/auth/SignIn');
const SignUpForm = require('../views/auth/SignUp');
const {createUserAndSession} = require('../controllers/authController')

route.get('/', (req, res) => res.renderComponent(Home));
route.get('/auth/SignIn', (req, res) => res.renderComponent(SignInForm));
route.get('/auth/SignUp', (req, res) => res.renderComponent(SignUpForm));
route.post('/auth/SignUp', createUserAndSession);

module.exports = route;