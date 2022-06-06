const { Router } = require('express');
const { zodiacs } = require('../../data/zodiacs');

module.exports = Router()
  .get('/', (req, res) => {
    res.json(zodiacs);
  })
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const matchingZodiac = zodiacs.find((zodiac) => zodiac.id === id);
    res.json(matchingZodiac);
  });
