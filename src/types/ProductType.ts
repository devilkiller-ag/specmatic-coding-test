enum IProductType {
  GADGET = 'gadget',
  BOOK = 'book',
  FOOD = 'food',
  OTHER = 'other'
}


interface IProduct {
  id: number;
  name: string;
  type: IProductType;
  inventory: number;
}


export {
  IProductType,
  IProduct
};
