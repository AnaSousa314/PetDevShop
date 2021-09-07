import { Router } from "express";
import { PetsController } from "../controllers/PetSController";
import { SearchController } from "../controllers/SearchController";

const router = Router();

router.get('/', PetsController.home);
router.get('/dog',PetsController.dogs);
router.get('/cat',PetsController.cats);
router.get('/fish',PetsController.fishes);

router.get('/search',SearchController.search);

export default router