"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchController = void 0;
const Pet_1 = require("../models/Pet");
exports.SearchController = {
    search(req, res) {
        const busca = req.query.q;
        let list = Pet_1.PetModel.getSearch(busca.toUpperCase());
        let search;
        if (!busca) {
            return res.redirect('/');
        }
        if (busca) {
            search = true;
        }
        res.render('pages/pets', { list, search, busca });
    }
};
