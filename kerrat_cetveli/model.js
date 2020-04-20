class UsersData {
    constructor(name, point) {
        this.usersData = [];
        this.person = {name, point}
        this.pushToArray();
    }

    pushToArray(){
        if((this.person.name || this.person.point) !== undefined)
        localStorage.setItem(this.person.name, this.person.point);
    }
}