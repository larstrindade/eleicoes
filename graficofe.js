// Data retrieved from https://gs.statcounter.com/browser-market-share#monthly-202201-202201-bar

// Create the chart
Highcharts.chart('container', {
    chart: {
      type: 'column'
    },
    title: {
      align: 'left',
      text: 'Votação deputados federais. Eleições 2022'
    },
    subtitle: {
      align: 'left',
      text: 'Clique nas colunas para detalhes. Fonte: <a href="https://www.tre-ce.jus.br" target="_blank">TRE Ceará.</a>'
    },
    accessibility: {
      announceNewData: {
        enabled: true
      }
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        text: 'Total de votos no município'
      }
  
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y}'
        }
      }
    },
  
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b>do total.<br/>'
    },
  
    series: [
      {
        name: "Votos",
        colorByPoint: true,
        data: [
          {
            name: "Matheus Noronha",
            y: 12945,
            drilldown: "Matheus Noronha"
          },
          {
            name: "Fernanda Pessoa",
            y: 6090,
            drilldown: "Fernanda Pessoa"
          },
          {
            name: "Junior Mano",
            y: 5067,
            drilldown: "Junior Mano"
          },
          {
            name: "Heitor Freire",
            y: 3010,
            drilldown: "Heitor Freire"
          },
          {
            name: "André Figueiredo",
            y: 3007,
            drilldown: "André Figueiredo"
          },
          {
            name: "Idilvan",
            y: 2435,
            drilldown: "Idilvan"
          },
          {
            name: "Célio Studart",
            y: 2259,
            drilldown: "Célio Studart"
          }
        ]
      }
    ],
    drilldown: {
      breadcrumbs: {
        position: {
          align: 'right'
        }
      },
     
    }
  });