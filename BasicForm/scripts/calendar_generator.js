﻿var selday;
var d;
var y;
var mon;
var ye;
var actday;
var minmim_hour = 8;
var minim_min = 0;
var maxim_hour =17;
var maxim_min = 50;
var hour_array = [];


var day = document.getElementById('divcalendartable');
var minutes = document.getElementById('c_time_box');
var days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];


for (var i = minmim_hour; i < maxim_hour + 1; i++) {
    for (var y = minim_min; y < maxim_min + 10; y = y+10) {
        hour_array = i + '' + y;
       
    }
}







var hours = ['0800', '0810', '0820', '0830', '0840', '0850',
            '0900', '0910', '0920', '0930', '0940', '0950',
            '1000', '1010', '1020', '1030', '1040', '1050',
            '1100', '1110', '1120', '1130', '1140','1150',
            '1200', '1210', '1220', '1230', '1240', '1250',
            '1300', '1310', '1320', '1330', '1340', '1350',
            '1400', '1410', '1420', '1430', '1440', '1450',
            '1500', '1510', '1520', '1530', '1540', '1550',
            '1600', '1610', '1620', '1630', '1640', '1650',
            '1700', '1710', '1720', '1730', '1740', '1750'];

    /*
    var hours2 = [0, 0, 0, 0, 0, 0, 0,
    [0, 0, 0, 0, 0, 0, 0,
    [0, 0, 0, 0, 0, 0, 0,
    [0, 0, 0, 0, 0, 0, 0,
    [0, 0, 0, 0, 0, 0, 0,
    [0, 0, 0, 0, 0, 0, 0,
    [0, 0, 0, 0, 0, 0, 0,
    [0, 0, 0, 0, 0, 0, 0];*/


var hourminfull = [ 14 + '0800', 5 + '0810', 14 + '0820', 13 + '0830', 13 + '0840', 13 + '0850',
                    10 + '0900', 10 + '0910', 5 + '0820', 2 + '0830', 2 + '0840', 2 + '0850',
                    14 + '1200', 14 + '1210', 5 + '1220', 5 + '0830', 5 + '1240', 5 + '1250'];

var Calendar = function (o) {
    //Store div id
    this.divId = o.ParentID;

    // Days of week, starting on Sunday
    this.DaysOfWeek = o.DaysOfWeek;

    console.log("this.DaysOfWeek == ", this.DaysOfWeek)

    // Months, stating on January
    this.Months = o.Months;

    console.log("this.Months == ", this.Months)

    // Set the current month, year
    d = new Date();

    console.log("d == ", d)

    this.CurrentMonth = d.getMonth();

    console.log("this.CurrentMonth == ", this.CurrentMonth);

    this.CurrentYear = d.getFullYear();

    console.log("this.CurrentYear == ", this.CurrentYear);

    var f = o.Format;

    console.log("o == ", o);

    console.log("f == ", f);

    //this.f = typeof(f) == 'string' ? f.charAt(0).toUpperCase() : 'M';

    if (typeof (f) == 'string') {
        this.f = f.charAt(0).toUpperCase();
} else {
        this.f = 'M';
}

    console.log("this.f == ", this.f);

    mon = this.CurrentMonth;
    ye = this.CurrentYear;
   


   
};




    // Goes to next month
Calendar.prototype.nextMonth = function () {
    console.log("Calendar.prototype.nextMonth = function() {");

    if (this.CurrentMonth == 11) {
        console.log("this.CurrentMonth == ", this.CurrentMonth);

        this.CurrentMonth = 0;

        console.log("this.CurrentMonth == ", this.CurrentMonth);

        console.log("this.CurrentYear == ", this.CurrentYear);

        this.CurrentYear = this.CurrentYear + 1;

        console.log("this.CurrentYear == ", this.CurrentYear);
} else {
        console.log("this.CurrentMonth == ", this.CurrentMonth);

        this.CurrentMonth = this.CurrentMonth + 1;

        console.log("this.CurrentMonth + 1 == ", this.CurrentMonth);
}

    this.showCurrent();
    mon = this.CurrentMonth;
    ye = this.CurrentYear;
};

