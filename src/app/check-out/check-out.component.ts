import { Component, inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DetailsService } from '../Services/details.service';
import { ProductsCard } from '../Interfaces/products-card';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-check-out',
  standalone: true,
  imports: [NavbarComponent,
  ],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.css'
})
export class CheckOutComponent {
    routes: ActivatedRoute = inject(ActivatedRoute);

    productService = inject (DetailsService);
    productsCard: ProductsCard | undefined;
    constructor(){
      const productCardId = Number(this.routes.snapshot.params['id'])
      this.productsCard = this.productService.getAllProductCardById(productCardId)

      
    }


  }
