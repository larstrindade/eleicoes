// Data retrieved from https://netmarketshare.com
Highcharts.chart('container', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Votação - Deputados 2022 - Maranguape'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.2f}%'
        }
      }
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'João Jaime',
        y: 18.42,
        sliced: true,
        selected: true
      }, {
        name: 'Lucilvio Girão',
        y: 15.29
      },  {
        name: 'Firmo',
        y: 8.43
      }, {
        name: 'Marta Gonçalves',
        y: 7.62
      }, {
        name: 'Julinho',
        y: 4.96
      },  {
        name: 'Marcos Sobreira',
        y: 3.05
      }, {
        name: 'Dra. Silvana',
        y: 2.18
      }, {
        name: 'Tomaz Holanda',
        y: 1.92
      }, 
        {
        name: 'Carmelo Neto',
        y: 1.87
      }, {
        name: 'Todos os demais',
        y: 36.26
      }]
    }]
  });