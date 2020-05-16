/**
 * 
 * --- PROGRAM AKISI ---
 * >> Kullanici sisteme girdiginde karsisinda kendisine isverenlerin listesi ve
 * >> yeni isveren ve hedefleri girebilecegi bir form blogu da olacak.
 * >> Kullanici isverenlerin herhangi birisinin ismine tikladigi zaman maktulleri liste halinde görebilecek.
 * >> Isi bitirilen maktuller diger hedeflerden daha saydam görünecek.
 * 
 * 
 * --- ANALIZ KISMI ---
 * >> Grid kullanarak ana sayfa, baslik ve onun altinda biri digerinin 2 kati seklinde iki ayri sütun
 * olarak dizayn edilecek.
 * >> Sütunlarin birinde müsteri listesi digerinde ise yeni müsteri ve hedef girme formu bulunacak.
 * >> Müsterilerin üzerine tiklanildigi zaman o müsteriden gelen hedeflerin listesi gelecek.
 * >> Hedeflerin yanindaki bir butona tiklanildiginda onlarla alakali detayli bilgiler yazabilecegimiz
 * bir form karsimiza gelecek.
 * >> Hedef indirildi ise yanindaki bir kutucuga tiklanildiginda diger hedeflerden daha saydam halde görünecek.
 * 
 * 
 */

class Manager{
    constructor(){
        this.appName = 'katil-ismet'
        this.db = new Database(this.appName);
    }
}
manager = new Manager();

new MainController();
new ListController();

const ahmetCustomer = new Customer('ahmet');
const cemilCustomer = new Customer('cemil');
const aliVictim = new Victim('ali');
const veliVictim = new Victim('veli');
const aliAddressEv = new Address('Baadenerstrasse 36', '8005', 'Zurich');
const aliAddressIs = new Address('Juchstrasse 38', '8009', 'Luzern');
const veliAddressEv = new Address('Seestrasse 36', '8007', 'Basel');
const veliAddressIs = new Address('Bahnofstrasse 30', '8005', 'Zurich');

aliVictim.addAddress(aliAddressEv);
aliVictim.addAddress(aliAddressIs);
veliVictim.addAddress(veliAddressEv);
veliVictim.addAddress(veliAddressIs);

ahmetCustomer.addVictim(aliVictim);
ahmetCustomer.addVictim(veliVictim);

const ahmetVictims = ahmetCustomer.victims

new ViewController(new CustomerForm);
new ViewController(new VictimForm);
new ViewController(new AddressForm);
