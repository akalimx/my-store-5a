import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  products:Product[] = [
    {
      id:'1',
      name: 'El mejor juguete',
      price:565.00,
      image: './assets/images/toy.jpg',
    },
    {
      id:'2',
      name: 'Bicicleta casi nueva',
      price:1250.00,
      image: './assets/images/bike.jpg',
    },
    {
      id:'3',
      name: 'Colección de albumes',
      price:1100.00,
      image: './assets/images/album.jpg',
    },
    {
      id:'4',
      name: 'Mis libros',
      price:800.00,
      image: './assets/images/books.jpg',
    },
    {
      id:'5',
      name: 'Lentes para disfrutar en la playa',
      price:100.00,
      image: './assets/images/glasses.jpg',

    },
    {
      id:'6',
      name: 'Casa para muñecas',
      price:2300.00,
      image: './assets/images/house.jpg',
    }
  ]
  ngOnInit(): void {
      
  }
}
