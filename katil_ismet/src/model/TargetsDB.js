class DBManager {
    constructor(appName){
        this.db = localStorage;
        this.appName = appName;
        this.setInitialData();
    }

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
                    }
                ]
            };

            this.setItem(this.appName, initialData);
        }
    }

    setItem(key, value){
        value = JSON.stringify(value);
        this.db.setItem(key, value);
    }

    getItem(key){
        const data = this.db.getItem(key);
        return JSON.parse(data);
    }
}