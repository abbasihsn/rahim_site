//var http = require('http');
const express = require('express');
var fs = require('fs');
const path = require('path');
const url = require("url");
var nodemailer = require('nodemailer');

const app = express();

const port = 3000;

/*var transporter = nodemailer.createTransport({
      host: 'webmail.pakcell.ir',
      port: 995,
      //service: 'http://webmail.bahartarabar.com',
      secure : false,
      tls:{
        rejectUnauthorized: false
      },
      transportMethod: 'SMTP',
      auth: {
        user: 'noreply@pakcell.ir',
        pass: 'nUXdTrJEFq$;',
      }
    });

var transporter = nodemailer.createTransport({
  host: 'webmail.pakcell.ir',
  port: 995,
  //service: 'http://webmail.bahartarabar.com',
  secure : false,
  auth: {
	user: 'noreply@pakcell.ir',
	pass: 'nUXdTrJEFq$;'
  }
});

var mailOptions = {
  from: 'noreply@pakcell.ir',
  to: 'abahr010@uottawa.ca',
  subject: 'This is a test email',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});*/

app.use('/static', express.static(path.join(__dirname, 'public')))
app.get('/HomeStyle.css', function(req, res, next)
{
		//console.log('got the css request');
		var css = fs.readFileSync(path.join(__dirname, '/Vivo/HomeStyle.css'), 'utf8');
		res.end(css);
});

app.get('/en/AssessmentFormStyle.css', function(req, res, next)
{
		//console.log('got the css request');
		var css = fs.readFileSync(path.join(__dirname,'/Vivo/AssessmentFormStyle.css'), 'utf8');
		res.end(css);
});

app.get('/fr/AssessmentFormStyle.css', function(req, res, next)
{
		//console.log('got the css request');
		var css = fs.readFileSync(path.join(__dirname, '/Vivo/AssessmentFormStyle.css'), 'utf8');
		res.end(css);
});

app.get('/en/ServicesPRStyle.css', function(req, res, next)
{
		//console.log('got the css request');
		var css = fs.readFileSync(path.join(__dirname,'/Vivo/ServicesPRStyle.css'), 'utf8');
		res.end(css);
});

app.get('/fr/ServicesPRStyle.css', function(req, res, next)
{
		//console.log('got the css request');
		var css = fs.readFileSync(path.join(__dirname,'/Vivo/ServicesPRStyle.css'), 'utf8');
		res.end(css);
});


app.get('/en/ServicesTEStyle.css', function(req, res, next)
{
		//console.log('got the css request');
		var css = fs.readFileSync(path.join(__dirname, '/Vivo/ServicesTEStyle.css'), 'utf8');
		res.end(css);
});

app.get('/fr/ServicesTEStyle.css', function(req, res, next)
{
		//console.log('got the css request');
		var css = fs.readFileSync(path.join(__dirname,'/Vivo/ServicesTEStyle.css'), 'utf8');
		res.end(css);
});

app.get('/en/AboutStyle.css', function(req, res, next)
{
		//console.log('got the css request');
		var css = fs.readFileSync(path.join(__dirname, '/Vivo/AboutStyle.css'), 'utf8');
		res.end(css);
});

app.get('/fr/AboutStyle.css', function(req, res, next)
{
		//console.log('got the css request');
		var css = fs.readFileSync(path.join(__dirname,'/Vivo/AboutStyle.css'), 'utf8');
		res.end(css);
});

app.get('/HomeCode.js', function(req, res, next)
{
		//console.log('got the java script request');
		var js = fs.readFileSync(path.join(__dirname,'/Vivo/HomeCode.js'), 'utf8');
		res.end(js);
});

app.get('/CICC_Logo.png', function(req, res, next)
{
	//console.log('got the png request');
	//var img = fs.readFileSync('./Vivo/CICC_Logo.png', 'utf8');
	//res.set({'Content-Type': 'image/png'});
	res.sendFile(path.join(__dirname, '/Vivo/CICC_Logo.png'));
});

