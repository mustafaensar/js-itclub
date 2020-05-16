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
const manager = new Manager();

new MainController();

new ViewController(new CustomerForm(true));
new ViewController(new VictimForm(false));
new ViewController(new AddressForm(false));
new ViewController(new CustomerListView(true));
new ViewController(new VictimListView(false));
new ViewController(new AddressListView(false));

new CustomerList();
new VictimList();
new AddressList();