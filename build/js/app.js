!function n(o,t,e){function r(i,p){if(!t[i]){if(!o[i]){var a="function"==typeof require&&require;if(!p&&a)return a(i,!0);if(u)return u(i,!0);var f=new Error("Cannot find module '"+i+"'");throw f.code="MODULE_NOT_FOUND",f}var c=t[i]={exports:{}};o[i][0].call(c.exports,function(n){var t=o[i][1][n];return r(t?t:n)},c,c.exports,n,o,t,e)}return t[i].exports}for(var u="function"==typeof require&&require,i=0;i<e.length;i++)r(e[i]);return r}({1:[function(n,o,t){function e(n){this.skin=n}e.prototype.pingPong=function(n){for(var o=[],t=1;t<=n;t++)t%15===0?o.push("ping-pong"):t%3===0?o.push("ping"):t%5===0?o.push("pong"):o.push(t);return o},t.calculatorModule=e},{}],2:[function(n,o,t){var e=n("./../js/pingpong.js").calculatorModule;$(document).ready(function(){$("#ping-pong-form").submit(function(n){n.preventDefault();var o=$("#goal").val(),t=new e("hot pink"),r=t.pingPong(o);r.forEach(function(n){$("#solution").append("<li>"+n+"</li>")})})}),$(document).ready(function(){$("#signup").submit(function(n){n.preventDefault();var o=$("#email").val();$("#signup").hide(),$("#solution").prepend("<p>Thank you, "+o+" has been added to our list!</p>")})}),$(document).ready(function(){$("#time").text(moment())})},{"./../js/pingpong.js":1}]},{},[2]);