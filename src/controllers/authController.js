const router = require('express').Router();

const authService = require('../services/authService');

router.get('/register', (req, res) => {
   res.render('auth/register');
});

router.post('/register', async (req, res) => {
   const userData = req.body;

   await authService.register(userData);

   res.redirect('/auth/login');
   // try {
   //    await authService.register(userData);
   //    res.redirect('/auth/login');
   // } catch (err) {
   //    res.send(500, 'All fields are required!')
   // }
});

router.get('/login', (req, res) => {
   res.render('auth/login');
});

module.exports = router;
