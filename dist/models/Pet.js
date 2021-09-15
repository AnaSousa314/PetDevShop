"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetModel = void 0;
const data_1 = require("../data");
exports.PetModel = {
    getAll() {
        return data_1.pets;
    },
    getType(petType) {
        let petTypes = data_1.pets.filter((item) => item.type === petType);
        return petTypes;
    },
    getActive(petType) {
        let active;
        data_1.pets.find((item) => {
            if (item.type === petType) {
                active = "active";
            }
        });
        return active;
    },
    getSearch(value) {
        let teste = data_1.pets.filter((name) => {
            if (name.name.toUpperCase().indexOf(value) !== -1) {
                return name;
            }
        });
        return teste;
    }
};
