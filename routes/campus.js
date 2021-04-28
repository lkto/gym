var express = require('express');
var router = express.Router();
var middleware = require('../routes/middleware');
var Campus = require('../models/campus');
var City = require('../models/city');

router.use(middleware.checkToken);

router.post('/create', async (req, res) => {

    let msg = '';
    let error = false;
    const city = await City.findByid(req.body.city_id);
    if(city){
        const data = await Campus.insert(req.body);
        msg = 'registro guardado con exito';
    }else{
        msg = 'La ciudad seleccionada no existe';
        error = true;
    }


    const result = {
        "msg": msg,
        "error": error
    }
    res.json(result);
});



module.exports = router;