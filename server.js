const express = require('express')
const path = require('path')
const app = express()

app.use(express.urlencoded({extended: true}))
app.set('views',path.join(__dirname,'views'))
app.set('view engine','hbs')
let tasks=[
    'sample task'
]

app.get('/',(req,res)=>{
    res.render('home',{
        title: 'Todo List',
        tasks
    })
})

app.post('/',(req,res)=>{
    tasks.push(req.body.newTask)
    res.redirect('/')
})

app.listen(5555,()=>{
   console.log('Started')
})