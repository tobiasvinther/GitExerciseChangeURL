<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="script.js"></script>

# Teknologi 1, Kea efterår 2021
<div style="text-align:right"><small>
Undervisning: Dat21v2 onsdage 08:30 - 11:45 <br>    
Undervisning: Dat21v1 fredage 12:30 - 15:45 <br>    
Underviser: Claus Bove, clbo@kea.dk <br>
<br><br>
</small>  
</div>

| Dat21v2 | Dat21v1 | Emne | 
|:---|:---| --- |
||| [Introduktion til Teknologifaget og Commandline Interface](1.md)|
||| [Databaser](2.md)|
||| [](3.md)|
||| [](4.md)|
||| [](5.md)|
||| [](6.md)|
||| [](7.md)|
||| [](8.md)|
||| [](9.md)|
||| [](10.md) |
||| [](11.md)|
||| [](12.md)|
||| [Eksamensprojekt](13.md)|
||| [Eksamensprojekt](14.md)|
||| [Eksamensprojekt](15.md)|
||| [Eksamensprojekt](16.md)|


<script>  
var dates = [
	{dat21v2: '25/8', dat21v1: '27/8'},
	{dat21v2: '1/9', dat21v1:'3/9' },
	{dat21v2: '8/9 *', dat21v1:'10/9' },
	{dat21v2: '15/9', dat21v1:'17/9' 	},
	{dat21v2: '22/9 *', dat21v1:'24/9'},
	{dat21v2: '29/9', dat21v1:'1/10'  },
	{dat21v2: '6/10 *', dat21v1:'8/10'  },
	{dat21v2: '13/10', dat21v1:'15/10' },

	{dat21v2:'20/10 *', dat21v1:'22/10' },

	{dat21v2:'27/10', dat21v1:'29/10'},
	{dat21v2:'10/11', dat21v1:'5/11'},
	{dat21v2:'17/11 *', dat21v1:'12/11'},
	{dat21v2:'24/11', dat21v1:'19/11'},
	{dat21v2:'1/12 *', dat21v1:'26/11'},
	{dat21v2:'8/12', dat21v1:'3/12' },
	{dat21v2:'15/12', dat21v1:'10/12'},

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
