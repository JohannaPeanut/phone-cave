'use strict';

const express = require('express');
const router = express.Router();
const routeGuard = require('./../middleware/route-guard');

const phones = require('./../utils/phones.json');

router.get('/', (req, res, next) => {
  res.json({ data: phones });
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  //   console.log(phones[id]);
  res.json({ data: phones[id] });
});

module.exports = router;
