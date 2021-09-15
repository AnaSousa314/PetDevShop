import { Request, Response } from "express";
import {PetModel} from '../models/Pet' 

export const PetsController={
  home(req:Request,res:Response){    
    const list = PetModel.getAll();

    let banner = {
      image: 'allanimals',
      text: 'Todos os animais'
    }
    
    res.render('pages/pets',{list,banner});
  },

  dogs(req:Request,res:Response){
    const list = PetModel.getType('dog');
    
    let banner = {
      image: 'banner_dog',
      text: 'Cachorros'
    }
     
    let type = true;
    let active = PetModel.getActive('dog');

    res.render('pages/pets',{list,type,banner,active})
  },

  cats(req:Request,res:Response){
    const list = PetModel.getType('cat');

    let banner = {
      image: 'banner_cat',
      text: 'Gatos'
    }

    let type = true;

    let active2 = PetModel.getActive('cat')
     
    res.render('pages/pets',{list,type,banner,active2});
  },

  fishes(req:Request,res:Response){
    const list = PetModel.getType('fish');

    let banner = {
      image: 'banner_fish',
      text: 'Peixes'
    }

    let type = true;

    let active3 = PetModel.getActive('fish');

    res.render('pages/pets',{list,type,banner,active3});
  }

  
}