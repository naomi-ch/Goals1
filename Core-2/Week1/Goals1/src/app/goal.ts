export class Goal { //exported the class to make it available everywhere in the app whre we need it
  showDescription: boolean; //'property showDescription'
  constructor(public id: number, public name: string, public description: string){
    this.showDescription=false;
  }
}
  



//constructor function enables is to define the initialization logic for creating an object. 
//'showDescription' is not mandatory to the Goal object like 'id,name,description'
//we are telling our angular application that it should initialize a goal object requiring the id,name and description as mandatory properties and as well add showDescription to a goal object immediately setting its value to false.
//Each goal object we create from now on will, therefore, have the showDescription property although we will not explicitly define this property for each Goal object that we create.