// Goes to previous month
Calendar.prototype.previousMonth = function () {
    console.log("Calendar.prototype.previousMonth = function() {");

    if (this.CurrentMonth == 0) {
        console.log("this.CurrentMonth == ", this.CurrentMonth);

        this.CurrentMonth = 11;

        console.log("this.CurrentMonth == ", this.CurrentMonth);

        console.log("this.CurrentYear == ", this.CurrentYear);

        this.CurrentYear = this.CurrentYear - 1;

        console.log("this.CurrentYear == ", this.CurrentYear);
    } else {
        console.log("this.CurrentMonth == ", this.CurrentMonth);

        this.CurrentMonth = this.CurrentMonth - 1;

        console.log("this.CurrentMonth - 1 == ", this.CurrentMonth);
    }

    this.showCurrent();
    mon = this.CurrentMonth;
    ye = this.CurrentYear;
};

// 
Calendar.prototype.previousYear = function () {
    console.log(" ");

    console.log("Calendar.prototype.previousYear = function() {");

    console.log("this.CurrentYear == " + this.CurrentYear);

    this.CurrentYear = this.CurrentYear - 1;

    console.log("this.CurrentYear - 1 i.e. this.CurrentYear == " + this.CurrentYear);
   
    this.showCurrent();
    mon = this.CurrentMonth;
    ye = this.CurrentYear;
}


// 
Calendar.prototype.nextYear = function () {
    console.log(" ");

    console.log("Calendar.prototype.nextYear = function() {");

    console.log("this.CurrentYear == " + this.CurrentYear);

    this.CurrentYear = this.CurrentYear + 1;

    console.log("this.CurrentYear - 1 i.e. this.CurrentYear == " + this.CurrentYear);

    this.showCurrent();
    mon = this.CurrentMonth;
    ye = this.CurrentYear;
}

// Show current month
Calendar.prototype.showCurrent = function () {
    console.log(" ");

    console.log("Calendar.prototype.showCurrent = function() {");

    console.log("this.CurrentYear == ", this.CurrentYear);

    console.log("this.CurrentMonth == ", this.CurrentMonth);

    this.Calendar(this.CurrentYear, this.CurrentMonth);
    mon = this.CurrentMonth;
    ye = this.CurrentYear;
};

// Show month (year, month)
Calendar.prototype.Calendar = function (y, m) {
    console.log(" ");

    console.log("Calendar.prototype.Calendar = function(y,m){");

    typeof (y) == 'number' ? this.CurrentYear = y : null;

    console.log("this.CurrentYear == ", this.CurrentYear);

    typeof (y) == 'number' ? this.CurrentMonth = m : null;

    console.log("this.CurrentMonth == ", this.CurrentMonth);

    // 1st day of the selected month
    var firstDayOfCurrentMonth = new Date(y, m, 1).getDay();

    console.log("firstDayOfCurrentMonth == ", firstDayOfCurrentMonth);

    // Last date of the selected month
    var lastDateOfCurrentMonth = new Date(y, m + 1, 0).getDate();

    console.log("lastDateOfCurrentMonth == ", lastDateOfCurrentMonth);

    // Last day of the previous month
    console.log("m == ", m);

    var lastDateOfLastMonth = m == 0 ? new Date(y - 1, 11, 0).getDate() : new Date(y, m, 0).getDate();

    console.log("lastDateOfLastMonth == ", lastDateOfLastMonth);

    console.log("Print selected month and year.");

    // Write selected month and year. This HTML goes into <div id="year"></div>
    //var yearhtml = '<span class="yearspan">' + y + '</span>';

    // Write selected month and year. This HTML goes into <div id="month"></div>
    //var monthhtml = '<span class="monthspan">' + this.Months[m] + '</span>';

    // Write selected month and year. This HTML goes into <div id="month"></div>
    var monthandyearhtml = '<span id="monthandyearspan">' + this.Months[m] + ' - ' + y + '</span>';

    console.log("monthandyearhtml == " + monthandyearhtml);

    var html = '<table id="day">';

    // Write the header of the days of the week
    html += '<tr>';

    console.log(" ");

    console.log("Write the header of the days of the week");

    for (var i = 0; i < 7; i++) {
        console.log("i == ", i);

        console.log("this.DaysOfWeek[i] == ", this.DaysOfWeek[i]);

        html += '<th class="daysheader">' + this.DaysOfWeek[i] + '</th>';
    }

    html += '</tr>';

    console.log("Before conditional operator this.f == ", this.f);

    //this.f = 'X';

    var p = dm = this.f == 'M' ? 1 : firstDayOfCurrentMonth == 0 ? -5 : 2;



    console.log("After conditional operator");

    console.log("this.f == ", this.f);

    console.log("p == ", p);

    console.log("dm == ", dm);

    console.log("firstDayOfCurrentMonth == ", firstDayOfCurrentMonth);

    var cellvalue;

    for (var d, i = 0, z0 = 0; z0 < 6; z0++) {
        html += '<tr>';

        console.log("Inside 1st for loop - d == " + d + " | i == " + i + " | z0 == " + z0);

        for (var z0a = 0; z0a < 7; z0a++) {
            console.log("Inside 2nd for loop");

            console.log("z0a == " + z0a);

            d = i + dm - firstDayOfCurrentMonth;

            console.log("d outside if statm == " + d);

            // Dates from prev month
            if (d < 1) {
                console.log("d < 1");

                console.log("p before p++ == " + p);

                cellvalue = lastDateOfLastMonth - firstDayOfCurrentMonth + p++;

                console.log("p after p++ == " + p);

                console.log("cellvalue == " + cellvalue);

                html += '<td id="prevmonthdates">' +
                      '<span id="cellvaluespan">' + (cellvalue) + '</span><br/>' +
                      '<ul id="cellvaluelist"></ul>' +
                    '</td>';

                // Dates from next month
            } else if (d > lastDateOfCurrentMonth) {
                console.log("d > lastDateOfCurrentMonth");

                console.log("p before p++ == " + p);

                html += '<td id="nextmonthdates">' + (p++) + '</td>';

                console.log("p after p++ == " + p);

                // Current month dates
            } else {
                html += '<td id=' + (d) + '>' + (d) + '</td>';

                console.log("d inside else { == " + d);

                p = 1;

                console.log("p inside } else { == " + p);
            }

            if (i % 7 == 6 && d >= lastDateOfCurrentMonth) {
                console.log("INSIDE if (i % 7 == 6 && d >= lastDateOfCurrentMonth) {");

                console.log("i == " + i);

                console.log("d == " + d);

                console.log("z0 == " + z0);

                z0 = 10; // no more rows
            }

            console.log("i before i++ == " + i);

            i++;

            console.log("i after i++ == " + i);
        }

        html += '</tr>';
    }

    // Closes table
    html += '</table>';

    // Write HTML to the div
    //document.getElementById("year").innerHTML = yearhtml;

    //document.getElementById("month").innerHTML = monthhtml;

    document.getElementById("monthandyear").innerHTML = monthandyearhtml;

    document.getElementById(this.divId).innerHTML = html;
   
};

