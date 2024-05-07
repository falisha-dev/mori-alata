import { Component, Input } from '@angular/core';
import { ProductsCard } from '../Interfaces/products-card';
import { RouterModule } from '@angular/router';




@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() productsCard!: ProductsCard;
}
