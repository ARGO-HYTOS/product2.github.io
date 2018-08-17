var pumpcode, motorcode, modulecode, circuitcode, xoptioncode, yoptioncode, tankcode, filtercode, bracketcode, stackingcode, addoncode, sizecode, solenoidcode, powerunitcode = "";
singlespec = "With Starting Module,Without Starting Module";
threespec = "No Selection Allowed";
dcspec = "12V 1HP [0.70 kW],24V 1HP [0.80 kW],24V 1.5HP [1.20 kW],12V 2HP [1.50 kW],24V 2.5HP [2.00 kW],24V 4HP [3.00 kW] with Relay,24V 4HP [3.00 kW] without Relay";
singlegpm = "0.4,0.6,0.7,0.9,1.1,1.4,1.6,1.8,1.9,2.1,2.2,2.5,2.7,2.9,3.1,3.4,3.8,4.2";
threegpm = "0.4,0.6,0.7,0.9,1.1,1.4,1.6,1.8,1.9,2.1,2.2,2.5,2.7,2.9,3.1,3.4,3.8,4.2";
dc44gpm = "0.5,0.8,1.1,1.3,1.6,1.9,2.1,2.4,2.6,2.9";
dc45gpm = "0.5,0.8,1.1,1.3,1.6,1.9,2.1,2.4,2.6,2.9,3.1";
dc46gpm = "0.5,0.8,1.1,1.3,1.6,1.9,2.1,2.4,2.6,2.9,3.1,3.4,3.7,4.0,4.2,4.5";
dc51gpm = "1.1,1.3,1.6,1.9,2.1,2.4,2.6,2.9,3.1,3.4,3.7,4.0,4.2,4.5,4.8";
dc52gpm = "1.1,1.3,1.6,1.9,2.1,2.4,2.6,2.9,3.1,3.4,3.7,4.0,4.2,4.5,4.8,5.0,5.2,5.6";
dc63gpm = "1.9,2.1,2.4,2.6,2.9,3.1,3.4,3.7,4.0,4.2,4.5,4.8,5.0,5.2,5.6,5.8,6.1,6.3,6.6";
fourtenths3p = ["928 [@1725 RPM]", "1233 [@1725 RPM]", "1857 [@1725 RPM]", "2785 [@1725 RPM]"];
sixtenths3p = ["638 [@1725 RPM]841 [@1725 RPM]", "1262 [@1725 RPM]", "1900 [@1725 RPM]", "2524 [@1725 RPM]"];
seventenths3p = ["479 [@1725 RPM]", "624 [@3450 RPM]", "638 [@1725 RPM]", "928 [@3450 RPM]", "957 [@1725 RPM]", "1392 [@3450 RPM]", "1436 [@1725 RPM]", "1857 [@3450 RPM]", "1915 [@1725 RPM]", "2785 [@3450 RPM]", "2886 [@1725 RPM]"];
ninetenths3p = ["377 [@1725 RPM]", "508 [@1725 RPM]", "769 [@1725 RPM]", "1146 [@1725 RPM]", "1523 [@1725 RPM]", "2292 [@1725 RPM]", "2901 [@1725 RPM]"];
oneandonetenth3p = ["421 [@1725 RPM]", "421 [@3450 RPM]", "638 [@1725 RPM]", "638 [@3450 RPM]", "943 [@3450 RPM]", "957 [@1725 RPM]", "1262 [@3450 RPM]", "1276 [@1725 RPM]", "1900 [@1725 RPM]", "1900 [@3450 RPM]", "2524 [@3450 RPM]", "2538 [@ 1725 RPM]"];
oneandfourtenths3p = ["479 [@1725 RPM]", "479 [@3450 RPM]", "725 [@1725 RPM]", "725 [@3450 RPM]", "957 [@1725 RPM]", "957 [@3450 RPM]", "1436 [@1725 RPM]", "1436 [@3450 RPM]", "1914 [@1725 RPM]", "1914 [@3450 RPM]", "2886 [@1725 RPM]]"];
oneandsixtenths3p = ["435 [@1725 RPM]", "667 [@1725 RPM]", "885 [@1725 RPM]", "1320 [@1725 RPM]", "1769 [@1725 RPM]", "2654 [@1725 RPM]"];
oneandeighttenths3p = ["377 [@3450 RPM]", "566 [@3450 RPM]", "769 [@3450 RPM]", "1146 [@3450 RPM]", "1523 [@3450 RPM]", "2292 [@3450 RPM]"];
oneandninetenths3p = ["363 [@1725 RPM]", "551 [@1725 RPM]", "725 [@1725 RPM]", "1088 [@1725 RPM]", "1450 [@1725 RPM]", "2176 [@1725 RPM]"];
twoandonetenth3p = ["493 [@1725 RPM]", "667 [@1725 RPM]", "1001 [@1725 RPM]", "1334 [@1725 RPM]", "2002 [@1725 RPM]", "2901 [@3450 RPM]"];
twoandtwotenths3p = ["479 [@3450 RPM]", "638 [@3450 RPM]", "957 [@3450 RPM]", "1276 [@3450 RPM]", "1900 [@3450 RPM]", "2901 [@3450 RPM]"];
twoandfivetenths3p = ["406 [@1725 RPM]", "551 [@1725 RPM]", "827 [@1725 RPM]", "1102 [@1725 RPM]", "1653 [@1725 RPM]", "2741 [@3450 RPM]"];
twoandseventenths3p = ["392 [@1725 RPM]", "508 [@1725 RPM]", "769[@1725 RPM]", "1030 [@1725 RPM]", "1537 [@1725 RPM]", "2567 [@3450 RPM]"];
twoandninetenths3p = ["363 [@3450 RPM]", "479 [@3450 RPM]", "725 [@3450 RPM]", "957 [@3450 RPM]", "1436 [@3450 RPM]", "2393 [@3450 RPM]"];
threeandonetenth3p = ["334 [@3450 RPM]", "435 [@3450 RPM]", "667 [@3450 RPM]", "885 [@3450 RPM]", "1320 [@3450 RPM]", "2205 [@3450 RPM]"];
threeandfourtenths3p = ["406 [@1725 RPM]", "609 [@1725 RPM]", "812 [@1725 RPM]", "1218 [@1725 RPM]", "2016 [@1725 RPM]"];
threeandeighttenths3p = ["363 [@3450 RPM]", "551 [@3450 RPM]", "725 [@3450 RPM]", "1088 [@3450 RPM]", "1813 [@3450 RPM]"];
fourandtwotenths3p = ["334 [@3450 RPM]", "493 [@3450 RPM]", "667 [@3450 RPM]", "1001 [@3450 RPM]", "1668 [@3450 RPM]"];
fourtenths1p = ["928 [@1725 RPM]", "1233 [@1725 RPM]", "1857 [@1725 RPM]"];
sixtenths1p = ["638 [@1725 RPM]", "841 [@1725 RPM]", "1262 [@1725 RPM]", "1900 [@1725 RPM]"];
seventenths1p = ["479 [@1725 RPM]", "624 [@3450 RPM]", "638 [@1725 RPM]", "928 [@3450 RPM]", "957 [@1725 RPM]", "1392 [@3450 RPM]", "1436 [@1725 RPM]", "1857 [@3450 RPM]", "1915 [@1725 RPM]", "2785 [@3450 RPM]"];
ninetenths1p = ["377 [@1725 RPM]", "508 [@1725 RPM]", "769 [@1725 RPM]", "1146 [@1725 RPM]", "1523 [@1725]", "2901 [@1725]"];
oneandonetenth1p = ["319 [@1725 RPM]", "421 [@1725 RPM]", "421 [@3450 RPM]", "638 [@1725 RPM]", "638 [@3450 RPM]", "943 [@3450 RPM]", "957 [@1725 RPM]"];
oneandfourtenths1p = ["319 [@1725 RPM]", "319 [@3450 RPM]", "479 [@1725 RPM]", "479 [@3450 RPM]", "725 [@1725 RPM]", "725 [@3450 RPM]", "957 [@1725 RPM]", "957 [@3450 RPM]", "1436 [@1725 RPM]", "1436 [@3450 RPM]", "1914 [@1725 RPM]", "1914 [@3450 RPM]", "2886 [@3450 RPM]"];
oneandsixtenths1p = ["290 [@1725 RPM]", "435 [@1725 RPM]", "667 [@1725 RPM]", "885 [@1725 RPM]", "1320 [@1725 RPM]", "1770 [@1725 RPM]"];
oneandeighttenths1p = ["261 [@3450 RPM]", "377 [@3450 RPM]", "566 [@3450 RPM]", "769 [@3450 RPM]", "1146 [@3450 RPM]", "1523 [@3450 RPM]", "2901 [@3450 RPM]"];
oneandninetenths1p = ["247 [@1725 RPM]", "363 [@1725 RPM]", "551 [@1725 RPM]", "725 [@1725 RPM]", "1088 [@1725 RPM]", "1450 [@1725 RPM]", "2176 [@1725 RPM]"];
twoandonetenth1p = ["334 [@1725 RPM]", "493 [@1725 RPM]", "667 [@1725 RPM]", "1001 [@1725 RPM]", "1334 [@1725 RPM]", "2002 [@1725 RPM]"];
twoandtwotenths1p = ["319 [@3450 RPM]", "479 [@3450 RPM]", "638 [@3450 RPM]", "957 [@3450 RPM]", "1276 [@3450 RPM]", "1900 [@3450 RPM]"];
twoandfivetenths1p = ["276 [@1725 RPM]", "406 [@1725 RPM]", "551 [@1725 RPM]", "827 [@1725 RPM]", "1102 [@1725 RPM]", "1653 [@1725 RPM]"];
twoandseventenths1p = ["261 [@1725 RPM]", "392 [@1725 RPM]", "508 [@1725 RPM]", "769 [@1725 RPM]", "1030 [@1725 RPM]", "1537 [@1725 RPM]"];
twoandninetenths1p = ["363 [@3450 RPM]", "479 [@3450 RPM]", "725 [@3450 RPM]", "957 [@3450 RPM]", "1436 [@3450 RPM]"];
threeandonetenth1p = ["334 [@3450 RPM]", "435 [@3450 RPM]", "667 [@3450 RPM]", "885 [@3450 RPM]", "1320 [@3450 RPM]"];
threeandfourtenths1p = ["305 [@1725 RPM]", "406 [@1725 RPM]", "609 [@1725 RPM]", "812 [@1725 RPM]", "1218 [@1725 RPM]"];
threeandeighttenths1p = ["276 [@3450 RPM]", "363 [@3450 RPM]", "551 [@3450 RPM]", "725 [@3450 RPM]", "1088 [@3450 RPM]"];
fourandtwotenths1p = ["334 [@3450 RPM]", "493 [@3450 RPM]", "667 [@3450 RPM]", "1001 [@3450 RPM]"];
    
