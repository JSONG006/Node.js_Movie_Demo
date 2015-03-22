var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();

app.set('views','./views/pages');
app.set('view engine', 'jade');

app.use(bodyParser());
app.use(require('body-parser').urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'bower_components')));
app.listen(port);

console.log('movie web start on port'+ port);

//set route

//index.jade
app.get('/', function(req,res){
	res.render('index', {
		title: "Index Page",
		movies:[{
			title: 'Cinderella',
			_id: 1,
			poster:'http://img31.mtime.cn/pi/2014/12/04/084652.42431781_1000X1000.jpg'
		},{
			title: 'Cinderella',
			_id: 2,
			poster:'http://img31.mtime.cn/pi/2014/12/04/084652.42431781_1000X1000.jpg'
		},{
			title: 'Cinderella',
			_id: 3,
			poster:'http://img31.mtime.cn/pi/2014/12/04/084652.42431781_1000X1000.jpg'
		},{
			title: 'Cinderella',
			_id: 4,
			poster:'http://img31.mtime.cn/pi/2014/12/04/084652.42431781_1000X1000.jpg'
		},{
			title: 'Cinderella',
			_id: 5,
			poster:'http://img31.mtime.cn/pi/2014/12/04/084652.42431781_1000X1000.jpg'
		},{
			title: 'Cinderella',
			_id: 6,
			poster:'http://img31.mtime.cn/pi/2014/12/04/084652.42431781_1000X1000.jpg'
		}]
	})
})

//detail.jade
app.get('/movie/:id', function(req,res){
	res.render('detail', {
		title: "Detail Page",
		movie:{
			director: 'Kenneth Branagh',
			country: 'America',
			title: 'Cinderella',
			year: 2015,
			poster: 'http://img31.mtime.cn/pi/2014/12/04/084652.42431781_1000X1000.jpg',
			language: 'English',
			flash: 'http://player.youku.com/player.php/sid/XODY0NzYzNTE2/v.swf',
			summary: "The story of 'Cinderella' follows the fortunes of young Ella whose merchant father remarries following the tragic death of her mother. Keen to support her loving father, Ella welcomes her new stepmother Lady Tremaine and her daughters Anastasia and Drizella into the family home. But when Ella's father suddenly and unexpectedly passes away, she finds herself at the mercy of a jealous and cruel new family. Finally relegated to nothing more than a servant girl covered in ashes, and spitefully renamed Cinderella since she used to work in the cinders, Ella could easily begin to lose hope. Yet, despite the cruelty inflicted upon her, Ella is determined to honor her mother's dying words and to 'have courage and be kind'. She will not give in to despair nor despise those who abuse her. And then there is the dashing stranger she meets in the woods. Unaware that he is really a prince, not merely an employee at the palace, Ella finally feels she has met a kindred soul. It appears as if her fortunes may be about to change when the palace sends out an open invitation for all maidens to attend a ball, raising Ella's hopes of once again encountering the charming 'Kit.' Alas, her stepmother forbids her to attend and callously rips apart her dress. But as in all good fairy tales, help is at hand as a kindly beggar woman steps forward and, armed with a pumpkin and a few mice, changes Cinderella's life forever."
		}
	})
})

//admin.jade
app.get('/admin/movie', function(req,res){
	res.render('admin', {
		title: "Admin Page",
		movie:{
			title: '',
			director: '',
			country: '',
			year: '',
			poster: '',
			flash: '',
			summary: '',
			language:''
		}
	})
})

//list.jade
app.get('/admin/list', function(req,res){
	res.render('list', {
		title: "List Page",
		movies:[{
			director: 'Kenneth Branagh',
			country: 'America',
			title: 'Cinderella',
			year: 2015,
			language: 'English',
			flash: 'http://player.youku.com/player.php/sid/XODY0NzYzNTE2/v.swf',
			summary: "The story of 'Cinderella' follows the fortunes of young Ella whose merchant father remarries following the tragic death of her mother. Keen to support her loving father, Ella welcomes her new stepmother Lady Tremaine and her daughters Anastasia and Drizella into the family home. But when Ella's father suddenly and unexpectedly passes away, she finds herself at the mercy of a jealous and cruel new family. Finally relegated to nothing more than a servant girl covered in ashes, and spitefully renamed Cinderella since she used to work in the cinders, Ella could easily begin to lose hope. Yet, despite the cruelty inflicted upon her, Ella is determined to honor her mother's dying words and to 'have courage and be kind'. She will not give in to despair nor despise those who abuse her. And then there is the dashing stranger she meets in the woods. Unaware that he is really a prince, not merely an employee at the palace, Ella finally feels she has met a kindred soul. It appears as if her fortunes may be about to change when the palace sends out an open invitation for all maidens to attend a ball, raising Ella's hopes of once again encountering the charming 'Kit.' Alas, her stepmother forbids her to attend and callously rips apart her dress. But as in all good fairy tales, help is at hand as a kindly beggar woman steps forward and, armed with a pumpkin and a few mice, changes Cinderella's life forever."
		}]
	})
})