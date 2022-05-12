document.write('Hello it is written by javascript')
document.write('Hello it is written by javascript')
document.write('<br>')


// if conditonal statement for one condition

var b = 10;

if(b<5){
    document.write('if statement is executed')
}

// if else condition for two condition 

document.write('<br>')

var v = 50

if(v>60){
    document.write('v is greater than 60')
}else{
    document.write('no it is not greater')
}

// if else if are used for more than two conditions

document.write('<br>')
var s = 100

if(s<120){
    document.write('s is greater than 100')
}else if(s>100){
    document.write('s is less than 100 ')
}else if(s){
    document.write('s is not greater than 40')
}

//switch case

var c = 'S'

//switch

document.write('<br>')

switch(c){
    case 'A': document.write('case is A')
    break;
    case 'B':document.write('case is B')
    break;
    case 'C':document.write('case is C')
}