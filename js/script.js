    
    google.charts.load('current', {'packages':['corechart']});

    //google.charts.setOnLoadCallback(DesenharGrafico);


    var header = document.querySelector('header');
   // var section = document.querySelector('section');

    var requerUrl = "https://api.covid19api.com/summary"; //'https://api.covid19api.com/countries';
    
    var resp = new XMLHttpRequest();
    resp.open('GET', requerUrl);
    resp.responseType = 'json';
    resp.send();

    resp.onload = function()
    {
        var paises = resp.response;
        //console.log(paises.length); // como era antes com a outra API
        //console.log(paises['Countries'].length); como é agora com nova API.

        document.getElementById('valores').innerHTML = "O pais é : "+ paises['Global'].TotalRecovered;

       /* console.log(paises['Countries'].length)
        for (var i = 0; i < paises['Countries'].length; i++)
        {
            console.log("O paiz é : "+ paises['Countries'][0].Country);
        }*/

        for(var i = 0 ; i < paises['Countries'].length; i++)
        {

            var para = document.createElement('p');
            para.textContent = "Pais : " + paises['Countries'][i].Country + " -  Descrição : " +paises['Countries'][i].CountryCode;
            var elemento = document.getElementById('mdiv');
 
            elemento.appendChild(para);
    
        }
        
      

        

    }
    

    /*resp.onload = function()
    {
        var paises = resp.response;
        populaPaises(paises);
        mostraPaises(paises);


    }

    resp.onload = function()
    {
        var teste = resp.response;
        alert(teste['Country']);
        
    }

    function populaPaises(jsonObj)
    {
        var myParagraf = document.createElement('p');
        myParagraf.textContent = jsonObj['Country'];
        header.appendChild(myParagraf);

    }

    function mostraPaises(jsonObj)
    {
        var paises = jsonObj['Country'];
        for (var i = 0; i < paises.length; i++)
        {
            var meuArtigo = document.createElement('article');
            var meuPara = document.createElement('p');

          //  meuArtigo.textContent = paises[i].Country;
            meuPara.textContent = paises[i].Country;
            
            meuArtigo.appendChild(meuPara);

            header.appendChild(meuArtigo);

        }
    }*/

/*
function DesenharGrafico()
{
    var dados = google.visualization.dataTable();

    dados.addColumn();

    dados.addRows();
    
}*/ 