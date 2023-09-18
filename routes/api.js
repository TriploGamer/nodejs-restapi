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
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    res.send({status: 200, apikey: apikey, response: 'Active'});
});

router.get('/youtube/playmp3', async (req, res) => {
const query = req.query.query;
const apikey = req.query.apikey;
if (query === undefined || apikey === undefined) return res.json({ status: 404, message: `coloque o parametro query & apikey` });
const check = await cekKey(apikey);
if (!check) return res.json({ status: 403, message: `apikey ${apikey} não achada, se registre pra reseber uma!` });
a = await Kibar(`https://jgbots-rest-api.herokuapp.com/api/youtube/playmp3?&q=${query}&apikey=key-ofc`)
res.json({
status: 777,
criador: `JG-Bots`,
resultado: {
titulo: `${a.resultado.titulo}`,
thumb: `${a.resultado.thumb}`,
canal: `${a.resultado.canal}`,
publicado_em: `${a.resultado.publicado_em}`,
views: `${a.resultado.views}`,
download: `${a.resultado.download}`}
})
});

router.get('/youtube/playmp4', async (req, res) => {
const query = req.query.query;
const apikey = req.query.apikey;
if (query === undefined || apikey === undefined) return res.json({ status: 404, message: `coloque o parametro query & apikey` });
const check = await cekKey(apikey);
if (!check) return res.json({ status: 403, message: `apikey ${apikey} não achada, se registre pra reseber uma!` });
e = await Kibar(`https://jgbots-rest-api.herokuapp.com/api/youtube/playmp4?&q=${query}&apikey=key-ofc`)
res.json({
status: 777,
criador: `JG-Bots`,
resultado: {
titulo: `${e.resultado.titulo}`,
thumb: `${e.resultado.thumb}`,
canal: `${e.resultado.canal}`,
publicado_em: `${e.resultado.publicado_em}`,
views: `${e.resultado.views}`,
download: `${e.resultado.download}`}
})
});

router.get('/youtube/mp3', async (req, res) => {
const link = req.query.link;
const apikey = req.query.apikey;
if (link === undefined || apikey === undefined) return res.json({ status: 404, message: `coloque o parametro query & apikey` });
const check = await cekKey(apikey);
if (!check) return res.json({ status: 403, message: `apikey ${apikey} não achada, se registre pra reseber uma!` });
i = await Kibar(`https://jgbots-rest-api.herokuapp.com/api/youtube/mp3?&link=${link}&apikey=key-ofc`)
res.json({
status: 777,
criador: `JG-Bots`,
resultado: {
titulo: `${i.resultado.titulo}`,
thumb: `${i.resultado.thumb}`,
canal: `${i.resultado.canal}`,
publicado_em: `${i.resultado.publicado_em}`,
views: `${i.resultado.views}`,
download: `${i.resultado.download}`}
})
});

router.get('/youtube/mp4', async (req, res) => {
const link = req.query.link;
const apikey = req.query.apikey;
if (link === undefined || apikey === undefined) return res.json({ status: 404, message: `coloque o parametro query & apikey` });
const check = await cekKey(apikey);
if (!check) return res.json({ status: 403, message: `apikey ${apikey} não achada, se registre pra reseber uma!` });
o = await Kibar(`https://jgbots-rest-api.herokuapp.com/api/youtube/mp4?&link=${link}&apikey=key-ofc`)
res.json({
status: 777,
criador: `JG-Bots`,
resultado: {
titulo: `${o.resultado.titulo}`,
thumb: `${o.resultado.thumb}`,
canal: `${o.resultado.canal}`,
publicado_em: `${o.resultado.publicado_em}`,
views: `${o.resultado.views}`,
download: `${o.resultado.download}`}
})
});

router.get('/download/tiktok', async (req, res) => {
const link = req.query.link;
const apikey = req.query.apikey;
if (link === undefined || apikey === undefined) return res.json({ status: 404, message: `coloque o parametro query & apikey` });
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

router.get('/tools/gerarnick', async (req, res) => {
const query = req.query.query;
const apikey = req.query.apikey;
if (query === undefined || apikey === undefined) return res.json({ status: 404, message: `coloque o parametro query & apikey` });
const check = await cekKey(apikey);
if (!check) return res.json({ status: 403, message: `apikey ${apikey} não achada, se registre pra reseber uma!` });
Nicks = await Kibar(`https://isyubii-api.tk/api/fazernick?nome=${query}&apikey=key-free`)
res.json([
`${Nicks[0]}`,
`${Nicks[1]}`,
`${Nicks[2]}`,
`${Nicks[3]}`,
`${Nicks[4]}`,
`${Nicks[5]}`,
`${Nicks[6]}`,
`${Nicks[7]}`,
`${Nicks[8]}`,
`${Nicks[9]}`,
`${Nicks[10]}`,
`${Nicks[11]}`,
`${Nicks[12]}`,
`${Nicks[13]}`,
`${Nicks[14]}`,
`${Nicks[15]}`,
`${Nicks[16]}`,
`${Nicks[18]}`,
`${Nicks[19]}`,
`${Nicks[20]}`,
`${Nicks[21]}`,
`${Nicks[22]}`,
`${Nicks[23]}`,
`${Nicks[24]}`,
`${Nicks[25]}`,
`${Nicks[26]}`,
`${Nicks[27]}`,
`${Nicks[28]}`,
`${Nicks[29]}`,
`${Nicks[30]}`,
`${Nicks[31]}`,
`${Nicks[32]}`,
`${Nicks[33]}`,
`${Nicks[34]}`
])
});

module.exports = router;