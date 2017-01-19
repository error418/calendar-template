var SvgCalendar = require("../svg-calendar");
var argv = require("minimist")(process.argv.slice(2));
var yaml = require("yamljs");

var calendar = new SvgCalendar(argv.year, yaml.load("config.yml"));
calendar.generate();
