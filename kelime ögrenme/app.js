/**
 * Bu aplikasyon kullanicinin onune coktan secmeli sorular sunar ve test bitiminde degerlendirmesini yapar.
 * 
 * Program Akisi
 * - Kullanici HTML icerisinde karsisina gelen sorulardaki butonlardan birini isaretler
 * - Dogru cevaplara gore puanlama yapilir.
 * - Degerlendirme kisminda kac dogru kac yanlis cevap verildigi gorulebilir.
 * 
 * Analysis Kismi
 * - Dogru cevaplarin oldugu bir data olusturulacak
 * - Ekranda cevap siklari butonlari olacak
 * - Butona tiklandiginda sorulan kelime ve cevap arraye aktarilacak
 * - Cevaplarimizin datada olanlari true dondurulecek ve puan verilecek
 * - Sol tarafa puan ve detaylarin oldugu bir alan eklenecek
 */

const manager = new Vokabellernen;
const button = manager.nextQuestionButton;

manager.setTheNewQuestion();

button.addEventListener('click',
    function(){manager.setTheNewQuestion()},
    function(){manager.checkTheAnswer()}
);