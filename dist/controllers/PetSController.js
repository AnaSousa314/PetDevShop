"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetsController = void 0;
const Pet_1 = require("../models/Pet");
exports.PetsController = {
    home(req, res) {
        const list = Pet_1.PetModel.getAll();
        let banner = {
            image: 'allanimals',
            text: 'Todos os animais'
        };
        res.render('pages/pets', { list, banner });
    },
    dogs(req, res) {
        const list = Pet_1.PetModel.getType('dog');
        let banner = {
            image: 'banner_dog',
            text: 'Cachorros'
        };
        let type = true;
        let active = Pet_1.PetModel.getActive('dog');
        res.render('pages/pets', { list, type, banner, active });
    },
    cats(req, res) {
        const list = Pet_1.PetModel.getType('cat');
        let banner = {
            image: 'banner_cat',
            text: 'Gatos'
        };
        let type = true;
        let active2 = Pet_1.PetModel.getActive('cat');
        console.log(active2);
        res.render('pages/pets', { list, type, banner, active2 });
    },
    fishes(req, res) {
        const list = Pet_1.PetModel.getType('fish');
        let banner = {
            image: 'banner_fish',
            text: 'Peixes'
        };
        let type = true;
        let active3 = Pet_1.PetModel.getActive('fish');
        res.render('pages/pets', { list, type, banner, active3 });
    }
};
