export enum Frequency {
  daily,
  weekly,
  never
}

export enum CategoryID {
  Carnes,
  Embutidos,
  DelMar,
  AceitesYGrasasSolidas,
  DeLaTierra,
  Lacteos,
  Dulces,
  FrutosSecos,
  Bebidas
}

export interface ICategory {
  id: CategoryID,
  label: string,
  image: string
}

export interface IIngredient {
  id: string
  label: string,
  frequency: Frequency,
  category: CategoryID,
  favorite: boolean
}

export type Ingredients = Record<string, IIngredient>