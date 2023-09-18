const express = require('express');
const router = express.Router();
const { cekKey } = require('../database/db'); 
var fetch = require('node-fetch');

//================================\\

async function getBuffer(url) {
he = await fetch(url).then(c => c.buffer())
 return he
}
async function Kibar(url) {
he = await fetch(url).then(c => c.json())
 return he
}
function MathRandom(nans) {
he = nans[Math.floor(Math.random() * nans.length)]
 return he
}

//================================\\

router.get('/cekapikey', async (req, res) => {
const apikey = req.query.apikey;
if (apikey === undefined) return res.status(404).send({
  status: 404,
  message: `Coloque o Parametro apikey`
});
const check = await cekKey(apikey);
if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} não achada, se registre pra reseber uma!`
});
res.send({
  status: 200,
  apikey: apikey,
  modo: 'Ativada!'
});
});

router.get('/download/tiktok', async (req, res) => {
const link = req.query.link;
const apikey = req.query.apikey;
if (link === undefined || apikey === undefined) return res.json({ status: 404, message: `coloque o parametro link & apikey` });
const check = await cekKey(apikey);
if (!check) return res.json({ status: 403, message: `apikey ${apikey} não achada, se registre pra reseber uma!` });
u = await Kibar(`https://tohka.tech/api/dl/tiktok?link=${link}&apikey=PkKFXj8cBX`)
res.json({
status: 777,
criador: `JG-Bots`,
resultado: {
videoSemWt: `${u.resultado.videoSemWt}`,
audio: `${u.resultado.audio}`}
})
});

module.exports = router;
