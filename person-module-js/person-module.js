function Person(...args){

    const [name, surname, age, profession] = args;
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.profession = profession;
    
    this.printObj = () => {
        for (const prop in this) {
            let str = prop;
            str = str.slice(0,1).toUpperCase() + str.slice(1,str.length);
            if(prop!='printObj') console.log(str+':',this[prop]);
        }
    }
};

export {Person};