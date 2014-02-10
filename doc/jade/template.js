function template(locals) {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),methods = locals_.methods,framecolor = locals_.framecolor,backgroundcolor = locals_.backgroundcolor,label = locals_.label;
// iterate methods
;(function(){
  var $$obj = methods;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var method = $$obj[$index];

switch (method.mode){
case 1:
framecolor = "darkCyan"
backgroundcolor = "lightBlue"
label = "READ"
  break;
case 2:
framecolor = "olive"
backgroundcolor = "darkGreen"
label = "WRITE"
  break;
case 3:
framecolor = "darkBrown"
backgroundcolor = "darkOrange"
label = "UPDATE"
  break;
case 4:
framecolor = "darkRed"
backgroundcolor = "crimson"
label = "DELETE"
  break;
case 5:
framecolor = "darkOrange"
backgroundcolor = "lightOrange"
label = "NOTIFY"
  break;
default:
framecolor = "darker"
backgroundcolor = "dark"
label = "?"
  break;
}
buf.push("<div class=\"accordion\"><div class=\"accordion-frame\"><a class=\"heading fg-white bg-darker\"><span" + (jade.cls(["fg-white bg-" + ( backgroundcolor ) + ""], [true])) + ">" + (jade.escape(null == (jade.interp = label) ? "" : jade.interp)) + "</span>" + (jade.escape(null == (jade.interp = method.name) ? "" : jade.interp)));
if ( method.desc)
{
buf.push("<span class=\"place-right\">" + (jade.escape(null == (jade.interp = method.desc) ? "" : jade.interp)) + "</span>");
}
buf.push("</a><div class=\"content bg-white\"><h4> Arguments</h4>");
if ( method.arguments)
{
buf.push("<table class=\"table hovered\"><thead><tr><th class=\"text-left\">Name</th><th class=\"text-left\">Type</th><th class=\"text-left\">Required</th><th class=\"text-left\">Default</th><th class=\"text-left\">Description</th></tr></thead><tbody>");
// iterate method.arguments
;(function(){
  var $$obj = method.arguments;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var argument = $$obj[$index];

buf.push("<tr><td>" + (jade.escape(null == (jade.interp = argument.name) ? "" : jade.interp)) + "</td><td>" + (jade.escape(null == (jade.interp = argument.type) ? "" : jade.interp)) + "</td><td>");
if ( argument.required)
{
buf.push("<i class=\"icon-checkmark\"></i>");
}
buf.push("</td><td>" + (jade.escape(null == (jade.interp = argument.default) ? "" : jade.interp)) + "</td><td>" + (jade.escape(null == (jade.interp = argument.desc) ? "" : jade.interp)) + "</td></tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var argument = $$obj[$index];

buf.push("<tr><td>" + (jade.escape(null == (jade.interp = argument.name) ? "" : jade.interp)) + "</td><td>" + (jade.escape(null == (jade.interp = argument.type) ? "" : jade.interp)) + "</td><td>");
if ( argument.required)
{
buf.push("<i class=\"icon-checkmark\"></i>");
}
buf.push("</td><td>" + (jade.escape(null == (jade.interp = argument.default) ? "" : jade.interp)) + "</td><td>" + (jade.escape(null == (jade.interp = argument.desc) ? "" : jade.interp)) + "</td></tr>");
    }

  }
}).call(this);

buf.push("</tbody></table>");
}
else
{
buf.push("<p>No arguments</p>");
}
if ( method.return)
{
buf.push("<h4>Return</h4><code>" + (jade.escape(null == (jade.interp = method.return) ? "" : jade.interp)) + "</code>");
}
if ( method.example)
{
buf.push("<h4>Example</h4><pre class=\"prettyprint\">" + (jade.escape(null == (jade.interp = method.example) ? "" : jade.interp)) + "</pre>");
}
buf.push("</div></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var method = $$obj[$index];

switch (method.mode){
case 1:
framecolor = "darkCyan"
backgroundcolor = "lightBlue"
label = "READ"
  break;
case 2:
framecolor = "olive"
backgroundcolor = "darkGreen"
label = "WRITE"
  break;
case 3:
framecolor = "darkBrown"
backgroundcolor = "darkOrange"
label = "UPDATE"
  break;
case 4:
framecolor = "darkRed"
backgroundcolor = "crimson"
label = "DELETE"
  break;
case 5:
framecolor = "darkOrange"
backgroundcolor = "lightOrange"
label = "NOTIFY"
  break;
default:
framecolor = "darker"
backgroundcolor = "dark"
label = "?"
  break;
}
buf.push("<div class=\"accordion\"><div class=\"accordion-frame\"><a class=\"heading fg-white bg-darker\"><span" + (jade.cls(["fg-white bg-" + ( backgroundcolor ) + ""], [true])) + ">" + (jade.escape(null == (jade.interp = label) ? "" : jade.interp)) + "</span>" + (jade.escape(null == (jade.interp = method.name) ? "" : jade.interp)));
if ( method.desc)
{
buf.push("<span class=\"place-right\">" + (jade.escape(null == (jade.interp = method.desc) ? "" : jade.interp)) + "</span>");
}
buf.push("</a><div class=\"content bg-white\"><h4> Arguments</h4>");
if ( method.arguments)
{
buf.push("<table class=\"table hovered\"><thead><tr><th class=\"text-left\">Name</th><th class=\"text-left\">Type</th><th class=\"text-left\">Required</th><th class=\"text-left\">Default</th><th class=\"text-left\">Description</th></tr></thead><tbody>");
// iterate method.arguments
;(function(){
  var $$obj = method.arguments;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var argument = $$obj[$index];

buf.push("<tr><td>" + (jade.escape(null == (jade.interp = argument.name) ? "" : jade.interp)) + "</td><td>" + (jade.escape(null == (jade.interp = argument.type) ? "" : jade.interp)) + "</td><td>");
if ( argument.required)
{
buf.push("<i class=\"icon-checkmark\"></i>");
}
buf.push("</td><td>" + (jade.escape(null == (jade.interp = argument.default) ? "" : jade.interp)) + "</td><td>" + (jade.escape(null == (jade.interp = argument.desc) ? "" : jade.interp)) + "</td></tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var argument = $$obj[$index];

buf.push("<tr><td>" + (jade.escape(null == (jade.interp = argument.name) ? "" : jade.interp)) + "</td><td>" + (jade.escape(null == (jade.interp = argument.type) ? "" : jade.interp)) + "</td><td>");
if ( argument.required)
{
buf.push("<i class=\"icon-checkmark\"></i>");
}
buf.push("</td><td>" + (jade.escape(null == (jade.interp = argument.default) ? "" : jade.interp)) + "</td><td>" + (jade.escape(null == (jade.interp = argument.desc) ? "" : jade.interp)) + "</td></tr>");
    }

  }
}).call(this);

buf.push("</tbody></table>");
}
else
{
buf.push("<p>No arguments</p>");
}
if ( method.return)
{
buf.push("<h4>Return</h4><code>" + (jade.escape(null == (jade.interp = method.return) ? "" : jade.interp)) + "</code>");
}
if ( method.example)
{
buf.push("<h4>Example</h4><pre class=\"prettyprint\">" + (jade.escape(null == (jade.interp = method.example) ? "" : jade.interp)) + "</pre>");
}
buf.push("</div></div></div>");
    }

  }
}).call(this);
;return buf.join("");
}