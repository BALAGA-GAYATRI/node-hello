// import * as core from '@actions/core';
// import * as exec from '@actions/exec';
// import * as io from '@actions/io';

const  core = require('@actions/core');
const github = require('@actions/github');
const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node!\n'
  const author = process.env.GITHUB_ACTOR;
  // res.end(msg);
  res.end(`author is : ${author}`);
});

server.listen(port, () => {
  console.log(process.env)
  console.log(`Server running on http://localhost:${port}/`);
});
