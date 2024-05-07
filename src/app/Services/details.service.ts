import { Injectable } from '@angular/core';
//import the interface
import { ProductsCard } from '../Interfaces/products-card';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  protected productCardList: ProductsCard[] = [
    //the object array of the product
    {
      id: 0,
      name: 'Bell Pepper',
      photo: 'assets/images/image1.jpg',
      price: 2.50,
      info: '4 big size Bell Peppers'
    },
    {
      id: 1,
      name: 'Chili Pepper',
      photo: '/assets/images/image2.jpg',
      price: 1.00,
      info: 'A handful Fresh Chili Pepper'
    },
    {
      id: 2,
      name: 'Garlic',
      photo: '/assets/images/image3.jpg',
      price: 0.50,
      info: 'A handful Cloves of Garlic'
    },
    {
      id: 3,
      name: 'Ginger',
      photo: '/assets/images/image4.jpg',
      price: 1.00,
      info: 'The pack contains 5 ginger roots'
    },
    {
      id: 4,
      name: 'Onions',
      photo: '/assets/images/image5.jpg',
      price: 1.20,
      info: '4 big size onions'
    },
    {
      id: 5,
      name: 'Scotch Bonnet',
      photo: '/assets/images/image6.jpg',
      price: 0.40,
      info: 'A pack contains a handful of fresh Scotch Bonnet'
    },
    {
      id: 6,
      name: 'Grinded Pepper',
      photo: '/assets/images/image7.jpg',
      price: 0.30,
      info: 'Nicely grinded pepper sachet '

    },
    {
      id: 7,
      name: 'Green Chili',
      photo: '/assets/images/image8.jpg',
      price: 1.00,
      info: 'A handful Green Chili now available!'
    },
    {
      id: 8,
      name: 'Tomatoes',
      photo: '/assets/images/image9.jpg',
      price: 1.20,
      info: 'Our best selling 10 fresh tomatoes'
    },

  ];
  constructor() { }
   

  // a method that can be injectible
  getAllProductCardList() : ProductsCard[] {
    return this.productCardList;

  }
  //another method
  getAllProductCardById(id: number): ProductsCard | undefined{
    //searching of the array
    return this.productCardList.find(productsCard => productsCard.id ===id);
  }
}
