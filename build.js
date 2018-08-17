var valvestage1, valvestage2, valvestage3, valvestage4, valvestage5, valvestage6, valvestage7, valvestage8, valvestage9, valvestage10, valvestage11, valvestage12, valvestage13, valvestage14, orderkey, solenoid1, solenoid2, solenoid3, solenoid4, fullsolenoid = '';
$(document).on("change", "#stage1", function() {
    var $stage1 = $(this).val();
        var key = $("#valve-series").val();
        var vals = [];
        $("#sorder").remove();
        $("#order").remove();
        switch(key) {
            case 'RPEK1-03 [5 GPM - 3600 PSI]':
                if ($stage1 === 'Thread A B - G1/4') {
                    valvestage1 = 'G';
                } else if ($stage1 === 'Thread A B - SAE6 - 9/16-18UNF') {
                    valvestage1 = 'S';
                } else if ($stage1 === 'Stackable') {
                    valvestage1 = 'O';
                }
                break;
            case 'RPEL1-04 [8 GPM - 3600 PSI]':
                if ($stage1 === 'Two Positions') {
                    valvestage1 = '2';
                } else if ($stage1 === 'Three Positions') {
                    valvestage1 = '3';
                }
                break;
            case 'RPE3-04 [8 GPM - 4600 PSI]':
                if ($stage1 === 'Two Positions') {
                    valvestage1 = '2';
                } else if ($stage1 === 'Three Positions') {
                    valvestage1 = '3';
                }
                break;
            case 'RPEL1-06 [13 GPM - 3600 PSI]':
                if ($stage1 === 'Two Positions') {
                    valvestage1 = '2';
                } else if ($stage1 === 'Three Positions') {
                    valvestage1 = '3';
                }
                break;
            case 'RPE3-06 [21 GPM - 5100 PSI]':
                if ($stage1 === 'Two Positions') {
                    valvestage1 = '2';
                } else if ($stage1 === 'Three Positions') {
                    valvestage1 = '3';
                }
                break;
            case 'RPER3-06 [21 GPM - 5100 PSI]':
                if ($stage1 === 'Two Positions') {
                    valvestage1 = '2';
                } else if ($stage1 === 'Three Positions') {
                    valvestage1 = '3';
                }
                break;
            case 'RPEA3-06 [21 GPM - 5100 PSI]':
                if ($stage1 === 'Two Positions') {
                    valvestage1 = '2';
                } else if ($stage1 === 'Three Positions') {
                    valvestage1 = '3';
                }
                break;
            case 'RPEW4-06 [21 GPM - 5100 PSI]':
                if ($stage1 === 'Two Positions') {
                    valvestage1 = '2';
                } else if ($stage1 === 'Three Positions') {
                    valvestage1 = '3';
                }
                break;
            case 'RPE4-10 [37 GPM - 5100 PSI]':
                if ($stage1 === 'Two Positions') {
                    valvestage1 = '2';
                } else if ($stage1 === 'Three Positions') {
                    valvestage1 = '3';
                }
                break;
            case 'RPEW4-10 [37 GPM - 5100 PSI]':
                if ($stage1 === 'Two Positions') {
                    valvestage1 = '2';
                } else if ($stage1 === 'Three Positions') {
                    valvestage1 = '3';
                }
                break;
            case 'RNEH1-10 [40 GPM - 4600 / 6100 PSI]':
                if ($stage1 === 'Electrohydraulically Operated') {
                    valvestage1 = 'EH';
                } else if ($stage1 === 'Hydraulically Operated') {
                    valvestage1 = 'H';
                }
                break;
            case 'RNEH5-16 [80 GPM - 5100 / 6100 PSI]':
                if ($stage1 === 'Electrohydraulically Operated') {
                    valvestage1 = 'EH';
                } else if ($stage1 === 'Hydraulically Operated') {
                    valvestage1 = 'H';
                }
                break;
            case 'RNEH4-25 [160 GPM - 4600 / 6100 PSI]':
                if ($stage1 === 'Electrohydraulically Operated') {
                    valvestage1 = 'EH';
                } else if ($stage1 === 'Hydraulically Operated') {
                    valvestage1 = 'H';
                }
                break;
            case 'RPR3-04 [8 GPM - 4600 PSI]':
                if ($stage1 === 'Two Positions') {
                    valvestage1 = '2';
                } else if ($stage1 === 'Three Positions') {
                    valvestage1 = '3';
                }
                break;
            case 'RPR3-06 [21 GPM - 5100 PSI]':
                if ($stage1 === 'Two Positions') {
                    valvestage1 = '2';
                } else if ($stage1 === 'Three Positions') {
                    valvestage1 = '3';
                }
                break;
            case 'RPR1-10 [37 GPM - 5100 PSI]':
                if ($stage1 === 'Two Positions') {
                    valvestage1 = '2';
                } else if ($stage1 === 'Three Positions') {
                    valvestage1 = '3';
                }
                break;
            case 'RPH2-06 [21 GPM - 5100 PSI]':
                if ($stage1 === 'Two Positions') {
                    valvestage1 = '2';
                } else if ($stage1 === 'Three Positions') {
                    valvestage1 = '3';
                }
                break;
            case 'RPH3-06 [21 GPM - 5100 PSI]':
                if ($stage1 === 'Two Positions') {
                    valvestage1 = '2';
                } else if ($stage1 === 'Three Positions') {
                    valvestage1 = '3';
                }
                break;
            case 'RPK1-06 [21 GPM - 5100 PSI]':
                if ($stage1 === 'Two Positions') {
                    valvestage1 = '2';
                }
                break;
            case 'SD2E-A2 [8 GPM - 5100 PSI]':
                if ($stage1 === 'Lightline') {
                    valvestage1 = 'L';
                } else if ($stage1 === 'High Performance') {
                    valvestage1 = 'H';
                }
                break;
            case 'SD2E-B2 [8 GPM - 5100 PSI]':
                if ($stage1 === 'Lightline') {
                    valvestage1 = 'L';
                } else if ($stage1 === 'High Performance') {
                    valvestage1 = 'H';
                }
                break;
            case 'PD2E1 [8 GPM - 1200 PSI]':
                if ($stage1 === 'D17 (mm) (0.67 in)') {
                    valvestage1 = 'Y3';
                } else if ($stage1 === 'D20 (mm) (0.79 in) - Nose Inlet') {
                    valvestage1 = 'W3';
                } else if ($stage1 === 'D20 (mm) (0.79 in) - Side Inlet') {
                    valvestage1 = 'X3'
                }
                break;
            case 'SD2E-A3 [8 GPM - 5100 PSI]':
                if ($stage1 === 'Lightline') {
                    valvestage1 = 'L';
                } else if ($stage1 === 'High Performance') {
                    valvestage1 = 'H';
                }
                break;
            case 'SD2E-B3 [16 GPM - 5100 PSI]':
                if ($stage1 === 'Lightline') {
                    valvestage1 = 'L';
                } else if ($stage1 === 'High Performance') {
                    valvestage1 = 'H';
                }
                break;
            case 'SD2E-A4 [8 GPM - 5100 PSI]':
                if ($stage1 === 'Lightline') {
                    valvestage1 = 'L';
                } else if ($stage1 === 'High Performance') {
                    valvestage1 = 'H';
                }
                break;
            case 'SD2E-B4 [16 GPM - 5100 PSI]':
                if ($stage1 === 'Lightline') {
                    valvestage1 = 'L';
                } else if ($stage1 === 'High Performance') {
                    valvestage1 = 'H';
                }
                break;
            case 'ROE3-062S2 [17 GPM - 3600 PSI]':
                if ($stage1 === 'S2') {
                    valvestage1 = 'S2';
                }
                break;
            case 'ROE3-062S2/M [6.6 GPM - 3600 PSI]':
                if ($stage1 === 'Modular Valve Connection A2-A1') {
                    valvestage1 = 'MA';
                } else if ($stage1 === 'Modular Valve Connection B2-B1') {
                    valvestage1 = 'MB';
                } else if ($stage1 === 'Modular Valve Connection A-B') {
                    valvestage1 = 'MX';
                } else if ($stage1 === 'Modular Valve Connection A-T') {
                    valvestage1 = 'MD';
                } else if ($stage1 === 'Modular Valve Connection B-T') {
                    valvestage1 = 'ME';
                } else if ($stage1 === 'Modular Valve Connection B2-B1 A2-A1') {
                    valvestage1 = 'MC';
                } else if ($stage1 === 'Modular Valve Connection B-T A-T') {
                    valvestage1 = 'MF';
                } else if ($stage1 === 'Modular Valve Connection P-T') {
                    valvestage1 = 'MG';
                } else if ($stage1 === 'Modular Valve Connection P2-P1') {
                    valvestage1 = 'MP';
                } else if ($stage1 === 'Modular Valve Connection B2-P2 B2-T2') {
                    valvestage1 = 'MJ';
                } else if ($stage1 === 'Modular Valve Connection A-T B2-B1') {
                    valvestage1 = 'MI';
                } else if ($stage1 === 'In-Line Valve 2 Ports Thread G3/8') {
                    valvestage1 = 'R1';
                } else if ($stage1 === 'In-Line Valve 2 Ports Thread G1/2') {
                    valvestage1 = 'R2';
                } else if ($stage1 === 'In-Line Valve 2 Ports Thread SAE 8 3/4-16') {
                    valvestage1 = 'R3';
                } else if ($stage1 === 'In-Line Valve 2 Ports Thread SAE 10 7/8-14') {
                    valvestage1 = 'R4';
                } else if ($stage1 === 'In-Line Valve 2 Ports Thread SAE 10 7/8-14 with Built-In Flow Control') {
                    valvestage1 = 'R7';
                }
                break;
            case 'SD3E-A2 [8 GPM - 6100 PSI]':
                if ($stage1 === 'Lightline') {
                    valvestage1 = 'L';
                } else if ($stage1 === 'High Performance') {
                    valvestage1 = 'H';
                }
                break;
            case 'SD3E-B2 [20 GPM - 6100 PSI]':
                if ($stage1 === 'Lightline') {
                    valvestage1 = 'L';
                } else if ($stage1 === 'High Performance') {
                    valvestage1 = 'H';
                }
                break;
            case 'ROE3-042S5(S6) [7 GPM - 3600 PSI]':
                if ($stage1 === 'S5') {
                    valvestage1 = 'S5';
                } else if ($stage1 === 'S6') {
                    valvestage1 = 'S6';
                }
                break;
            case 'ROE3-042S5(S6)/M [7 GPM - 3600 PSI]':
                if ($stage1 === 'S5') {
                    valvestage1 = 'S5';
                } else if ($stage1 === 'S6') {
                    valvestage1 = 'S6';
                }
                break;
            case 'SD1E-A2 [8 GPM - 5100 PSI]':
                if ($stage1 === 'High Performance') {
                    valvestage1 = 'H';
                }
                break;
            case 'SD1E-A3 [8 GPM - 5100 PSI]':
                if ($stage1 === 'High Performance') {
                    valvestage1 = 'H';
                }
                break;
            case 'ROR3-062 [9 GPM - 4600 PSI]':
                if ($stage1 === 'Without Flow Restrictor') {
                    valvestage1 = '00';
                }
                break;
            case 'SD1M-A2/L [5 GPM - 3600 PSI]':
                if ($stage1 === 'Lightline') {
                    valvestage1 = 'L';
                } 
                break;
            case 'SD2H-LA3 [11 GPM - 4600 PSI]':
                if ($stage1 === 'High Performance') {
                    valvestage1 = 'H';
                }
                break;
            case 'SD3E-C2 [40 GPM - 5100 PSI]':
                if ($stage1 === 'High Performance') {
                    valvestage1 = 'H';
                }
                break;
        }
        valvestage2 = '';
        valvestage3 = '';
        valvestage4 = '';
        valvestage5 = '';
        valvestage6 = '';
        valvestage7 = '';
        valvestage8 = '';
        valvestage9 = '';
        valvestage10 = '';
        valvestage11 = '';
        valvestage12 = '';
        valvestage13 = '';
        valvestage14 = '';
        orderkey = '';
});
$(document).on("change", "#stage2", function() {
    var $stage2 = $(this).val();
        var key = $("#valve-series").val();
        var vals = [];
        $("#sorder").remove();
        $("#order").remove();
        
        switch(key) {
            case 'RPEK1-03 [5 GPM - 3600 PSI]':
                if ($stage2 === 'Two Positions') {
                    valvestage2 = '2';
                } else if ($stage2 === 'Three Positions') {
                    valvestage2 = '3';
                }
                break;
            case 'RPEL1-04 [8 GPM - 3600 PSI]':
                if ($stage2 === 'Z11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Z11';
                    $(".spool").append()
                } else if ($stage2 === 'C11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'C11';
                } else if ($stage2 === 'H11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'H11';
                } else if ($stage2 === 'Y11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Y11';
                } else if ($stage2 === 'R11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'R11';
                } else if ($stage2 === 'Y51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Y51';
                } else if ($stage2 === 'C51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'C51';
                } else if ($stage2 === 'Z51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Z51';
                } else if ($stage2 === 'H51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'H51';
                } else if ($stage2 === 'Z11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Z11';
                } else if ($stage2 === 'X11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'X11';
                } else if ($stage2 === 'C11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'C11';
                } else if ($stage2 === 'H11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'H11';
                } else if ($stage2 === 'Y11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Y11';
                } 
                break;
            case 'RPE3-04 [8 GPM - 4600 PSI]':
                if ($stage2 === 'Z11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Z11';
                } else if ($stage2 === 'C11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'C11';
                } else if ($stage2 === 'H11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'H11';
                } else if ($stage2 === 'P11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'P11';
                } else if ($stage2 === 'Y11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Y11';
                } else if ($stage2 === 'L21' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'L21';
                } else if ($stage2 === 'B11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'B11';
                } else if ($stage2 === 'Y71' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Y71';
                } else if ($stage2 === 'R11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'R11';
                } else if ($stage2 === 'R21' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'R21';
                } else if ($stage2 === 'A51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'A51';
                } else if ($stage2 === 'P51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'P51';
                } else if ($stage2 === 'Y51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Y51';
                } else if ($stage2 === 'C51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'C51';
                } else if ($stage2 === 'Z51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Z51';
                } else if ($stage2 === 'Z11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Z11';
                } else if ($stage2 === 'X11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'X11';
                } else if ($stage2 === 'C11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'C11';
                } else if ($stage2 === 'H11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'H11';
                } else if ($stage2 === 'J15' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'J15';
                } else if ($stage2 === 'J75' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'J75';
                } 
                break;
            case 'RPEL1-06 [13 GPM - 3600 PSI]':
                if ($stage2 === 'Z11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Z11';
                } else if ($stage2 === 'C11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'C11';
                } else if ($stage2 === 'H11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'H11';
                } else if ($stage2 === 'Y11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Y11';
                } else if ($stage2 === 'L21' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'L21';
                } else if ($stage2 === 'R11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'R11';
                } else if ($stage2 === 'Y51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Y51';
                } else if ($stage2 === 'C51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'C51';
                } else if ($stage2 === 'Z51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Z51';
                } else if ($stage2 === 'H51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'H51';
                } else if ($stage2 === 'Z11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Z11';
                } else if ($stage2 === 'X11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'X11';
                } else if ($stage2 === 'C11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'C11';
                } else if ($stage2 === 'H11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'H11';
                } else if ($stage2 === 'Y11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Y11';
                } 
                break;
            case 'RPE3-06 [21 GPM - 5100 PSI]':
                if ($stage2 === 'Z11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Z11';
                } else if ($stage2 === 'C11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'C11';
                } else if ($stage2 === 'H11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'H11';
                } else if ($stage2 === 'P11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'P11';
                } else if ($stage2 === 'Y11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Y11';
                } else if ($stage2 === 'L21' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'L21';
                } else if ($stage2 === 'B11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'B11';
                } else if ($stage2 === 'Y41' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Y41';
                } else if ($stage2 === 'Z21' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Z21';
                } else if ($stage2 === 'C41' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'C41';
                } else if ($stage2 === 'F11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'F11';
                } else if ($stage2 === 'R11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'R11';
                } else if ($stage2 === 'R21' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'R21';
                } else if ($stage2 === 'A51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'A51';
                } else if ($stage2 === 'P51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'P51';
                } else if ($stage2 === 'Y51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Y51';
                } else if ($stage2 === 'C51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'C51';
                } else if ($stage2 === 'Z51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Z51';
                } else if ($stage2 === 'Z71' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Z71';
                } else if ($stage2 === 'Z81' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Z81';
                } else if ($stage2 === 'Z91' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Z91';
                } else if ($stage2 === 'R31' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'R31';
                } else if ($stage2 === 'H51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'H51';
                } else if ($stage2 === 'F51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'F51';
                } else if ($stage2 === 'Z11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Z11';
                } else if ($stage2 === 'X11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'X11';
                } else if ($stage2 === 'C11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'C11';
                } else if ($stage2 === 'H11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'H11';
                } else if ($stage2 === 'K11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'K11';
                } else if ($stage2 === 'N11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'N11';
                } else if ($stage2 === 'F11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'F11';
                } else if ($stage2 === 'X25' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'X25';
                } else if ($stage2 === 'J15' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'J15';
                } else if ($stage2 === 'J75' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'J75';
                }
                break;
            case 'RPER3-06 [21 GPM - 5100 PSI]':
                  if ($stage2 === 'Z11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Z11';
                } else if ($stage2 === 'C11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'C11';
                } else if ($stage2 === 'H11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'H11';
                } else if ($stage2 === 'P11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'P11';
                } else if ($stage2 === 'Y11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Y11';
                } else if ($stage2 === 'L21' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'L21';
                } else if ($stage2 === 'B11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'B11';
                } else if ($stage2 === 'Y41' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Y41';
                } else if ($stage2 === 'Z21' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Z21';
                } else if ($stage2 === 'C41' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'C41';
                } else if ($stage2 === 'F11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'F11';
                } else if ($stage2 === 'R11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'R11';
                } else if ($stage2 === 'R21' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'R21';
                } else if ($stage2 === 'A51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'A51';
                } else if ($stage2 === 'P51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'P51';
                } else if ($stage2 === 'Y51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Y51';
                } else if ($stage2 === 'C51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'C51';
                } else if ($stage2 === 'Z51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Z51';
                } else if ($stage2 === 'Z71' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Z71';
                } else if ($stage2 === 'Z81' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Z81';
                } else if ($stage2 === 'Z91' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Z91';
                } else if ($stage2 === 'R31' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'R31';
                } else if ($stage2 === 'H51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'H51';
                } else if ($stage2 === 'F51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'F51';
                } else if ($stage2 === 'Z11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Z11';
                } else if ($stage2 === 'X11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'X11';
                } else if ($stage2 === 'C11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'C11';
                } else if ($stage2 === 'H11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'H11';
                } else if ($stage2 === 'K11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'K11';
                } else if ($stage2 === 'N11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'N11';
                } else if ($stage2 === 'F11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'F11';
                } else if ($stage2 === 'X25' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'X25';
                } else if ($stage2 === 'J15' && $("#stage1").val()=== 'Two Positions') {
                    valvestage2 = 'J15';
                } else if ($stage2 === 'J75' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'J75';
                }
                break;
            case 'RPEA3-06 [21 GPM - 5100 PSI]':
                if ($stage2 === 'Z11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Z11';
                } else if ($stage2 === 'C11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'C11';
                } else if ($stage2 === 'P11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'P11';
                } else if ($stage2 === 'Y11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Y11';
                } else if ($stage2 === 'R11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'R11';
                } else if ($stage2 === 'P51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'P51';
                } else if ($stage2 === 'Y51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Y51';
                } else if ($stage2 === 'C51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'C51';
                } else if ($stage2 === 'Z51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Z51';
                } else if ($stage2 === 'Z11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Z11';
                } else if ($stage2 === 'X11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'X11';
                } else if ($stage2 === 'C11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'C11';
                } else if ($stage2 === 'Y11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Y11';
                } else if ($stage2 === 'P11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'P11';
                } 
                break;
            case 'RPEW4-06 [21 GPM - 5100 PSI]':
                  if ($stage2 === 'Z11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Z11';
                } else if ($stage2 === 'C11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'C11';
                } else if ($stage2 === 'H11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'H11';
                } else if ($stage2 === 'P11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'P11';
                } else if ($stage2 === 'Y11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Y11';
                } else if ($stage2 === 'L21' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'L21';
                } else if ($stage2 === 'B11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'B11';
                } else if ($stage2 === 'Z21' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Z21';
                } else if ($stage2 === 'F11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'F11';
                } else if ($stage2 === 'R11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'R11';
                } else if ($stage2 === 'R21' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'R21';
                } else if ($stage2 === 'A51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'A51';
                } else if ($stage2 === 'P51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'P51';
                } else if ($stage2 === 'X25' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'X25';
                } else if ($stage2 === 'Y51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Y51';
                } else if ($stage2 === 'C51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'C51';
                } else if ($stage2 === 'Z51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Z51';
                } else if ($stage2 === 'H51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'H51';
                } else if ($stage2 === 'F51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'F51';
                } else if ($stage2 === 'Z11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Z11';
                } else if ($stage2 === 'X11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'X11';
                } else if ($stage2 === 'C11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'C11';
                } else if ($stage2 === 'H11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'H11';
                } else if ($stage2 === 'N11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'N11';
                } else if ($stage2 === 'F11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'F11';
                } else if ($stage2 === 'J15' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'J15';
                } else if ($stage2 === 'J75' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'J75';
                }
                break;
            case 'RPE4-10 [37 GPM - 5100 PSI]':
                if ($stage2 === 'Z11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Z11';
                } else if ($stage2 === 'C11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'C11';
                } else if ($stage2 === 'H11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'H11';
                } else if ($stage2 === 'P11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'P11';
                } else if ($stage2 === 'Y11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Y11';
                } else if ($stage2 === 'L21' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'L21';
                } else if ($stage2 === 'B11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'B11';
                } else if ($stage2 === 'C21' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'C21';
                } else if ($stage2 === 'R11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'R11';
                } else if ($stage2 === 'R21' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'R21';
                } else if ($stage2 === 'A51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'A51';
                } else if ($stage2 === 'P51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'P51';
                } else if ($stage2 === 'Y51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Y51';
                } else if ($stage2 === 'C51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'C51';
                } else if ($stage2 === 'Z51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Z51';
                } else if ($stage2 === 'B51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'B51';
                } else if ($stage2 === 'H51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'H51';
                } else if ($stage2 === 'X11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'X11';
                } else if ($stage2 === 'C11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'C11';
                } else if ($stage2 === 'H11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'H11';
                } else if ($stage2 === 'J15' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'J15';
                } else if ($stage2 === 'J75' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'J75';
                }
                break;
            case 'RPEW4-10 [37 GPM - 5100 PSI]':
                if ($stage2 === 'Z11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Z11';
                } else if ($stage2 === 'C11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'C11';
                } else if ($stage2 === 'H11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'H11';
                } else if ($stage2 === 'P11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'P11';
                } else if ($stage2 === 'Y11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Y11';
                } else if ($stage2 === 'L21' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'L21';
                } else if ($stage2 === 'B11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'B11';
                } else if ($stage2 === 'C21' && $("#stage1").val( )=== 'Three Positions') {
                    valvestage2 = 'C21';
                } else if ($stage2 === 'R11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'R11';
                } else if ($stage2 === 'R21' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'R21';
                } else if ($stage2 === 'A51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'A51';
                } else if ($stage2 === 'P51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'P51';
                } else if ($stage2 === 'Y51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Y51';
                } else if ($stage2 === 'C51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'C51';
                } else if ($stage2 === 'Z51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Z51';
                } else if ($stage2 === 'B51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'B51';
                } else if ($stage2 === 'H51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'H51';
                } else if ($stage2 === 'X11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'X11';
                } else if ($stage2 === 'C11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'C11';
                } else if ($stage2 === 'H11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'H11';
                } else if ($stage2 === 'J15' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'J15';
                } else if ($stage2 === 'J75' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'J75';
                }
                break;
            case 'RNEH1-10 [40 GPM - 4600 / 6100 PSI]':
                if ($stage2 === 'Standard 320 Bar') {
                    valvestage2 = '1';
                } else if ($stage2 === 'High Pressure 420 Bar') {
                    valvestage2 = '1H';
                }
                break;
            case 'RNEH5-16 [80 GPM - 5100 / 6100 PSI]':
                if ($stage2 === 'Standard 320 Bar') {
                    valvestage2 = '5';
                } else if ($stage2 === 'High Pressure 420 Bar') {
                    valvestage2 = '5H';
                }
                break;
            case 'RNEH4-25 [160 GPM - 4600 / 6100 PSI]':
                if ($stage2 === 'Standard 320 Bar') {
                    valvestage2 = '4';
                } else if ($stage2 === 'High Pressure 420 Bar') {
                    valvestage2 = '4H';
                }
                break;
            case 'RPR3-04 [8 GPM - 4600 PSI]':
                if ($stage2 === 'Z11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Z11';
                } else if ($stage2 === 'C11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'C11';
                } else if ($stage2 === 'H11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'H11';
                } else if ($stage2 === 'P11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'P11';
                } else if ($stage2 === 'Y11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Y11';
                } else if ($stage2 === 'L11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'L11';
                } else if ($stage2 === 'B11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'B11';
                } else if ($stage2 === 'L21' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'L21';
                } else if ($stage2 === 'Y31' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Y31';
                } else if ($stage2 === 'Y71' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Y71';
                } else if ($stage2 === 'Z15' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Z15';
                } else if ($stage2 === 'C15' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'C15';
                } else if ($stage2 === 'H15' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'H15';
                } else if ($stage2 === 'P15' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'P15';
                } else if ($stage2 === 'Y15' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Y15';
                } else if ($stage2 === 'B15' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'B15';
                } else if ($stage2 === 'L15' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'L15';
                } else if ($stage2 === 'L25' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'L25';
                } else if ($stage2 === 'Y35' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Y35';
                } else if ($stage2 === 'Y75' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Y75';
                } else if ($stage2 === 'R11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'R11';
                } else if ($stage2 === 'A51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'A51';
                } else if ($stage2 === 'R21' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'R21';
                } else if ($stage2 === 'J15' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'J15';
                } else if ($stage2 === 'J75' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'J75';
                } else if ($stage2 === 'P55' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'P55';
                } else if ($stage2 === 'R25' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'R25';
                } else if ($stage2 === 'X11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'X11';
                }
                break;
            case 'RPR3-06 [21 GPM - 5100 PSI]':
                if ($stage2 === 'Z11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Z11';
                } else if ($stage2 === 'C11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'C11';
                } else if ($stage2 === 'H11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'H11';
                } else if ($stage2 === 'P11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'P11';
                } else if ($stage2 === 'Y11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Y11';
                } else if ($stage2 === 'B11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'B11';
                } else if ($stage2 === 'L21' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'L21';
                } else if ($stage2 === 'Z15' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Z15';
                } else if ($stage2 === 'C15' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'C15';
                } else if ($stage2 === 'H15' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'H15';
                } else if ($stage2 === 'P15' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'P15';
                } else if ($stage2 === 'Y15' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Y15';
                } else if ($stage2 === 'B15' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'B15';
                } else if ($stage2 === 'Y14' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Y14';
                } else if ($stage2 === 'Z21' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Z21';
                } else if ($stage2 === 'P11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'P11';
                } else if ($stage2 === 'H11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'H11';
                } else if ($stage2 === 'C51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'C51';
                } else if ($stage2 === 'Z11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Z11';
                } else if ($stage2 === 'H51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'H51';
                } else if ($stage2 === 'Y11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Y11';
                } else if ($stage2 === 'R11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'R11';
                } else if ($stage2 === 'A51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'A51';
                } else if ($stage2 === 'R21' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'R21';
                } else if ($stage2 === 'J19' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'J19';
                } else if ($stage2 === 'X11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'X11';
                } else if ($stage2 === 'X21' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'X21';
                } else if ($stage2 === 'C55' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'C55';
                } else if ($stage2 === 'Z15' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Z15';
                } else if ($stage2 === 'Z55' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Z55';
                } else if ($stage2 === 'Y55' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Y55';
                } else if ($stage2 === 'J15' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'J15';
                } else if ($stage2 === 'J75' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'J75';
                } else if ($stage2 === 'P55' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'P55';
                } else if ($stage2 === 'R25' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'R25';
                } else if ($stage2 === 'X15' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'X15';
                } else if ($stage2 === 'Y15' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Y15';
                }
                break;
            case 'RPR1-10 [37 GPM - 5100 PSI]':
                if ($stage2 === 'Z11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Z11';
                } else if ($stage2 === 'Prop. Z11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Z11';
                } else if ($stage2 === 'Y11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Y11';
                } else if ($stage2 === 'Prop. Y11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Y11';
                } else if ($stage2 === 'C11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'C11';
                } else if ($stage2 === 'H11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'H11';
                } else if ($stage2 === 'P11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'P11';
                } else if ($stage2 === 'P15' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'P15';
                } else if ($stage2 === 'C15' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'C15';
                } else if ($stage2 === 'H15' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'H15';
                } else if ($stage2 === 'R11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'R11';
                } else if ($stage2 === 'R21' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'R21';
                } else if ($stage2 === 'Z15' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Z15';
                } else if ($stage2 === 'J15' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'J15';
                } else if ($stage2 === 'R25' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'R25';
                } else if ($stage2 === 'Y15' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Y15';
                }
                break;
            case 'RPH2-06 [21 GPM - 5100 PSI]':
                if ($stage2 === 'Z11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Z11';
                } else if ($stage2 === 'C11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'C11';
                } else if ($stage2 === 'H11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'H11';
                } else if ($stage2 === 'Y11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Y11';
                } else if ($stage2 === 'L21' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'L21';
                } else if ($stage2 === 'R11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'R11';
                } else if ($stage2 === 'A51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'A51';
                } else if ($stage2 === 'Z51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Z51';
                } else if ($stage2 === 'C51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'C51';
                } else if ($stage2 === 'H51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'H51';
                } else if ($stage2 === 'Y51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Y51';
                } else if ($stage2 === 'Y11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Y11';
                } else if ($stage2 === 'H11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'H11';
                } else if ($stage2 === 'X11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'X11';
                } else if ($stage2 === 'Z11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Z11';
                } else if ($stage2 === 'J15' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'J15';
                }
                break;
            case 'RPH3-06 [21 GPM - 5100 PSI]':
                if ($stage2 === 'Z11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Z11';
                } else if ($stage2 === 'C11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'C11';
                } else if ($stage2 === 'H11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'H11';
                } else if ($stage2 === 'P11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'P11';
                } else if ($stage2 === 'Y11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'Y11';
                } else if ($stage2 === 'L21' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'L21';
                } else if ($stage2 === 'B11' && $("#stage1").val() === 'Three Positions') {
                    valvestage2 = 'B11';
                } else if ($stage2 === 'R11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'R11';
                } else if ($stage2 === 'A51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'A51';
                } else if ($stage2 === 'P51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'P51';
                } else if ($stage2 === 'Y51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Y51';
                } else if ($stage2 === 'X11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'X11';
                }  else if ($stage2 === 'J75' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'J75';
                } else if ($stage2 === 'J15' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'J15';
                }
                break;
            case 'RPK1-06 [21 GPM - 5100 PSI]':
                if ($stage2 === 'R11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'R11';
                } else if ($stage2 === 'R21' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'R21';
                } else if ($stage2 === 'A51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'A51';
                } else if ($stage2 === 'P51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'P51';
                } else if ($stage2 === 'Y51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Y51';
                } else if ($stage2 === 'C51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'C51';
                } else if ($stage2 === 'Z51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Z51';
                } else if ($stage2 === 'H51' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'H51';
                } else if ($stage2 === 'Z11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'Z11';
                } else if ($stage2 === 'X11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'X11';
                } else if ($stage2 === 'C11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'C11';
                } else if ($stage2 === 'H11' && $("#stage1").val() === 'Two Positions') {
                    valvestage2 = 'H11';
                }
                break;
            case 'SD2E-A2 [8 GPM - 5100 PSI]':
                if ($stage2 === '2I11') {
                    valvestage2 = '2I11';
                } else if ($stage2 === '2I12') {
                    valvestage2 = '2I12';
                }
                break;
            case 'SD2E-B2 [8 GPM - 5100 PSI]':
                if ($stage2 === '2I11') {
                    valvestage2 = '2I11';
                } else if ($stage2 === '2I12') {
                    valvestage2 = '2I12';
                }
                break;
            case 'PD2E1 [8 GPM - 1200 PSI]':
                if ($stage2 === '2D21') {
                    valvestage2 = '2D21';
                } else if ($stage2 === '2D26') {
                    valvestage2 = '2D26';
                }
                break;
            case 'SD2E-A3 [8 GPM - 5100 PSI]':
                if ($stage2 === '2D21') {
                    valvestage2 = '2D21';
                } else if ($stage2 === '2D25') {
                    valvestage2 = '2D25';
                } else if ($stage2 === '2D26') {
                    valvestage2 = '2D26';
                } else if ($stage2 === '2D27') {
                    valvestage2 = '2D27';
                } else if ($stage2 === '2D31') {
                    valvestage2 = '2D31';
                }
                break;
            case 'SD2E-B3 [16 GPM - 5100 PSI]':
                if ($stage2 === '2D21') {
                    valvestage2 = '2D21';
                } else if ($stage2 === '2D25') {
                    valvestage2 = '2D25';
                } else if ($stage2 === '2D26') {
                    valvestage2 = '2D26';
                }
                break;
            case 'SD2E-A4 [8 GPM - 5100 PSI]':
                if ($stage2 === '2Z11') {
                    valvestage2 = '2Z11';
                } else if ($stage2 === '2Z51') {
                    valvestage2 = '2Z51';
                } else if ($stage2 === '2X21') {
                    valvestage2 = '2X21';
                } else if ($stage2 === '2R21') {
                    valvestage2 = '2R21';
                } else if ($stage2 === '2P51') {
                    valvestage2 = '2P51';
                } else if ($stage2 === '2Y11') {
                    valvestage2 = '2Y11';
                } else if ($stage2 === '2C51') {
                    valvestage2 = '2C51';
                }
                break;
            case 'SD2E-B4 [16 GPM - 5100 PSI]':
                if ($stage2 === '2Z11') {
                    valvestage2 = '2Z11';
                } else if ($stage2 === '2Z51') {
                    valvestage2 = '2Z51';
                } else if ($stage2 === '2X21') {
                    valvestage2 = '2X21';
                }
                break;
            case 'ROE3-062S2 [17 GPM - 3600 PSI]':
                if ($stage2 === 'Standard - Without Manual Override') {
                    valvestage2 = '';
                } else if ($stage2 === 'External Hexagon - Across Flats 14') {
                    valvestage2 = 'N5';
                }
                break;
            case 'ROE3-062S2/M [6.6 GPM - 3600 PSI]':
                if ($stage2 === 'ISO 4401-02-01-0-05 DIN 24340 (CETOP 02) NG04') {
                    valvestage2 = '04';
                } else if ($stage2 === 'ISO 4401-03-02-0-05 DIN 24340 (CETOP 03) NG06') {
                    valvestage2 = '06';
                } 
                break;
            case 'SD3E-A2 [8 GPM - 6100 PSI]':
                if ($stage2 === '2O2') {
                    valvestage2 = '2O2';
                } else if ($stage2 === '2L2') {
                    valvestage2 = '2L2';
                }
                break;
            case 'SD3E-B2 [20 GPM - 6100 PSI]':
                if ($stage2 === '2O2') {
                    valvestage2 = '2O2';
                } else if ($stage2 === '2L2') {
                    valvestage2 = '2L2';
                }
                break;
            case 'ROE3-042S5(S6) [7 GPM - 3600 PSI]':
                if ($stage2 === 'Standard') {
                    valvestage2 = '';
                } else if ($stage2 === 'Rubber Boot Protected') {
                    valvestage2 = 'N2';
                } else if ($stage2 === 'Hand Screw') {
                    valvestage2 = 'N4';
                }
                break;
            case 'ROE3-042S5(S6)/M [7 GPM - 3600 PSI]':
                if ($stage2 === 'Modular Valve Connection A2-A1') {
                    valvestage2 = 'MA';
                } else if ($stage2 === 'Modular Valve Connection B2-B1') {
                    valvestage2 = 'MB';
                } else if ($stage2 === 'Modular Valve Connection A-B') {
                    valvestage2 = 'MX';
                } else if ($stage2 === 'Modular Valve Connection A-T') {
                    valvestage2 = 'MD';
                } else if ($stage2 === 'Modular Valve Connection B-T') {
                    valvestage2 = 'ME';
                } else if ($stage2 === 'Modular Valve Connection B2-B1 A2-A1') {
                    valvestage2 = 'MC';
                } else if ($stage2 === 'Modular Valve Connection B-T A-T') {
                    valvestage2 = 'MF';
                } else if ($stage2 === 'Modular Valve Connection P-T') {
                    valvestage2 = 'MG';
                } else if ($stage2 === 'Modular Valve Connection P2-P1') {
                    valvestage2 = 'MP';
                } else if ($stage2 === 'Modular Valve Connection B2-P2 B2-T2') {
                    valvestage2 = 'MJ';
                } else if ($stage2 === 'Modular Valve Connection A-T B2-B1') {
                    valvestage2 = 'MI';
                } else if ($stage2 === 'In-Line Valve 2 Ports Thread G3/8') {
                    valvestage2 = 'R1';
                } else if ($stage2 === 'In-Line Valve 2 Ports Thread G1/2') {
                    valvestage2 = 'R2';
                } else if ($stage2 === 'In-Line Valve 2 Ports Thread SAE 8 3/4-16') {
                    valvestage2 = 'R3';
                } else if ($stage2 === 'In-Line Valve 2 Ports Thread SAE 10 7/8-14') {
                    valvestage2 = 'R4';
                } else if ($stage2 === 'In-Line Valve 2 Ports Thread SAE 10 7/8-14 with Built-In Flow Control') {
                    valvestage2 = 'R7';
                }
                break;
            case 'SD1E-A2 [8 GPM - 5100 PSI]':
                if ($stage2 === '2S5') {
                    valvestage2 = '2S5';
                } else if ($stage2 === '2S6') {
                    valvestage2 = '2S6';
                }
                break;
            case 'SD1E-A3 [8 GPM - 5100 PSI]':
                if ($stage2 === '2S7') {
                    valvestage2 = '2S7';
                } else if ($stage2 === '2S8') {
                    valvestage2 = '2S8';
                }
                break;
            case 'ROR3-062 [9 GPM - 4600 PSI]':
                if ($stage2 === 'Plunger') {
                    valvestage2 = '1';
                } else if ($stage2 === 'Hand Push Knob') {
                    valvestage2 = '2';
                } else if ($stage2 === 'Hand Lever Without Microswitch') {
                    valvestage2 = '3';
                } else if ($stage2 === 'Hand Lever With Microswitch') {
                    valvestage2 = '4';
                }
                break;
            case 'SD1M-A2/L [5 GPM - 3600 PSI]':
                if ($stage2 === '2S5') {
                    valvestage2 = '2S5';
                }
                break;
            case 'SD2H-LA3 [11 GPM - 4600 PSI]':
                if ($stage2 === '7 Bar (102 PSI)') {
                    valvestage2 = '070';
                } else if ($stage2 === '12 Bar (174 PSI)') {
                    valvestage2 = '120';
                }
                break;
            case 'SD3E-C2 [40 GPM - 5100 PSI]':
                if ($stage2 === '2O2') {
                    valvestage2 = '2O2';
                } else if ($stage2 === '2L2') {
                    valvestage2 = '2L2';
                }
                break;
        }
        valvestage3 = '';
        valvestage4 = '';
        valvestage5 = '';
        valvestage6 = '';
        valvestage7 = '';
        valvestage8 = '';
        valvestage9 = '';
        valvestage10 = '';
        valvestage11 = '';
        valvestage12 = '';
        valvestage13 = '';
        valvestage14 = '';
        orderkey = '';
});
$(document).on("change", "#stage3", function() {
    var $stage3 = $(this).val();
        var key = $("#valve-series").val();
        var vals = [];
        $("#sorder").remove();
        $("#order").remove();
        
        switch(key) {
            case 'RPEK1-03 [5 GPM - 3600 PSI]':
                if ($stage3 === 'Z11' && $("#stage2").val() === 'Three Positions') {
                    valvestage3 = 'Z11';
                } else if ($stage3 === 'C11' && $("#stage2").val() === 'Three Positions') {
                    valvestage3 = 'C11';
                } else if ($stage3 === 'H11' && $("#stage2").val() === 'Three Positions') {
                    valvestage3 = 'H11';
                } else if ($stage3 === 'P11' && $("#stage2").val() === 'Three Positions') {
                    valvestage3 = 'P11';
                } else if ($stage3 === 'Y11' && $("#stage2").val() === 'Three Positions') {
                    valvestage3 = 'Y11';
                } else if ($stage3 === 'Y82' && $("#stage2").val() === 'Three Positions') {
                    valvestage3 = 'Y82';
                } else if ($stage3 === 'R11' && $("#stage2").val() === 'Two Positions') {
                    valvestage3 = 'R11';
                } else if ($stage3 === 'R21' && $("#stage2").val() === 'Two Positions') {
                    valvestage3 = 'R21';
                } else if ($stage3 === 'A51' && $("#stage2").val() === 'Two Positions') {
                    valvestage3 = 'A51';
                } else if ($stage3 === 'Y51' && $("#stage2").val() === 'Two Positions') {
                    valvestage3 = 'Y51';
                } else if ($stage3 === 'C51' && $("#stage2").val() === 'Two Positions') {
                    valvestage3 = 'C51';
                } else if ($stage3 === 'Z81' && $("#stage2").val() === 'Two Positions') {
                    valvestage3 = 'Z81';
                } else if ($stage3 === 'H51' && $("#stage2").val() === 'Two Positions') {
                    valvestage3 = 'H51';
                } else if ($stage3 === 'Z51' && $("#stage2").val() === 'Two Positions') {
                    valvestage3 = 'Z51';
                } else if ($stage3 === 'Z11' && $("#stage2").val() === 'Two Positions') {
                    valvestage3 = 'Z11';
                } else if ($stage3 === 'X11' && $("#stage2").val() === 'Two Positions') {
                    valvestage3 = 'X11';
                } else if ($stage3 === 'C11' && $("#stage2").val() === 'Two Positions') {
                    valvestage3 = 'C11';
                } else if ($stage3 === 'Y11' && $("#stage2").val() === 'Two Positions') {
                    valvestage3 = 'Y11';
                }
                break;
            case 'RPEL1-04 [8 GPM - 3600 PSI]':
                if ($stage3 === '12 V DC / 1.83 A') {
                    valvestage3 = '01200';
                } else if ($stage3 === '24 V DC / 0.92 A') {
                    valvestage3 = '02400';
                }
                break;
            case 'RPE3-04 [8 GPM - 4600 PSI]':
                if ($stage3 === '12 V DC / 2.45 A') {
                    valvestage3 = '01200';
                } else if ($stage3 === '24 V DC / 1.15 A') {
                    valvestage3 = '02400';
                } else if ($stage3 === '120 V AC / 0.22 A / 50 (60) Hz') {
                    valvestage3 = '12060';
                } else if ($stage3 === '230 V AC / 0.12 A / 50 (60) Hz') {
                    valvestage3 = '23050';
                }
                break;
            case 'RPEL1-06 [13 GPM - 3600 PSI]':
                if ($stage3 === '12 V DC / 2.45 A') {
                    valvestage3 = '01200';
                } else if ($stage3 === '24 V DC / 1.15 A') {
                    valvestage3 = '02400';
                } 
                break;
            case 'RPE3-06 [21 GPM - 5100 PSI]':
                if ($stage3 === '12 V DC / 2.72 A') {
                    valvestage3 = '01200';
                } else if ($stage3 === '24 V DC / 1.29 A') {
                    valvestage3 = '02400';
                } else if ($stage3 === '120 V AC / 0.26 A / 50 (60) Hz') {
                    valvestage3 = '12060';
                } else if ($stage3 === '230 V AC / 0.15 A / 50 (60) Hz') {
                    valvestage3 = '23050';
                }
                break;
            case 'RPER3-06 [21 GPM - 5100 PSI]':
                if ($stage3 === '12 V DC / 2.72 A') {
                    valvestage3 = '01200';
                } else if ($stage3 === '24 V DC / 1.29 A') {
                    valvestage3 = '02400';
                } else if ($stage3 === '120 V AC / 0.26 A / 50 (60) Hz') {
                    valvestage3 = '12060';
                } else if ($stage3 === '230 V AC / 0.15 A / 50 (60) Hz') {
                    valvestage3 = '23050';
                }
                break;
            case 'RPEA3-06 [21 GPM - 5100 PSI]':
                if ($stage3 === '24 V DC') {
                    valvestage3 = '02400';
                }
                break;
            case 'RPEW4-06 [21 GPM - 5100 PSI]':
                if ($stage3 === '12 V DC / 2.72 A') {
                    valvestage3 = '01200';
                } else if ($stage3 === '24 V DC / 1.29 A') {
                    valvestage3 = '02400';
                } else if ($stage3 === '120 V AC / 0.26 A / 50 (60) Hz') {
                    valvestage3 = '12060';
                }
                break;
            case 'RPE4-10 [37 GPM - 5100 PSI]':
                if ($stage3 === '12 V DC / 3.17 A') {
                    valvestage3 = '01200';
                } else if ($stage3 === '24 V DC / 1.73 A') {
                    valvestage3 = '02400';
                } else if ($stage3 === '120 V AC / 0.38 A / 50 (60) Hz') {
                    valvestage3 = '12060';
                } else if ($stage3 === '230 V AC / 0.20 A / 50 (60) Hz') {
                    valvestage3 = '23050';
                }
                break;
            case 'RPEW4-10 [37 GPM - 5100 PSI]':
                if ($stage3 === '12 V DC / 3.17 A') {
                    valvestage3 = '01200';
                } else if ($stage3 === '24 V DC / 1.73 A') {
                    valvestage3 = '02400';
                } else if ($stage3 === '120 V AC / 0.38 A / 50 (60) Hz') {
                    valvestage3 = '12060';
                }
                break;
            case 'RNEH1-10 [40 GPM - 4600 / 6100 PSI]':
                if ($stage3 === 'Standard Pattern') {
                    valvestage3 = '10';
                } else if ($stage3 === 'ISO 4401-05-05-0-05') {
                    valvestage3 = '10R';
                }
                break;
            case 'RNEH5-16 [80 GPM - 5100 / 6100 PSI]':
                if ($stage3 === 'ISO 4401-07-07-0-05') {
                    valvestage3 = '16';
                }
                break;
            case 'RNEH4-25 [160 GPM - 4600 / 6100 PSI]':
                if ($stage3 === 'ISO 4401-08-08-0-05') {
                    valvestage3 = '25';
                }
                break;
            case 'RPR3-04 [8 GPM - 4600 PSI]':
                if ($stage3 === 'Standard - Lever on Side A - Upward') {
                    valvestage3 = 'A1';
                }
                break;
            case 'RPR3-06 [21 GPM - 5100 PSI]':
                if ($stage3 === 'Standard - Lever on Side A - Upward') {
                    valvestage3 = 'A1';
                }
                break;
            case 'RPR1-10 [37 GPM - 5100 PSI]':
                if ($stage3 === 'Proportional Spool - Nominal Flow 30 l/min (7.9 GPM)') {
                    valvestage3 = '30';
                } else if ($stage3 === 'Proportional Spool - Nominal Flow 60 l/min (15.8 GPM)') {
                    valvestage3 = '60';
                } else if ($stage3 === 'Directional Control Valve Spool') {
                    valvestage3 = '';
                }
                break;
            case 'RPH2-06 [21 GPM - 5100 PSI]':
                if ($stage3 === 'M10x1') {
                    valvestage3 = '1';
                } else if ($stage3 === 'G1/8') {
                    valvestage3 = '2';
                } else if ($stage3 === '7/16-20 UNF-2B SAE-4') {
                    valvestage3 = '3';
                }
                break;
            case 'RPH3-06 [21 GPM - 5100 PSI]':
                 if ($stage3 === 'M10x1') {
                    valvestage3 = '1';
                } else if ($stage3 === 'G1/8') {
                    valvestage3 = '2';
                } else if ($stage3 === 'G1/4') {
                    valvestage3 = '3';
                }
                break;
            case 'RPK1-06 [21 GPM - 5100 PSI]':
                if ($stage3 === 'Standard - NBR') {
                    valvestage3 = '';
                } else if ($stage3 === 'FPM (Viton)') {
                    valvestage3 = '-V';
                } 
                break;
            case 'SD2E-A2 [8 GPM - 5100 PSI]':
                if ($stage3 === 'Standard') {
                    valvestage3 = '';
                } else if ($stage3 === 'Rubber Boot Protected') {
                    valvestage3 = 'M2';
                } else if ($stage3 === 'Socket Head Screw') {
                    valvestage3 = 'M5';
                } else if ($stage3 === 'Without Manual Override') {
                    valvestage3 = 'M9'
                }
                break;
            case 'SD2E-B2 [8 GPM - 5100 PSI]':
                if ($stage3 === 'Standard') {
                    valvestage3 = '';
                } else if ($stage3 === 'Rubber Boot Protected') {
                    valvestage3 = 'M2';
                } else if ($stage3 === 'Socket Head Screw') {
                    valvestage3 = 'M5';
                } else if ($stage3 === 'Without Manual Override') {
                    valvestage3 = 'M9'
                }
                break;
            case 'PD2E1 [8 GPM - 1200 PSI]':
                if ($stage3 === '12 V DC / 1.67 A') {
                    valvestage3 = '12';
                } else if ($stage3 === '24 V DC / 0.84 A') {
                    valvestage3 = '24';
                }
                break;
            case 'SD2E-A3 [8 GPM - 5100 PSI]':
                if ($stage3 === 'Standard') {
                    valvestage3 = '';
                } else if ($stage3 === 'Rubber Boot Protected') {
                    valvestage3 = 'M2';
                } else if ($stage3 === 'Socket Head Screw') {
                    valvestage3 = 'M5';
                } else if ($stage3 === 'Without Manual Override') {
                    valvestage3 = 'M9'
                }
                break;
            case 'SD2E-B3 [16 GPM - 5100 PSI]':
                if ($stage3 === 'Standard') {
                    valvestage3 = '';
                } else if ($stage3 === 'Rubber Boot Protected') {
                    valvestage3 = 'M2';
                } else if ($stage3 === 'Socket Head Screw') {
                    valvestage3 = 'M5';
                } else if ($stage3 === 'Without Manual Override') {
                    valvestage3 = 'M9'
                }
                break;
            case 'SD2E-A4 [8 GPM - 5100 PSI]':
                if ($stage3 === 'Standard') {
                    valvestage3 = '';
                } else if ($stage3 === 'Rubber Boot Protected') {
                    valvestage3 = 'M2';
                } else if ($stage3 === 'Socket Head Screw') {
                    valvestage3 = 'M5';
                } else if ($stage3 === 'Without Manual Override') {
                    valvestage3 = 'M9'
                }
                break;
            case 'SD2E-B4 [16 GPM - 5100 PSI]':
                if ($stage3 === 'Standard') {
                    valvestage3 = '';
                } else if ($stage3 === 'Rubber Boot Protected') {
                    valvestage3 = 'M2';
                } else if ($stage3 === 'Socket Head Screw') {
                    valvestage3 = 'M5';
                } else if ($stage3 === 'Without Manual Override') {
                    valvestage3 = 'M9'
                }
                break;
            case 'ROE3-062S2 [17 GPM - 3600 PSI]':
                if ($stage3 === 'Standard - NBR') {
                    valvestage3 = '';
                } else if ($stage3 === 'FPM (Viton)') {
                    valvestage3 = 'V';
                } 
                break;
            case 'ROE3-062S2/M [6.6 GPM - 3600 PSI]':
                if ($stage3 === '12 V DC / 2.41 A') {
                    valvestage3 = '01200';
                } else if ($stage3 === '24 V DC / 1.15 A') {
                    valvestage3 = '02400';
                } else if ($stage3 === '120 V AC / 0.22 A / 50 (60) Hz') {
                    valvestage3 = '12060';
                } else if ($stage3 === '230 V AC / 0.12 A / 50 (60) Hz') {
                    valvestage3 = '23050';
                }
                break;
            case 'SD3E-A2 [8 GPM - 6100 PSI]':
                if ($stage3 === 'Standard') {
                    valvestage3 = '';
                } else if ($stage3 === 'Rubber Boot Protected') {
                    valvestage3 = 'M2';
                } else if ($stage3 === 'Socket Head Screw') {
                    valvestage3 = 'M5';
                } else if ($stage3 === 'Without Manual Override') {
                    valvestage3 = 'M9'
                }
                break;
            case 'SD3E-B2 [20 GPM - 6100 PSI]':
                if ($stage3 === 'Standard') {
                    valvestage3 = '';
                } else if ($stage3 === 'Rubber Boot Protected') {
                    valvestage3 = 'M2';
                } else if ($stage3 === 'Socket Head Screw') {
                    valvestage3 = 'M5';
                } else if ($stage3 === 'Without Manual Override') {
                    valvestage3 = 'M9'
                }
                break;
            case 'ROE3-042S5(S6) [7 GPM - 3600 PSI]':
                if ($stage3 === 'Standard - NBR') {
                    valvestage3 = '';
                } else if ($stage3 === 'FPM (Viton)') {
                    valvestage3 = 'V';
                } 
                break;
            case 'ROE3-042S5(S6)/M [7 GPM - 3600 PSI]':
                if ($stage3 === 'ISO 4401-02-01-0-05 DIN 24340 (CETOP 02) NG04') {
                    valvestage3 = '04';
                } else if ($stage3 === 'ISO 4401-03-02-0-05 DIN 24340 (CETOP 03) NG06') {
                    valvestage3 = '06';
                } 
                break;
            case 'SD1E-A2 [8 GPM - 5100 PSI]':
                if ($stage3 === 'Standard') {
                    valvestage3 = '';
                } else if ($stage3 === 'Rubber Boot Protected') {
                    valvestage3 = 'M2';
                } else if ($stage3 === 'Socket Head Screw') {
                    valvestage3 = 'M5';
                } else if ($stage3 === 'Without Manual Override') {
                    valvestage3 = 'M9'
                } else if ($stage3 === 'Hand Screw') {
                    valvestage3 = 'M4';
                }
                break;
            case 'SD1E-A3 [8 GPM - 5100 PSI]':
                if ($stage3 === 'Standard') {
                    valvestage3 = '';
                } else if ($stage3 === 'Rubber Boot Protected') {
                    valvestage3 = 'M2';
                } else if ($stage3 === 'Socket Head Screw') {
                    valvestage3 = 'M5';
                } else if ($stage3 === 'Without Manual Override') {
                    valvestage3 = 'M9'
                } else if ($stage3 === 'Hand Screw') {
                    valvestage3 = 'M4';
                }
                break;
            case 'ROR3-062 [9 GPM - 4600 PSI]':
                if ($stage3 === 'Standard - NBR') {
                    valvestage3 = '';
                } else if ($stage3 === 'FPM (Viton)') {
                    valvestage3 = 'V';
                } 
                break;
            case 'SD1M-A2/L [5 GPM - 3600 PSI]':
                if ($stage3 === 'Hand Push Knob') {
                    valvestage3 = '1';
                } else if ($stage3 === 'Hand Lever Without Microswitch') {
                    valvestage3 = '2';
                } else if ($stage3 === 'Hand Lever With Microswitch') {
                    valvestage3 = '3';
                }
                break;
            case 'SD2H-LA3 [11 GPM - 4600 PSI]':
                if ($stage3 === 'Standard - Across Flats 27 mm') {
                    valvestage3 = '';
                } else if ($stage3 === 'HEX 24') {
                    valvestage3 = 'P';
                }
                break;
            case 'SD3E-C2 [40 GPM - 5100 PSI]':
                if ($stage3 === 'Standard') {
                    valvestage3 = '';
                } else if ($stage3 === 'Rubber Boot Protected') {
                    valvestage3 = 'M2';
                } else if ($stage3 === 'Socket Head Screw (hex 2.5)') {
                    valvestage3 = 'M5';
                } else if ($stage3 === 'Without Manual Override') {
                    valvestage3 = 'M9'
                }
                break;
        }
        valvestage4 = '';
        valvestage5 = '';
        valvestage6 = '';
        valvestage7 = '';
        valvestage8 = '';
        valvestage9 = '';
        valvestage10 = '';
        valvestage11 = '';
        valvestage12 = '';
        valvestage13 = '';
        valvestage14 = '';
        orderkey = '';
});
$(document).on("change", "#stage4", function() {
    var $stage4 = $(this).val();
        var key = $("#valve-series").val();
        var vals = [];
        var temp = [];
        $("#sorder").remove();
        $("#order").remove();
        
        switch(key) {
            case 'RPEK1-03 [5 GPM - 3600 PSI]':
                if ($stage4 === '12 V DC / 1.83 A') {
                    valvestage4 = '01200';
                } else if ($stage4 === '24 V DC / 0.92 A') {
                    valvestage4 = '02400';
                }
                break;
            case 'RPEL1-04 [8 GPM - 3600 PSI]':
                if ($stage4 === 'DIN 43 650') {
                    valvestage4 = 'E1';
                } else if ($stage4 === 'DIN 43 650 with Quenching Diode') {
                    valvestage4 = 'E2';
                } else if ($stage4 === 'Deutsch DT04-2P - Axial (2 pins; male)') {
                    valvestage4 = 'E12A';
                } else if ($stage4 === 'Deutsch DT04-2P - Axial (2 pins; male) with Quenching Diode') {
                    valvestage4 = 'E13A';
                } else if ($stage4 === 'DIN 43 650 with Integrated Rectifier') {
                    valvestage4 = 'E5';
                }
                break;
            case 'RPE3-04 [8 GPM - 4600 PSI]':
                if ($stage4 === 'DIN 43 650') {
                    valvestage4 = 'E1';
                } else if ($stage4 === 'DIN 43 650 with Quenching Diode') {
                    valvestage4 = 'E2';
                } else if ($stage4 === 'Loose Conductors (Two Insulated Wires)') {
                    valvestage4 = 'E8';
                } else if ($stage4 === 'Loose Conductors (Two Insulated Wires) with Quenching Diode') {
                    valvestage4 = 'E9';
                } else if ($stage4 === 'Deutsch DT04-2P - Axial (2 pins; male)') {
                    valvestage4 = 'E12A';
                } else if ($stage4 === 'Deutsch DT04-2P - Axial (2 pins; male) with Quenching Diode') {
                    valvestage4 = 'E13A';
                } else if ($stage4 === 'DIN 43 650 with Integrated Rectifier') {
                    valvestage4 = 'E5';
                }
                break;
            case 'RPEL1-06 [13 GPM - 3600 PSI]':
                if ($stage4 === 'DIN 43 650') {
                    valvestage4 = 'E1';
                } else if ($stage4 === 'DIN 43 650 with Quenching Diode') {
                    valvestage4 = 'E2';
                } else if ($stage4 === 'Loose Conductors (Two Insulated Wires)') {
                    valvestage4 = 'E8';
                } else if ($stage4 === 'Loose Conductors (Two Insulated Wires) with Quenching Diode') {
                    valvestage4 = 'E9';
                } else if ($stage4 === 'Deutsch DT04-2P - Axial (2 pins; male)') {
                    valvestage4 = 'E12A';
                } else if ($stage4 === 'Deutsch DT04-2P - Axial (2 pins; male) with Quenching Diode') {
                    valvestage4 = 'E13A';
                } else if ($stage4 === 'DIN 43 650 with Integrated Rectifier') {
                    valvestage4 = 'E5';
                }
                break;
            case 'RPE3-06 [21 GPM - 5100 PSI]':
                if ($stage4 === 'DIN 43 650') {
                    valvestage4 = 'E1';
                } else if ($stage4 === 'DIN 43 650 with Quenching Diode') {
                    valvestage4 = 'E2';
                } else if ($stage4 === 'Loose Conductors (Two Insulated Wires)') {
                    valvestage4 = 'E8';
                } else if ($stage4 === 'Loose Conductors (Two Insulated Wires) with Quenching Diode') {
                    valvestage4 = 'E9';
                } else if ($stage4 === 'Deutsch DT04-2P - Axial (2 pins; male)') {
                    valvestage4 = 'E12A';
                } else if ($stage4 === 'Deutsch DT04-2P - Axial (2 pins; male) with Quenching Diode') {
                    valvestage4 = 'E13A';
                } else if ($stage4 === 'DIN 43 650 with Integrated Rectifier') {
                    valvestage4 = 'E5';
                }
                break;
            case 'RPER3-06 [21 GPM - 5100 PSI]':
                if ($stage4 === 'DIN 43 650') {
                    valvestage4 = 'E1';
                } else if ($stage4 === 'DIN 43 650 with Quenching Diode') {
                    valvestage4 = 'E2';
                } else if ($stage4 === 'Loose Conductors (Two Insulated Wires)') {
                    valvestage4 = 'E8';
                } else if ($stage4 === 'Loose Conductors (Two Insulated Wires) with Quenching Diode') {
                    valvestage4 = 'E9';
                } else if ($stage4 === 'Deutsch DT04-2P - Axial (2 pins; male)') {
                    valvestage4 = 'E12A';
                } else if ($stage4 === 'Deutsch DT04-2P - Axial (2 pins; male) with Quenching Diode') {
                    valvestage4 = 'E13A';
                } else if ($stage4 === 'DIN 43 650 with Integrated Rectifier') {
                    valvestage4 = 'E5';
                }
                break;
            case 'RPEA3-06 [21 GPM - 5100 PSI]':
                if ($stage4 === 'DIN 43 650') {
                    valvestage4 = 'E1';
                } else if ($stage4 === 'Wire Box (Plug-In) Coil DC Version') {
                    valvestage4 = 'EW1K';
                } 
                break;
            case 'RPEW4-06 [21 GPM - 5100 PSI]':
                if ($stage4 === 'Standard' && $("#stage3") === '120 V AC / 0.26 A / 50 (60) Hz') {
                    valvestage4 = 'EW1R'
                } else if ($stage4 === 'With Quenching Diode') {
                    valvestage4 = 'EW2K';
                } else {
                    valvestage4 = 'EW1K';
                }
                break;
            case 'RPE4-10 [37 GPM - 5100 PSI]':
                if ($stage4 === 'DIN 43 650') {
                    valvestage4 = 'E1';
                } else if ($stage4 === 'DIN 43 650 with Quenching Diode') {
                    valvestage4 = 'E2';
                } else if ($stage4 === 'Loose Conductors (Two Insulated Wires)') {
                    valvestage4 = 'E8';
                } else if ($stage4 === 'Loose Conductors (Two Insulated Wires) with Quenching Diode') {
                    valvestage4 = 'E9';
                } else if ($stage4 === 'Deutsch DT04-2P - Axial (2 pins; male)') {
                    valvestage4 = 'E12A';
                } else if ($stage4 === 'Deutsch DT04-2P - Axial (2 pins; male) with Quenching Diode') {
                    valvestage4 = 'E13A';
                } else if ($stage4 === 'DIN 43 650 with Integrated Rectifier') {
                    valvestage4 = 'E5';
                }
                break;
            case 'RPEW4-10 [37 GPM - 5100 PSI]':
                if ($stage4 === 'Standard' && $("#stage3") === '120 V AC / 0.26 A / 50 (60) Hz') {
                    valvestage4 = 'EW1R'
                } else if ($stage4 === 'With Quenching Diode') {
                    valvestage4 = 'EW2K';
                } else {
                    valvestage4 = 'EW1K';
                }
                break;
            case 'RNEH1-10 [40 GPM - 4600 / 6100 PSI]':
                if ($stage4 === 'Two Positions') {
                    valvestage4 = '2';
                } else if ($stage4 === 'Three Positions') {
                    valvestage4 = '3';
                } 
                break;
            case 'RNEH5-16 [80 GPM - 5100 / 6100 PSI]':
                if ($stage4 === 'Two Positions') {
                    valvestage4 = '2';
                } else if ($stage4 === 'Three Positions') {
                    valvestage4 = '3';
                } 
                break;
            case 'RNEH4-25 [160 GPM - 4600 / 6100 PSI]':
                if ($stage4 === 'Two Positions') {
                    valvestage4 = '2';
                } else if ($stage4 === 'Three Positions') {
                    valvestage4 = '3';
                } 
                break;
            case 'RPR3-04 [8 GPM - 4600 PSI]':
                if ($stage4 === 'Standard - NBR') {
                    valvestage4 = '';
                } else if ($stage4 === 'FPM (Viton)') {
                    valvestage4 = 'V';
                }
                break;
            case 'RPR3-06 [21 GPM - 5100 PSI]':
                if ($stage4 === 'Standard - NBR') {
                    valvestage4 = '';
                } else if ($stage4 === 'FPM (Viton)') {
                    valvestage4 = 'V';
                }
                break;
            case 'RPR1-10 [37 GPM - 5100 PSI]':
                if ($stage4 === 'Standard Lever on Side A - Upward') {
                    if ($("#stage3") === '') {
                        valvestage4 = '-A1';
                    } else {
                        valvestage4 = 'A1';
                    }
                } else if ($stage4 === 'Standard Lever on Side B - Upward') {
                    if ($("#stage3") === '') {
                        valvestage4 = '-B1';
                    } else {
                        valvestage4 = 'B1';
                    }
                }
                break;
            case 'RPH2-06 [21 GPM - 5100 PSI]':
                if ($stage4 === 'Standard - NBR') {
                    valvestage4 = '';
                } else if ($stage4 === 'FPM (Viton)') {
                    valvestage4 = 'V';
                }
                break;
            case 'RPH3-06 [21 GPM - 5100 PSI]':
                if ($stage4 === 'Hydraulic') {
                    valvestage4 = '1';
                } else if ($stage4 === 'Pneumatic') {
                    valvestage4 = '2';
                }
                break;
            case 'RPK1-06 [21 GPM - 5100 PSI]':
                if ($stage4 === 'Standard Housing Phosphated - Steel Parts Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage4 = '';
                } else if ($stage4 === 'Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage4 = '-A';
                } else if ($stage4 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage4 = '-B';
                }
                orderkey = "RPK1-06" + valvestage1 + valvestage2 + valvestage3 + valvestage4;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                //x.appendTo('body');
                break;
            case 'SD2E-A2 [8 GPM - 5100 PSI]':
                if ($stage4 === 'Standard - NBR') {
                    valvestage4 = '';
                } else if ($stage4 === 'FPM (Viton)') {
                    valvestage4 = 'V';
                }
                break;
            case 'SD2E-B2 [8 GPM - 5100 PSI]':
                if ($stage4 === 'Standard - NBR') {
                    valvestage4 = '';
                } else if ($stage4 === 'FPM (Viton)') {
                    valvestage4 = 'V';
                }
                break;
            case 'PD2E1 [8 GPM - 1200 PSI]':
                if ($stage4 === 'Deutsch DT04-2P - Axial Direction (2 pins; male)') {
                    valvestage4 = 'E12A';
                } else if ($stage4 === 'Deutsch DT04-SP - Axial Direction (2 pins; male) with Quenching Diode') {
                    valvestage4 = 'E13A';
                }
                break;
            case 'SD2E-A3 [8 GPM - 5100 PSI]':
                if ($stage4 === 'Standard - NBR') {
                    valvestage4 = '';
                } else if ($stage4 === 'FPM (Viton)') {
                    valvestage4 = 'V';
                }
                break;
            case 'SD2E-B3 [16 GPM - 5100 PSI]':
                if ($stage4 === 'Standard - NBR') {
                    valvestage4 = '';
                } else if ($stage4 === 'FPM (Viton)') {
                    valvestage4 = 'V';
                }
                break;
            case 'SD2E-A4 [8 GPM - 5100 PSI]':
                if ($stage4 === 'Standard - NBR') {
                    valvestage4 = '';
                } else if ($stage4 === 'FPM (Viton)') {
                    valvestage4 = 'V';
                }
                break;
            case 'SD2E-B4 [16 GPM - 5100 PSI]':
                if ($stage4 === 'Standard - NBR') {
                    valvestage4 = '';
                } else if ($stage4 === 'FPM (Viton)') {
                    valvestage4 = 'V';
                }
                break;
            case 'ROE3-062S2 [17 GPM - 3600 PSI]':
                if ($stage4 === 'Standard - Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage4 = '-A';
                } else if ($stage4 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage4 = '-B';
                }
                break;
            case 'ROE3-062S2/M [6.6 GPM - 3600 PSI]':
                if ($stage4 === 'DIN 43 650') {
                    valvestage4 = 'E1';
                } else if ($stage4 === 'DIN 43 650 with Quenching Diode') {
                    valvestage4 = 'E2';
                } else if ($stage4 === 'Loose Conductors (Two Insulated Wires)') {
                    valvestage4 = 'E8';
                } else if ($stage4 === 'Loose Conductors (Two Insulated Wires) with Quenching Diode') {
                    valvestage4 = 'E9';
                } else if ($stage4 === 'Deutsch DT04-2P - Axial (2 pins; male)') {
                    valvestage4 = 'E12A';
                } else if ($stage4 === 'Deutsch DT04-2P - Axial (2 pins; male) with Quenching Diode') {
                    valvestage4 = 'E13A';
                } else if ($stage4 === 'DIN 43 650 with Integrated Rectifier') {
                    valvestage4 = 'E5';
                }
                break;
            case 'SD3E-A2 [8 GPM - 6100 PSI]':
                if ($stage4 === 'Standard - NBR') {
                    valvestage4 = '';
                } else if ($stage4 === 'FPM (Viton)') {
                    valvestage4 = 'V';
                }
                break;
            case 'SD3E-B2 [20 GPM - 6100 PSI]':
                if ($stage4 === 'Standard - NBR') {
                    valvestage4 = '';
                } else if ($stage4 === 'FPM (Viton)') {
                    valvestage4 = 'V';
                }
                break;
            case 'ROE3-042S5(S6) [7 GPM - 3600 PSI]':
                if ($stage4 === 'Standard - Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage4 = '-A';
                } else if ($stage4 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage4 = '-B';
                }
                break;
            case 'ROE3-042S5(S6)/M [7 GPM - 3600 PSI]':
                if ($stage4 === '12 V DC / 2.41 A') {
                    valvestage4 = '01200';
                } else if ($stage4 === '24 V DC / 1.15 A') {
                    valvestage4 = '02400';
                } else if ($stage4 === '120 V AC / 0.22 A / 50 (60) Hz') {
                    valvestage4 = '12060';
                } else if ($stage4 === '230 V AC / 0.12 A / 50 (60) Hz') {
                    valvestage4 = '23050';
                }
                break;
            case 'SD1E-A2 [8 GPM - 5100 PSI]':
                if ($stage4 === 'Standard - NBR') {
                    valvestage4 = '';
                } else if ($stage4 === 'FPM (Viton)') {
                    valvestage4 = 'V';
                }
                break;
            case 'SD1E-A3 [8 GPM - 5100 PSI]':
                if ($stage4 === 'Standard - NBR') {
                    valvestage4 = '';
                } else if ($stage4 === 'FPM (Viton)') {
                    valvestage4 = 'V';
                }
                break;
            case 'ROR3-062 [9 GPM - 4600 PSI]':
                if ($stage4 === 'Standard - Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage4 = '-A';
                } else if ($stage4 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage4 = '-B';
                }
                orderkey = "ROR3-062-" + valvestage1 + "-" + valvestage2 + valvestage3 + valvestage4;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
            case 'SD1M-A2/L [5 GPM - 3600 PSI]':
                if ($stage4 === 'Standard - NBR') {
                    valvestage4 = '';
                } else if ($stage4 === 'FPM (Viton)') {
                    valvestage4 = 'V';
                }
                break;
            case 'SD2H-LA3 [11 GPM - 4600 PSI]':
                if ($stage4 === 'Standard - NBR') {
                    valvestage4 = '';
                } else if ($stage4 === 'FPM (Viton)') {
                    valvestage4 = 'V';
                }
                break;
	    case 'SD3E-C2 [40 GPM - 5100 PSI]':
		if ($stage4 === 'Standard - NBR') {
                    valvestage4 = '';
                } else if ($stage4 === 'FPM (Viton)') {
                    valvestage4 = 'V';
                }
		break;
        }
        valvestage5 = '';
        valvestage6 = '';
        valvestage7 = '';
        valvestage8 = '';
        valvestage9 = '';
        valvestage10 = '';
        valvestage11 = '';
        valvestage12 = '';
        valvestage13 = '';
        valvestage14 = '';
});
$(document).on("change", "#stage5", function() {
    var $stage5 = $(this).val();
        var key = $("#valve-series").val();
        var key2 = $("#stage1").val();
        var vals = [];
        var temp = [];
        var name = [];
        $("#sorder").remove();
        $("#order").remove();
        
        switch(key) {
            case 'RPEK1-03 [5 GPM - 3600 PSI]':
                if ($stage5 === 'DIN 43 650') {
                    valvestage5 = 'E1';
                } else if ($stage5 === 'DIN 43 650 with Quenching Diode') {
                    valvestage5 = 'E2';
                } else if ($stage5 === 'Deutsch DT04-2P - Axial (2 pins; male)') {
                    valvestage5 = 'E12A';
                } else if ($stage5 === 'Deutsch DT04-2P - Axial (2 pins; male) with Quenching Diode') {
                    valvestage5 = 'E13A';
                } else if ($stage5 === 'DIN 43 650 with Integrated Rectifier') {
                    valvestage5 = 'E5';
                }
       
                break;
            case 'RPEL1-04 [8 GPM - 3600 PSI]':
                if ($stage5 === 'Standard') {
                    valvestage5 = '';
                } else if ($stage5 === 'Rubber Boot Protected') {
                    valvestage5 = 'N2';
                } else if ($stage5 === 'Socket Head Screw') {
                    valvestage5 = 'N5';
                } 
       
                break;
            case 'RPE3-04 [8 GPM - 4600 PSI]':
                if ($stage5 === 'Standard') {
                    valvestage5 = '';
                } else if ($stage5 === 'Rubber Boot Protected') {
                    valvestage5 = 'N2';
                } else if ($stage5 === 'Hand Screw') {
                    valvestage5 = 'N4';
                } else if ($stage5 === 'Socket Head Screw') {
                    valvestage5 = 'N5';
                } 
       
                break;
            case 'RPEL1-06 [13 GPM - 3600 PSI]':
                if ($stage5 === 'Standard') {
                    valvestage5 = '';
                } else if ($stage5 === 'Rubber Boot Protected') {
                    valvestage5 = 'M2';
                } 
       
                break;
            case 'RPE3-06 [21 GPM - 5100 PSI]':
                if ($stage5 === 'Standard') {
                    valvestage5 = '';
                } else if ($stage5 === 'Rubber Boot Protected') {
                    valvestage5 = 'N2';
                } else if ($stage5 === 'Hand Screw') {
                    valvestage5 = 'N4';
                } else if ($stage5 === 'Socket Head Screw') {
                    valvestage5 = 'N5';
                } else if ($stage5 === 'Detent Assembly') {
                    valvestage5 = 'N3';
                } else if ($stage5 === 'Cap Nut Covered') {
                    valvestage5 = 'N1';
                } else if ($stage5 === 'Without Manual Override') {
                    valvestage5 = 'N9';
                }
       
                break;
            case 'RPER3-06 [21 GPM - 5100 PSI]':
                if ($stage5 === 'Standard') {
                    valvestage5 = '';
                }
       
                break;
            case 'RPEA3-06 [21 GPM - 5100 PSI]':
                if ($stage5 === '5-Pin Connector M12x1 Mounted on A-Side (B-Side Plugged)') {
                    valvestage5 = '63';
                } else if ($stage5 === '5-Pin Connector M12x1 Mounted on B-Side (A-Side Plugged)') {
                    valvestage5 = '64';
                } else if ($stage5 === '5-Pin Connector M12x1 Mounted on A-Side (B-Side Plugged) with LED') {
                    valvestage5 = '65';
                } else if ($stage5 === '5-Pin Connector M12x1 Mounted on B-Side (A-Side Plugged) with LED') {
                    valvestage5 = '66';
                } else if ($stage5 === 'No Selection Allowed') {
                    valvestage5 = '';
                }
       
                break;
            case 'RPEW4-06 [21 GPM - 5100 PSI]':
                if ($stage5 === 'Standard - Without Connector - 1/2 NPT Thread at Both Ends - with LED') {
                    valvestage5 = '51';
                }
       
                break;
            case 'RPE4-10 [37 GPM - 5100 PSI]':
                if ($stage5 === 'Standard') {
                    valvestage5 = '';
                } else if ($stage5 === 'Rubber Boot Protected') {
                    valvestage5 = 'N2';
                } else if ($stage5 === 'Hand Screw') {
                    valvestage5 = 'N4';
                } else if ($stage5 === 'Socket Head Screw') {
                    valvestage5 = 'N5';
                } else if ($stage5 === 'Cap Nut Covered') {
                    valvestage5 = 'N1';
                } else if ($stage5 === 'Without Manual Override') {
                    valvestage5 = 'N9';
                }
       
                break;
            case 'RPEW4-10 [37 GPM - 5100 PSI]':
                if ($stage5 === 'Standard - Without Connector - 1/2 NPT Thread at Both Ends - with LED') {
                    valvestage5 = '51';
                }
       
                break;
            case 'RNEH1-10 [40 GPM - 4600 / 6100 PSI]':
                if ($("#stage1").val() === 'Electrohydraulically Operated') {
                    if ($stage5 === 'Z11') {
                        valvestage5 = 'Z11';
                    } else if ($stage5 === 'H11') {
                        valvestage5 = 'H11';
                    } else if ($stage5 === 'Y11') {
                        valvestage5 = 'Y11';
                    } else if ($stage5 === 'C11') {
                        valvestage5 = 'C11';
                    } else if ($stage5 === 'P11') {
                        valvestage5 = 'P11';
                    } else if ($stage5 === 'R51') {
                        valvestage5 = 'R52';
                    } else if ($stage5 === 'R52') {
                        valvestage5 = 'R52';
                    } else if ($stage5 === 'X51') {
                        valvestage5 = 'X51';
                    } else if ($stage5 === 'X52') {
                        valvestage5 = 'X52';
                    } else if ($stage5 === 'J17') {
                        valvestage5 = 'J17';
                    } else if ($stage5 === 'J27') {
                        valvestage5 = 'J27';
                    }
                } else if ($("#stage1").val() === 'Hydraulically Operated') {
                    if ($stage5 === 'Z11') {
                        valvestage5 = 'Z11';
                    } else if ($stage5 === 'H11') {
                        valvestage5 = 'H11';
                    } else if ($stage5 === 'Y11') {
                        valvestage5 = 'Y11';
                    } else if ($stage5 === 'C11') {
                        valvestage5 = 'C11';
                    } else if ($stage5 === 'P11') {
                        valvestage5 = 'P11';
                    } else if ($stage5 === 'R51') {
                        valvestage5 = 'R52';
                    } else if ($stage5 === 'R52') {
                        valvestage5 = 'R52';
                    } else if ($stage5 === 'X51') {
                        valvestage5 = 'X51';
                    } else if ($stage5 === 'X52') {
                        valvestage5 = 'X52';
                    } else if ($stage5 === 'J17') {
                        valvestage5 = 'J17';
                    } else if ($stage5 === 'J27') {
                        valvestage5 = 'J27';
                    }
                } 
       
                break;
            case 'RNEH5-16 [80 GPM - 5100 / 6100 PSI]':
                if ($("#stage1").val() === 'Electrohydraulically Operated') {
                    if ($stage5 === 'Z11') {
                        valvestage5 = 'Z11';
                    } else if ($stage5 === 'H11') {
                        valvestage5 = 'H11';
                    } else if ($stage5 === 'Y11') {
                        valvestage5 = 'Y11';
                    } else if ($stage5 === 'C11') {
                        valvestage5 = 'C11';
                    } else if ($stage5 === 'Z41') {
                        valvestage5 = 'Z41';
                    } else if ($stage5 === 'Z22') {
                        valvestage5 = 'Z22';
                    } else if ($stage5 === 'X11') {
                        valvestage5 = 'X11';
                    } else if ($stage5 === 'X21') {
                        valvestage5 = 'X21';
                    } else if ($stage5 === 'R11') {
                        valvestage5 = 'R11';
                    } else if ($stage5 === 'R21') {
                        valvestage5 = 'R21';
                    } else if ($stage5 === 'J15') {
                        valvestage5 = 'J15';
                    } else if ($stage5 === 'J19') {
                        valvestage5 = 'J19';
                    }
                } else if ($("#stage1").val() === 'Hydraulically Operated') {
                     if ($stage5 === 'Z11') {
                        valvestage5 = 'Z11';
                    } else if ($stage5 === 'H11') {
                        valvestage5 = 'H11';
                    } else if ($stage5 === 'Y11') {
                        valvestage5 = 'Y11';
                    } else if ($stage5 === 'C11') {
                        valvestage5 = 'C11';
                    } else if ($stage5 === 'Z41') {
                        valvestage5 = 'Z41';
                    } else if ($stage5 === 'Z22') {
                        valvestage5 = 'Z22';
                    } else if ($stage5 === 'X11') {
                        valvestage5 = 'X11';
                    } else if ($stage5 === 'X21') {
                        valvestage5 = 'X21';
                    } else if ($stage5 === 'R11') {
                        valvestage5 = 'R11';
                    } else if ($stage5 === 'R21') {
                        valvestage5 = 'R21';
                    } else if ($stage5 === 'J15') {
                        valvestage5 = 'J15';
                    } else if ($stage5 === 'J19') {
                        valvestage5 = 'J19';
                    }
                } 
       
                break;
            case 'RNEH4-25 [160 GPM - 4600 / 6100 PSI]':
                if ($("#stage1").val() === 'Electrohydraulically Operated') {
                    if ($stage5 === 'Z11') {
                        valvestage5 = 'Z11';
                    } else if ($stage5 === 'H11') {
                        valvestage5 = 'H11';
                    } else if ($stage5 === 'Y11') {
                        valvestage5 = 'Y11';
                    } else if ($stage5 === 'C11') {
                        valvestage5 = 'C11';
                    } else if ($stage5 === 'P11') {
                        valvestage5 = 'P11';
                    } else if ($stage5 === 'R51') {
                        valvestage5 = 'R52';
                    } else if ($stage5 === 'R52') {
                        valvestage5 = 'R52';
                    } else if ($stage5 === 'X51') {
                        valvestage5 = 'X51';
                    } else if ($stage5 === 'X52') {
                        valvestage5 = 'X52';
                    } else if ($stage5 === 'J17') {
                        valvestage5 = 'J17';
                    } else if ($stage5 === 'J27') {
                        valvestage5 = 'J27';
                    }
                } else if ($("#stage1").val() === 'Hydraulically Operated') {
                    if ($stage5 === 'Z11') {
                        valvestage5 = 'Z11';
                    } else if ($stage5 === 'H11') {
                        valvestage5 = 'H11';
                    } else if ($stage5 === 'Y11') {
                        valvestage5 = 'Y11';
                    } else if ($stage5 === 'C11') {
                        valvestage5 = 'C11';
                    } else if ($stage5 === 'P11') {
                        valvestage5 = 'P11';
                    } else if ($stage5 === 'R51') {
                        valvestage5 = 'R52';
                    } else if ($stage5 === 'R52') {
                        valvestage5 = 'R52';
                    } else if ($stage5 === 'X51') {
                        valvestage5 = 'X51';
                    } else if ($stage5 === 'X52') {
                        valvestage5 = 'X52';
                    } else if ($stage5 === 'J17') {
                        valvestage5 = 'J17';
                    } else if ($stage5 === 'J27') {
                        valvestage5 = 'J27';
                    }
                } 
       
                break;
            case 'RPR3-04 [8 GPM - 4600 PSI]':
                if ($stage5 === 'Standard Housing Phosphated - Steel Parts Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage5 = '';
                } else if ($stage5 === 'Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage5 = '-A';
                } else if ($stage5 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage5 = '-B';
                }
                orderkey = "RPR3-04" + valvestage1 + valvestage2 + "/" + valvestage3 + valvestage4 + valvestage5;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
            case 'RPR3-06 [21 GPM - 5100 PSI]':
                if ($stage5 === 'Standard Housing Phosphated - Steel Parts Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage5 = '';
                } else if ($stage5 === 'Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage5 = '-A';
                } else if ($stage5 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage5 = '-B';
                }
                orderkey = "RPR3-06" + valvestage1 + valvestage2 + "/" + valvestage3 + valvestage4 + valvestage5;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $(".displayvalve").append(x);
                break;
            case 'RPR1-10 [37 GPM - 5100 PSI]':
                if ($stage5 === 'Without Stroke Limiter') {
                    valvestage5 = '0';
                } else if ($stage5 === 'With Stroke Limiter - Side A') {
                    valvestage5 = 'SLA';
                } else if ($stage5 === 'With Stroke Limiter - Side B') {
                    valvestage5 = 'SLB';
                } else if ($stage5 === 'With Stroke Limiter - Side A and B') {
                    valvestage5 = 'SLC'
                }
       
                break;
            case 'RPH3-06 [21 GPM - 5100 PSI]':
                if ($stage5 === 'Standard - NBR') {
                    valvestage5 = '';
                } else if ($stage5 === 'FPM (Viton)') {
                    valvestage5 = 'V';
                } 
       
                break;
            case 'RPH2-06 [21 GPM - 5100 PSI]':
       
                if ($stage5 === 'Standard Housing Phosphated - Steel Parts Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage5 = '';
                } else if ($stage5 === 'Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage5 = '-A';
                } else if ($stage5 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage5 = '-B';
                }
                orderkey = "RPH2-06" + valvestage1 + valvestage2 + "/" + valvestage3 + "-1" + valvestage4 + valvestage5;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
            case 'SD2E-A2 [8 GPM - 5100 PSI]':
                if ($stage5 === 'Standard - Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage5 = '-A';
                } else if ($stage5 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage5 = '-B';
                }
                break;
            case 'SD2E-B2 [8 GPM - 5100 PSI]':
       
                if ($stage5 === 'Standard - Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage5 = '-A';
                } else if ($stage5 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage5 = '-B';
                }
                break;
            case 'PD2E1 [8 GPM - 1200 PSI]':
                if ($stage5 === 'Standard - NBR') {
                    valvestage5 = '';
                } else if ($stage5 === 'FPM (Viton)') {
                    valvestage5 = 'V';
                } 
       
                break;
            case 'SD2E-A3 [8 GPM - 5100 PSI]':
       
                if ($stage5 === 'Standard - Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage5 = '-A';
                } else if ($stage5 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage5 = '-B';
                }
                break;
            case 'SD2E-B3 [16 GPM - 5100 PSI]':
       
                if ($stage5 === 'Standard - Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage5 = '-A';
                } else if ($stage5 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage5 = '-B';
                }
                break;
            case 'SD2E-A4 [8 GPM - 5100 PSI]':
       
                if ($stage5 === 'Standard - Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage5 = '-A';
                } else if ($stage5 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage5 = '-B';
                }
                break;
            case 'SD2E-B4 [16 GPM - 5100 PSI]':
       
                if ($stage5 === 'Standard - Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage5 = '-A';
                } else if ($stage5 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage5 = '-B';
                }
                break;
            case 'ROE3-062S2 [17 GPM - 3600 PSI]':
                orderkey = "ROE3-062" + valvestage1 + valvestage2 + valvestage3 + valvestage4;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
            case 'ROE3-062S2/M [6.6 GPM - 3600 PSI]':
       
                if ($stage5 === 'Standard - Without Manual Override') {
                    valvestage5 = '';
                } else if ($stage5 === 'With External Hexagon 14') {
                    valvestage5 = 'N5';
                }
       
                break;
            case 'SD3E-A2 [8 GPM - 6100 PSI]':
       
                if ($stage5 === 'Standard - Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage5 = '-A';
                } else if ($stage5 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage5 = '-B';
                }
                break;
            case 'SD3E-B2 [20 GPM - 6100 PSI]':
       
                if ($stage5 === 'Standard - Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage5 = '-A';
                } else if ($stage5 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage5 = '-B';
                }
                break;
            case 'ROE3-042S5(S6) [7 GPM - 3600 PSI]':
                orderkey = "ROE3-042" + valvestage1 + valvestage2 + valvestage3 + valvestage4;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
            case 'ROE3-042S5(S6)/M [7 GPM - 3600 PSI]':
                if ($stage5 === 'DIN 43 650') {
                    valvestage5 = 'E1';
                } else if ($stage5 === 'DIN 43 650 with Quenching Diode') {
                    valvestage5 = 'E2';
                } else if ($stage5 === 'Loose Conductors (Two Insulated Wires)') {
                    valvestage5 = 'E8';
                } else if ($stage5 === 'Loose Conductors (Two Insulated Wires) with Quenching Diode') {
                    valvestage5 = 'E9';
                } else if ($stage5 === 'Deutsch DT04-2P - Axial (2 pins; male)') {
                    valvestage5 = 'E12A';
                } else if ($stage5 === 'Deutsch DT04-2P - Axial (2 pins; male) with Quenching Diode') {
                    valvestage5 = 'E13A';
                } else if ($stage5 === 'DIN 43 650 with Integrated Rectifier') {
                    valvestage5 = 'E5';
                }
       
                break;
            case 'SD1E-A2 [8 GPM - 5100 PSI]':
       
                if ($stage5 === 'Standard - Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage5 = '-A';
                } else if ($stage5 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage5 = '-B';
                }
                break;
            case 'SD1E-A3 [8 GPM - 5100 PSI]':
       
                if ($stage5 === 'Standard - Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage5 = '-A';
                } else if ($stage5 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage5 = '-B';
                }
                break;
	    case 'SD3E-C2 [40 GPM - 5100 PSI]':
       
		if ($stage5 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage5 = '-B';
                }
		break;
            case 'SD1M-A2/L [5 GPM - 3600 PSI]':
       
                if ($stage5 === 'Standard - Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage5 = '-A';
                } else if ($stage5 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage5 = '-B';
                }
                orderkey = "SD1M-A2/" + valvestage1 + valvestage2 + "-" + valvestage3 + valvestage4 + valvestage5;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
            case 'SD2H-LA3 [11 GPM - 4600 PSI]':
       
                if ($stage5 === 'Standard - Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage5 = '-A';
                } else if ($stage5 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage5 = '-B';
                }
                orderkey = "SD2H-LA3/" + valvestage1 + valvestage2 + valvestage3 + valvestage4 + valvestage5;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
        }
        valvestage6 = '';
        valvestage7 = '';
        valvestage8 = '';
        valvestage9 = '';
        valvestage10 = '';
        valvestage11 = '';
        valvestage12 = '';
        valvestage13 = '';
        valvestage14 = '';
});
$(document).on("change", "#stage6", function() {
    var $stage6 = $(this).val();
        var key = $("#valve-series").val();
        var vals = [];
        var temp = [];
        var name = [];
        $("#sorder").remove();
        $("#order").remove();
        
        switch(key) {
            case 'RPEK1-03 [5 GPM - 3600 PSI]':
                if ($stage6 === 'Standard') {
                    valvestage6 = '';
                } else if ($stage6 === 'Rubber Boot Protected') {
                    valvestage6 = 'N2';
                } else if ($stage6 === 'Socket Head Screw') {
                    valvestage6 = 'N5';
                }
                break;
            case 'RPEL1-04 [8 GPM - 3600 PSI]':
                if ($stage6 === 'Standard - NBR') {
                    valvestage6 = '';
                } else if ($stage6 === 'FPM (Viton)') {
                    valvestage6 = 'V';
                } 
                break;
            case 'RPE3-04 [8 GPM - 4600 PSI]':
                if ($stage6 === 'Standard - NBR') {
                    valvestage6 = '';
                } else if ($stage6 === 'FPM (Viton)') {
                    valvestage6 = 'V';
                } 
                break;
            case 'RPEL1-06 [13 GPM - 3600 PSI]':
                if ($stage6 === 'Standard - NBR') {
                    valvestage6 = '';
                } else if ($stage6 === 'FPM (Viton)') {
                    valvestage6 = 'V';
                } 
                break;
            case 'RPH3-06 [21 GPM - 5100 PSI]':
                if ($stage6 === 'Standard Housing Phosphated - Steel Parts Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage6 = '';
                } else if ($stage6 === 'Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage6 = '-A';
                } else if ($stage6 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage6 = '-B';
                } 
                orderkey = "RPH3-06" + valvestage1 + valvestage2 + "/" + valvestage3 + "-" + valvestage4 + valvestage5 + valvestage6;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
            case 'RPE3-06 [21 GPM - 5100 PSI]':
                if ($stage6 === 'Standard - Without Soft-Shift Control') {
                    valvestage6 = '';
                } else if ($stage6 === 'Orifice 0.7 mm (0.03 inch) in Solenoid') {
                    valvestage6 = 'T1';
                } 
                break;
            case 'RPER3-06 [21 GPM - 5100 PSI]':
                if ($stage6 === 'Standard - NBR') {
                    valvestage6 = '';
                } else if ($stage6 === 'FPM (Viton)') {
                    valvestage6 = 'V';
                } 
                break;
            case 'RPEA3-06 [21 GPM - 5100 PSI]':
                if ($stage6 === 'Standard') {
                    valvestage6 = '';
                } else if ($stage6 === 'Cap Nut Covered') {
                    valvestage6 = 'N1';
                } else if ($stage6 === 'Rubber Boot Protected') {
                    valvestage6 = 'N2';
                } else if ($stage6 === 'Detent Assembly') {
                    valvestage6 = 'N3';
                } else if ($stage6 === 'Hand Screw') {
                    valvestage6 = 'N4';
                } else if ($stage6 === 'Socket Head Screw') {
                    valvestage6 = 'N5';
                } else if ($stage6 === 'Without Manual Override') {
                    valvestage6 = 'N9';
                } 
                break;
            case 'RPEW4-06 [21 GPM - 5100 PSI]':
                if ($stage6 === 'Standard') {
                    valvestage6 = '';
                } else if ($stage6 === 'Rubber Boot Protected') {
                    valvestage6 = 'N2';
                } 
                break;
            case 'RPE4-10 [37 GPM - 5100 PSI]':
                if ($stage6 === 'Standard - Without Soft-Shift Control') {
                    valvestage6 = '';
                } else if ($stage6 === 'With Plugged Cavity for Optional Soft-Shift Installation') {
                    valvestage6 = 'T0';
                } else if ($stage6 === 'Orifice 0.6 mm (0.02 inch) in T-Line Bridge') {
                    valvestage6 = 'T2';
                } else if ($stage6 === 'Adjustable Needle Valve in T Line Bridge') {
                    valvestage6 = 'T3'
                }
                break;
            case 'RPEW4-10 [37 GPM - 5100 PSI]':
                if ($stage6 === 'Standard') {
                    valvestage6 = '';
                } else if ($stage6 === 'Rubber Boot Protected') {
                    valvestage6 = 'N2';
                } 
                break;
            case 'RNEH1-10 [40 GPM - 4600 / 6100 PSI]':
                if ($stage6 === 'Standard - Without Additional Features') {
                    valvestage6 = '';
                } else if ($stage6 === 'Main Spool Stroke Limited [C]') {
                    valvestage6 = 'C';
                } else if ($stage6 === 'Main Spool Shifting Speed Control [D]') {
                    valvestage6 = 'D';
                } else if ($stage6 === 'Shifting Speed Control with Orifice (0.8 mm) in P Port of Solenoid Pilot Valve [PF]') {
                    valvestage6 = 'PF';
                } else if ($stage6 === 'C and D') {
                    valvestage6 = 'CD';
                } else if ($stage6 === 'C and PF') {
                    valvestage6 = 'CPF';
                }
                break;
            case 'RNEH5-16 [80 GPM - 5100 / 6100 PSI]':
                if ($stage6 === 'Standard - Without Additional Features') {
                    valvestage6 = '';
                } else if ($stage6 === 'Main Spool Stroke Limited [C]') {
                    valvestage6 = 'C';
                } else if ($stage6 === 'Main Spool Shifting Speed Control [D]') {
                    valvestage6 = 'D';
                } else if ($stage6 === 'Shifting Speed Control with Orifice (0.8 mm) in P Port of Solenoid Pilot Valve [PF]') {
                    valvestage6 = 'PF';
                } else if ($stage6 === 'C and D') {
                    valvestage6 = 'CD';
                } else if ($stage6 === 'C and PF') {
                    valvestage6 = 'CPF';
                } 
                break;
            case 'RNEH4-25 [160 GPM - 4600 / 6100 PSI]':
                if ($stage6 === 'Standard - Without Additional Features') {
                    valvestage6 = '';
                } else if ($stage6 === 'Main Spool Stroke Limited [C]') {
                    valvestage6 = 'C';
                } else if ($stage6 === 'Main Spool Shifting Speed Control [D]') {
                    valvestage6 = 'D';
                } else if ($stage6 === 'Shifting Speed Control with Orifice (0.8 mm) in P Port of Solenoid Pilot Valve [PF]') {
                    valvestage6 = 'PF';
                } else if ($stage6 === 'C and D') {
                    valvestage6 = 'CD';
                } else if ($stage6 === 'C and PF') {
                    valvestage6 = 'CPF';
                } 
                break;
            case 'RPR1-10 [37 GPM - 5100 PSI]':
                if ($stage6 === 'Without Spool Position Sensor') {
                    valvestage6 = '0';
                } else if ($stage6 === 'One Spool Position Sensor Side A') {
                    valvestage6 = 'A';
                } else if ($stage6 === 'One Spool Position Sensor Side B') {
                    valvestage6 = 'B';
                } else if ($stage6 === 'Two Spool Position Sensors Sides A and B') {
                    valvestage6 = 'C';
                }
                break;
            case 'ROE3-062S2/M [6.6 GPM - 3600 PSI]':
                if ($stage6 === 'Standard - NBR') {
                    valvestage6 = '';
                } else if ($stage6 === 'FPM (Viton)') {
                    valvestage6 = 'V';
                }
                break;
            case 'ROE3-042S5(S6)/M [7 GPM - 3600 PSI]':
                if ($stage6 === 'Standard') {
                    valvestage6 = '';
                } else if ($stage6 === 'Covered With Rubber Boot') {
                    valvestage6 = 'N2';
                } else if ($stage6 === 'With Hand Screw') {
                    valvestage6 = 'N4';
                }
                break;
            case 'PD2E1 [8 GPM - 1200 PSI]':
                if ($stage6 === 'Standard - Zinc-Coated (ZnCr-3) - ISO 9227 (240 h)') {
                    valvestage6 = '-A';
                } else if ($stage6 === 'Zinc-Coated (ZnNi) -  ISO 9227 (520 h)') {
                    valvestage6 = '-B';
                }
                orderkey = "PD2E1-" + valvestage1 + "/" + valvestage2 + "-" + valvestage3 + valvestage4 + valvestage5 + valvestage6;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
            case 'SD1E-A2 [8 GPM - 5100 PSI]':
                orderkey = "SD1E-A2/" + valvestage1 + valvestage2 + valvestage3 + valvestage4 + valvestage5;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
            case 'SD1E-A3 [8 GPM - 5100 PSI]':
                orderkey = "SD1E-A3/" + valvestage1 + valvestage2 + valvestage3 + valvestage4 + valvestage5;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
	    case 'SD3E-C2 [40 GPM - 5100 PSI]':
                orderkey = "SD3E-C2/" + valvestage1 + valvestage2 + valvestage3 + valvestage4 + valvestage5;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
		break;
            case 'SD3E-A2 [8 GPM - 6100 PSI]':
                orderkey = "SD3E-A2/" + valvestage1 + valvestage2 + valvestage3 + valvestage4 + valvestage5;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
            case 'SD3E-B2 [20 GPM - 6100 PSI]':
                orderkey = "SD3E-B2/" + valvestage1 + valvestage2 + valvestage3 + valvestage4 + valvestage5;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
            case 'SD2E-A3 [8 GPM - 5100 PSI]':
                orderkey = "SD2E-A3/" + valvestage1 + valvestage2 + valvestage3 + valvestage4 + valvestage5;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
            case 'SD2E-B3 [16 GPM - 5100 PSI]':
                orderkey = "SD2E-B3/" + valvestage1 + valvestage2 + valvestage3 + valvestage4 + valvestage5;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
            case 'SD2E-A4 [8 GPM - 5100 PSI]':
                orderkey = "SD2E-A4/" + valvestage1 + valvestage2 + valvestage3 + valvestage4 + valvestage5;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
            case 'SD2E-B4 [16 GPM - 5100 PSI]':
                orderkey = "SD2E-B4/" + valvestage1 + valvestage2 + valvestage3 + valvestage4 + valvestage5;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
            case 'SD2E-B2 [8 GPM - 5100 PSI]':
                orderkey = "SD2E-A2/" + valvestage1 + valvestage2 + valvestage3 + valvestage4 + valvestage5;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
            case 'SD2E-A2 [8 GPM - 5100 PSI]':
                orderkey = "SD2E-A2/" + valvestage1 + valvestage2 + valvestage3 + valvestage4 + valvestage5;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
        }
        valvestage7 = '';
        valvestage8 = '';
        valvestage9 = '';
        valvestage10 = '';
        valvestage11 = '';
        valvestage12 = '';
        valvestage13 = '';
        valvestage14 = '';
});
$(document).on("change", "#stage7", function() {
    var $stage7 = $(this).val();
        var key = $("#valve-series").val();
        var vals = [];
        $("#sorder").remove();
        $("#order").remove();
        
        switch(key) {
            case 'RPEK1-03 [5 GPM - 3600 PSI]':
                if ($stage7 === 'Standard - P - T Through Ports - Without Ports A1 B1') {
                    valvestage7 = '';
                } else if ($stage7 === 'P - T Through Ports - A1 B1 Side Ports - All Ports Sealed') {
                    valvestage7 = 'P1';
                } else if ($stage7 === 'P - T Through Ports - A1 B1 Side Ports Inverted (Not Sealed)') {
                    valvestage7 = 'P2';
                } else if ($stage7 === 'End Valve - One Side P - T Sealed Ports') {
                    valvestage7 = 'Z1';
                } else if ($stage7 === 'End Valve - One Side P - T Ports Inverted (Not Sealed)') {
                    valvestage7 = 'Z2';
                } else if ($stage7 === 'End Valve - One Side P - T Ports - A1 B1 Side Ports - All Ports Not Sealed') {
                    valvestage7 = 'Z3';
                } else if ($stage7 === 'End Valve - One Side P T A1 B1 Side Ports Inverted - All Ports Not Sealed') {
                    valvestage7 = 'Z4';
                }
                break;
            case 'RPEL1-04 [8 GPM - 3600 PSI]':
                if ($stage7 === 'Standard Housing Phosphated - Steel Parts Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage7 = '';
                } else if ($stage7 === 'Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage7 = '-A';
                } else if ($stage7 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage7 = '-B';
                }
                orderkey = "RPEL1-04" + valvestage1 + valvestage2 + "/" + valvestage3 + valvestage4 + valvestage5 + valvestage6 + valvestage7;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
            case 'RPE3-04 [8 GPM - 4600 PSI]':
                if ($stage7 === 'Standard Housing Phosphated - Steel Parts Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage7 = '';
                } else if ($stage7 === 'Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage7 = '-A';
                } else if ($stage7 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage7 = '-B';
                }
                break;
            case 'RPEL1-06 [13 GPM - 3600 PSI]':
                if ($stage7 === 'Standard Housing Phosphated - Steel Parts Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage7 = '';
                } else if ($stage7 === 'Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage7 = '-A';
                } else if ($stage7 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage7 = '-B';
                }
                orderkey = "RPEL1-06" + valvestage1 + valvestage2 + "/" + valvestage3 + valvestage4 + valvestage5 + valvestage6 + valvestage7;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
            case 'RPE3-06 [21 GPM - 5100 PSI]':
                if ($stage7 === 'Standard - NBR') {
                    valvestage7 = '';
                } else if ($stage7 === 'FPM (Viton)') {
                    valvestage7 = 'V';
                } 
                break;
            case 'RPER3-06 [21 GPM - 5100 PSI]':
                if ($stage7 === 'Standard Lever on Side A - Upward') {
                    valvestage7 = 'A19';
                } else if ($stage7 === 'Standard Lever on Side B - Upward') {
                    valvestage7 = 'B19';
                } 
                break;
            case 'RPEA3-06 [21 GPM - 5100 PSI]':
                if ($stage7 === 'Standard - Without Soft-Shift Control') {
                    valvestage7 = '';
                } else if ($stage7 === 'Orifice 0.7 mm (0.03 inch) in Acuator') {
                    valvestage7 = 'T1';
                } 
                break;
            case 'RPEW4-06 [21 GPM - 5100 PSI]':
                if ($stage7 === 'Standard - Without Soft-Shift Control') {
                    valvestage7 = '';
                } else if ($stage7 === 'Orifice 0.7 mm (0.03 inch) in Solenoid') {
                    valvestage7 = 'T1';
                } 
                break;
            case 'RPE4-10 [37 GPM - 5100 PSI]':
                if ($stage7 === 'Standard - NBR') {
                    valvestage7 = '';
                } else if ($stage7 === 'FPM (Viton)') {
                    valvestage7 = 'V';
                } 
                break;
            case 'RPEW4-10 [37 GPM - 5100 PSI]':
                if ($stage7 === 'Standard - Without Soft-Shift Control') {
                    valvestage7 = '';
                } else if ($stage7 === 'Orifice 0.6 mm (0.02 inch) in T-Line Bridge') {
                    valvestage7 = 'T2';
                } else if ($stage7 === 'With Plugged Cavity for Optional Soft-Shift Installation') {
                    valvestage7 = 'T0';
                } else if ($stage7 === 'Adjustable Needle in T-Line Bridge') {
                    valvestage7 = 'T3';
                }
                break;
            case 'RNEH1-10 [40 GPM - 4600 / 6100 PSI]':
                if ($stage7 === 'Standard - Internal' || $stage7 === 'Internal') {
                    valvestage7 = '';
                } else if ($stage7 === 'Internal Pilot Pressure Reducing Valve') {
                    valvestage7 = 'Z';
                } else if ($stage7 === 'External' || $stage7 === 'Recommended - External') {
                    valvestage7 = 'E';
                } else if ($stage7 === 'Internal Pilot Pressure Reducing Valve with External Pilot') {
                    valvestage7 = 'ZE';
                }
                break;
            case 'RNEH5-16 [80 GPM - 5100 / 6100 PSI]':
                if ($stage7 === 'Standard - Internal') {
                    valvestage7 = '';
                } else if ($stage7 === 'Internal Pilot Pressure Reducing Valve') {
                    valvestage7 = 'Z';
                } else if ($stage7 === 'External') {
                    valvestage7 = 'E';
                } else if ($stage7 === 'Internal Pilot Pressure Reducing Valve with External Pilot') {
                    valvestage7 = 'ZE';
                }
                break;
            case 'RNEH4-25 [160 GPM - 4600 / 6100 PSI]':
                if ($stage7 === 'Standard - Internal') {
                    valvestage7 = '';
                } else if ($stage7 === 'Internal Pilot Pressure Reducing Valve') {
                    valvestage7 = 'Z';
                } else if ($stage7 === 'External') {
                    valvestage7 = 'E';
                } else if ($stage7 === 'Internal Pilot Pressure Reducing Valve with External Pilot') {
                    valvestage7 = 'ZE';
                }
                break;
            case 'RPR1-10 [37 GPM - 5100 PSI]':
                if ($stage7 === 'Standard - Without Sensor') {
                    valvestage7 = '';
                } else if ($stage7 === 'Rated Supply Voltage - 24 V DC') {
                    valvestage7 = '24';
                }
                break;
            case 'ROE3-042S5(S6)/M [7 GPM - 3600 PSI]':
                if ($stage7 === 'Standard - NBR') {
                    valvestage7 = '';
                } else if ($stage7 === 'FPM (Viton)') {
                    valvestage7 = 'V';
                } 
                break;
            case 'ROE3-062S2 [17 GPM - 3600 PSI]':
                if ($stage7 === 'Standard Housing Phosphated - Steel Parts Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage7 = '';
                } else if ($stage7 === 'Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage7 = '-A';
                } else if ($stage7 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage7 = '-B';
                }
                orderkey = "ROE3-062S2/" + valvestage1 + valvestage2 + "/" + valvestage3 + valvestage4 + valvestage5 + valvestage6 + valvestage7;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
        }
        valvestage8 = '';
        valvestage9 = '';
        valvestage10 = '';
        valvestage11 = '';
        valvestage12 = '';
        valvestage13 = '';
        valvestage14 = '';
});
$(document).on("change", "#stage8", function() {
    var $stage8 = $(this).val();
        var key = $("#valve-series").val();
        var vals = [];
        $("#sorder").remove();
        $("#order").remove();
        
        switch(key) {
            case 'RPEK1-03 [5 GPM - 3600 PSI]':
                if ($stage8 === 'Standard - NBR') {
                    valvestage8 = '';
                } else if ($stage8 === 'FPM (Viton)') {
                    valvestage8 = 'V';
                }
                break;
            case 'RPE3-04 [8 GPM - 4600 PSI]':
                if ($stage8 === 'Standard') {
                    valvestage8 = '';
                } else if ($stage8 === 'CSA Certified') {
                    if ($("#stage7").val() === '') {
                        valvestage8 = '-U';
                    } else {
                        valvestage8 = 'U';
                    }
                }
                orderkey = "RPE3-04" + valvestage1 + valvestage2 + "/" + valvestage3 + valvestage4 + valvestage5 + valvestage6 +
                    valvestage7 + valvestage8;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                console.log(orderkey);
                break;
            case 'RPE3-06 [21 GPM - 5100 PSI]':
                if ($stage8 === 'Standard Housing Phosphated - Steel Parts Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage8 = '';
                } else if ($stage8 === 'Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage8 = '-A';
                } else if ($stage8 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage8 = '-B';
                }
                break;
            case 'RPER3-06 [21 GPM - 5100 PSI]':
                if ($stage8 === 'Standard 102 mm') {
                    valvestage8 = '';
                }
                break;
            case 'RPEA3-06 [21 GPM - 5100 PSI]':
                if ($stage8 === 'Standard - NBR') {
                    valvestage8 = '';
                } else if ($stage8 === 'FPM (Viton)') {
                    valvestage8 = 'V';
                }
                break;
            case 'RPEW4-06 [21 GPM - 5100 PSI]':
                if ($stage8 === 'Standard - NBR') {
                    valvestage8 = '';
                } else if ($stage8 === 'FPM (Viton)') {
                    valvestage8 = 'V';
                }
                break;
            case 'RPE4-10 [37 GPM - 5100 PSI]':
                if ($stage8 === 'Standard - Without Sensors') {
                    valvestage8 = '';
                } else if ($stage8 === 'Normally-Open Sensor 50 bar (730 PSI)') {
                    valvestage8 = 'S1';
                } else if ($stage8 === 'Normally-Open Sensor 210 bar (3050 PSI)') {
                    valvestage8 = 'S2';
                } else if ($stage8 === 'Nomally-Closed Sensor 50 bar (730 PSI)') {
                    valvestage8 = 'S4';
                }
                break;
            case 'RPEW4-10 [37 GPM - 5100 PSI]':
                if ($stage8 === 'Standard - NBR') {
                    valvestage8 = '';
                } else if ($stage8 === 'FPM (Viton)') {
                    valvestage8 = 'V';
                }
                break;
            case 'RNEH1-10 [40 GPM - 4600 / 6100 PSI]':
                if ($stage8 === 'Standard - External') {
                    valvestage8 = '';
                } else if ($stage8 === 'Internal') {
                    valvestage8 = 'I';
                }
                break;
            case 'RNEH5-16 [80 GPM - 5100 / 6100 PSI]':
                if ($stage8 === 'Standard - External') {
                    valvestage8 = '';
                } else if ($stage8 === 'Internal') {
                    valvestage8 = 'I';
                }
                break;
            case 'RNEH4-25 [160 GPM - 4600 / 6100 PSI]':
                if ($stage8 === 'Standard - External') {
                    valvestage8 = '';
                } else if ($stage8 === 'Internal') {
                    valvestage8 = 'I';
                }
                break;
            case 'RPR1-10 [37 GPM - 5100 PSI]':
                if ($stage8 === 'Without Sensor') {
                    valvestage8 = '';
                } else if ($stage8 === 'Normally-Open Sensor') {
                    valvestage8 = 'SO';
                } else if ($stage8 === 'Normally-Closed Sensor') {
                    valvestage8 = 'SC';
                }
                break;
            case 'ROE3-042S5(S6)/M [7 GPM - 3600 PSI]':
                if ($stage8 === 'Standard Housing Phosphated - Steel Parts Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage8 = '';
                } else if ($stage8 === 'Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage8 = '-A';
                } else if ($stage8 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage8 = '-B';
                }
                orderkey = "ROE3-042" + valvestage1 + "/" + valvestage2 + valvestage3 + "/" + valvestage4 + valvestage5 + valvestage6 + valvestage7 + valvestage8;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
        }
        valvestage9 = '';
        valvestage10 = '';
        valvestage11 = '';
        valvestage12 = '';
        valvestage13 = '';
        valvestage14 = '';
});
$(document).on("change", "#stage9", function() {
    var $stage9 = $(this).val();
        var key = $("#valve-series").val();
        var vals = [];
        $("#sorder").remove();
        $("#order").remove();
        
        switch(key) {
            case 'RPEK1-03 [5 GPM - 3600 PSI]':
                if ($stage9 === 'Standard Housing Phosphated - Steel Parts Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage9 = '';
                } else if ($stage9 === 'Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage9 = '-A';
                } else if ($stage9 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage9 = '-B';
                }
                orderkey = "RPEK1-03" + valvestage1 + valvestage2 + valvestage3 + "/" + valvestage4 + valvestage5 + valvestage6 + valvestage7 + valvestage8 + valvestage9; 
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
            case 'RPE3-06 [21 GPM - 5100 PSI]':
                if ($stage9 === 'Standard Housing Phosphated - Steel Parts Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage9 = '';
                } else if ($stage9 === 'Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage9 = '-A';
                } else if ($stage9 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage9 = '-B';
                }
                break;
            case 'RPER3-06 [21 GPM - 5100 PSI]':
                if ($stage9 === 'Standard Housing Phosphated - Steel Parts Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage9 = '';
                } else if ($stage9 === 'Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage9 = '-A';
                } else if ($stage9 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage9 = '-B';
                }
                orderkey = "RPER3-06" + valvestage1 + valvestage2 + "/" + valvestage3 + valvestage4 + valvestage5 + valvestage6 + "/" + valvestage7 + valvestage8 + valvestage9;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
            case 'RPEA3-06 [21 GPM - 5100 PSI]':
                if ($stage9 === 'Standard - ISO 4401') {
                    valvestage9 = '';
                } else if ($stage9 === 'ANSI-B93.9') {
                    valvestage9 = 'AN';
                } 
                break;
            case 'RPEW4-06 [21 GPM - 5100 PSI]':
                if ($stage9 === 'Standard Housing Phosphated - Steel Parts Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage9 = '';
                } 
                break;
            case 'RPE4-10 [37 GPM - 5100 PSI]':
                if ($stage9 === 'Standard Housing Phosphated - Steel Parts Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage9 = '';
                } else if ($stage9 === 'Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage9 = '-A';
                } else if ($stage9 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage9 = '-B';
                }
                break;
            case 'RPEW4-10 [37 GPM - 5100 PSI]':
                if ($stage9 === 'Standard Housing Phosphated - Steel Parts Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage9 = '';
                } 
                break;
            case 'RNEH1-10 [40 GPM - 4600 / 6100 PSI]':
                if ($stage9 === '"12 V DC / 2.72 A') {
                    valvestage9 = '01200';
                } else if ($stage9 === '24 V DC / 1.29 A') {
                    valvestage9 = '02400';
                } else if ($stage9 === '120 V AC / 0.35 A / 50 (60) Hz') {
                    valvestage9 = '12060';
                } else if ($stage9 === '230 V AC / 0.17 A / 50 (60) Hz') {
                    valvestage9 = '23050';
                } else if ($stage9 === 'No Selection Allowed') {
                    valvestage9 = '';
                }
                break;
            case 'RNEH5-16 [80 GPM - 5100 / 6100 PSI]':
                if ($stage9 === 'None' || $stage9 === 'Standard - None') {
                    valvestage9 = '';
                } else if ($stage9 === 'With Back Pressure Check Valve' || $stage9 === 'Recommended - With Back Pressure Check Valve') {
                    valvestage9 = 'C3'
                }
                break;
            case 'RNEH4-25 [160 GPM - 4600 / 6100 PSI]':
                if ($stage9 === 'None' || $stage9 === 'Standard - None') {
                    valvestage9 = '';
                } else if ($stage9 === 'With Back Pressure Check Valve' || $stage9 === 'Recommended - With Back Pressure Check Valve') {
                    valvestage9 = 'C3'
                }
                break;
            case 'RPR1-10 [37 GPM - 5100 PSI]':
                if ($stage9 === 'Standard - NBR') {
                    valvestage9 = '';
                } else if ($stage9 === 'FPM (Viton)') {
                    valvestage9 = '-V';
                }
                break;
        }
        valvestage10 = '';
        valvestage11 = '';
        valvestage12 = '';
        valvestage13 = '';
        valvestage14 = '';
});
$(document).on("change", "#stage10", function() {
    var $stage10 = $(this).val();
        var key = $("#valve-series").val();
        var vals = [];
        $("#sorder").remove();
        
        switch(key) {
            case 'RPE3-06 [21 GPM - 5100 PSI]':
                if ($stage10 === 'Standard') {
                    valvestage10 = '';
                } else if ($stage10 === 'CSA Marking') {
                    if ($("#stage9").val() === '') {
                        valvestage10 = '-U';
                    } else {
                        valvestage10 = 'U';
                    }
                }
                orderkey = "RPE3-06" + valvestage1 + valvestage2 + "/" + valvestage3 + valvestage4 + valvestage5 + valvestage6 + valvestage7 + valvestage8 + valvestage9 + valvestage10;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
            case 'RPEA3-06 [21 GPM - 5100 PSI]':
                if ($stage10 === 'Standard Housing Phosphated - Steel Parts Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage10 = '';
                } else if ($stage10 === 'Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage10 = '-A';
                } else if ($stage10 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage10 = '-B';
                }
                break;
            case 'RPEW4-06 [21 GPM - 5100 PSI]':
                if ($stage10 === 'Standard') {
                    valvestage10 = '';
                } else if ($stage10 === 'CSA Marking') {
                    valvestage10 = '-U';
                }
                orderkey = "RPEW4-06" + valvestage1 + valvestage2 + "/" + valvestage3 + valvestage4 + valvestage5 + valvestage6 + valvestage7 + valvestage8 + valvestage9 + valvestage10;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
            case 'RPEW4-10 [37 GPM - 5100 PSI]':
                if ($stage10 === 'Standard') {
                    valvestage10 = '';
                } else if ($stage10 === 'CSA Marking') {
                    valvestage10 = '-U';
                } 
                orderkey = "RPEW4-10" + valvestage1 + valvestage2 + "/" + valvestage3 + valvestage4 + valvestage5 + valvestage6 + valvestage7 + valvestage8 + valvestage9 + valvestage10;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
            case 'RPE4-10 [37 GPM - 5100 PSI]':
                if ($stage10 === 'Standard') {
                    valvestage10 = '';
                } else if ($stage10 === 'CSA Marking') {
                    if ($("#stage9").val() === '') {
                        valvestage10 = '-U';
                    } else {
                        valvestage10 = 'U';
                    }
                }
                orderkey = "RPE4-10" + valvestage1 + valvestage2 + "/" + valvestage3 + valvestage4 + valvestage5 + valvestage6 + valvestage7 + valvestage8 + valvestage9 + valvestage10;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
            case 'RPR1-10 [37 GPM - 5100 PSI]':
                if ($stage10 === 'Standard Housing Phosphated - Steel Parts Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage10 = '';
                } else if ($stage10 === 'Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage10 = '-A';
                } else if ($stage10 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    valvestage10 = '-B';
                }
                orderkey = "RPR1-10" + valvestage1 + valvestage2 + "/" + valvestage3 + valvestage4 + "-" + valvestage5 + "-" + valvestage6 + valvestage7 + valvestage8 + valvestage9 + valvestage10; 
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
            case 'RNEH1-10 [40 GPM - 4600 / 6100 PSI]':
                 if ($stage10 === 'DIN 43 650') {
                    valvestage10 = 'E1';
                } else if ($stage10 === 'DIN 43 650 with Quenching Diode') {
                    valvestage10 = 'E2';
                } else if ($stage10 === 'DIN 43 650 with Integrated Rectifier') {
                    valvestage10 = 'E5';
                } else if ($stage10 === 'No Selection Allowed') {
                    valvestage10 = '';
                }
                break;
            case 'RNEH5-16 [80 GPM - 5100 / 6100 PSI]':
                if ($stage10 === '"12 V DC / 2.72 A') {
                    valvestage10 = '01200';
                } else if ($stage10 === '24 V DC / 1.29 A') {
                    valvestage10 = '02400';
                } else if ($stage10 === '120 V AC / 0.35 A / 50 (60) Hz') {
                    valvestage10 = '12060';
                } else if ($stage10 === '230 V AC / 0.17 A / 50 (60) Hz') {
                    valvestage10 = '23050';
                } else if ($stage10 === 'No Selection Allowed') {
                    valvestage10 = '';
                }
                break;
            case 'RNEH4-25 [160 GPM - 4600 / 6100 PSI]':
                if ($stage10 === '"12 V DC / 2.72 A') {
                    valvestage10 = '01200';
                } else if ($stage10 === '24 V DC / 1.29 A') {
                    valvestage10 = '02400';
                } else if ($stage10 === '120 V AC / 0.35 A / 50 (60) Hz') {
                    valvestage10 = '12060';
                } else if ($stage10 === '230 V AC / 0.17 A / 50 (60) Hz') {
                    valvestage10 = '23050';
                } else if ($stage10 === 'No Selection Allowed') {
                    valvestage10 = '';
                }
                break;
        }
        valvestage11 = '';
        valvestage12 = '';
        valvestage13 = '';
        valvestage14 = '';
});
$(document).on("change", "#stage11", function() {
    var $stage11 = $(this).val();
        var key = $("#valve-series").val();
        var vals = [];
        $("#sorder").remove();
        $("#order").remove();
        
        switch(key) {
            case 'RPEA3-06 [21 GPM - 5100 PSI]':
                if ($stage11 === 'Standard') {
                    valvestage11 = '';
                } else if ($stage11 === 'CSA Marking') {
                    if ($("#stage10").val() === '') {
                        valvestage11 = '-U';
                    } else {
                        valvestage11 = 'U';
                    }
                }
                orderkey = "RPEA3-06" + valvestage1 + valvestage2 + "/" + valvestage3 + valvestage4 + valvestage5 + valvestage6 + valvestage7 + valvestage8 + valvestage9 + valvestage10 + valvestage11;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
            case 'RNEH1-10 [40 GPM - 4600 / 6100 PSI]':
                if ($stage11 === 'Standard' || $stage11 === 'No Selection Allowed') {
                    valvestage11 = '';
                } else if ($stage11 === 'Protected with Retaining Nut') {
                    valvestage11 = 'N1';
                } else if ($stage11 === 'Protected with Rubber Boot') {
                    valvestage11 = 'N2';
                }
                break;
            case 'RNEH5-16 [80 GPM - 5100 / 6100 PSI]':
                if ($stage11 === 'DIN 43 650') {
                    valvestage11 = 'E1';
                } else if ($stage11 === 'DIN 43 650 with Quenching Diode') {
                    valvestage11 = 'E2';
                } else if ($stage11 === 'DIN 43 650 with Integrated Rectifier') {
                    valvestage11 = 'E5';
                } else if ($stage11 === 'No Selection Allowed') {
                    valvestage11 = '';
                }
                break;
            case 'RNEH4-25 [160 GPM - 4600 / 6100 PSI]':
                if ($stage11 === 'DIN 43 650') {
                    valvestage11 = 'E1';
                } else if ($stage11 === 'DIN 43 650 with Quenching Diode') {
                    valvestage11 = 'E2';
                } else if ($stage11 === 'DIN 43 650 with Integrated Rectifier') {
                    valvestage11 = 'E5';
                } else if ($stage11 === 'No Selection Allowed') {
                    valvestage11 = '';
                }
                break;
        }
        valvestage12 = '';
        valvestage13 = '';
        valvestage14 = '';
});
$(document).on("change", "#stage12", function() {
    var $stage12 = $(this).val();
        var key = $("#valve-series").val();
        var vals = [];
        $("#sorder").remove();
        
        switch(key) {
            case 'RNEH1-10 [40 GPM - 4600 / 6100 PSI]':
                if ($stage12 === 'Standard - NBR') {
                    valvestage12 = '';
                } else if ($stage12 === 'FPM (Viton)') {
                    valvestage12 = 'V';
                }
                break;
            case 'RNEH5-16 [80 GPM - 5100 / 6100 PSI]':
                if ($stage12 === 'Standard' || $stage12 === 'No Selection Allowed') {
                    valvestage12 = '';
                } else if ($stage12 === 'Protected with Retaining Nut') {
                    valvestage12 = 'N1';
                } else if ($stage12 === 'Protected with Rubber Boot') {
                    valvestage12 = 'N2';
                }
                break;
            case 'RNEH4-25 [160 GPM - 4600 / 6100 PSI]':
                if ($stage12 === 'Standard' || $stage12 === 'No Selection Allowed') {
                    valvestage12 = '';
                } else if ($stage12 === 'Protected with Retaining Nut') {
                    valvestage12 = 'N1';
                } else if ($stage12 === 'Protected with Rubber Boot') {
                    valvestage12 = 'N2';
                }
                break;
        }
        valvestage13 = '';
        valvestage14 = '';
});
$(document).on("change", "#stage13", function() {
    var $stage13 = $(this).val();
        var key = $("#valve-series").val();
        var vals = [];
        $("#sorder").remove();
        $("#order").remove();
        
        switch(key) {
            case 'RNEH1-10 [40 GPM - 4600 / 6100 PSI]':
                var adder1, adder2, adder3;
                if ($stage13 === 'Standard - Phosphated Body Steel Parts for 240 h Salt Spray Test (ISO 9227)') {
                    valvestage13 = '';
                } else if ($stage13 === '520 h Salt Spray Test (ISO 9227)') {
                    if (valvestage10 === '' && valvestage11 === '' && valvestage12 === '' && valvestage9 === '') {
                        valvestage13 = 'B';
                    } else {
                        valvestage13 = '-B';
                    }
                }
                if (valvestage6 === "" && valvestage7 === "" && valvestage8 === "") {
                    adder1 = "";
                } else {
                    adder1 = "/";
                }
                if (valvestage10 === "" && valvestage11 === "" && valvestage12 === "" && valvestage13 === "" && valvestage14 === "") {
                    adder2 = "";
                } else {
                    adder2 = "/";
                }
                if (valvestage9 === "" && valvestage10 === "" && valvestage11 === "" && valvestage12 === "" && valvestage13 === "") {
                    adder3 = "";
                } else {
                    adder3 = "/";
                }
                orderkey = "RN" + valvestage1 + valvestage2 + "-" + valvestage3 + valvestage4 + valvestage5 + adder1 + valvestage6 + valvestage7 + valvestage8 + adder3 + valvestage9 + valvestage10 + valvestage11 + valvestage12 + valvestage13;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
            case 'RNEH5-16 [80 GPM - 5100 / 6100 PSI]':
                if ($stage13 === 'Standard - NBR') {
                    valvestage13 = '';
                } else if ($stage13 === 'FPM (Viton)') {
                    valvestage13 = 'V';
                }
                break;
            case 'RNEH4-25 [160 GPM - 4600 / 6100 PSI]':
                if ($stage13 === 'Standard - NBR') {
                    valvestage13 = '';
                } else if ($stage13 === 'FPM (Viton)') {
                    valvestage13 = 'V';
                }
                break;
        }
        valvestage14 = '';
});
$(document).on("change", "#stage14", function() {
    var $stage14 = $(this).val();
        var key = $("#valve-series").val();
        var vals = [];
        $("#sorder").remove();
        $("#order").remove();
        
        switch(key) {
            case 'RNEH5-16 [80 GPM - 5100 / 6100 PSI]':
                var adder1, adder2, adder3;
                if ($stage14 === 'Standard - Phosphated Body Steel Parts Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    valvestage14 = '';
                } else if ($stage14 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    if (valvestage10 === '' && valvestage11 === '' && valvestage12 === '' && valvestage13 === '') {
                        valvestage14 = 'B';
                    } else {
                        valvestage14 = '-B';
                    }
                }
                if (valvestage6 === "" && valvestage7 === "" && valvestage8 === "") {
                    adder1 = "";
                } else {
                    adder1 = "/";
                }
                if (valvestage10 === "" && valvestage11 === "" && valvestage12 === "" && valvestage13 === "" && valvestage14 === "") {
                    adder2 = "";
                } else {
                    adder2 = "/";
                }
                if (valvestage9 === "" && valvestage10 === "" && valvestage11 === "" && valvestage12 === "" && valvestage13 === "") {
                    adder3 = "";
                } else {
                    adder3 = "/";
                }
                if (valvestage9 === "C3") {
                    if (valvestage6 === "" && valvestage7 === "" && valvestage8 === "") {
                        adder4 = "";
                    } else {
                        adder4 = "/";
                    }
                } else {
                    adder4 = "";
                }
                orderkey = "RN" + valvestage1 + valvestage2 + "-" + valvestage3 + valvestage4 + valvestage5 + adder1 + valvestage6 + valvestage7 + valvestage8 + adder4 + valvestage9 + adder2 + valvestage10 + valvestage11 + valvestage12 + valvestage13 + valvestage14;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
            case 'RNEH4-25 [160 GPM - 4600 / 6100 PSI]':
                var adder1, adder2, adder3, adder4;
                if ($stage14 === 'Standard') {
                    valvestage14 = '';
                } else if ($stage14 === 'Zinc-Coated (ZnNi) ISO 9227 (520 h)') {
                    if (valvestage10 === '' && valvestage11 === '' && valvestage12 === '' && valvestage13 === '') {
                        valvestage14 = 'B';
                    } else {
                        valvestage14 = '-B';
                    }
                } else if ($stage14 === 'Zinc-Coated (ZnCr-3) ISO 9227 (240 h)') {
                    if (valvestage10 === '' && valvestage11 === '' && valvestage12 === '' && valvestage13 === '') {
                        valvestage14 = 'A';
                    } else {
                        valvestage14 = '-A';
                    }
                }
                if (valvestage6 === "" && valvestage7 === "" && valvestage8 === "") {
                    adder1 = "";
                } else {
                    adder1 = "/";
                }
                if (valvestage10 === "" && valvestage11 === "" && valvestage12 === "" && valvestage13 === "" && valvestage14 === "") {
                    adder2 = "";
                } else {
                    adder2 = "/";
                }
                if (valvestage9 === "" && valvestage10 === "" && valvestage11 === "" && valvestage12 === "" && valvestage13 === "") {
                    adder3 = "";
                } else {
                    adder3 = "/";
                }
                if (valvestage9 === "C3") {
                    if (valvestage6 === "" && valvestage7 === "" && valvestage8 === "") {
                        adder4 = "";
                    } else {
                        adder4 = "/";
                    }
                } else {
                    adder4 = "";
                }
                orderkey = "RN" + valvestage1 + valvestage2 + "-" + valvestage3 + valvestage4 + valvestage5 + adder1 + valvestage6 + valvestage7 + valvestage8 + adder4 + valvestage9 + adder2 + valvestage10 + valvestage11 + valvestage12 + valvestage13 + valvestage14;
                var x = $('<h1 />', {id: "order", class: "valveconfig1"});
                x.append(orderkey);
                $('.displayvalve').append(x);
                break;
        }
});
$(document).on("change", "#solenoidstage1", function() {
    var $solenoidstage1 = $(this).val();
    $("#sorder").remove();
        if ($solenoidstage1 === '12 V DC') {
            solenoid1 = '01200';
        } else if ($solenoidstage1 === '24 V DC') {
            solenoid1 = '02400';
        } else if ($solenoidstage1 === '120 V AC') {
            solenoid1 = '12060';
        } else if ($solenoidstage1 === '230 V AC') {
            solenoid1 = '23050';
        }
    solenoid4 = '';
    solenoid3 = '';
    solenoid2 = '';
});
$(document).on("change", "#solenoidstage2", function() {
    var $solenoidstage2 = $(this).val();
    $("#sorder").remove();
        if ($solenoidstage2 === 'DIN 43 650') {
            solenoid2 = 'E1';
        } else if ($solenoidstage2 === 'DIN 43 650 with Quenching Diode') {
            solenoid2 = 'E2';
        } else if ($solenoidstage2 === 'Loose Conductors (Two Insulated Wires)') {
            solenoid2 = 'E8';
        } else if ($solenoidstage2 === 'Loose Conductors (Two Insulated Wires) with Quenching Diode') {
            solenoid2 = 'E9';
        } else if ($solenoidstage2 === 'Deutsch DT04-2P - Axial (2 pins; male)') {
            solenoid2 = 'E12A';
        } else if ($solenoidstage2 === 'Deutsch DT04-2P - Axial (2 pins; male) with Quenching Diode') {
            solenoid2 = 'E13A';
        } else if ($solenoidstage2 === 'DIN 43 650 with Integrated Rectifier') {
            solenoid2 = 'E5';
        }
    solenoid4 = '';
    solenoid3 = '';
});
$(document).on("change", "#solenoidstage3", function() {
    var $solenoidstage3 = $(this).val();
    $("#sorder").remove();
        if ($solenoidstage3 === 'Non-Braided') {
            solenoid3 = 'N';
        } else if ($solenoidstage3 === 'Braided') {
            solenoid3 = 'B';
        } else if ($solenoidstage3 === 'No Selection Allowed') {
            solenoid3 = '';
        }
    solenoid4 = '';
});
$(document).on("change", "#solenoidstage4", function() {
    var $solenoidstage4 = $(this).val();
    $("#sorder").remove();
        if ($solenoidstage4 === 'No Selection Allowed') {
            solenoid4 = ''
        } else if ($solenoidstage4 === 'Standard Length 300 mm') {
            solenoid4 = '300';
        }
        if (($("#valve-series").val() === 'SD2E-A2 [8 GPM - 5100 PSI]' && $("#stage1").val() === 'Lightline') || ($("#valve-series").val() === 'SD2E-A3 [8 GPM - 5100 PSI]' && $("#stage1").val() === 'Lightline') || ($("#valve-series").val() === 'SD2E-A4 [8 GPM - 5100 PSI]' && $("#stage1").val() === 'Lightline') || ($("#valve-series").val() === 'SD3E-A2 [8 GPM - 6100 PSI]' && $("#stage1").val() === 'Lightline')) {
            if (solenoid1 === '01200') {
                fullsolenoid = 'C14B-' + solenoid1 + solenoid2 + solenoid3 + solenoid4 + "-6.55N" + valvestage5.charAt(1);
            } else if (solenoid1 === '02400') {
                fullsolenoid = 'C14B-' + solenoid1 + solenoid2 + solenoid3 + solenoid4 + "-26.2N" + valvestage5.charAt(1);
            }
        } else if (($("#valve-series").val() === 'SD2E-A2 [8 GPM - 5100 PSI]' && $("#stage1").val() === 'High Performance') || ($("#valve-series").val() === 'SD2E-A3 [8 GPM - 5100 PSI]' && $("#stage1").val() === 'High Performance') || ($("#valve-series").val() === 'SD3E-A2 [8 GPM - 6100 PSI]' && $("#stage1").val() === 'High Performance') || ($("#valve-series").val() === 'SD2E-A4 [8 GPM - 5100 PSI]' && $("#stage1").val() === 'High Performance') || ($("#valve-series").val() === 'SD2E-B2 [8 GPM - 5100 PSI]' && $("#stage1").val() === 'Lightline') || ($("#valve-series").val() === 'SD2E-B3 [16 GPM - 5100 PSI]' && $("#stage1").val() === 'Lightline') || ($("#valve-series").val() === 'SD2E-B4 [16 GPM - 5100 PSI]' && $("#stage1").val() === 'Lightline') || ($("#valve-series").val() === 'SD3E-B2 [20 GPM - 6100 PSI]' && $("#stage1").val() === 'Lightline') || ($("#valve-series").val() === 'SD1E-A2 [8 GPM - 5100 PSI]') || ($("#valve-series").val() === 'SD1E-A3 [8 GPM - 5100 PSI]')) {
            if (solenoid1 === '01200') {
                fullsolenoid = 'C19B-' + solenoid1 + solenoid2 + solenoid3 + solenoid4 + "-4.9N" + valvestage5.charAt(1);
            } else if (solenoid1 === '02400') {
                fullsolenoid = 'C19B-' + solenoid1 + solenoid2 + solenoid3 + solenoid4 + "-20.8N" + valvestage5.charAt(1);
            } else if (solenoid1 === '12060') {
                fullsolenoid = 'C19B-' + solenoid1 + solenoid2 + solenoid3 + solenoid4 + "-494N" + valvestage5.charAt(1);
            } else if (solenoid1 === '23050') {
                fullsolenoid = 'C19B-' + solenoid1 + solenoid2 + solenoid3 + solenoid4 + "-1653N" + valvestage5.charAt(1);
            }
        } else if (($("#valve-series").val() === 'SD2E-B2 [8 GPM - 5100 PSI]' && $("#stage1").val() === 'High Performance') || ($("#valve-series").val() === 'SD2E-B3 [16 GPM - 5100 PSI]' && $("#stage1").val() === 'High Performance') || ($("#valve-series").val() === 'SD2E-B4 [16 GPM - 5100 PSI]' && $("#stage1").val() === 'High Performance') || ($("#valve-series").val() === 'SD3E-B2 [20 GPM - 6100 PSI]' && $("#stage1").val() === 'High Performance') || ($("#valve-series").val() === 'SD3E-C2 [40 GPM - 5100 PSI]')) {
            if (solenoid1 === '01200') {
                fullsolenoid = 'C22B-' + solenoid1 + solenoid2 + solenoid3 + solenoid4 + "-4.41N" + valvestage5.charAt(1);
            } else if (solenoid1 === '02400') {
                fullsolenoid = 'C22B-' + solenoid1 + solenoid2 + solenoid3 + solenoid4 + "-18.6N" + valvestage5.charAt(1);
            } else if (solenoid1 === '12060') {
                fullsolenoid = 'C22B-' + solenoid1 + solenoid2 + solenoid3 + solenoid4 + "-400N" + valvestage5.charAt(1);
            } else if (solenoid1 === '23050') {
                fullsolenoid = 'C22B-' + solenoid1 + solenoid2 + solenoid3 + solenoid4 + "-1400N" + valvestage5.charAt(1);
            }
        } else if (($("#valve-series").val() === 'ROE3-062S2 [17 GPM - 3600 PSI]') || ($("#valve-series").val() === 'ROE3-042S5(S6) [7 GPM - 3600 PSI]')) {
            if (solenoid1 === '01200') {
                fullsolenoid = 'C19B-' + solenoid1 + solenoid2 + solenoid3 + solenoid4 + "-4.9N" + valvestage4.charAt(1);
            } else if (solenoid1 === '02400') {
                fullsolenoid = 'C19B-' + solenoid1 + solenoid2 + solenoid3 + solenoid4 + "-20.8N" + valvestage4.charAt(1);
            } else if (solenoid1 === '12060') {
                fullsolenoid = 'C19B-' + solenoid1 + solenoid2 + solenoid3 + solenoid4 + "-494N" + valvestage4.charAt(1);
            } else if (solenoid1 === '23050') {
                fullsolenoid = 'C19B-' + solenoid1 + solenoid2 + solenoid3 + solenoid4 + "-1653N" + valvestage4.charAt(1);
            }
        }
        var y = $('<h1 />', {id: "sorder", class: "valveconfig2"});
        y.append(fullsolenoid);
        $('.displaysolenoid').append(y);
});