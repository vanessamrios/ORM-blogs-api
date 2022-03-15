module.exports = (err, _req, res, _next) => {
    console.error(err);
    return res.status(500).send({ message: 'erro na lógica do servidor' });
};