app.get('/en/CICC_Logo.png', function(req, res, next)
{
	//console.log('got the png request');
	//var img = fs.readFileSync('./Vivo/CICC_Logo.png', 'utf8');
	//res.set({'Content-Type': 'image/png'});
	res.sendFile(path.join(__dirname, '/Vivo/CICC_Logo.png'));
});

app.get('/fr/CICC_Logo.png', function(req, res, next)
{
	//console.log('got the png request');
	//var img = fs.readFileSync('./Vivo/CICC_Logo.png', 'utf8');
	//res.set({'Content-Type': 'image/png'});
	res.sendFile(path.join(__dirname, '/Vivo/CICC_Logo.png'));
});


app.get('/SlideShow1.jpg', function(req, res, next)
{
	//console.log('got the image request');
	//var img = fs.readFileSync('./Vivo/SlideShow1.jpg', 'utf8');
	//res.end(img);
	res.sendFile(path.join(__dirname, '/Vivo/SlideShow1.jpg'));
});

app.get('/SlideShow2.jpg', function(req, res, next)
{
	//console.log('got the image request');
	//var img = fs.readFileSync('./Vivo/SlideShow2.jpg', 'utf8');
	//res.end(img);
	res.sendFile(path.join(__dirname, '/Vivo/SlideShow2.jpg'));
});

app.get('/SlideShow3.jpg', function(req, res, next)
{
	//console.log('got the image request');
	//var img = fs.readFileSync('./Vivo/SlideShow3.jpg', 'utf8');
	//res.end(img);
	res.sendFile(path.join(__dirname, '/Vivo/SlideShow3.jpg'));
});

app.get('/en/Services1.jpg', function(req, res, next)
{
	//console.log('got the image request');
	//var img = fs.readFileSync('./Vivo/SlideShow3.jpg', 'utf8');
	//res.end(img);
	res.sendFile(path.join(__dirname, '/Vivo/Services1.jpg'));
});

app.get('/fr/Services1.jpg', function(req, res, next)
{
	//console.log('got the image request');
	//var img = fs.readFileSync('./Vivo/SlideShow3.jpg', 'utf8');
	//res.end(img);
	res.sendFile(path.join(__dirname, '/Vivo/Services1.jpg'));
});

app.get('/en/Services2.jpg', function(req, res, next)
{
	//console.log('got the image request');
	//var img = fs.readFileSync('./Vivo/SlideShow3.jpg', 'utf8');
	//res.end(img);
	res.sendFile(path.join(__dirname, '/Vivo/Services2.jpg'));
});

app.get('/fr/Services2.jpg', function(req, res, next)
{
	//console.log('got the image request');
	//var img = fs.readFileSync('./Vivo/SlideShow3.jpg', 'utf8');
	//res.end(img);
	res.sendFile(path.join(__dirname, '/Vivo/Services2.jpg'));
});

app.get('/en/ServicesPR.jpg', function(req, res, next)
{
	//console.log('got the image request');
	//var img = fs.readFileSync('./Vivo/SlideShow3.jpg', 'utf8');
	//res.end(img);
	res.sendFile(path.join(__dirname, '/Vivo/ServicesPR.jpg'));
});

app.get('/fr/ServicesPR.jpg', function(req, res, next)
{
	//console.log('got the image request');
	//var img = fs.readFileSync('./Vivo/SlideShow3.jpg', 'utf8');
	//res.end(img);
	res.sendFile(path.join(__dirname, '/Vivo/ServicesPR.jpg'));
});


app.get('/en/ServicesTE.jpg', function(req, res, next)
{
	//console.log('got the image request');
	//var img = fs.readFileSync('./Vivo/SlideShow3.jpg', 'utf8');
	//res.end(img);
	res.sendFile(path.join(__dirname, '/Vivo/ServicesTE.jpg'));
});

