import express from "express";
import path from "path";

const app = express();

app.get('/', function(req, res) {
 return res.sendFile(path.resolve('impressao_de_cartao', 'cartao.html'));
});

app.use(express.static('impressao_de_cartao'));


app.listen(3333, () => {
  console.log("Rodando na porta: http://localhost:3333");
});
