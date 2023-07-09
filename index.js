

const Server=require('./src/Server')
require("dotenv").config();
const app = new Server().app;




// app.get('/api/s',(req,res)=>{
//     res.send('new req1')
// })

// app.post('/api',(req,res)=>{
//     res.send('success')
// })


app.listen(8080,()=>{
    console.log('server is running at 8080')
})