app.get('/fr/ServicesTE.jpg', function(req, res, next)
{
	//console.log('got the image request');
	//var img = fs.readFileSync('./Vivo/SlideShow3.jpg', 'utf8');
	//res.end(img);
	res.sendFile(path.join(__dirname, '/Vivo/ServicesTE.jpg'));
});

app.get('/en/VivoCanadaLogoEng.jpg', function(req, res, next)
{
	//console.log('got the image request');
	//var img = fs.readFileSync('./Vivo/SlideShow3.jpg', 'utf8');
	//res.end(img);
	res.sendFile(path.join(__dirname, '/Vivo/VivoCanadaLogoEng.jpg'));
});

app.get('/fr/VivoCanadaLogoFrn.jpg', function(req, res, next)
{
	//console.log('got the image request');
	//var img = fs.readFileSync('./Vivo/SlideShow3.jpg', 'utf8');
	//res.end(img);
	res.sendFile(path.join(__dirname, '/Vivo/VivoCanadaLogoFrn.jpg'));
});

app.get('/en/Atieh.png', function(req, res, next)
{
	//console.log('got the png request');
	//var img = fs.readFileSync('./Vivo/CICC_Logo.png', 'utf8');
	//res.set({'Content-Type': 'image/png'});
	res.sendFile(path.join(__dirname, '/Vivo/Atieh.png'));
});

app.get('/fr/Atieh.png', function(req, res, next)
{
	//console.log('got the png request');
	//var img = fs.readFileSync('./Vivo/CICC_Logo.png', 'utf8');
	//res.set({'Content-Type': 'image/png'});
	res.sendFile(path.join(__dirname, '/Vivo/Atieh.png'));
});

app.get('/', function(req, res, next)
{
	//console.log(req.url);
	var html = fs.readFileSync(path.join(__dirname,'/Vivo/HomeFrn.html'), 'utf8');
	res.send(html);
});

app.get('/fr', function(req, res, next)
{
	//console.log(req.url);
	var html = fs.readFileSync(path.join(__dirname, '/Vivo/HomeFrn.html'), 'utf8');
	res.send(html);
});

app.get('/en', function(req, res, next)
{
	//console.log(req.url);
	var html = fs.readFileSync(path.join(__dirname, '/Vivo/HomeEng.html'), 'utf8');
	res.send(html);
});

app.get('/en/temporary_entry', function(req, res, next)
{
	//console.log(req.url);
	var html = fs.readFileSync(path.join(__dirname,'/Vivo/ServicesTempEng.html'), 'utf8');
	res.send(html);
});

app.get('/fr/temporary_entry', function(req, res, next)
{
	//console.log(req.url);
	var html = fs.readFileSync(path.join(__dirname,'/Vivo/ServicesTempFrn.html'), 'utf8');
	res.send(html);
});

app.get('/en/permanent_residency', function(req, res, next)
{
	//console.log(req.url);
	var html = fs.readFileSync(path.join(__dirname, '/Vivo/ServicesPREng.html'), 'utf8');
	res.send(html);
});

app.get('/fr/permanent_residency', function(req, res, next)
{
	//console.log(req.url);
	var html = fs.readFileSync(path.join(__dirname, '/Vivo/ServicesPRFrn.html'), 'utf8');
	res.send(html);
});

app.get('/en/assessment', function(req, res, next)
{
	//console.log(req.url);
	var html = fs.readFileSync(path.join(__dirname, '/Vivo/AssessmentFormEng.html'), 'utf8');
	res.send(html);
});

