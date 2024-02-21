// Configuration Import
const app = require('./app');


// Application Running
const PORT = 8899;
app.listen(PORT, ()=>{
    console.log(`Application run at @${PORT}`);
})