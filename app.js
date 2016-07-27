var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
app.engine('handlebars', exphbs({defaultLayout: 'primary'}));
app.set('view engine', 'handlebars');

// Calls Database Connection .. For node console testing only, to be removed later.

var orm = require('./data/orm/orm.js');
// console.log(orm);
// console.log(orm.getStudents);

// Allows you to use files within the public folder

app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/data'));

// Functions for what happens when a / is hit on server

app.get('/', function (req, res) {
	res.render('home');
});

app.get('/api/students', function(req, res){
	orm.getStudents(function(studentsArray) {
		res.json(studentsArray);
	});
});

app.get('/api/personnel', function(req, res){
	orm.getPersonnel(function(personnelData) {
		res.json(personnelData);
	});
});

app.get('/register', function (req, res) {
	res.render('register');
});

app.get('/login', function (req, res) {
	res.render('login');
});

app.get('/logout', function (req, res) {
	res.render('logout');
});

app.get('/randomseats', function (req, res) {
	res.render('randomseats');
});

app.get('/ascendingseats', function (req, res) {
	res.render('asc_seats');
});

app.get('/descendingseats', function (req, res) {
	res.render('desc_seats');
});

app.get('/randomgroups', function (req, res) {
	res.render('randomgroups');
});

app.get('/randomparticipation', function (req, res) {
	res.render('randomparticipation');
});

app.get('/contact', function (req, res) {
	res.render('contact');
});

app.get('/faq', function(req, res){
	res.render('faq');
});

app.get('/about', function(req, res){
	res.render('about');
});

app.get('/seattest', function(req, res){
	res.render('seat_test');
});

// Listens to port on local server and on Heroku

app.listen(process.env.PORT || 8080, function() {
	console.log("Listening on specified port..");
});

process.on('uncaughtException', function(err) {
	console.log(err);
});