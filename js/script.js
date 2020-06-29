    
    google.charts.load('current', {'packages':['table']});

    


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
        //document.getElementById('valores').innerHTML = "O pais é : "+ paises['Global'].TotalRecovered;
        let qtdPais = paises['Countries'].length;
        
            function DesenharGrafico()
            {
                
                var data = new google.visualization.DataTable();

                //dados.addColumn('string', 'Pais');

               // dados.addRows(qtdPais);
                

              //  console.log(qtdPais);   
               /* for(var i = 0; i < qtdPais; i++)
                {

                    //dados.setValue(i, paises['Countries'][i].Country);
                    dados.addRows([
                        paises['Countries'][i].Country

                    ]);
                }*/

                data.addColumn('string', 'Name');
              //  data.addColumn('number', 'Salary');
                //data.addColumn('boolean', 'Full Time Employee');
                    data.addRows([
                    [paises['Countries'][0].Country]
                    ]);
                
                var myDve = document.getElementById('mdiv');
                var tabela = new google.visualization.Table(myDve);

                tabela.draw(data, {showRowNumbers : true, width: '100%', height: '100%'});

            }

            google.charts.setOnLoadCallback(DesenharGrafico);
    }