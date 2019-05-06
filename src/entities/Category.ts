import {CategoryID, ICategory} from "../types";

export class Category implements ICategory {
  public id: CategoryID;
  public label: string;
  public image: string;

  constructor(id: CategoryID, label: string, image: string) {
    this.id = id;
    this.label = label;
    this.image = image;
  }
}