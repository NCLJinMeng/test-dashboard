/*------------------------------------------------------
    Author : www.webthemez.com
    License: Commons Attribution 3.0
    http://creativecommons.org/licenses/by/3.0/
---------------------------------------------------------  */

(function ($) {
    "use strict";
    var mainApp = {

        initFunction: function () {
            /*MENU 
            ------------------------------------*/
            $('#main-menu').metisMenu();
			
            $(window).bind("load resize", function () {
                if ($(this).width() < 768) {
                    $('div.sidebar-collapse').addClass('collapse')
                } else {
                    $('div.sidebar-collapse').removeClass('collapse')
                }
            });

            /* MORRIS BAR CHART
			-----------------------------------------*/
            Morris.Bar({
                element: 'morris-bar-chart',
                data: [{
                    y: 'Monday',
                    a: 60,
                    b: 24
                }, {
                    y: 'Tuesday',
                    a: 55,
                    b: 23
                }, {
                    y: 'Wednesday',
                    a: 90,
                    b: 45
                }, {
                    y: 'Thursday',
                    a: 75,
                    b: 43
                }, {
                    y: 'Friday',
                    a: 120,
                    b: 51
                }, {
                    y: 'saturated',
                    a: 155,
                    b: 82
                }, {
                    y: 'Sunday',
                    a: 120,
                    b: 65
                }],
                xkey: 'y',
                ykeys: ['a', 'b'],
                labels: ['revenue', 'Expenses'],
				 barColors: [
    '#A6A6A6','#8ceab9',
    '#A8E9DC' 
  ],
                hideHover: 'auto',
                resize: true
            });
	 


            /* MORRIS DONUT CHART
			----------------------------------------*/
            Morris.Donut({
                element: 'morris-donut-chart',
                data: [{
                    label: "In-store",
                    value: 11
                }, {
                    label: " take-out",
                    value: 86
                }, {
                    label: "customization",
                    value: 3
                }],
				   colors: [
    '#A688A6','#4477b9',
    '#8ce879' 
  ],
                resize: true
            });

            /* MORRIS AREA CHART
			----------------------------------------*/

            Morris.Area({
                element: 'morris-area-chart',
                data: [{
                    period: '2019 Q1',
                    Honeycomb: 2666,
                    Chocolate: null,
                    Strawberry: 2647
                }, {
                    period: '2019 Q2',
                    Honeycomb: 17780,
                    Chocolate: 12940,
                    Strawberry: 24410
                }, {
                    period: '2019 Q3',
                    Honeycomb: 29120,
                    Chocolate: 19690,
                    Strawberry: 25010
                }, {
                    period: '2019 Q4',
                    Honeycomb: 3767,
                    Chocolate: 3597,
                    Strawberry: 5689
                }, {
                    period: '2020 Q1',
                    Honeycomb: 6810,
                    Chocolate: 1914,
                    Strawberry: 2293
                }, {
                    period: '2020 Q2',
                    Honeycomb: 26700,
                    Chocolate: 12930,
                    Strawberry: 1881
                }, {
                    period: '2020 Q3',
                    Honeycomb: 48200,
                    Chocolate: 27950,
                    Strawberry: 10588
                }, {
                    period: '2020 Q4',
                    Honeycomb: 15073,
                    Chocolate: 8967,
                    Strawberry: 9175
                }, {
                    period: '2021 Q1',
                    Honeycomb: 10687,
                    Chocolate: 4460,
                    Strawberry: 2028
                }, {
                    period: '2021 Q2',
                    Honeycomb: 8432,
                    Chocolate: 5713,
                    Strawberry: 1791
                }],
                xkey: 'period',
                ykeys: ['Honeycomb', 'Chocolate', 'Strawberry'],
                labels: ['Honeycomb', 'Chocolate', 'Strawberry'],
                pointSize: 2,
                hideHover: 'auto',
				  pointFillColors:['#ffffff'],
				  pointStrokeColors: ['black'],
				  lineColors:['#A6A6A6','#8ceab9'],
                resize: true
            });

            /* MORRIS LINE CHART
			----------------------------------------*/
            Morris.Line({
                element: 'morris-line-chart',
                data: [
					  { y: '2018 Q4', a: 90000, b: 60000},
					  { y: '2019 Q1', a: 75000,  b: 55000},
					  { y: '2019 Q2', a: 90000,  b: 30500},
					  { y: '2019 Q3', a: 175000,  b: 101000},
					  { y: '2019 Q4', a: 80000,  b: 65000},
					  { y: '2020 Q1', a: 80000,  b: 40000},
					  { y: '2020 Q2', a: 100000, b: 56000},
					  { y: '2020 Q3', a: 230500, b: 120500},
					  { y: '2020 Q4', a: 80000, b: 60500},
					  { y: '2021 Q1', a: 95000, b: 45000},
					  { y: '2021 Q2', a: 130000, b: 65000}
				],
            
				 
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Total Income', 'Total Outcome'],
      fillOpacity: 0.6,
      hideHover: 'auto',
      behaveLikeLine: true,
      resize: true,
      pointFillColors:['#ffffff'],
      pointStrokeColors: ['black'],
      lineColors:['gray','#8ceab9']
	  
            });
           
        
            $('.bar-chart').cssCharts({type:"bar"});
            $('.donut-chart').cssCharts({type:"donut"}).trigger('show-donut-chart');
            $('.line-chart').cssCharts({type:"line"});

            $('.pie-thychart').cssCharts({type:"pie"});
       
	 
        },

        initialization: function () {
            mainApp.initFunction();

        }

    }
    // Initializing ///

    $(document).ready(function () {
		$(".dropdown-button").dropdown();
		$("#sideNav").click(function(){
			if($(this).hasClass('closed')){
				$('.navbar-side').animate({left: '0px'});
				$(this).removeClass('closed');
				$('#page-wrapper').animate({'margin-left' : '260px'});
				
			}
			else{
			    $(this).addClass('closed');
				$('.navbar-side').animate({left: '-260px'});
				$('#page-wrapper').animate({'margin-left' : '0px'}); 
			}
		});
		
        mainApp.initFunction(); 
    });

	$(".dropdown-button").dropdown();
	
}(jQuery));
