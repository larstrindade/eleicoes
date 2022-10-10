// Data retrieved from https://gs.statcounter.com/browser-market-share#monthly-202201-202201-bar

// Create the chart
Highcharts.chart('container', {
    chart: {
      type: 'column'
    },
    title: {
      align: 'left',
      text: 'Votação deputados estaduais. Eleições 2022'
    },
    subtitle: {
      align: 'left',
      text: 'Clique nas colunas oara ver votações anteriores. Fonte: <a href="https://www.tre-ce.jus.br" target="_blank">TRE Ceará.</a>'
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
            name: "João Jaime",
            y: 11555,
            drilldown: "João Jaime"
          },
          {
            name: "Lucilvio",
            y: 9591,
            drilldown: "Lucilvio"
          },
          {
            name: "Firmo",
            y: 5289,
            drilldown: "Firmo"
          },
          {
            name: "Marta Gonçalves",
            y: 4778,
            drilldown: "Marta"
          },
          {
            name: "Julinho",
            y: 3111,
            drilldown: "Julinho"
          },
          {
            name: "Marcos Sobreira",
            y: 1940,
            drilldown: "Marcos Sobreira"
          },
          {
            name: "Dra. Silvana",
            y: 1369,
            drilldown: "Dra. Silvana"
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