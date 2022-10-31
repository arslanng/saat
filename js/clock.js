window.onload = dijitalSaat
userName = prompt("lütfen Anızı yazın");
document.querySelector("#myName").innerHTML = userName;

function dijitalSaat(){
    let tarih = new Date();
    let saat = tarih.getHours();
    let dakika = tarih.getMinutes();
    let saniye = tarih.getSeconds();
    zeroKontrol(dakika);
    zeroKontrol(saniye);
    document.querySelector("#myClock").innerHTML = `${saat}:${dakika}:${saniye}`
    t=setTimeout('dijitalSaat()',1000);
}

function zeroKontrol(i)
{
    if(i<10){
        i = "0"+i;
    }
    return i;
}