app.post('/en/assessment', function(req, res, next)
{
	//transporter.sendMail(mailOptions);
	data = "";
	//console.log(req.url);
	//console.log(req.body);
	
	req.on('data', chunk => {
        data += chunk.toString();
    });
	
    req.on('end', () => {
        queryObject = url.parse(data, true);
        //console.log(data);
        //console.log(queryObject);

        // create a new student object
		var textForm = '--------------------------------------------------------------------------------------------------------------------\n';
		language = queryObject.query.language;
		
		if (language == 'English')
		{
			firstname = queryObject.query.firstname;
			textForm = textForm + 'Firstname: ' + firstname + '\n';
			
			lastname = queryObject.query.lastname;
			textForm = textForm + 'Lastname: ' + lastname + '\n';
			
			country = queryObject.query.country;
			textForm = textForm + 'Country of Citizenship/Residence: ' + country + '\n';
			
			age = queryObject.query.age;
			textForm = textForm + 'Age: ' + age + '\n';
			
			email = queryObject.query.email;
			textForm = textForm + 'Email Address: ' + email + '\n';
			
			degree = queryObject.query.degree;
			textForm = textForm + 'Highest Education Level: ' + degree + '\n';
			
			marital = queryObject.query.marital;
			textForm = textForm + 'Marital Status: ' + marital + '\n';
			
			spouseage = queryObject.query.spouseage;
			if (spouseage != null)
				textForm = textForm + 'Age of Spouse: ' + spouseage + '\n';
			
			spousedegree = queryObject.query.spousedegree;
			if (spouseage != null)
				textForm = textForm + 'Highest Education Level of your Spouse: ' + spousedegree + '\n';
			
			children = queryObject.query.children;
			textForm = textForm + 'Do you have any children under the age of 22? ' + children + '\n';
			
			english = queryObject.query.english;
			textForm = textForm + 'Your language skills in English: ' + english + '\n';
			
			french = queryObject.query.french;
			textForm = textForm + 'Your language skills in French: ' + french + '\n';
			
			test = queryObject.query.test;
			textForm = textForm + 'In the past two years, did you sit in an English and/or French test? ' + test + '\n';
			
			job = queryObject.query.job;
			textForm = textForm + 'Have you had paid work experience in the past 10 years? ' + job + '\n';
			
			jobtitle = queryObject.query.jobtitle;
			textForm = textForm + 'Current Job Title: ' + jobtitle + '\n';
			
			workyears = queryObject.query.workyears;
			textForm = textForm + 'How many years in position? ' + workyears + '\n';
			
			share = queryObject.query.share;
			textForm = textForm + 'Do you own shares in a business? ' + job + '\n';
			
			crime = queryObject.query.crime;
			textForm = textForm + 'Do you or your spouse have a criminal record (arrested, charged, or convicted)?  ' + crime + '\n';
			
			medical = queryObject.query.medical;
			textForm = textForm + 'Have you or your spouse ever had a serious medical condition?  ' + medical + '\n';
			
			incanada = queryObject.query.incanada;
			textForm = textForm + 'Have you ever visited/studied/worked in Canada?  ' + incanada + '\n';
			
			offer = queryObject.query.offer;
			textForm = textForm + 'Do you have a job offer in Canada?  ' + offer + '\n';
			
			fs.appendFile('./Vivo/EnglishClients.txt', textForm, function(err) {
				if (err)
				{
					//res.writeHead(500, {"Content-Type": "text/html"});
        			//res.end('Failure');
					res.status(404).end();
					return console.log(err);
				}
				else
				{
					//res.writeHead(200, {"Content-Type": "text/html"});
        			res.status(200).send('OK');
					//console.log('written successfully');
				}
			});
		}
		else
		{
			firstname = queryObject.query.firstname;
			textForm = textForm + 'Prénom: ' + firstname + '\n';
			
			lastname = queryObject.query.lastname;
			textForm = textForm + 'Nom: ' + lastname + '\n';
			
			country = queryObject.query.country;
			textForm = textForm + 'Nationalité/pays de résidence: ' + country + '\n';
			
			age = queryObject.query.age;
			textForm = textForm + 'Âge: ' + age + '\n';
			
			email = queryObject.query.email;
			textForm = textForm + 'Adresse courriel (email): ' + email + '\n';
			
			degree = queryObject.query.degree;
			textForm = textForm + 'Niveau du dernier diplôme obtenu: ' + degree + '\n';
			
			marital = queryObject.query.marital;
			textForm = textForm + 'État matrimonial actuel: ' + marital + '\n';
			
			spouseage = queryObject.query.spouseage;
			if (spouseage != null)
				textForm = textForm + 'Âge de votre épouse/époux: ' + spouseage + '\n';
			
			spousedegree = queryObject.query.spousedegree;
			if (spouseage != null)
				textForm = textForm + 'Niveau du dernier diplôme obtenu de votre épouse/époux: ' + spousedegree + '\n';
			
			children = queryObject.query.children;
			textForm = textForm + 'Avez-vous des enfants qui vous accompagneront au Canada (moins de 22 ans)? ' + children + '\n';
			
			english = queryObject.query.english;
			textForm = textForm + 'Niveau de connaissance linguistique (Anglais): ' + english + '\n';
			
			french = queryObject.query.french;
			textForm = textForm + 'Niveau de connaissance linguistique (Français): ' + french + '\n';
			
			test = queryObject.query.test;
			textForm = textForm + 'Avez-vous déjà passé un test d’anglais et/ou de français (au cours des 2 dernières années)? ' + test + '\n';
			
			job = queryObject.query.job;
			textForm = textForm + 'Emploi (une expérience de travail rémunéré au cours des 10 dernières années)? ' + job + '\n';
			
			jobtitle = queryObject.query.jobtitle;
			textForm = textForm + 'Titre actuel d\'emploi: ' + jobtitle + '\n';
			
			/*workyears = queryObject.query.workyears;
			textForm = textForm + 'How many years in position? ' + workyears + '\n';
			
			share = queryObject.query.share;
			textForm = textForm + 'Do you own shares in a business? ' + job + '\n';*/
			
			crime = queryObject.query.crime;
			textForm = textForm + 'Avez-vous déjà commis, été arrêté, accusé, ou reconnu coupable d’une infraction pénale quelconque dans un pays ou territoire?  ' + crime + '\n';
			
			medical = queryObject.query.medical;
			textForm = textForm + 'Avez-vous ou votre conjoint déjà eu un problème de santé grave?  ' + medical + '\n';
			
			incanada = queryObject.query.incanada;
			textForm = textForm + 'Avez-vous déjà fait une demande pour entrer ou demeurer au Canada (visiter, travailler, étudier)?  ' + incanada + '\n';
			
			offer = queryObject.query.offer;
			textForm = textForm + 'Possédez-vous une offre d’emploi signée par un employeur canadien?  ' + offer + '\n';
			
			fs.appendFile('./Vivo/FrenchClients.txt', textForm, function(err) {
				if (err)
				{
					//res.set(500, {"Content-Type": "text/html"});
					res.status(404).end();
					return console.log(err);
				}
				else
				{
					//res.writeHead(200, {"Content-Type": "text/html"});
        			res.status(200).send('OK');
					//console.log('written successfully');
				}
			});
		}
		
		//res.sendStatus(404).end();
        
		//res.writeHead(500, {"Content-Type": "text/html"});
        //res.send('Failure');
		/*snum: queryObject.query.snum,
        agrade: parseInt(queryObject.query.agrade),
        tgrade: parseInt(queryObject.query.tgrade),
        egrade: parseInt(queryObject.query.egrade)*/
	});
	//var html = fs.readFileSync('./Vivo/AssessmentFormEng.html', 'utf8');
	//res.send(html);
});

