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
        name: 'Matheus Noronha',
        y: 20.68,
        sliced: true,
        selected: true
      }, {
        name: 'Fernanda Pessoa',
        y: 9.73
      },  {
        name: 'Junior Mano',
        y: 8.10
      }, {
        name: 'Heitor Freire',
        y: 4.81
      }, {
        name: 'André Figueiredo',
        y: 4.80
      },  {
        name: 'Idilvan',
        y: 4.49
      }, {
        name: 'Célio Studart',
        y: 3.89
      }, {
        name: 'Ronaldo Martins',
        y: 3.61
      }, 
        {
        name: 'Naumi Amorim',
        y: 2.60
      }, {
        name: 'Marcelo Silva',
        y: 2.29
      },{
        name: 'Todos os demais',
        y: 35
      }]
    }]
  });