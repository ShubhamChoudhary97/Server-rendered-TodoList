const express = require('express')

const app = express()

app.use(express.urlencoded({extended: true}))

let tasks=[
    'sample task'
]

app.get('/',(req,res)=>{
    let taskList=tasks.map(t=>`<li>${t}</li>`).join('\n')
    res.send(`
    <html>
    <body>
       <form action="/" method="POST">
           <input name="newTask">
           <button type="submit">ADD</button>
       </form>
       <ul>
       ${taskList}
       </ul>
    </body>
    </html>
    `)
})

app.post('/',(req,res)=>{
    tasks.push(req.body.newTask)
    res.redirect('/')
})

app.listen(5555,()=>{
   console.log('Started')
})