// On Load of the window
window.onload = function () {
   


    // Start calendar
    var c = new Calendar({
        ParentID: "divcalendartable",

        DaysOfWeek: [
        'PO',
        'ÚT',
        'ST',
        'ČT',
        'PÁ',
        'SO',
        'NE'
        ],

        Months: ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'],

        Format: 'dd/mm/yyyy'
    });

    c.showCurrent();

    // Bind next and previous button clicks
    getId('btnPrev').onclick = function () {
        c.previousMonth();
    };

    getId('btnPrevYr').onclick = function () {
        c.previousYear();
    };

    getId('btnNext').onclick = function () {
        c.nextMonth();
    };

    getId('btnNextYr').onclick = function () {
        c.nextYear();
    };
actday = d.getDate();

    // hodiny dne

    
var hourmin = [actday + hours[0], actday + hours[1], actday + hours[2], actday + hours[3], actday + hours[4], actday + hours[5],
            actday + hours[6], actday + hours[7], actday + hours[8], actday + hours[9], actday + hours[10], actday + hours[11],
            actday + hours[12], actday + hours[13], actday + hours[14], actday + hours[15], actday + hours[16], actday + hours[17],
            actday + hours[18], actday + hours[19], actday + hours[20], actday + hours[21], actday + hours[22], actday + hours[23],
            actday + hours[24], actday + hours[25], actday + hours[26], actday + hours[27], actday + hours[28], actday + hours[29],
            actday + hours[30], actday + hours[31], actday + hours[32], actday + hours[33], actday + hours[34], actday + hours[35],
            actday + hours[36], actday + hours[37], actday + hours[38], actday + hours[39], actday + hours[40], actday + hours[41],
            actday + hours[42], actday + hours[43], actday + hours[44], actday + hours[45], actday + hours[46], actday + hours[47],
            actday + hours[48], actday + hours[49], actday + hours[50], actday + hours[51], actday + hours[52], actday + hours[53],
            actday + hours[54], actday + hours[55], actday + hours[56], actday + hours[57], actday + hours[58], actday + hours[59]];
            
            


    for (var i = 0; i < days.length; i++) {
        
        var selday = document.getElementById(actday);
        var myday = document.getElementById(days[i]);
        if (selday == myday) {
            myday.style.background = '#3C9ADF';
            var mont = mon + 1;
            document.getElementById("date").placeholder = actday + '.' + mont + '.' + ye;
            for (y = 0; y < hours.length; y++) {
                
                var identfmin = actday + hours[y];
                
                var fmin = document.getElementById(hours[y]);
               
                if (identfmin === hourmin[y]) {
                    if (identfmin === hourminfull[y]) {
                        fmin.style.background = 'gold';
                       // hours2[i] = 1;
                    } else {
                        hourmin[y]++;
                    }
                } else {
                    hourmin[y]++;
                }
               
            }


        }

        
        
    }

  

}



