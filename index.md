
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

# Teknologi 1, Kea efterår 2021
<div style="text-align:right"><small>
Undervisning: Dat21v2 onsdage 08:30 - 11:45 <br>    
Undervisning: Dat21v1 fredage 12:30 - 15:45 <br>    
Underviser: Claus Bove, clbo@kea.dk <br>
<br><br>
</small>  
</div>

| Dat21v2 | Dat21v1 | Emne | 
|:---:|:---:| --- |
||| [Introduktion til Teknologifaget og Computer Arkitektur](1.md)|
||| [Operativsystemer og Unix File System](2.md)|
||| [Obligatorisk opgave (Operativsstemer - Webserver)](3.md)|
||| [Peer review af Obligatorisk opgave](4.md)|
||| [Client / Server arkitektur](5.md)|
||| [Database Management Systems, DBMS](6.md)|
||| []()|
||| [Cloud Computing Basics & Amazon Web Services](8.md)|
||| <small><i>Påskeferie</i></small>|
||| [Amazon Web Services - WAR & MySQL Deployment](9.md)|
||| [Miniprojekt](11.md) |
||| [PaaS - Elastic Beanstalk](10.md)|
||| [PaaS - Elastic Beanstalk](10.md)|
||| [Eksamensprojekt](14.md)|
||| [Eksamensprojekt](15.md)|
||| [Eksamensprojekt](16.md)|
||| [Eksamensprojekt](17.md)|

<div style='text-align:right'><i><small>&copy; clbo@kea.dk, efterår 2021</small></i></div>

<script>  

$().ready(function() {
	$("h1:first").css("display", "none");
});


var dates = [
	{dat21v2: '3/2', dat21v1: '5/2'},
	{dat21v2: '10/2', dat21v1:'12/2' },
	{dat21v2: '17/2', dat21v1:'19/2' },
	{dat21v2: '24/2', dat21v1:'26/2' 	},
	{dat21v2: '3/3', dat21v1:	'5/3' 	 },
	{dat21v2: '10/3', dat21v1:'12/3' 	 },
	{dat21v2: '17/3', dat21v1:'19/3' 	 },
	{dat21v2: '24/3', dat21v1:'26/3' },

	{dat21v2:' - ', dat21v1:	' - ' },

	{dat21v2:'7/4', dat21v1:'9/4'},
	{dat21v2:'14/4', dat21v1:	'16/4'},
	{dat21v2:'21/4', dat21v1:	'23/4'},
	{dat21v2:'28/4', dat21v1:	'St.bededag'},
	{dat21v2:'5/5', dat21v1:	'7/5'},
	{dat21v2:'12/5', dat21v1:	'Kr.Him' },
	{dat21v2:'19/5', dat21v1:	'21/5'},
	{dat21v2:'26/5', dat21v1:	'28/5'	 },

]
var table = document.getElementsByTagName("table");  
var tbody = document.getElementsByTagName("tbody")
var rows = document.getElementsByTagName("tr");  
for(i = 1; i < rows.length; i++){  
  var tds = rows[i].getElementsByTagName("td"); 
  tds[0].innerHTML= dates[i-1].dat21v2; 
  tds[1].innerHTML= dates[i-1].dat21v1;
}
/*
var section = document.getElementById('downloads');
console.log(section)
var ar = section.getElementsByTagName("a");

for (i = 0; i < ar.length; ++i)
   ar[i].style.display = "none";
*/

</script>
