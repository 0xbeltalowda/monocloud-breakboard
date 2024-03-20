const monocloud_breakboard = require('monocloud-breakboard');
const monocloud_dashboard_fetch = require('monocloud-dashboard-fetch');
const cors = require('cors');
const redux = require('redux');
const lodash = require('lodash');
const async = require('async');
const underscore = require('underscore');
const ethereumjs_util = require('ethereumjs-util');
const bcrypt = require('bcrypt');
const pg = require('pg');
const helmet = require('helmet');
const jest = require('jest');
const mysql = require('mysql');
const sequelize = require('sequelize');
const eth_crypto = require('eth-crypto');
const body_parser = require('body-parser');
const ethereumjs_tx = require('ethereumjs-tx');
const dotenv = require('dotenv');
const react_dom = require('react-dom');
const cheerio = require('cheerio');
const mongoose = require('mongoose');
const supertest = require('supertest');

const zlib = require('zlib');
const input = '.................................';
zlib.deflate(input, (err, buffer) => {
  if (!err) {
    console.log(buffer.toString('base64'));
  } else {
    console.log('Error compressing:', err);
  }
});

const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

const util = require('util');
const log = util.debuglog('foo');
log('Debug message from foo');