// Get element by id
function getId(id) {
    return document.getElementById(id);
}



/*
*   Selektivni funkce
*   mesic
*/

day.onclick = function (e) {

    for (var i = 0; i < days.length; i++) {
        var selday = e.target.id;
        var seleday = document.getElementById(selday);
        var myday = document.getElementById(days[i]);

        if (seleday == myday) {
            myday.style.background = '#3C9ADF';
        } else {
            myday.style.background = 'white';
        }
        var mont = (mon + 1);
        if (selday >=1 && selday <=31) {
            document.getElementById("date").value = selday + '.' + mont + '.' + ye;
        } else {
            document.getElementById("date").value = '-';
        }
        
        // hodiny dne
        var hourmin = [selday + hours[0], selday + hours[1], selday + hours[2], selday + hours[3], selday + hours[4], selday + hours[5],
            selday + hours[6], selday + hours[7], selday + hours[8], selday + hours[9], selday + hours[10], selday + hours[11],
            selday + hours[12], selday + hours[13], selday + hours[14], selday + hours[15], selday + hours[16], selday + hours[17],
            selday + hours[18], selday + hours[19], selday + hours[20], selday + hours[21], selday + hours[22], selday + hours[23],
            selday + hours[24], selday + hours[25], selday + hours[26], selday + hours[27], selday + hours[28], selday + hours[29],
            selday + hours[30], selday + hours[31], selday + hours[32], selday + hours[33], selday + hours[34], selday + hours[35],
            selday + hours[36], selday + hours[37], selday + hours[38], selday + hours[39], selday + hours[40], selday + hours[41],
            selday + hours[42], selday + hours[43], selday + hours[44], selday + hours[45], selday + hours[46], selday + hours[47],
            selday + hours[48], selday + hours[49], selday + hours[50], selday + hours[51], selday + hours[52], selday + hours[53],
            selday + hours[54], selday + hours[55], selday + hours[56], selday + hours[57], selday + hours[58], selday + hours[59],
            selday + hours[60], selday + hours[61], selday + hours[62], selday + hours[63], selday + hours[64], selday + hours[65],
            selday + hours[66], selday + hours[67], selday + hours[68], selday + hours[69], selday + hours[70], selday + hours[71]];

        for (y = 0; y < hours.length; y++) {
            var identfmin = selday + hours[y];
            var fmin = document.getElementById(hours[y]);
            if (identfmin === hourmin[y]) {

                if (identfmin === hourminfull[y]) {
                    fmin.style.background = 'gold';
                   // hours2[y] = 1;
                   
                } else {
                    hourmin[y]++;
                  
                    fmin.style.background = '#3C9ADF';

                }
            } else {
                hourmin[y]++;

            }

        }


       
    }

    
};


minutes.onclick = function (e) {

    for (var i = 0; i < hours.length; i++) {
        var mymin = e.target.id;
        var mymin2 = document.getElementById(mymin);
        var mymin3 = document.getElementById(hours[i]);
      


        if (mymin2 == mymin3)
        {
            mymin3.style.background = 'gold';
          //  hours2[i] = 1;
           
        } else if (hours2[i] > 0) {
            mymin3.style.background = '#3C9ADF';
           
        } else if (hours2[i] === 1) {
            mymin3.style.background = 'gold';
        }


        if (mymin >= 1 && mymin <= 1750) {
            document.getElementById("hour").placeholder = mymin[0] + mymin[1] + ':' + mymin[2] + mymin[3];
        } else{
            document.getElementById("hour").placeholder = '-';
        }
            
        
        
           
        

    }
    
   
}


