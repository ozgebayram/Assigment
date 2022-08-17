//! # ODEV1: Dort Islem Hesap Makinasi (2 Sayı bir operator)

// /# ODEV1: Dort Islem Hesap Makinasi (2 Sayı bir operator)
let num1 = +prompt(`Birinci sayıyı giriniz:`);
let num2 = +prompt(`İkinci sayıyı giriniz:`);
let operator = prompt(`Operatörü giriniz`);
let sonuc;
if (operator === `+`){
	sonuc = num1 + num2
}else if(operator === `-`){
	sonuc = num1 - num2
}else if(operator === `*`){
	sonuc = num1 * num2
}else if(operator === `/`){
	sonuc = num1 / num2
}else{
	sonuc = "Girdiğiniz operatör +,-,* ve / işaretlerinden oluşmalıdır."
}
console.log(sonuc)


// !# ODEV2 :Clarusway’deki haftalık ders ve etkinlik programınızı, console’dan girilen gün değerine göre çıktı veren kodu switch-case yapısı ile yazınız.

// !## Pazartesi, Salı ,Çarşamba, Perşembe -> InClass

// !## Cuma -> Teamwork

// !## Cumartesi ->  InClass + Workshop

// !## Pazar -> Self-Study

// !## Aksi takdirde -> Yanlis gun girildi.

let gun = prompt("Bir gün yazınız: ","cuma")
switch(gun){
case "pazartesi":
  program ="inclass"
  break;

case "salı":
  program ="inclass";
  break;

	case "carsamba":
  program ="inclass";
  break;

	case "persembe":
  program ="inclass";
  break;

	case "cuma":
  program ="Teamwork";
  break;


	case "cumartesi":
  program ="inclass and workshop";
  break;


	case "pazar":
  program ="self-Study";
  break;

	default:
  console.log("Yanlis gun girildi");
  break
}
console.log(`${gun} gunu ${program} etkinliğiniz bulunmaktadır.`)

// !# ODEV3:Maasi asgari ucretten az olanlara %50 zam,fazla olanlara ise %10 zam yapmak istiyoruz.

  let asgari =5600;
  let maas= +prompt("Maaş bilgisi giriniz: ")
  if (asgari > maas){
	zam = (maas * 1.5).toFixed()
  }else{
	zam =(maas *1.1).toFixed()
  }
  console.log(`Hesaplanan yeni maaş miktarınız ${zam} olarak düzenlenmiştir.`);

//   !# ODEV4: Kredi Risk Programı

// !## Console’dan kişinin gelir ve gider miktarını alan

// !## eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir 🤑

// !## değilse Kredi Verilemez 🥺

// !## şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.

let gelir = +prompt("Aylık gelir miktarınızı yazınız: ");
let gider = +prompt("Aylık gider miktarınızı yazınız: ");
let asgari2 = 5600
let kalan = gelir - gider >= asgari2 ? ("Tebrikler kredi almaya hak kazandınız!") : ("Uzgunuz kredi talebiniz reddedildi!");
console.log(kalan);




