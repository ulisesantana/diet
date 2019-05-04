import {Category, Ingredient} from "../../entities";
import {CategoryID, Frequency, Ingredients} from "../../types";

export const categories: Category[] = [
  new Category(CategoryID.AceitesYGrasasSolidas, "Aceites y grasas sólidas"),
  new Category(CategoryID.Bebidas, "Bebidas"),
  new Category(CategoryID.Carnes, "Carnes"),
  new Category(CategoryID.Embutidos, "Embutidos"),
  new Category(CategoryID.DelMar, "Del mar"),
  new Category(CategoryID.DeLaTierra, "Del la tierra"),
  new Category(CategoryID.Lacteos, "Lácteos"),
  new Category(CategoryID.Dulces, "Dulces"),
  new Category(CategoryID.FrutosSecos, "Frutos Secos")
];

export const ingredients: Ingredients = [
  new Ingredient('Pollo', Frequency.daily, CategoryID.Carnes),
  new Ingredient('Pavo', Frequency.daily, CategoryID.Carnes),
  new Ingredient('Ternera', Frequency.daily, CategoryID.Carnes),
  new Ingredient('Huevo', Frequency.daily, CategoryID.Carnes),
  new Ingredient('Carnes grasas', Frequency.never, CategoryID.Carnes),
  new Ingredient('Cerdo', Frequency.never, CategoryID.Carnes),
  new Ingredient('Cordero', Frequency.never, CategoryID.Carnes),

  new Ingredient('Pavo', Frequency.daily, CategoryID.Embutidos),
  new Ingredient('Pollo', Frequency.daily, CategoryID.Embutidos),
  new Ingredient('Jamón', Frequency.weekly, CategoryID.Embutidos),
  new Ingredient('Embutidos grasos', Frequency.never, CategoryID.Embutidos),
  new Ingredient('Bacon', Frequency.never, CategoryID.Embutidos),
  new Ingredient('Salami', Frequency.never, CategoryID.Embutidos),
  new Ingredient('Mortadela', Frequency.never, CategoryID.Embutidos),

  new Ingredient('Lenguado', Frequency.daily, CategoryID.DelMar),
].reduce((acc, ing: Ingredient) => ({...acc, [ing.id]: ing}), {});