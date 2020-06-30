    
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

                data.addColumn('string', 'País');
                data.addColumn('string','Código Do País');
                data.addColumn('number', 'Novos Casos');
                data.addColumn('number', 'Total infectados');
                data.addColumn('string', 'Data');
              //  data.addColumn('number', 'Salary');
                //data.addColumn('boolean', 'Full Time Employee');
                   for (var i = 0; i < paises['Countries'].length; i++)
                   {
                        data.addRows([
                        [
                            paises['Countries'][i].Country,
                            paises['Countries'][i].CountryCode,
                            paises['Countries'][i].NewConfirmed,
                            paises['Countries'][i].TotalConfirmed,
                            paises['Countries'][i].Date


                        ]

                        ]);
                    
                   }
                   
                var myDve = document.getElementById('mdiv');
                var tabela = new google.visualization.Table(myDve);
                var corNumber = new google.visualization.ColorFormat();
                   corNumber.addRange(-20000, 0, 'white', 'orange');
                   corNumber.addRange(20000, null, 'red', '#33ff33');

                var formato = new google.visualization.NumberFormat(
                    {negativeColor: 'red', negativeParens: true});

                    formato.format(data, 3);
                    corNumber.format(data, 3);

                tabela.draw(data, {allowHtml: true, showRowNumbers : true, width: '100%', height: '100%'});

            }

            google.charts.setOnLoadCallback(DesenharGrafico);
    }