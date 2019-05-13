/*
============================================
; Title:  config.js
; Author: Professor Krasso
; Date:  12 May 2019
; Modified By: Lea Trueworthy
; Description: Configures the server
;===========================================
*/

var config = {};

config.web = {};

config.web.port = process.env.PORT || '3000';

config.web.secret = 'topsecret';


module.exports = config;
