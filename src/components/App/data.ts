import { Category, Ingredient } from "../../entities";
import { CategoryID, Frequency, Ingredients } from "../../types";

import bebidasPicture from '../../assets/drinks.jpg';
import carnesPicture from '../../assets/meat.jpg';
import aceitesPicture from '../../assets/oil-fat.jpg';
import embutidosPicture from '../../assets/embutidos.jpg';
import delMarPicture from '../../assets/sea.jpg';

export const categories: Category[] = [
  new Category(CategoryID.AceitesYGrasasSolidas, "Aceites y grasas sólidas", aceitesPicture),
  new Category(CategoryID.Bebidas, "Bebidas", bebidasPicture),
  new Category(CategoryID.Carnes, "Carnes", carnesPicture),
  new Category(CategoryID.Embutidos, "Embutidos", embutidosPicture),
  new Category(CategoryID.DelMar, "Del mar", delMarPicture),
  new Category(CategoryID.DeLaTierra, "Del la tierra", "https://placekitten.com/250/75"),
  new Category(CategoryID.Lacteos, "Lácteos", "https://placekitten.com/250/75"),
  new Category(CategoryID.Dulces, "Dulces", "https://placekitten.com/250/75"),
  new Category(CategoryID.FrutosSecos, "Frutos Secos", "https://placekitten.com/250/75")
];

export const ingredients: Ingredients = [
  new Ingredient("Pollo", Frequency.daily, CategoryID.Carnes),
  new Ingredient("Pavo", Frequency.daily, CategoryID.Carnes),
  new Ingredient("Ternera", Frequency.daily, CategoryID.Carnes),
  new Ingredient("Huevo", Frequency.daily, CategoryID.Carnes),
  new Ingredient("Carnes grasas", Frequency.never, CategoryID.Carnes),
  new Ingredient("Cerdo", Frequency.never, CategoryID.Carnes),
  new Ingredient("Cordero", Frequency.never, CategoryID.Carnes),

  new Ingredient("Pavo", Frequency.daily, CategoryID.Embutidos),
  new Ingredient("Pollo", Frequency.daily, CategoryID.Embutidos),
  new Ingredient("Jamón", Frequency.weekly, CategoryID.Embutidos),
  new Ingredient("Embutidos grasos", Frequency.never, CategoryID.Embutidos),
  new Ingredient("Bacon", Frequency.never, CategoryID.Embutidos),
  new Ingredient("Salami", Frequency.never, CategoryID.Embutidos),
  new Ingredient("Mortadela", Frequency.never, CategoryID.Embutidos),

  new Ingredient("Lenguado", Frequency.daily, CategoryID.DelMar),
  new Ingredient("Gallo", Frequency.daily, CategoryID.DelMar),
  new Ingredient("Merluza", Frequency.daily, CategoryID.DelMar),
  new Ingredient("Bacalao", Frequency.daily, CategoryID.DelMar),
  new Ingredient("Pescado Blanco", Frequency.daily, CategoryID.DelMar),
  new Ingredient("Sardinas", Frequency.weekly, CategoryID.DelMar),
  new Ingredient("Anchoas", Frequency.weekly, CategoryID.DelMar),
  new Ingredient("Boquerones", Frequency.weekly, CategoryID.DelMar),
  new Ingredient("Salmón", Frequency.weekly, CategoryID.DelMar),
  new Ingredient("Rodaballo", Frequency.weekly, CategoryID.DelMar),
  new Ingredient("Pescado Azul", Frequency.weekly, CategoryID.DelMar),
  new Ingredient("Huevas de pescado", Frequency.never, CategoryID.DelMar),
  new Ingredient("Gambas", Frequency.never, CategoryID.DelMar),
  new Ingredient("Langostinos", Frequency.never, CategoryID.DelMar),
  new Ingredient("Cangrejo", Frequency.never, CategoryID.DelMar),
  new Ingredient("Marisco", Frequency.never, CategoryID.DelMar),

  new Ingredient("Aceite de oliva (preferentemente)", Frequency.daily, CategoryID.AceitesYGrasasSolidas),
  new Ingredient("Aceite de semillas", Frequency.daily, CategoryID.AceitesYGrasasSolidas),
  new Ingredient("Aceite de girasol", Frequency.daily, CategoryID.AceitesYGrasasSolidas),
  new Ingredient("Aceite de maíz", Frequency.daily, CategoryID.AceitesYGrasasSolidas),
  new Ingredient("Manteca de cerdo", Frequency.never, CategoryID.AceitesYGrasasSolidas),
  new Ingredient("Sebo", Frequency.never, CategoryID.AceitesYGrasasSolidas),
  new Ingredient("Tocino", Frequency.never, CategoryID.AceitesYGrasasSolidas),
  new Ingredient("Nata", Frequency.never, CategoryID.AceitesYGrasasSolidas),

  new Ingredient("Nata", Frequency.never, CategoryID.AceitesYGrasasSolidas),
].reduce((acc, ing: Ingredient) => ({ ...acc, [ing.id]: ing }), {});
