class User {
    public age: number;
    public familyName: string;
    public givenName: string;

    constructor(familyName: string, givenName: string, age: number) {
        this.age = age;
        this.familyName = familyName;
        this.givenName = givenName;
    }

}

const user = new User('test', 'name', 20);

const contentsElem = document.getElementById('contents')

if (!!contentsElem) {
    contentsElem.innerHTML = `${user.familyName} ${user.givenName}`
}