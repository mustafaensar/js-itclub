class UsersData {
    constructor(name, point) {
        this.usersData = [];
        this.person = {name, point}
        this.console();
        this.pushToArray();
    }

    pushToArray(){
        if((this.person.name || this.person.point) !== undefined)
        localStorage.setItem(this.person.name, this.person.point);
    }

    console(){
        console.log(this.person);
    }
}