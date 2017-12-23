const express = require('express');

const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/:dishId*?')

.all((req, res, next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})


// .post( (req, res, next)=>{
//     res.end('Will add the dish: ' + req.body.name + ' with details ' + req.body.description);
// })

// .put((req, res, next)=>{
//     res.end('Put not supported');
// })

// .delete( (req, res, next)=>{
//     res.end('Deleted all dishes');
// })


.get((req, res, next)=>{
    if (!req.params.dishId){
        res.end('Will all dishes to you');
    }
    else{
        res.end('Will send details of the dish: '+ req.params.dishId + ' to you');
    }
})

.post((req, res, next)=>{
    res.statusCode = 403;
    res.end('Post not supported: ');
})

.put((req, res, next)=>{
    res.write('Updating the dish: '+ req.params.dishId );
    res.end('Will update the dish: ' + req.body.name + 'with details ' + req.body.description);
})


.delete((req, res, next)=>{
    res.end('Deleted dishe ' + req.params.dishId );
});


module.exports = dishRouter;