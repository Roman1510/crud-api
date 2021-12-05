const express = require('express')

const router = express.Router()

router.get('/',(req,res,next)=>{
    res.json({
        message: 'hello READ ALL'
    })
})

router.get('/:id',(req,res,next)=>{
    res.json({
        message: 'hello READ ONE'
    })
}) 


router.post('/:id',(req,res,next)=>{
    res.json({
        message: 'hello create ONE'
    })
}) 

router.delete('/:id',(req,res,next)=>{
    res.json({
        message: 'hello delete ONE'
    })
}) 

module.exports = router