$("#motor-type").change(function() {
    var $motor = $(this).val();
    var vals = [];
    if ($motor === 'Single-Phase Motor') {
        vals = singlespec.split(",");
    } else if ($motor === 'Three-Phase Motor') {
        vals = threespec.split(",");
    } else if ($motor === 'DC Electric Motor') {
        vals = dcspec.split(",");
    }
    $("#motor-spec").empty();
    $("#gpm").empty();
    $("#psi").empty();
    $("#hydrocircuit").empty();
    $("#xoption").empty();
    $("#size").empty();
    $("#add-on").empty();
    $("#yoption").empty();
    $("#filter").empty();
    $("#style").empty();
    $("#tank").empty();
    $("#bracket").empty();
    $("#solenoid-voltage").empty();
    $("#horder").remove();
    $("#motor-spec").prepend("<option selected disabled hidden></option>");
    $.each(vals, function(index, value) {
        $("#motor-spec").append("<option>" + value + "</option>");
    });
});
$("#motor-spec").change(function() {
    var $spec = $(this).val();
    var vals = [];
    if ($("#motor-type").val() === 'Single-Phase Motor') {
        vals = singlegpm.split(",");
        if ($spec === 'With Starting Module') {
            modulecode = 'M';
        } else if ($spec === 'Without Starting Module') {
            modulecode = '0';
        }
    } else if ($("#motor-type").val() === 'Three-Phase Motor') {
        vals = threegpm.split(",");
        modulecode = '0';
    } else if ($spec === '12V 1HP [0.70 kW]') {
        vals = dc45gpm.split(",");
        modulecode = 'R';
        enginecode = '45';
    } else if ($spec === '24V 1HP [0.80 kW]') {
        vals = dc44gpm.split(",");
        modulecode = 'R';
        enginecode = '44';
    } else if ($spec === '24V 1.5HP [1.20 kW]') {
        vals = dc46gpm.split(",");
        modulecode = 'R';
        enginecode = '46';
    } else if ($spec === '12V 2HP [1.50 kW]') {
        vals = dc51gpm.split(",");
        modulecode = 'R';
        enginecode = '51';
    } else if ($spec === '24V 2.5HP [2.00 kW]') {
        vals = dc52gpm.split(",");
        modulecode = 'R';
        enginecode = '52';
    } else if ($spec === '24V 4HP [3.00 kW] with Relay') {
        vals = dc63gpm.split(",");
        modulecode = 'R';
        enginecode = '63';
    } else if ($spec === '24V 4HP [3.00 kW] without Relay') {
        vals = dc63gpm.split(",");
        modulecode = '0';
        enginecode = '63';
    }
    $("#gpm").empty();
    $("#psi").empty();
    $("#hydrocircuit").empty();
    $("#xoption").empty();
    $("#size").empty();
    $("#yoption").empty();
    $("#tank").empty();
    $("#add-on").empty();
    $("#filter").empty();
    $("#bracket").empty();
    $("#style").empty();
    $("#solenoid-voltage").empty();
    $("#horder").remove();
    $("#gpm").prepend("<option selected disabled hidden></option>");
    $.each(vals, function(index, value) {
        $("#gpm").append("<option>" + value + "</option>");
    });
});
$("#gpm").change(function () {
    var $gpm = $(this).val();
    var vals = [];
    if ($("#motor-type").val() === 'Single-Phase Motor') {
        if ($gpm === '0.4') {
            vals = fourtenths1p;
        } else if ($gpm === '0.6') {
            vals = sixtenths1p;
        } else if ($gpm === '0.7') {
            vals = seventenths1p;
        } else if ($gpm === '0.9') {
            vals = ninetenths1p;
        } else if ($gpm === '1.1') {
            vals = oneandonetenth1p;
        } else if ($gpm === '1.4') {
            vals = oneandfourtenths1p;
        } else if ($gpm === '1.6') {
            vals = oneandsixtenths1p;
        } else if ($gpm === '1.8') {
            vals = oneandeighttenths1p;
        } else if ($gpm === '1.9') {
            vals = oneandninetenths1p;
        } else if ($gpm === '2.1') {
            vals = twoandonetenth1p;
        } else if ($gpm === '2.2') {
            vals = twoandtwotenths1p;
        } else if ($gpm === '2.5') {
            vals = twoandfivetenths1p;
        } else if ($gpm === '2.7') {
            vals = twoandseventenths1p;
        } else if ($gpm === '2.9') {
            vals = twoandninetenths1p;
        } else if ($gpm === '3.1') {
            vals = threeandonetenth1p;
        } else if ($gpm === '3.4') {
            vals = threeandfourtenths1p;
        } else if ($gpm === '3.8') {
            vals = threeandeighttenths1p;
        } else if ($gpm === '4.2') {
            vals = fourandtwotenths1p;
        }
    } else if ($("#motor-type").val() === 'Three-Phase Motor') {
        if ($gpm === '0.4') {
            vals = fourtenths3p;
        } else if ($gpm === '0.6') {
            vals = sixtenths3p;
        } else if ($gpm === '0.7') {
            vals = seventenths3p;
        } else if ($gpm === '0.9') {
            vals = ninetenths3p;
        } else if ($gpm === '1.1') {
            vals = oneandonetenth3p;
        } else if ($gpm === '1.4') {
            vals = oneandfourtenths3p;
        } else if ($gpm === '1.6') {
            vals = oneandsixtenths3p;
        } else if ($gpm === '1.8') {
            vals = oneandeighttenths3p;
        } else if ($gpm === '1.9') {
            vals = oneandninetenths3p;
        } else if ($gpm === '2.1') {
            vals = twoandonetenth3p;
        } else if ($gpm === '2.2') {
            vals = twoandtwotenths3p;
        } else if ($gpm === '2.5') {
            vals = twoandfivetenths3p;
        } else if ($gpm === '2.7') {
            vals = twoandseventenths3p;
        } else if ($gpm === '2.9') {
            vals = twoandninetenths3p;
        } else if ($gpm === '3.1') {
            vals = threeandonetenth3p;
        } else if ($gpm === '3.4') {
            vals = threeandfourtenths3p;
        } else if ($gpm === '3.8') {
            vals = threeandeighttenths3p;
        } else if ($gpm === '4.2') {
            vals = fourandtwotenths3p;
        }
    } else if ($("#motor-spec").val() === '12V 1HP [0.70 kW]') {
        if ($gpm === '0.5') {
            vals = "2524,3089".split(",");
        } else if ($gpm === '0.8') {
            vals = "1218,1784,1973".split(",");
        } else if ($gpm === '1.1') {
            vals = "1088,1537".split(",");
        } else if ($gpm === '1.3') {
            vals = "566,1102,1421,1450".split(",");
        } else if ($gpm === '1.6') {
            vals = "696,1102,1160".split(",");
        } else if ($gpm === '1.9') {
            vals = "348,725,957,1088".split(",");
        } else if ($gpm === '2.1') {
            vals = "377,696,899".split(",");
        } else if ($gpm === '2.4') {
            vals = "493,754".split(",");
        } else if ($gpm === '2.6') {
            vals = "290,580".split(",");
        } else if ($gpm === '2.9') {
            vals = "435".split(",");
        } else if ($gpm === '3.1') {
            vals = "304".split(",");
        } 
    } else if ($("#motor-spec").val() === '24V 1HP [0.80 kW]') {
        if ($gpm === '0.5') {
            vals = "3133".split(",");
        } else if ($gpm === '0.8') {
            vals = "1088,2176".split(",");
        } else if ($gpm === '1.1') {
            vals = "1175,1944".split(",");
        } else if ($gpm === '1.3') {
            vals = "435,1160,1682".split(",");
        } else if ($gpm === '1.6') {
            vals = "609,1160,1711".split(",");
        } else if ($gpm === '1.9') {
            vals = "754,1247".split(",");
        } else if ($gpm === '2.1') {
            vals = "406,812,1015".split(",");
        } else if ($gpm === '2.4') {
            vals = "435,812".split(",");
        } else if ($gpm === '2.6') {
            vals = "580".split(",");
        } else if ($gpm === '2.9') {
            vals = "406".split(",");
        }
    } else if ($("#motor-spec").val() === '24V 1.5HP [1.20 kW]') {
        if ($gpm === '0.5') {
            vals = "2872".split(",");
        } else if ($gpm === '0.8') {
            vals = "827,2393".split(",");
        } else if ($gpm === '1.1') {
            vals = "1001,1885".split(",");
        } else if ($gpm === '1.3') {
            vals = "305,986,1711".split(",");
        } else if ($gpm === '1.6') {
            vals = "493,1044,1421".split(",");
        } else if ($gpm === '1.9') {
            vals = "232,638,972,1276".split(",");
        } else if ($gpm === '2.1') {
            vals = "348,609,986,1102".split(",");
        } else if ($gpm === '2.4') {
            vals = "377,595,884".split(",");
        } else if ($gpm === '2.6') {
            vals = "230,507,653,841".split(",");
        } else if ($gpm === '2.9') {
            vals = "333,479,653,725".split(",");
        } else if ($gpm === '3.1') {
            vals = "319,507,580,710".split(",");
        } else if ($gpm === '3.4') {
            vals = "377,450,609".split(",");
        } else if ($gpm === '3.7') {
            vals = "232,304,493".split(",");
        } else if ($gpm === '4.0') {
            vals = "218,406".split(",");
        } else if ($gpm === '4.2') {
            vals = "319".split(",");
        } else if ($gpm === '4.5') {
            vals = "218".split(",");
        }
    } else if ($("#motor-spec").val() === '12V 2HP [1.50 kW]') {
        if ($gpm === '1.1') {
            vals = "2001,2741".split(",");
        } else if ($gpm === '1.3') {
            vals = "435,1305,2480".split(",");
        } else if ($gpm === '1.6') {
            vals = "392,1479,2060".split(",");
        } else if ($gpm === '1.9') {
            vals = "653,1305".split(",");
        } else if ($gpm === '2.1') {
            vals = "812,1682".split(",");
        } else if ($gpm === '2.4') {
            vals = "392,1276,1450".split(",");
        } else if ($gpm === '2.6') {
            vals = "841,1015".split(",");
        } else if ($gpm === '2.9') {
            vals = "522,725,1015,1262".split(",");
        } else if ($gpm === '3.1') {
            vals = "261,406,841,1044".split(",");
        } else if ($gpm === '3.4') {
            vals = "218,580,826".split(",");
        } else if ($gpm === '3.7') {
            vals = "348,551,870".split(",");
        } else if ($gpm === '4.0') {
            vals = "203,392,725,798".split(",");
        } else if ($gpm === '4.2') {
            vals = "261,580,653".split(",");
        } else if ($gpm === '4.5') {
            vals = "348,450".split(",");
        } else if ($gpm === '4.8') {
            vals = "232,334".split(",");
        }
    } else if ($("#motor-spec").val() === '24V 2.5HP [2.00 kW]') {
        if ($gpm === '1.1') {
            vals = "2002,3394".split(",");
        } else if ($gpm === '1.3') {
            vals = "740,1827,3133".split(",");
        } else if ($gpm === '1.6') {
            vals = "957,1827,2741".split(",");
        } else if ($gpm === '1.9') {
            vals = "435,1044,1871".split(",");
        } else if ($gpm === '2.1') {
            vals = "566,1218,2089,2234".split(",");
        } else if ($gpm === '2.4') {
            vals = "218,696,1479,1682".split(",");
        } else if ($gpm === '2.6') {
            vals = "435,1044,1160,1653".split(",");
        } else if ($gpm === '2.9') {
            vals = "218,740,870,1189,1334".split(",");
        } else if ($gpm === '3.1') {
            vals = "435,580,957,1102".split(",");
        } else if ($gpm === '3.4') {
            vals = "261,377,769,841".split(",");
        } else if ($gpm === '3.7') {
            vals = "203,493,580,1174,1305".split(",");
        } else if ($gpm === '4.0') {
            vals = "363,406,957,1117".split(",");
        } else if ($gpm === '4.2') {
            vals = "261,798,884,1001".split(",");
        } else if ($gpm === '4.5') {
            vals = "566,653,885".split(",");
        } else if ($gpm === '4.8') {
            vals = "435,508,783".split(",");
        } else if ($gpm === '5.0') {
            vals = "319,377,580".split(",");
        } else if ($gpm === '5.2') {
            vals = "479".split(",");
        } else if ($gpm === '5.6') {
            vals = "363".split(",");
        }
    } else if ($("#motor-spec").val() === '24V 4HP [3.00 kW] with Relay' || $("#motor-spec").val() === '24V 4HP [3.00 kW] without Relay') {
        if ($gpm === '1.9') {
            vals = "2001".split(",");
        } else if ($gpm === '2.1') {
            vals = "348,2132".split(",");
        } else if ($gpm === '2.4') {
            vals = "827,3524".split(",");
        } else if ($gpm === '2.6') {
            vals = "2437,3046".split(",");
        } else if ($gpm === '2.9') {
            vals = "1349,1827,3133".split(",");
        } else if ($gpm === '3.1') {
            vals = "522,1218,2654".split(",");
        } else if ($gpm === '3.4') {
            vals = "653,1958,2611".split(",");
        } else if ($gpm === '3.7') {
            vals = "1044,1827".split(",");
        } else if ($gpm === '4.0') {
            vals = "609,1305".split(",");
        } else if ($gpm === '4.2') {
            vals = "261,740,2118".split(",");
        } else if ($gpm === '4.5') {
            vals = "261,1537,1885".split(",");
        } else if ($gpm === '4.8') {
            vals = "1247,1508".split(",");
        } else if ($gpm === '5.0') {
            vals = "870,1160".split(",");
        } else if ($gpm === '5.2') {
            vals = "493,754".split(",");
        } else if ($gpm === '5.6') {
            vals = "493,1552".split(",");
        } else if ($gpm === '5.8') {
            vals = "1306".split(",");
        } else if ($gpm === '6.1') {
            vals = "971".split(",");
        } else if ($gpm === '6.3') {
            vals = "769".split(",");
        } else if ($gpm === '6.6') {
            vals = "566".split(",");
        }
    }
    $("#psi").empty();
    $("#hydrocircuit").empty();
    $("#xoption").empty();
    $("#yoption").empty();
    $("#tank").empty();
    $("#add-on").empty();
    $("#style").empty();
    $("#size").empty();
    $("#filter").empty();
    $("#bracket").empty();
    $("#solenoid-voltage").empty();
    $("#horder").remove();
    $("#psi").prepend("<option selected disabled hidden></option>");
    $.each(vals, function(index, value) {
        $("#psi").append("<option>" + value + "</option>");
    });
});
$("#psi").change(function () {
    var $psi = $(this).val();
    var $gpm = $("#gpm").val();
    var vals = [];
    if ($("#motor-type").val() === 'Three-Phase Motor') {
        if ($gpm === '0.4') {
            var x = fourtenths3p.indexOf($psi);
            var engine = ["9", "10", "11", "12"];
            enginecode = engine[x];
            pumpcode = "08";
        } else if ($gpm === '0.6') {
            var x = sixtenths3p.indexOf($psi);
            var engine = ["9", "10", "11", "12", "13"];
            enginecode = engine[x];
            pumpcode = "12";
        } else if ($gpm === '0.7') {
            var x = seventenths3p.indexOf($psi);
            var engine = ["9", "25", "10", "26", "11", "27", "12", "28","13", "29", "14"];
            enginecode = engine[x];
            if (enginecode === "9" || enginecode === "10" || enginecode === "11" || enginecode === "12" || enginecode === "13" || enginecode === "14") {
                pumpcode = "16";
            } else {
                pumpcode = "08";
            }
        } else if ($gpm === '0.9') {
            var x = ninetenths3p.indexOf($psi);
            var engine = ["9", "10", "11", "12", "13", "14", "15"];
            enginecode = engine[x];
            pumpcode = "21";
        } else if ($gpm === '1.1') {
            var x = oneandonetenth3p.indexOf($psi);
            var engine = ["10", "25", "11", "26", "27", "12", "28", "13", "14", "29", "30", "15"];
            enginecode = engine[x];
            if (enginecode === '25' || enginecode === '26' || enginecode === '27' || enginecode === '28' || enginecode === '29' || enginecode === '30') {
                pumpcode = '12';
            } else {
                pumpcode = '25';
            }
        } else if ($gpm === '1.4') {
            var x = oneandfourtenths3p.indexOf($psi);
            var engine = ["11", "26", "12", "27", "13", "28", "14", "29", "15", "30", "16"];
            enginecode = engine[x];
            if (enginecode === '26' || enginecode === '27' || enginecode === '28' || enginecode === '29' || enginecode === '30') {
                pumpcode = '16';
            } else {
                pumpcode = '33';
            }
        } else if ($gpm === '1.6') {
            var x = oneandsixtenths3p.indexOf($psi);
            var engine = ["11", "12", "13", "14", "15", "16"];
            enginecode = engine[x];
            pumpcode = "36";
        } else if ($gpm === '1.8') {
            var x = oneandeighttenths3p.indexOf($psi);
            var engine = ["26", "27", "28", "19", "30", "31"];
            enginecode = engine[x];
            pumpcode = "21";
        } else if ($gpm === '1.9') {
            var x = oneandninetenths3p.indexOf($psi);
            var engine = ["11", "12", "13", "14", "15", "16"];
            enginecode = engine[x];
            pumpcode = "44";
        } else if ($gpm === '2.1') {
            var x = twoandonetenth3p.indexOf($psi);
            var engine = ["12", "13", "14", "15", "16", "17"];
            enginecode = engine[x];
            pumpcode = "48";
        } else if ($gpm === '2.2') {
            var x = twoandtwotenths3p.indexOf($psi);
            var engine = ["27", "28", "29", "30", "31", "32"];
            enginecode = engine[x];
            pumpcode = "25";
        } else if ($gpm === '2.5') {
            var x = twoandfivetenths3p.indexOf($psi);
            var engine = ["12", "13", "14", "15", "16", "17"];
            enginecode = engine[x];
            pumpcode = "58";
        } else if ($gpm === '2.7') {
            var x = twoandseventenths3p.indexOf($psi);
            var engine = ["12", "13", "14", "15", "16", "17"];
            enginecode = engine[x];
            pumpcode = "62";
        } else if ($gpm === '2.9') {
            var x = twoandninetenths3p.indexOf($psi);
            var engine = ["27", "28", "29", "30", "31", "32"];
            enginecode = engine[x];
            pumpcode = "33";
        } else if ($gpm === '3.1') {
            var x = threeandonetenth3p.indexOf($psi);
            var engine = ["27", "28", "29", "30", "31", "32"];
            enginecode = engine[x];
            pumpcode = "36";
        } else if ($gpm === '3.4') {
            var x = threeandfourtenths3p.indexOf($psi);
            var engine = ["13", "14", "15", "16", "17"];
            enginecode = engine[x];
            pumpcode = "79";
        } else if ($gpm === '3.8') {
            var x = threeandeighttenths3p.indexOf($psi);
            var engine = ["28", "29", "30", "31", "32"];
            enginecode = engine[x];
            pumpcode = "44";
        } else if ($gpm === '4.2') {
            var x = fourandtwotenths3p.indexOf($psi);
            var engine = ["28", "29", "30", "31", "32"];
            enginecode = engine[x];
            pumpcode = "62";
        }
    } else if ($("#motor-type").val() === 'Single-Phase Motor') {
        if ($gpm === '0.4') {
            var x = fourtenths1p.indexOf($psi);
            var engine = ["1", "2", "3"];
            enginecode = engine[x];
            pumpcode = "08";
        } else if ($gpm === '0.6') {
            var x = sixtenths1p.indexOf($psi);
            var engine = ["1", "2", "3", "4"];
            enginecode = engine[x];
            pumpcode = "12";
        } else if ($gpm === '0.7') {
            var x = seventenths1p.indexOf($psi);
            var engine = ["1", "18", "2", "19", "3", "20", "4", "21", "5", "22"];
            enginecode = engine[x];
            if (enginecode === "1" || enginecode === "2" || enginecode === "3" || enginecode === "4" || enginecode === "5") {
                pumpcode = "16";
            } else {
                pumpcode = "08";
            }
        } else if ($gpm === '0.9') {
            var x = ninetenths1p.indexOf($psi);
            var engine = ["1", "2", "3", "4", "5", "6"];
            enginecode = engine[x];
            pumpcode = "21";
        } else if ($gpm === '1.1') {
            var x = oneandonetenth1p.indexOf($psi);
            var engine = ["1", "2", "18", "3", "19", "20", "4", "21","5", "6", "22", "23"];
            enginecode = engine[x];
            if (enginecode === '1' || enginecode === '2' || enginecode === '3' || enginecode === '4' || enginecode === '5' || enginecode === '6') {
                pumpcode = '25';
            } else {
                pumpcode = '12';
            }
        } else if ($gpm === '1.4') {
            var x = oneandfourtenths1p.indexOf($psi);
            var engine = ["2", "18", "3", "19", "4", "20", "5", "21", "6", "22", "7", "23", "24"];
            enginecode = engine[x];
            if (enginecode === '2' || enginecode === '3' || enginecode === '4' || enginecode === '5' || enginecode === '6' || enginecode === '7') {
                pumpcode = '33';
            } else {
                pumpcode = '16';
            }
        } else if ($gpm === '1.6') {
            var x = oneandsixtenths1p.indexOf($psi);
            var engine = ["2", "3", "4", "5", "6", "7"];
            enginecode = engine[x];
            pumpcode = "36";
        } else if ($gpm === '1.8') {
            var x = oneandeighttenths1p.indexOf($psi);
            var engine = ["18", "19", "20", "21", "22", "23", "24"];
            enginecode = engine[x];
            pumpcode = "21";
        } else if ($gpm === '1.9') {
            var x = oneandninetenths1p.indexOf($psi);
            var engine = ["2", "3", "4", "5", "6", "7", "8"];
            enginecode = engine[x];
            pumpcode = "44";
        } else if ($gpm === '2.1') {
            var x = twoandonetenth1p.indexOf($psi);
            var engine = ["3", "4", "5", "6", "7", "8"];
            enginecode = engine[x];
            pumpcode = "48";
        } else if ($gpm === '2.2') {
            var x = twoandtwotenths1p.indexOf($psi);
            var engine = ["19", "20", "21", "22", "23", "24"];
            enginecode = engine[x];
            pumpcode = "25";
        } else if ($gpm === '2.5') {
            var x = twoandfivetenths1p.indexOf($psi);
            var engine = ["3", "4", "5", "6", "7", "8"];
            enginecode = engine[x];
            pumpcode = "58";
        } else if ($gpm === '2.7') {
            var x = twoandseventenths1p.indexOf($psi);
            var engine = ["3", "4", "5", "6", "7", "8"];
            enginecode = engine[x];
            pumpcode = "62";
        } else if ($gpm === '2.9') {
            var x = twoandninetenths1p.indexOf($psi);
            var engine = ["20", "21", "22", "23", "24"];
            enginecode = engine[x];
            pumpcode = "33";
        } else if ($gpm === '3.1') {
            var x = threeandonetenth1p.indexOf($psi);
            var engine = ["20", "21", "22", "23", "24"];
            enginecode = engine[x];
            pumpcode = "36";
        } else if ($gpm === '3.4') {
            var x = threeandfourtenths1p.indexOf($psi);
            var engine = ["4", "5", "6", "7", "8"];
            enginecode = engine[x];
            pumpcode = "79";
        } else if ($gpm === '3.8') {
            var x = threeandeighttenths1p.indexOf($psi);
            var engine = ["20", "21", "22", "23", "24"];
            enginecode = engine[x];
            pumpcode = "44";
        } else if ($gpm === '4.2') {
            var x = fourandtwotenths1p.indexOf($psi);
            var engine = ["21", "22", "23", "24"];
            enginecode = engine[x];
            pumpcode = "48";
        }
    } else if ($("#motor-spec").val() === '12V 1HP [0.70 kW]') {
        if ($gpm === '0.5') {
            if ($psi === '2524') {
                pumpcode = '12';
            } else if ($psi === '3089') {
                pumpcode = '08';
            } 
        } else if ($gpm === '0.8') {
            if ($psi === '1218') {
                pumpcode = '08';
            } else if ($psi === '1784') {
                pumpcode = '12';
            } else {
                pumpcode = '16';
            }
        } else if ($gpm === '1.1') {
            if ($psi === '1088') {
                pumpcode = '12';
            } else if ($psi === '1537') {
                pumpcode = '16';
            } 
        } else if ($gpm === '1.3') {
            if ($psi === '566') {
                pumpcode = '12';
            } else if ($psi === '1102') {
                pumpcode = '16';
            } else if ($psi === '1450') {
                pumpcode = '21';
            } else {
                pumpcode = '25';
            }
        } else if ($gpm === '1.6') {
            if ($psi === '696') {
                pumpcode = '16';
            } else if ($psi === '1102') {
                pumpcode = '21';
            } else {
                pumpcode = '25';
            }
        } else if ($gpm === '1.9') {
            if ($psi === '348') {
                pumpcode = '16';
            } else if ($psi === '725') {
                pumpcode = '21';
            } else if ($psi === '957') {
                pumpcode = '25';
            } else if ($psi === '1088') {
                pumpcode = '33';
            }
        } else if ($gpm === '2.1') {
            if ($psi === '377') {
                pumpcode = '21';
            } else if ($psi === '696') {
                pumpcode = '25';
            } else {
                pumpcode = '33';
            }
        } else if ($gpm === '2.4') {
            if ($psi === '493') {
                pumpcode = '25';
            } else if ($psi === '754') {
                pumpcode = '33';
            } 
        } else if ($gpm === '2.6') {
            if ($psi === '290') {
                pumpcode = '25';
            } else if ($psi === '580') {
                pumpcode = '33';
            } 
        } else if ($gpm === '2.9') {
            if ($psi === '435') {
                pumpcode = '33';
            } 
        } else if ($gpm === '3.1') {
            if ($psi === '304') {
                pumpcode = '33';
            } 
        } 
    } else if ($("#motor-spec").val() === '24V 1HP [0.80 kW]') {
        if ($gpm === '0.5') {
            pumpcode = '08';
        } else if ($gpm === '0.8') {
            if ($psi === '1088') {
                pumpcode = '08';
            } else {
                pumpcode = '12';
            }
        } else if ($gpm === '1.1') {
            if ($psi === '1175') {
                pumpcode = '12';
            } else {
                pumpcode = '16';
            }
        } else if ($gpm === '1.3') {
            if ($psi === '435') {
                pumpcode = '12';
            } else if ($psi === '1160') {
                pumpcode = '16';
            } else {
                pumpcode = '21';
            }
        } else if ($gpm === '1.6') {
            if ($psi === '609') {
                pumpcode = '16';
            } else if ($psi === '1160') {
                pumpcode = '21';
            } else {
                pumpcode = '25';
            }
        } else if ($gpm === '1.9') {
            if ($psi === '754') {
                pumpcode = '21';
            } else if ($psi === '1247') {
                pumpcode = '25';
            } 
        } else if ($gpm === '2.1') {
            if ($psi === '406') {
                pumpcode = '21';
            } else if ($psi === '812') {
                pumpcode = '25';
            } else {
                pumpcode = '33';
            }
        } else if ($gpm === '2.4') {
            if ($psi === '435') {
                pumpcode = '12';
            } else if ($psi === '812') {
                pumpcode = '16';
            }
        } else if ($gpm === '2.6') {
            if ($psi === '580') {
                pumpcode = '33';
            } 
        } else if ($gpm === '2.9') {
            if ($psi === '406') {
                pumpcode = '33';
            } 
        }
    } else if ($("#motor-spec").val() === '24V 1.5HP [1.20 kW]') {
        if ($gpm === '0.5') {
            pumpcode = '08';
        } else if ($gpm === '0.8') {
            if ($psi === '827') {
                pumpcode = '08';
            } else if ($psi === '2393') {
                pumpcode = '12';
            } 
        } else if ($gpm === '1.1') {
            if ($psi === '1001') {
                pumpcode = '12';
            } else if ($psi === '1885') {
                pumpcode = '16';
            }
        } else if ($gpm === '1.3') {
            if ($psi === '305') {
                pumpcode = '12';
            } else if ($psi === '986') {
                pumpcode = '16';
            } else {
                pumpcode = '21';
            }
        } else if ($gpm === '1.6') {
            if ($psi === '493') {
                pumpcode = '16';
            } else if ($psi === '1044') {
                pumpcode = '21';
            } else {
                pumpcode = '25';
            }
        } else if ($gpm === '1.9') {
            if ($psi === '232') {
                pumpcode = '16';
            } else if ($psi === '638') {
                pumpcode = '21';
            } else if ($psi === '972') {
                pumpcode = '25';
            } else {
                pumpcode = '33';
            }
        } else if ($gpm === '2.1') {
            if ($psi === '348') {
                pumpcode = '21';
            } else if ($psi === '609') {
                pumpcode = '25';
            } else if ($psi === '986') {
                pumpcode = '33';
            } else {
                pumpcode = '36';
            }
        } else if ($gpm === '2.4') {
            if ($psi === '377') {
                pumpcode = '25';
            } else if ($psi === '595') {
                pumpcode = '33';
            } else if ($psi === '884') {
                pumpcode = '36';
            } 
        } else if ($gpm === '2.6') {
            if ($psi === '203') {
                pumpcode = '25';
            } else if ($psi === '507') {
                pumpcode = '33';
            } else if ($psi === '653') {
                pumpcode = '44';
            } else {
                pumpcode = '48';
            }
        } else if ($gpm === '2.9') {
            if ($psi === '333') {
                pumpcode = '33';
            } else if ($psi === '479') {
                pumpcode = '36';
            } else if ($psi === '653') {
                pumpcode = '44';
            } else {
                pumpcode = '48';
            }
        } else if ($gpm === '3.1') {
            if ($psi === '319') {
                pumpcode = '36';
            } else if ($psi === '507') {
                pumpcode = '44';
            } else if ($psi === '580') {
                pumpcode = '48';
            } else {
                pumpcode = '58';
            }
        } else if ($gpm === '3.4') {
            if ($psi === '377') {
                pumpcode = '44';
            } else if ($psi === '450') {
                pumpcode = '48';
            } else if ($psi === '609') {
                pumpcode = '58';
            } 
        } else if ($gpm === '3.7') {
            if ($psi === '232') {
                pumpcode = '44';
            } else if ($psi === '304') {
                pumpcode = '48';
            } else if ($psi === '493') {
                pumpcode = '58';
            } 
        } else if ($gpm === '4.0') {
            if ($psi === '218') {
                pumpcode = '48';
            } else if ($psi === '406') {
                pumpcode = '58';
            }
        } else if ($gpm === '4.2') {
            if ($psi === '319') {
                pumpcode = '58';
            } 
        } else if ($gpm === '4.5') {
            if ($psi === '218') {
                pumpcode = '58';
            } 
        }
    } else if ($("#motor-spec").val() === '12V 2HP [1.50 kW]') {
        if ($gpm === '1.1') {
            if ($psi === '2001') {
                pumpcode = '12';
            } else if ($psi === '2741') {
                pumpcode = '16';
            }
        } else if ($gpm === '1.3') {
            if ($psi === '435') {
                pumpcode = '12';
            } else if ($psi === '1305') {
                pumpcode = '16';
            } else if ($psi === '2480') {
                pumpcode = '21';
            } 
        } else if ($gpm === '1.6') {
            if ($psi === '392') {
                pumpcode = '16';
            } else if ($psi === '1479') {
                pumpcode = '21';
            } else if ($psi === '2060') {
                pumpcode = '25';
            } 
        } else if ($gpm === '1.9') {
            if ($psi === '653') {
                pumpcode = '21';
            } else if ($psi === '1305') {
                pumpcode = '25';
            } 
        } else if ($gpm === '2.1') {
            if ($psi === '812') {
                pumpcode = '25';
            } else if ($psi === '1682') {
                pumpcode = '33';
            } 
        } else if ($gpm === '2.4') {
            if ($psi === '392') {
                pumpcode = '25';
            } else if ($psi === '1276') {
                pumpcode = '33';
            } else if ($psi === '1450') {
                pumpcode = '36';
            } 
        } else if ($gpm === '2.6') {
            if ($psi === '841') {
                pumpcode = '33';
            } else if ($psi === '1015') {
                pumpcode = '36';
            } 
        } else if ($gpm === '2.9') {
            if ($psi === '522') {
                pumpcode = '33';
            } else if ($psi === '725') {
                pumpcode = '36';
            } else if ($psi === '1015') {
                pumpcode = '44';
            } else {
                pumpcode = '48';
            }
        } else if ($gpm === '3.1') {
            if ($psi === '261') {
                pumpcode = '33';
            } else if ($psi === '406') {
                pumpcode = '36';
            } else if ($psi === '841') {
                pumpcode = '44';
            } else {
                pumpcode = '48';
            }
        } else if ($gpm === '3.4') {
            if ($psi === '218') {
                pumpcode = '36';
            } else if ($psi === '580') {
                pumpcode = '44';
            } else if ($psi === '826') {
                pumpcode = '48';
            } 
        } else if ($gpm === '3.7') {
            if ($psi === '348') {
                pumpcode = '44';
            } else if ($psi === '551') {
                pumpcode = '48';
            } else if ($psi === '870') {
                pumpcode = '58';
            } 
        } else if ($gpm === '4.0') {
            if ($psi === '203') {
                pumpcode = '44';
            } else if ($psi === '392') {
                pumpcode = '48';
            } else if ($psi === '725') {
                pumpcode = '58';
            } else {
                pumpcode = '62';
            }
        } else if ($gpm === '4.2') {
            if ($psi === '261') {
                pumpcode = '48';
            } else if ($psi === '580') {
                pumpcode = '58';
            } else if ($psi === '653') {
                pumpcode = '62';
            }
        } else if ($gpm === '4.5') {
            if ($psi === '348') {
                pumpcode = '58';
            } else if ($psi === '450') {
                pumpcode = '62';
            } 
        } else if ($gpm === '4.8') {
            if ($psi === '232') {
                pumpcode = '58';
            } else if ($psi === '334') {
                pumpcode = '62';
            } 
        }
    } else if ($("#motor-spec").val() === '24V 2.5HP [2.00 kW]') {
        if ($gpm === '1.1') {
            if ($psi === '2002') {
                pumpcode = '12';
            } else if ($psi === '3394') {
                pumpcode = '16';
            } 
        } else if ($gpm === '1.3') {
            if ($psi === '740') {
                pumpcode = '12';
            } else if ($psi === '1827') {
                pumpcode = '16';
            } else if ($psi === '3133') {
                pumpcode = '21';
            }
        } else if ($gpm === '1.6') {
            if ($psi === '957') {
                pumpcode = '16';
            } else if ($psi === '1827') {
                pumpcode = '21';
            } else if ($psi === '2741') {
                pumpcode = '25';
            }
        } else if ($gpm === '1.9') {
            if ($psi === '435') {
                pumpcode = '16';
            } else if ($psi === '1044') {
                pumpcode = '21';
            } else if ($psi === '1871') {
                pumpcode = '25';
            }
        } else if ($gpm === '2.1') {
            if ($psi === '566') {
                pumpcode = '21';
            } else if ($psi === '1218') {
                pumpcode = '25';
            } else if ($psi === '2089') {
                pumpcode = '33';
            } else {
                pumpcode = '36';
            }
        } else if ($gpm === '2.4') {
            if ($psi === '218') {
                pumpcode = '21';
            } else if ($psi === '696') {
                pumpcode = '25';
            } else if ($psi === '1479') {
                pumpcode = '33';
            } else {
                pumpcode = '36';
            }
        } else if ($gpm === '2.6') {
            if ($psi === '435') {
                pumpcode = '25';
            } else if ($psi === '1044') {
                pumpcode = '33';
            } else if ($psi === '1160') {
                pumpcode = '36';
            } else {
                pumpcode = '45';
            }
        } else if ($gpm === '2.9') {
            if ($psi === '218') {
                pumpcode = '25';
            } else if ($psi === '740') {
                pumpcode = '33';
            } else if ($psi === '870') {
                pumpcode = '36';
            } else if ($psi === '1189') {
                pumpcode = '45';
            } else {
                pumpcode = '48';
            }
        } else if ($gpm === '3.1') {
            if ($psi === '435') {
                pumpcode = '33';
            } else if ($psi === '580') {
                pumpcode = '36';
            } else if ($psi === '957') {
                pumpcode = '44';
            } else {
                pumpcode = '48';
            }
        } else if ($gpm === '3.4') {
            if ($psi === '261') {
                pumpcode = '33';
            } else if ($psi === '377') {
                pumpcode = '36';
            } else if ($psi === '769') {
                pumpcode = '44';
            } else {
                pumpcode = '48';
            }
        } else if ($gpm === '3.7') {
            if ($psi === '203') {
                pumpcode = '36';
            } else if ($psi === '493') {
                pumpcode = '44';
            } else if ($psi === '580') {
                pumpcode = '48';
            } else if ($psi === '1174') {
                pumpcode = '58';
            } else {
                pumpcode = '62';
            }
        } else if ($gpm === '4.0') {
            if ($psi === '363') {
                pumpcode = '44';
            } else if ($psi === '406') {
                pumpcode = '48';
            } else if ($psi === '957') {
                pumpcode = '58';
            } else {
                pumpcode = '62';
            }
        } else if ($gpm === '4.2') {
            if ($psi === '261') {
                pumpcode = '48';
            } else if ($psi === '798') {
                pumpcode = '58';
            } else if ($psi === '884') {
                pumpcode = '62';
            } else {
                pumpcode = '79';
            }
        } else if ($gpm === '4.5') {
            if ($psi === '566') {
                pumpcode = '58';
            } else if ($psi === '653') {
                pumpcode = '62';
            } else if ($psi === '885') {
                pumpcode = '79';
            } 
        } else if ($gpm === '4.8') {
            if ($psi === '435') {
                pumpcode = '58';
            } else if ($psi === '653') {
                pumpcode = '62';
            } else if ($psi === '885') {
                pumpcode = '79';
            }
        } else if ($gpm === '5.0') {
            if ($psi === '319') {
                pumpcode = '58';
            } else if ($psi === '377') {
                pumpcode = '62';
            } else if ($psi === '580') {
                pumpcode = '79';
            } 
        } else if ($gpm === '5.2') {
            pumpcode = '79';
        } else if ($gpm === '5.6') {
            pumpcode = '79';
        }
    } else if ($("#motor-spec").val() === '24V 4HP [3.00 kW] with Relay' || $("#motor-spec").val() === '24V 4HP [3.00 kW] without Relay') {
        if ($gpm === '1.9') {
            pumpcode = '21';
        } else if ($gpm === '2.1') {
            if ($psi === '348') {
                pumpcode = '21';
            } else if ($psi === '2132') {
                pumpcode = '25';
            } 
        } else if ($gpm === '2.4') {
            if ($psi === '827') {
                pumpcode = '25';
            } else if ($psi === '3524') {
                pumpcode = '33';
            } 
        } else if ($gpm === '2.6') {
            if ($psi === '2437') {
                pumpcode = '33';
            } else if ($psi === '3046') {
                pumpcode = '36';
            } 
        } else if ($gpm === '2.9') {
            if ($psi === '1349') {
                pumpcode = '33';
            } else if ($psi === '1827') {
                pumpcode = '36';
            } else if ($psi === '3133') {
                pumpcode = '44';
            } 
        } else if ($gpm === '3.1') {
            if ($psi === '522') {
                pumpcode = '33';
            } else if ($psi === '1218') {
                pumpcode = '36';
            } else if ($psi === '2654') {
                pumpcode = '44';
            }
        } else if ($gpm === '3.4') {
            if ($psi === '653') {
                pumpcode = '36';
            } else if ($psi === '1958') {
                pumpcode = '44';
            } else if ($psi === '2611') {
                pumpcode = '48';
            }
        } else if ($gpm === '3.7') {
            if ($psi === '1044') {
                pumpcode = '44';
            } else if ($psi === '1827') {
                pumpcode = '48';
            } 
        } else if ($gpm === '4.0') {
            if ($psi === '609') {
                pumpcode = '44';
            } else if ($psi === '1305') {
                pumpcode = '48';
            }
        } else if ($gpm === '4.2') {
            if ($psi === '261') {
                pumpcode = '44';
            } else if ($psi === '740') {
                pumpcode = '48';
            } else if ($psi === '2118') {
                pumpcode = '58';
            } 
        } else if ($gpm === '4.5') {
            if ($psi === '261') {
                pumpcode = '48';
            } else if ($psi === '1537') {
                pumpcode = '58';
            } else if ($psi === '1885') {
                pumpcode = '62';
            } 
        } else if ($gpm === '4.8') {
            if ($psi === '1247') {
                pumpcode = '58';
            } else if ($psi === '1508') {
                pumpcode = '62';
            }
        } else if ($gpm === '5.0') {
            if ($psi === '870') {
                pumpcode = '58';
            } else if ($psi === '1160') {
                pumpcode = '62';
            } 
        } else if ($gpm === '5.2') {
            if ($psi === '493') {
                pumpcode = '58';
            } else if ($psi === '754') {
                pumpcode = '62';
            } 
        } else if ($gpm === '5.6') {
            if ($psi === '493') {
                pumpcode = '62';
            } else if ($psi === '1552') {
                pumpcode = '79';
            } 
        } else if ($gpm === '5.8') {
            pumpcode = '79';
        } else if ($gpm === '6.1') {
            pumpcode = '79';
        } else if ($gpm === '6.3') {
            pumpcode = '79';
        } else if ($gpm === '6.6') {
            pumpcode = '79';
        }
    }
    vals = ["Basic [A]", "Power Up Gravity Down with Pump Unload [C]", "Power Up Gravity Down [E]"];
    $("#hydrocircuit").empty();
    $("#xoption").empty();
    $("#yoption").empty();
    $("#tank").empty();
    $("#add-on").empty();
    $("#style").empty();
    $("#size").empty();
    $("#filter").empty();
    $("#bracket").empty();
    $("#solenoid-voltage").empty();
    $("#horder").remove();
    $("#hydrocircuit").prepend("<option selected disabled hidden></option>");
    $.each(vals, function(index, value) {
        $("#hydrocircuit").append("<option>" + value + "</option>");
    });
});
$("#hydrocircuit").change(function () {
    var $hydro = $(this).val();
    var vals = [];
    if ($hydro === 'Basic [A]') {
        vals = ["No Selection Allowed"];
        circuitcode = "A";
    } else if ($hydro === 'Power Up Gravity Down with Pump Unload [C]') {
        vals = ["Plug [X0]", "Normally Closed [X1]", "Normally Open [X2]", "Manual Push Down [X3]", "Manual Lever Style [X4]", "Manual Lever Style with Switch [X5]"];
        circuitcode = "C";
    } else if ($hydro === 'Power Up Gravity Down [E]') {
        vals = ["Plug [X0]", "Normally Closed [X1]", "Normally Open [X2]", "Manual Push Down [X3]", "Manual Lever Style [X4]", "Manual Lever Style with Switch [X5]"];
        circuitcode = "E";
    }
    $("#xoption").empty();
    $("#yoption").empty();
    $("#tank").empty();
    $("#bracket").empty();
    $("#size").empty();
    $("#filter").empty();
    $("#add-on").empty();
    $("#style").empty();
    $("#solenoid-voltage").empty();
    $("#horder").remove();
    $("#xoption").prepend("<option selected disabled hidden></option>");
    $.each(vals, function(index, value) {
        $("#xoption").append("<option>" + value + "</option>");
    });
});
$("#xoption").change(function () {
    var $xoption = $(this).val();
    var vals = [];
    if ($xoption === 'Plug [X0]') {
        xoptioncode = '0';
    } else if ($xoption === 'Normally Closed [X1]') {
        xoptioncode = '1';
    } else if ($xoption === 'Normally Open [X2]') {
        xoptioncode = '2';
    } else if ($xoption === 'Manual Push Down [X3]') {
        xoptioncode = '3';
    } else if ($xoption === 'Manual Lever Style [X4]') {
        xoptioncode = '4';
    } else if ($xoption === 'Manual Lever Style with Switch [X5]') {
        xoptioncode = '5';
    } else if ($xoption === 'No Selection Allowed') {
        xoptioncode = '';
    }
    if ($("#hydrocircuit").val() === 'Basic [A]') {
        vals = ["No Selection Allowed"];
    } else {
        vals = ["Plug [Y0]", "Standard Throttle [Y1]", "Pressure Compensated Throttle [Y2]"];
    }
    $("#yoption").empty();
    $("#tank").empty();
    $("#filter").empty();
    $("#bracket").empty();
    $("#style").empty();
    $("#size").empty();
    $("#add-on").empty();
    $("#solenoid-voltage").empty();
    $("#horder").remove();
    $("#yoption").prepend("<option selected disabled hidden></option>");
    $.each(vals, function(index, value) {
        $("#yoption").append("<option>" + value + "</option>");
    });
});
$("#yoption").change(function () {
    var $yoption = $(this).val();
    var vals = [];
    if ($yoption === 'Plug [Y0]') {
        yoptioncode = '0';
    } else if ($yoption === 'Standard Throttle [Y1]') {
        yoptioncode = '1';
    } else if ($yoption === 'Pressure Compensated Throttle [Y2]') {
        yoptioncode = '2';
    } else if ($yoption === 'No Selection Allowed') {
        yoptioncode = '';
    }
    vals = ["2L Horizontal Plastic", "2L Vertical Plastic","4L Horizontal Plastic", "4L Vertical Plastic", "6L Horizontal Plastic", "6L Vertical Plastic","8L Horizontal Plastic", "8L Vertical Plastic", "10L Horizontal Plastic", "10L Vertical Plastic","12L Aluminum", "20L Aluminum", "30L Aluminum", "44L Aluminum", "1.5L Horizontal Steel","2L Horizontal Steel", "3L Horizontal Steel", "4L Horizontal Steel", "6L Horizontal Steel","6L Vertical Steel", "8L Horizontal Steel", "8L Vertical Steel", "10L Horizontal Steel","10L Vertical Steel"];
    $("#tank").empty();
    $("#filter").empty();
    $("#add-on").empty();
    $("#size").empty();
    $("#bracket").empty();
    $("#solenoid-voltage").empty();
    $("#style").empty();
    $("#horder").remove();
    $("#tank").prepend("<option selected disabled hidden></option>");
    $.each(vals, function(index, value) {
        $("#tank").append("<option>" + value + "</option>");
    });
});
$("#tank").change(function () {
    var $tank = $(this).val();
    var vals = [];
    if ($tank === '2L Horizontal Plastic') {
        tankcode = '62';
    } else if ($tank === '4L Horizontal Plastic') {
        tankcode = '64';
    } else if ($tank === '6L Horizontal Plastic') {
        tankcode = '66';
    } else if ($tank === '8L Horizontal Plastic') {
        tankcode = '68';
    } else if ($tank === '10L Horizontal Plastic') {
        tankcode = '70';
    } else if ($tank === '2L Vertical Plastic') {
        tankcode = '61';
    } else if ($tank === '4L Vertical Plastic') {
        tankcode = '63';
    } else if ($tank === '6L Vertical Plastic') {
        tankcode = '65';
    } else if ($tank === '8L Vertical Plastic') {
        tankcode = '67';
    } else if ($tank === '10L Vertical Plastic') {
        tankcode = '69';
    } else if ($tank === '12L Aluminum') {
        tankcode = '71';
    } else if ($tank === '20L Aluminum') {
        tankcode = '72';
    } else if ($tank === '30L Aluminum') {
        tankcode = '73';
    } else if ($tank === '44L Aluminum') {
        tankcode = '74';
    } else if ($tank === '1.5L Horizontal Steel') {
        tankcode = '10';
    } else if ($tank === '2L Horizontal Steel') {
        tankcode = '11';
    } else if ($tank === '3L Horizontal Steel') {
        tankcode = '12';
    } else if ($tank === '4L Horizontal Steel') {
        tankcode = '13';
    } else if ($tank === '6L Horizontal Steel') {
        tankcode = '20';
    } else if ($tank === '6L Vertical Steel') {
        tankcode = '51';
    } else if ($tank === '8L Horizontal Steel') {
        tankcode = '22';
    } else if ($tank === '8L Vertical Steel') {
        tankcode = '53';
    } else if ($tank === '10L Horizontal Steel') {
        tankcode = '24';
    } else if ($tank === '10L Vertical Steel') {
        tankcode = '55';
    }
    if ($tank === '12L Aluminum' || $tank === '20L Aluminum' || $tank === '30L Aluminum' || $tank === '44L Aluminum') {
        vals = ["Without Filter", "Suction Filter", "Return Line Filter without Indication", "Return Line Filter with el. Indication", "Return Line Filter with Manometer"];
    } else {
        vals = ["Without Filter", "Suction Filter"];
    }
    $("#filter").empty();
    $("#bracket").empty();
    $("#style").empty();
    $("#add-on").empty();
    $("#solenoid-voltage").empty();
    $("#size").empty();
    $("#horder").remove();
    $("#filter").prepend("<option selected disabled hidden></option>");
    $.each(vals, function(index, value) {
        $("#filter").append("<option>" + value + "</option>");
    });
});
$("#filter").change(function () {
    var $filter = $("#filter").val();
    var vals = [];
    if ($filter === 'Without Filter') {
        filtercode = '0';
    } else if ($filter === 'Suction Filter') {
        filtercode = 'S';
    } else if ($filter === 'Return Line Filter without Indication') {
        filtercode = 'R';
    } else if ($filter === 'Return Line Filter with el. Indication') {
        filtercode = 'E';
    } else if ($filter === 'Return Line Filter with Manometer') {
        filtercode = 'M';
    }
    vals = ["Without Foot Bracket", "Low Foot Bracket"];
    $("#bracket").empty();
    $("#style").empty();
    $("#size").empty();
    $("#add-on").empty();
    $("#solenoid-voltage").empty();
    $("#horder").remove();
    $("#bracket").prepend("<option selected disabled hidden></option>");
    $.each(vals, function(index, value) {
        $("#bracket").append("<option>" + value + "</option>");
    });
});
$("#bracket").change(function () {
    var $bracket = $("#bracket").val();
    var vals = [];
    if ($bracket === 'Without Foot Bracket') {
        bracketcode = '0';
    } else if ($bracket === 'Low Foot Bracket') {
        bracketcode = 'F';
    }
    vals = ["Without Stacking Assembly", "Configuration B", "Configuration C", "Configuration D", "Configuration E", "Configuration F"];
    $("#style").empty();
    $("#size").empty();
    $("#solenoid-voltage").empty();
    $("#add-on").empty();
    $("#horder").remove();
    $("#style").prepend("<option selected disabled hidden></option>");
    $.each(vals, function(index, value) {
        $("#style").append("<option>" + value + "</option>");
    });
});
$("#style").change(function () {
    var $style = $(this).val();
    var vals = [];
    if ($style === 'Without Stacking Assembly') {
        stackingcode = '0';
        vals = ["Without Add-On Units"];
    } else if ($style === 'Configuration B') {
        stackingcode = 'B';
        vals = ["Without Add-On Units", "1 Section", "2 Sections", "3 Sections", "4 Sections", "5 Sections"];
    } else if ($style === 'Configuration C') {
        stackingcode = 'C';
        vals = ["1 Section", "2 Sections", "3 Sections", "4 Sections", "5 Sections"];
    } else if ($style === 'Configuration D') {
        stackingcode = 'D';
        vals = ["1 Section", "2 Sections", "3 Sections", "4 Sections", "5 Sections"];
    } else if ($style === 'Configuration E') {
        stackingcode = 'E';
        vals = ["1 Section", "2 Sections", "3 Sections", "4 Sections", "5 Sections"];
    } else if ($style === 'Configuration F') {
        stackingcode = 'F';
        vals = ['1 Section'];
    }
    $("#add-on").empty();
    $("#solenoid-voltage").empty();
    $("#size").empty();
    $("#horder").remove();
    $("#add-on").prepend("<option selected disabled hidden></option>");
    $.each(vals, function(index, value) {
        $("#add-on").append("<option>" + value + "</option>");
    });
});
$("#add-on").change(function () {
    var $add = $(this).val();
    var vals = [];
    if ($add === 'Without Add-On Units') {
        addoncode = '0';
    } else if ($add === '1 Section') {
        addoncode = '1';
    } else if ($add === '2 Sections') {
        addoncode = '2';
    } else if ($add === '3 Sections') {
        addoncode = '3';
    } else if ($add === '4 Sections') {
        addoncode = '4';
    } else if ($add === '5 Sections') {
        addoncode = '5';
    }
    if ($("#style").val() === 'Without Stacking Assembly' || $("#add-on").val() === 'Without Add-On Units') {
        vals = ["Without Stacking Assembly"];
    } else if ($("#style").val() === 'Configuration D' || $("#style").val() === 'Configuration E') {
        vals = ["Size 03"];
    } else {
        vals = ["Size D02 (04)", "Size D03 (06)"];
    }
    $("#size").empty();
    $("#solenoid-voltage").empty();
    $("#horder").remove();
    $("#size").prepend("<option selected disabled hidden></option>");
    $.each(vals, function(index, value) {
        $("#size").append("<option>" + value + "</option>");
    });
});
$("#size").change(function () {
    var $size = $(this).val();
    var vals = [];
    if ($size === 'Without Stacking Assembly') {
        sizecode = '0';
    } else if ($size === 'Size 03') {
        sizecode = '3';
    } else if ($size === 'Size D02 (04)') {
        sizecode = '4';
    } else if ($size === 'Size D03 (06)') {
        sizecode = '6';
    }
    var $style = $("#style").val();
    var $xoption = $("#xoption").val();
    var $hydrocircuit = $("#hydrocircuit").val();
    if ($style !== 'Without Stacking Assembly' || (($hydrocircuit === 'Power Up Gravity Down with Pump Unload [C]' || $hydrocircuit === 'Power Up Gravity Down [E]') && ($xoption === 'Normally Closed [X1]' || $xoption === 'Normally Open [X2]'))) {
        vals = ["12 V DC", "24 V DC", "120 V AC / 50 (60) Hz"];
    } else {
        vals = ['No Selection Allowed'];
    }
    $("#solenoid-voltage").empty();
    $("#horder").remove();
    $("#solenoid-voltage").prepend("<option selected disabled hidden></option>");
    $.each(vals, function(index, value) {
        $("#solenoid-voltage").append("<option>" + value + "</option>");
    });
});
$("#solenoid-voltage").change(function () {
    var $solenoid = $(this).val();
    if ($solenoid === '12 V DC') {
        solenoidcode = '01200';
    } else if ($solenoid === '24 V DC') {
        solenoidcode = '02400';
    } else if ($solenoid === '120 V AC / 50 (60) Hz') {
        solenoidcode = '12060';
    } else {
        solenoidcode = '';
    }
    $("#horder").remove();
    powerunitcode = 'USMA05-' + pumpcode + "." + enginecode + modulecode + circuitcode + xoptioncode + yoptioncode + tankcode + filtercode + "/" + bracketcode + "-" + stackingcode + addoncode + sizecode + solenoidcode;
    var y = $('<h1 />', {id: "horder", class: "hpuconfig"});
    y.append(powerunitcode);
    $('.displayvalve').append(y);
});
