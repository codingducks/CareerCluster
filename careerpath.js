function main(e) {

    var A = 0; //Art
    var State_A = "<b>"+"Arts, Audio-Video Technology & Communications:"+"</b>"+"\
     Interest in creative or performing arts, communication or A/V technology."+"<br>"+"<br>";
    var B = 0; //Science
    var State_B ="<b>"+ "Science, Technology, Engineering & Mathematics:"+"</b>"+"\
     Interest in discovering, collecting, and analyzing information\
      and applying findings to problems in science, math and engineering."+"<br>"+"<br>";
    var C = 0; //Plants
    var State_C ="<b>"+"Agriculture, Food & Natural Resources:"+"</b>"+"\
     Interest in activities involving plants usually in an outdoor setting."+"<br>"+"<br>";
    var D = 0; //Law
    var State_D ="<b>"+ "Law, Public Safety & Security:"+"</b>"+"\
     Interest in judicial, legal and protective services for people and property."+"<br>"+"<br>";
    var E = 0; //Mechanical
    var State_E ="<b>"+ "Mechanical Manufacturing:"+"</b>"+"\
     Interest in applying mechanical principles to practical situations using machines,\
      hand tools, or techniques."+"<br>"+"<br>";
    var F = 0; //Industrial
    var State_F ="<b>"+ "Industrial Manufacturing:"+"</b>"+"\
     Interest in repetitive, organized activities in a factory/ industrial setting."+"<br>"+"<br>";
    var G = 0; //Busisnes
    var State_G ="<b>"+"Business, Management & Administration:"+"</b>"+"\
     Interest in organizing, directing and evaluating business functions."+"<br>"+"<br>";
    var H = 0; //Marketing
    var State_H ="<b>"+"Marketing, Sales & Service:"+"</b>"+"\
     Interest in bringing others to a point of view through personal persuasion,\
      using sales/ promotional techniques."+"<br>"+"<br>";   
    var I = 0; //Hospitality
    var State_I = "<b>"+"Hospitality and Tourism:"+"</b>"+"\
     Interest in providing services to others in travel planning,\
      hospitality services in hotels, restaurants, and recreation services."+"<br>"+"<br>";
    var J = 0; //Human Services
    var State_J ="<b>"+"Human Services:"+"</b>"+"\
     Interest in helping others with their mental,\
      spiritual, social, physical, or career needs."+"<br>"+"<br>";
    var K = 0; //Administration
    var State_K = "<b>"+"Government & Public Administration:"+"</b>"+"\
     Interest in performing government functions at the \
      local, state or federal levels."+"<br>"+"<br>";
    var L = 0; //Construction
    var State_L = "<b>"+"Architecture & Construction:"+"</b>"+"\
     Interest in designing,planning, managing, building, and maintaining\
      physical structures."+"<br>"+"<br>";
    var M = 0; //Teaching
    var State_M = "<b>"+"Education & Training:"+"</b>"+"\
     Interest in planning, managing, and providing education and training services,\
      including support services, library and information services."+"<br>"+"<br>";
    var N = 0; //Banking
    var State_N = "<b>"+"Finace:"+"</b>"+"\
     Interest in financial and investment planning & management\
      and providing banking and insurance services."+"<br>"+"<br>";
    var O = 0; //Care
    var State_O ="<b>"+ "Health Science, Care and Prevention:"+"</b>"+"\
     Interest in the providing help to others by providing diagnostic,\
      therapeutic, informational and environmental services,\
       including researching and developing new health care services."+"<br>"+"<br>";
    var P = 0; //Information Technology
    var State_P = "<b>"+"Information Technology:"+"</b>"+"\
     Interest in the design, development, support and management of\
      hardware, software, multimedia, systems integration services,\
       and technical support."+"<br>"+"<br>";
    var Q = 0; //Animals
    var State_Q = "<b>"+"Agriculture, Food & Natural Resources:"+"</b>"+"\
     Interest in activities involving the training, raising, feeding,\
      and caring for animals."+"<br>"+"<br>";
    var R = 0; //Transportation
    var State_R = "<b>"+"Transportation, Distribution & Logistics:"+"</b>"+"\
     Interest in the movement of people, materials, and goods\
      by road, pipeline, air, railroad and water."+"<br>"+"<br>";

  for (var i = 0; i < 172; i++) {
    var radios = document.getElementsByName("q"+i);
    for (var j = 0; j < radios.length; j++){
        var radio = radios[j];
    if (radio.checked && radio.value  === 'Artistic') {
        A = A + 1 ;
    }if (radio.checked && radio.value === 'Science'){
        B = B + 1 ;
    }if (radio.checked && radio.value === 'Plants'){
        C = C + 1 ;
    }if (radio.checked && radio.value === 'Law'){
        D = D + 1 ;
    }if (radio.checked && radio.value  === 'Mechanical'){
        E = E + 1 ;
    }if (radio.checked && radio.value === 'Industrial'){
        F = F + 1 ;
    }if (radio.checked && radio.value === 'Business'){
        G = G + 1 ;
    }if (radio.checked && radio.value === 'Marketing'){
        H = H + 1 ;
    }if (radio.checked && radio.value === 'Hospitality'){
        I = I + 1 ;
    }if (radio.checked && radio.value === 'Human'){
        J = J + 1 ;
    }if (radio.checked && radio.value === 'Administration'){
        K = K + 1 ;
    }if (radio.checked && radio.value  === 'Construction'){
        L = L + 1 ;
    }if (radio.checked && radio.value === 'Teaching'){
        M = M + 1 ;
    }if (radio.checked && radio.value === 'Banking'){
        N = N + 1 ;
    }if (radio.checked && radio.value === 'Care'){
        O = O + 1 ;
    }if (radio.checked && radio.value === 'Information'){
        P = P + 1 ;
    }if (radio.checked && radio.value === 'Animals'){
        Q = Q + 1 ;
    }if (radio.checked && radio.value === 'Transportation'){
        R = R + 1 ;

      }
    } 
  } 


    first_place = [];
    second_place = [];
    third_place = [];
    var totals_by_letter = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R];
    total_number = totals_by_letter.sort(function(a,b){return b-a});
    
    total_number_len = total_number.length;
    
    f_g = [];
    s_g = [];
    t_g = [];
    scrap = [];

    for (var i= 0; i < total_number_len; i++ ){
            fir = total_number[0];
            vari = totals_by_letter[i];
            f_g.push(fir);

            if( vari === fir){
                f_g.push(vari);
                var f_glen = f_g.length;
            }
             if (vari != f_g[0] && f_glen > 0 ){
                    var s_glen = s_g.length;
                    if(s_glen <1){
                        s_g.push(vari);
                    }
            }
             if( vari != s_g[0] && s_glen > 0){
                    var t_glen = t_g.length;
                    if (t_glen < 1){
                        t_g.push(vari);
                    }                                         
            }
    }
                    

    var first = f_g[0];
    var second = s_g[0];
    var third = t_g[0];


    place1 = [];
    place2 = [];
    place3 = [];

    if ( A == first ){
      first_place.push('Artistic');
      place1.push(State_A);
    } if (A == second){
      second_place.push('Artistic');
      place2.push(State_A);
    } if (A == third){
      third_place.push('Artistic');
      place3.push(State_A);
    } if ( B == first ){
      first_place.push('Science');
      place1.push(State_B);
    } if (B == second){
      second_place.push('Science');
      place2.push(State_B);
    } if (B == third){
      third_place.push('Science');
      place3.push(State_B);
    } if ( C == first ){
      first_place.push('Plants');
      place1.push(State_C);
    } if (C == second){
      second_place.push('Plants');
      place2.push(State_C);
    } if (C == third){
      third_place.push('Plants');
      place3.push(State_C);
    } if ( D == first ){
      first_place.push('Law');
      place1.push(State_D);
    } if (D == second){
      second_place.push('Law');
      place2.push(State_D);
    } if (D == third){
      third_place.push('Law');
      place3.push(State_D);
    } if ( E == first ){
      first_place.push('Mechanical');
      place1.push(State_E);
    } if (E == second){
      second_place.push('Mechanical');
      place2.push(State_E);
    } if (E == third){
      third_place.push('Mechanical');
      place3.push(State_E);
    } if ( F == first ){
      first_place.push('Industrial');
      place1.push(State_F);
    } if (F == second){
      second_place.push('Industrial');
      place2.push(State_F);
    } if (F == third){
      third_place.push('Industrial');
      place3.push(State_F);
    } if ( G == first ){
      first_place.push('Business');
      place1.push(State_G);
    } if (G == second){
      second_place.push('Business');
      place2.push(State_G);
    } if (G == third){
      third_place.push('Business');
      place3.push(State_G);
    } if ( H == first ){
      first_place.push('Marketing');
      place1.push(State_H);
    } if (H == second){
      second_place.push('Marketing');
      place2.push(State_H);
    } if (H == third){
      third_place.push('Marketing');
      place3.push(State_H);
    } if ( I == first ){
      first_place.push('Hospitality');
      place1.push(State_I);
    } if (I == second){
      second_place.push('Hospitality');
      place2.push(State_I);
    } if (I == third){
      third_place.push('Hospitality');
      place3.push(State_I);
    } if ( J == first ){
      first_place.push('Human');
      place1.push(State_J);
    } if (J == second){
      second_place.push('Human');
      place2.push(State_J);
    } if (J == third){
      third_place.push('Human');
      place3.push(State_J);
    } if ( K == first ){
      first_place.push('Administration');
      place1.push(State_K);
    } if (K == second){
      second_place.push('Administration');
      place2.push(State_K);
    } if (K == third){
      third_place.push('Administration');
      place3.push(State_K);
    } if ( L == first ){
      first_place.push('Construction');
      place1.push(State_L);
    } if (L == second){
      second_place.push('Construction');
      place2.push(State_L);
    } if (L == third){
      third_place.push('Construction');
      place3.push(State_L);
    } if ( M == first ){
      first_place.push('Teaching');
      place1.push(State_M);
    } if (M == second){
      second_place.push('Teaching');
      place2.push(State_M);
    } if (M == third){
      third_place.push('Teaching');
      place3.push(State_M);
    } if ( N == first ){
      first_place.push('Banking');
      place1.push(State_N);
    } if (N == second){
      second_place.push('Banking');
      place2.push(State_N);
    } if (N == third){
      third_place.push('Banking');
      place3.push(State_N);
    } if ( O == first ){
      first_place.push('Care');
      place1.push(State_O);
    } if (O == second){
      second_place.push('Care');
      place2.push(State_O);
    } if (O == third){
      third_place.push('Care');
      place3.push(State_O);
    } if ( P == first ){
      first_place.push('Information');
      place1.push(State_P);
    } if (P == second){
      second_place.push('Information');
      place2.push(State_P);
    } if (P == third){
      third_place.push('Information');
      place3.push(State_P);
    } if ( Q == first ){
      first_place.push('Animals');
      place1.push(State_Q);
    } if (Q == second){
      second_place.push('Animals');
      place2.push(State_Q);
    } if (Q == third){
      third_place.push('Animals');
      place3.push(State_Q);
    } if ( R == first ){
      first_place.push('Transportation');
      place1.push(State_R);
    } if (R == second){
      second_place.push('Transportation');
      place2.push(State_R);
    } if (R == third){
      third_place.push('Transportation');
      place3.push(State_R);

    }        


    document.getElementById('1st').innerHTML = place1;
    document.getElementById('2nd').innerHTML = place2;
    document.getElementById('3rd').innerHTML = place3;
    document.getElementById('Plants').innerHTML = 'Plants ='  + C;
    document.getElementById('Animals').innerHTML = 'Animals =' + Q;
    document.getElementById('Construction').innerHTML = 'Construction =' + L;
    document.getElementById('Artistic').innerHTML = 'Artistic =' + A;
    document.getElementById('Business').innerHTML = 'Business =' + G;
    document.getElementById('Teaching').innerHTML = 'Teaching =' + M; 
    document.getElementById('Banking').innerHTML = 'Banking =' + N ;
    document.getElementById('Administration').innerHTML = 'Administration =' + K ;
    document.getElementById('Care').innerHTML = 'Care =' +  O ;
    document.getElementById('Hospitality').innerHTML = 'Hospitality =' + I; 
    document.getElementById('Human').innerHTML = 'Human =' + J ;
    document.getElementById('Information').innerHTML = 'Information =' + P; 
    document.getElementById('Law').innerHTML = 'Law =' + D; 
    document.getElementById('Mechanical').innerHTML = 'Mechanical =' + E ;
    document.getElementById('Industrial').innerHTML = 'Industrial =' + F; 
    document.getElementById('Marketing').innerHTML = 'Marketing =' + H; 
    document.getElementById('Science').innerHTML = 'Science =' + B ;
    document.getElementById('Transportation').innerHTML = 'Transportation =' + R; 
    var total = A+B+C+D+E+F+G+H+I+J+K+L+M+N+O+P+Q+R;
    document.getElementById('Total').innerHTML = "Total = " + total;

    if (total != 86){
        var missed = 86 - total;

        if (missed > 1){ 
            alert("\nWARNING:\n\n You Forgot to Answer "+ missed + " Questions \n (Please Review Your Answers)\n\n");        
        }
        else if(missed == 1){
            alert("\nWARNING:\n\n You Forgot to Answer "+ missed + " Question \n (Please Review Your Answers)\n\n");        
        }

    }   
    else if (total == 86){
        alert("Thank You \n Scroll Down For Results");
    }

}

var button = document.getElementById("Submit");
button.addEventListener("click", main); 
