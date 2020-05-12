/**
 * Programin datalarini yonetir.
 */
class DBManager {
    constructor(appName){
        this.db = localStorage;
        this.appName = appName;
        this.setInitialData();
    }

    /**
     * Baslangic datalarinin nasil olacagini gosterir.
     */
    setInitialData(){
        const data = this.getItem(this.appName);
        if(!data){
            const initialData = {
                missions: [
                    {
                        customer: 'Big Boss',
                        targets: [
                            {
                                name: 'Ali',
                                dead: false,
                                info: 'XYZ Caddesi No:7 Etimesgut Ankara'
                            },
                            {
                                name: 'Veli',
                                dead: true,
                                info: 'Random Caddesi No:2 Bahcelievler Ankara'
                            },
                            {
                                name: 'Selami',
                                dead: false,
                                info: 'Bilmiyom Caddesi No:5 Yenimahalle Ankara'
                            }    
                        ]
                    },
                    {
                        customer: 'Ghost',
                        targets: [
                            {
                                name: 'Ahmet',
                                dead: false,
                                info: 'Aslanlar Caddesi No:10 Bakirkoy Istanbul'
                            },
                            {
                                name: 'Mehmet',
                                dead: false,
                                info: 'Kartallar Caddesi No:8 Avcilar Istanbul'
                            },
                            {
                                name: 'Saffet',
                                dead: true,
                                info: 'Kanaryalar Caddesi No:5 Fatih Istanbul'
                            }
                        ]
                    },
                    {
                        customer: 'Hero',
                        targets: [
                            {
                                name: 'Nurcan',
                                dead: false,
                                info: 'Aslanlar Caddesi No:10 Bakirkoy Istanbul'
                            },
                            {
                                name: 'Berkcan',
                                dead: false,
                                info: 'Kartallar Caddesi No:8 Avcilar Istanbul'
                            },
                            {
                                name: 'Aycan',
                                dead: true,
                                info: 'Kanaryalar Caddesi No:5 Fatih Istanbul'
                            }
                        ]
                    }
                ]
            };

            this.setItem(this.appName, initialData);
        }
    }

    /**
     * LocalStorage icerisine yeni bir kayit yapilmasini saglar.
     */
    setItem(key, value){
        value = JSON.stringify(value);
        this.db.setItem(key, value);
    }

    /**
     * LocalStorage icerisindeki datayi cagirmamizi saglar.
     */
    getItem(key){
        const data = this.db.getItem(key);
        return JSON.parse(data);
    }
}