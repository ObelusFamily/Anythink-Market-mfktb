#!/bin/sh

yarn seeds
node commentsdata.js
node itemdata.js
node userdata.js
