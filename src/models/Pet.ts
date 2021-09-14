import {pets} from '../data';


export let PetModel = {
  getAll(){
    return pets;
  },

  getType(petType: string){
    let petTypes = pets.filter((item)=>item.type === petType);

    return petTypes;
  },

  getActive(petType:string){
    let active

    pets.find((item)=>{
      if(item.type === petType){
        active = "active"
      }
    });

    return active
  },

  getSearch(value:string){
    
    let teste = pets.filter((name)=>{
      if(name.name.toUpperCase().indexOf(value) !== -1){
        return name;
      }
    });

    return teste;
  }


}