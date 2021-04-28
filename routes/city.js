var express = require('express');
var router = express.Router();
var middleware = require('../routes/middleware');
var City = require('../models/city');


router.use(middleware.checkToken);

router.post('/create', async (req, res) => {
    const data = await City.insert(req.body);
    res.json({
        error: false,
        msg: 'registro guardado con exito'
    });
});

module.exports = router;