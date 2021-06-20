import { Express } from "express-serve-static-core";

const app = Express();
const port = 3000;

app.get('/', (req, res)=> {
    res.send('hello world');
});

app.listen(port, ()=> console.log('la porta che sto usando' + port));


