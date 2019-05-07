import { Category, Ingredient } from "../../entities";
import { CategoryID, Frequency, Ingredients } from "../../types";

import bebidasPicture from '../../assets/drinks.jpg';
import carnesPicture from '../../assets/meat.jpg';
import aceitesPicture from '../../assets/oil-fat.jpg';
import embutidosPicture from '../../assets/embutidos.jpg';
import delMarPicture from '../../assets/sea.jpg';
import deLaTierraPicture from '../../assets/verduras.jpg';
import lacteosPicture from '../../assets/lacteos.jpg';
import dulcesPicture from '../../assets/dulces.jpg';
import frutosSecosPicture from '../../assets/frutos-secos.jpg';

export const categories: Category[] = [
  new Category(CategoryID.AceitesYGrasasSolidas, "Aceites y grasas sólidas", aceitesPicture),
  new Category(CategoryID.Bebidas, "Bebidas", bebidasPicture),
  new Category(CategoryID.Carnes, "Carnes", carnesPicture),
  new Category(CategoryID.Embutidos, "Embutidos", embutidosPicture),
  new Category(CategoryID.DelMar, "Del mar", delMarPicture),
  new Category(CategoryID.DeLaTierra, "Del la tierra", deLaTierraPicture),
  new Category(CategoryID.Lacteos, "Lácteos", lacteosPicture),
  new Category(CategoryID.Dulces, "Dulces", dulcesPicture),
  new Category(CategoryID.FrutosSecos, "Frutos Secos", frutosSecosPicture)
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

  new Ingredient("Todo tipo de verduras excepto las que se mencionan en otras secciones", Frequency.daily, CategoryID.DeLaTierra),
  new Ingredient("Todo tipo de especias", Frequency.daily, CategoryID.DeLaTierra),
  new Ingredient("Harina", Frequency.daily, CategoryID.DeLaTierra),
  new Ingredient("Arroz", Frequency.daily, CategoryID.DeLaTierra),
  new Ingredient("Sémola", Frequency.daily, CategoryID.DeLaTierra),
  new Ingredient("Pasta", Frequency.daily, CategoryID.DeLaTierra),
  new Ingredient("Germen de trigo", Frequency.daily, CategoryID.DeLaTierra),
  new Ingredient("Salvado de trigo", Frequency.daily, CategoryID.DeLaTierra),
  new Ingredient("Papas", Frequency.daily, CategoryID.DeLaTierra),
  new Ingredient("Pan", Frequency.daily, CategoryID.DeLaTierra),
  new Ingredient("Espárragos", Frequency.weekly, CategoryID.DeLaTierra),
  new Ingredient("Champiñones", Frequency.weekly, CategoryID.DeLaTierra),
  new Ingredient("Setas", Frequency.weekly, CategoryID.DeLaTierra),
  new Ingredient("Puerros", Frequency.weekly, CategoryID.DeLaTierra),
  new Ingredient("Rábanos", Frequency.weekly, CategoryID.DeLaTierra),
  new Ingredient("Espinacas", Frequency.weekly, CategoryID.DeLaTierra),
  new Ingredient("Coliflor", Frequency.weekly, CategoryID.DeLaTierra),
  new Ingredient("Guisantes", Frequency.weekly, CategoryID.DeLaTierra),
  new Ingredient("Habas", Frequency.weekly, CategoryID.DeLaTierra),
  new Ingredient("Tomates", Frequency.weekly, CategoryID.DeLaTierra),
  new Ingredient("Legumbres", Frequency.weekly, CategoryID.DeLaTierra),

  new Ingredient("Leche desnatada", Frequency.daily, CategoryID.Lacteos),
  new Ingredient("Yogur", Frequency.daily, CategoryID.Lacteos),
  new Ingredient("Quesos no grasos", Frequency.daily, CategoryID.Lacteos),
  new Ingredient("Leche Entera", Frequency.weekly, CategoryID.Lacteos),
  new Ingredient("Natillas", Frequency.weekly, CategoryID.Lacteos),
  new Ingredient("Cuajada", Frequency.weekly, CategoryID.Lacteos),
  new Ingredient("Quesos grasos", Frequency.never, CategoryID.Lacteos),

  new Ingredient("Galletas integrales", Frequency.daily, CategoryID.Dulces),
  new Ingredient("Tartas", Frequency.weekly, CategoryID.Dulces),
  new Ingredient("Hojaldres", Frequency.weekly, CategoryID.Dulces),
  new Ingredient("Pastelería Industrial", Frequency.weekly, CategoryID.Dulces),
  new Ingredient("Azúcar refinado", Frequency.weekly, CategoryID.Dulces),
  new Ingredient("Miel", Frequency.weekly, CategoryID.Dulces),
  new Ingredient("Fructosa", Frequency.weekly, CategoryID.Dulces),
  new Ingredient("Chocolate", Frequency.weekly, CategoryID.Dulces),

  new Ingredient("Todo tipo de fruto seco crudo, excepto cacahuete", Frequency.daily, CategoryID.FrutosSecos),
  new Ingredient("Cacahuete", Frequency.weekly, CategoryID.FrutosSecos),
  new Ingredient("Frutos secos fritos", Frequency.weekly, CategoryID.FrutosSecos),

  new Ingredient("Té", Frequency.daily, CategoryID.Bebidas),
  new Ingredient("Café", Frequency.daily, CategoryID.Bebidas),
  new Ingredient("Infusiones", Frequency.daily, CategoryID.Bebidas),
  new Ingredient("Zumos naturales", Frequency.daily, CategoryID.Bebidas),
  new Ingredient("Agua mineral", Frequency.daily, CategoryID.Bebidas),
  new Ingredient("Agua mineral con gas", Frequency.daily, CategoryID.Bebidas),
  new Ingredient("Alcohol", Frequency.never, CategoryID.Bebidas),


].reduce((acc, ing: Ingredient) => ({ ...acc, [ing.id]: ing }), {});
