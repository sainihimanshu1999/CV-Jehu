document.write("hello loops")
document.write('<br>')


var ar = ['BMW','Volvo','Suzuki','Audi','nissan']
document.write(ar.length)
document.write('<br>')

var i;

for(i=0;i<ar.length;i++){
    document.write(i)
    // 0   0 ++ = o = 0+1 = 1
    //1  1++ = 2
    //2  
    document.write('<br>')
    document.write(ar[i])
}

document.write('<br>')

var pp = {fname:'john',gender:'male',age:32}

var x;

for (x in pp){
    document.write(pp[x])
}
document.write('<br>')

var ar = ['BMW','Volvo','Suzuki','Audi','nissan']
var y;

for (y in ar){
    document.write(ar[y])
}


document.write('<br>')

var t;

for (t of ar){
    document.write(t)
}




var c = 0;

while(c<10){
    document.write('hello')
    document.write('<br>')
    c ++
    // c = c +1 = 0= 0 + 1 = 1


}


var d = 0

do{
    document.write('bye')
    document.write(d)
    document.write('<br>')

    d++
}while(d<10)
