import { Request, Response } from "express";
import {PetModel} from '../models/Pet';

export const SearchController = {
  search(req:Request,res:Response){
    const busca:string = req.query.q as string;

    let list = PetModel.getSearch(busca.toUpperCase());
    let search

    if(busca){
      search = true;
    }

    res.render('pages/pets',{list,search,busca}); 
  }
}