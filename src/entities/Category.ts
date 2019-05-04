import {CategoryID, ICategory} from "../types";

export class Category implements ICategory {
  constructor(public id: CategoryID, public label: string) {}
}