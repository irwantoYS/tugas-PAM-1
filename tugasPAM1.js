
var nomor = [ 1,2,3,4,5,6,7,8,9,10]
var nama = ["Boy","jono","Ade","kajiq","sakira","rafi","tomu","Dzaky","pano","martin"]
var nim = [123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133]
var nilai = [60, 70, 40, 30, 60, 50, 90 ,80, 45, 100]

for(var i = 0; i <= 9; i++){
    document.write("<td>"+ nomor[i] + "</td>");
    document.write("<td>"+ nama[i] + "</td>");
    document.write("<td>"+ nim[i] + "</td>");
    document.write("<td>"+ nilai[i] + "</td>");
    
    if(nilai[i] >= 80 ){
        document.write("<td>A</td>");
    }else if(nilai[i] >= 70 && nilai[i] < 80  ){
        document.write("<td>AB</td>");
    }else if(nilai[i] >= 60 && nilai[i] < 70  ){
        document.write("<td>B</td>");
    }else if(nilai[i] >= 50 && nilai[i] < 60  ){
        document.write("<td>BC</td>");
    }else if(nilai[i] >= 40 && nilai[i] < 50  ){
        document.write("<td>C</td>");
    }else if(nilai[i] >= 10 && nilai[i] < 40  ){
        document.write("<td>D</td>");
    }else{
        document.write("<td>E</td>");
    }
    document.write("<tr></tr>")
}
