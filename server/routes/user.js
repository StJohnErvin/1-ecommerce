const express = require ('express');

const router = express.Router();

router.get('/user',(req, res)=> {

    res.json({
    
    data:'hit user  API end point',
    
    });
    });


module.exports = router;