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
                    y: '2006',
                    a: 100,
                    b: 90
                }, {
                    y: '2007',
                    a: 75,
                    b: 65
                }, {
                    y: '2008',
                    a: 50,
                    b: 40
                }, {
                    y: '2009',
                    a: 75,
                    b: 65
                }, {
                    y: '2010',
                    a: 50,
                    b: 40
                }, {
                    y: '2020',
                    a: 75,
                    b: 65
                }, {
                    y: '2021',
                    a: 100,
                    b: 90
                }],
                xkey: 'y',
                ykeys: ['a', 'b'],
                labels: ['Series A', 'Series B'],
                hideHover: 'auto',
                resize: true
            });

            /* MORRIS DONUT CHART
			----------------------------------------*/
            Morris.Donut({
                element: 'morris-donut-chart',
                data: [{
                    label: "Download Sales",
                    value: 12
                }, {
                    label: "In-Store Sales",
                    value: 30
                }, {
                    label: "Mail-Order Sales",
                    value: 20
                }],
                resize: true
            });

            /* MORRIS AREA CHART
			----------------------------------------*/

            Morris.Area({
                element: 'morris-area-chart',
                data: [{
                    period: '2010 Q1',
                    Honeycomb: 2666,
                    Chocolate: null,
                    Strawberry: 2647
                }, {
                    period: '2010 Q2',
                    Honeycomb: 2778,
                    Chocolate: 2294,
                    Strawberry: 2441
                }, {
                    period: '2010 Q3',
                    Honeycomb: 4912,
                    Chocolate: 1969,
                    Strawberry: 2501
                }, {
                    period: '2010 Q4',
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
                    Honeycomb: 5670,
                    Chocolate: 4293,
                    Strawberry: 1881
                }, {
                    period: '2020 Q3',
                    Honeycomb: 4820,
                    Chocolate: 3795,
                    Strawberry: 1588
                }, {
                    period: '2020 Q4',
                    Honeycomb: 15073,
                    Chocolate: 5967,
                    Strawberry: 5175
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
                labels: ['Honeycomb', 'Chocolate', 'iPod Touch'],
                pointSize: 2,
                hideHover: 'auto',
                resize: true
            });

            /* MORRIS LINE CHART
			----------------------------------------*/
            Morris.Line({
                element: 'morris-line-chart',
                data: [{
                    y: '2006',
                    a: 100,
                    b: 90
                }, {
                    y: '2007',
                    a: 75,
                    b: 65
                }, {
                    y: '2008',
                    a: 50,
                    b: 40
                }, {
                    y: '2009',
                    a: 75,
                    b: 65
                }, {
                    y: '2010',
                    a: 50,
                    b: 40
                }, {
                    y: '2020',
                    a: 75,
                    b: 65
                }, {
                    y: '2021',
                    a: 100,
                    b: 90
                }],
                xkey: 'y',
                ykeys: ['a', 'b'],
                labels: ['Series A', 'Series B'],
                hideHover: 'auto',
                resize: true
            });
           
     
        },

        initialization: function () {
            mainApp.initFunction();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.initFunction();
    });

}(jQuery));
