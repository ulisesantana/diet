import { Category, Ingredient } from "../../entities";
import { CategoryID, Frequency, Ingredients } from "../../types";

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

  new Ingredient("Marisco", Frequency.daily, CategoryID.AceitesYGrasasSolidas)
].reduce((acc, ing: Ingredient) => ({ ...acc, [ing.id]: ing }), {});