app.post('/fr/assessment', function(req, res, next)
{
	//transporter.sendMail(mailOptions);
	data = "";
	//console.log(req.url);
	//console.log(req.body);
	
	req.on('data', chunk => {
        data += chunk.toString();
    });
	
    req.on('end', () => {
        queryObject = url.parse(data, true);
        //console.log(data);
        //console.log(queryObject);

        // create a new student object
		var textForm = '--------------------------------------------------------------------------------------------------------------------\n';
		language = queryObject.query.language;
		
		if (language == 'English')
		{
			firstname = queryObject.query.firstname;
			textForm = textForm + 'Firstname: ' + firstname + '\n';
			
			lastname = queryObject.query.lastname;
			textForm = textForm + 'Lastname: ' + lastname + '\n';
			
			country = queryObject.query.country;
			textForm = textForm + 'Country of Citizenship/Residence: ' + country + '\n';
			
			age = queryObject.query.age;
			textForm = textForm + 'Age: ' + age + '\n';
			
			email = queryObject.query.email;
			textForm = textForm + 'Email Address: ' + email + '\n';
			
			degree = queryObject.query.degree;
			textForm = textForm + 'Highest Education Level: ' + degree + '\n';
			
			marital = queryObject.query.marital;
			textForm = textForm + 'Marital Status: ' + marital + '\n';
			
			spouseage = queryObject.query.spouseage;
			if (spouseage != null)
				textForm = textForm + 'Age of Spouse: ' + spouseage + '\n';
			
			spousedegree = queryObject.query.spousedegree;
			if (spouseage != null)
				textForm = textForm + 'Highest Education Level of your Spouse: ' + spousedegree + '\n';
			
			children = queryObject.query.children;
			textForm = textForm + 'Do you have any children under the age of 22? ' + children + '\n';
			
			english = queryObject.query.english;
			textForm = textForm + 'Your language skills in English: ' + english + '\n';
			
			french = queryObject.query.french;
			textForm = textForm + 'Your language skills in French: ' + french + '\n';
			
			test = queryObject.query.test;
			textForm = textForm + 'In the past two years, did you sit in an English and/or French test? ' + test + '\n';
			
			job = queryObject.query.job;
			textForm = textForm + 'Have you had paid work experience in the past 10 years? ' + job + '\n';
			
			jobtitle = queryObject.query.jobtitle;
			textForm = textForm + 'Current Job Title: ' + jobtitle + '\n';
			
			workyears = queryObject.query.workyears;
			textForm = textForm + 'How many years in position? ' + workyears + '\n';
			
			share = queryObject.query.share;
			textForm = textForm + 'Do you own shares in a business? ' + job + '\n';
			
			crime = queryObject.query.crime;
			textForm = textForm + 'Do you or your spouse have a criminal record (arrested, charged, or convicted)?  ' + crime + '\n';
			
			medical = queryObject.query.medical;
			textForm = textForm + 'Have you or your spouse ever had a serious medical condition?  ' + medical + '\n';
			
			incanada = queryObject.query.incanada;
			textForm = textForm + 'Have you ever visited/studied/worked in Canada?  ' + incanada + '\n';
			
			offer = queryObject.query.offer;
			textForm = textForm + 'Do you have a job offer in Canada?  ' + offer + '\n';
			
			fs.appendFile('./Vivo/EnglishClients.txt', textForm, function(err) {
				if (err)
				{
					//res.writeHead(500, {"Content-Type": "text/html"});
        			//res.end('Failure');
					res.status(404).end();
					return console.log(err);
				}
				else
				{
					//res.writeHead(200, {"Content-Type": "text/html"});
        			res.status(200).send('OK');
					//console.log('written successfully');
				}
			});
		}
		else
		{
			firstname = queryObject.query.firstname;
			textForm = textForm + 'Prénom: ' + firstname + '\n';
			
			lastname = queryObject.query.lastname;
			textForm = textForm + 'Nom: ' + lastname + '\n';
			
			country = queryObject.query.country;
			textForm = textForm + 'Nationalité/pays de résidence: ' + country + '\n';
			
			age = queryObject.query.age;
			textForm = textForm + 'Âge: ' + age + '\n';
			
			email = queryObject.query.email;
			textForm = textForm + 'Adresse courriel (email): ' + email + '\n';
			
			degree = queryObject.query.degree;
			textForm = textForm + 'Niveau du dernier diplôme obtenu: ' + degree + '\n';
			
			marital = queryObject.query.marital;
			textForm = textForm + 'État matrimonial actuel: ' + marital + '\n';
			
			spouseage = queryObject.query.spouseage;
			if (spouseage != null)
				textForm = textForm + 'Âge de votre épouse/époux: ' + spouseage + '\n';
			
			spousedegree = queryObject.query.spousedegree;
			if (spouseage != null)
				textForm = textForm + 'Niveau du dernier diplôme obtenu de votre épouse/époux: ' + spousedegree + '\n';
			
			children = queryObject.query.children;
			textForm = textForm + 'Avez-vous des enfants qui vous accompagneront au Canada (moins de 22 ans)? ' + children + '\n';
			
			english = queryObject.query.english;
			textForm = textForm + 'Niveau de connaissance linguistique (Anglais): ' + english + '\n';
			
			french = queryObject.query.french;
			textForm = textForm + 'Niveau de connaissance linguistique (Français): ' + french + '\n';
			
			test = queryObject.query.test;
			textForm = textForm + 'Avez-vous déjà passé un test d’anglais et/ou de français (au cours des 2 dernières années)? ' + test + '\n';
			
			job = queryObject.query.job;
			textForm = textForm + 'Emploi (une expérience de travail rémunéré au cours des 10 dernières années)? ' + job + '\n';
			
			jobtitle = queryObject.query.jobtitle;
			textForm = textForm + 'Titre actuel d\'emploi: ' + jobtitle + '\n';
			
			/*workyears = queryObject.query.workyears;
			textForm = textForm + 'How many years in position? ' + workyears + '\n';
			
			share = queryObject.query.share;
			textForm = textForm + 'Do you own shares in a business? ' + job + '\n';*/
			
			crime = queryObject.query.crime;
			textForm = textForm + 'Avez-vous déjà commis, été arrêté, accusé, ou reconnu coupable d’une infraction pénale quelconque dans un pays ou territoire?  ' + crime + '\n';
			
			medical = queryObject.query.medical;
			textForm = textForm + 'Avez-vous ou votre conjoint déjà eu un problème de santé grave?  ' + medical + '\n';
			
			incanada = queryObject.query.incanada;
			textForm = textForm + 'Avez-vous déjà fait une demande pour entrer ou demeurer au Canada (visiter, travailler, étudier)?  ' + incanada + '\n';
			
			offer = queryObject.query.offer;
			textForm = textForm + 'Possédez-vous une offre d’emploi signée par un employeur canadien?  ' + offer + '\n';
			
			fs.appendFile('./Vivo/FrenchClients.txt', textForm, function(err) {
				if (err)
				{
					//res.set(500, {"Content-Type": "text/html"});
					res.status(404).end();
					return console.log(err);
				}
				else
				{
					//res.writeHead(200, {"Content-Type": "text/html"});
        			res.status(200).send('OK');
					//console.log('written successfully');
				}
			});
		}
		
		//res.sendStatus(404).end();
        
		//res.writeHead(500, {"Content-Type": "text/html"});
        //res.send('Failure');
		/*snum: queryObject.query.snum,
        agrade: parseInt(queryObject.query.agrade),
        tgrade: parseInt(queryObject.query.tgrade),
        egrade: parseInt(queryObject.query.egrade)*/
	});
	//var html = fs.readFileSync('./Vivo/AssessmentFormEng.html', 'utf8');
	//res.send(html);
});

app.get('/fr/assessment', function(req, res, next)
{
	//console.log(req.url);
	var html = fs.readFileSync(path.join(__dirname, '/Vivo/AssessmentFormFrn.html'), 'utf8');
	res.send(html);
});

app.get('/en/about', function(req, res, next)
{
	//console.log(req.url);
	var html = fs.readFileSync(path.join(__dirname, '/Vivo/AboutPageEng.html'), 'utf8');
	res.send(html);
});

app.get('/fr/about', function(req, res, next)
{
	//console.log(req.url);
	var html = fs.readFileSync(path.join(__dirname, '/Vivo/AboutPageFrn.html'), 'utf8');
	res.send(html);
});

app.listen(port, function() 
{
	console.log('Server started running at port', port); 
});