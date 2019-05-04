import {CategoryID, Frequency, IIngredient} from "../types";
import {v4} from 'uuid';

export class Ingredient implements IIngredient {
  public id: string;
  public favorite: boolean;

  constructor(
    public label: string,
    public frequency: Frequency,
    public category: CategoryID,
    ) {
    this.id = v4();
    this.favorite = false;
  }
}