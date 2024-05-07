import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroPageComponent } from '../hero-page/hero-page.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { CardComponent } from '../card/card.component';
import { ProductsCard } from '../Interfaces/products-card';
import { DetailsService } from '../Services/details.service';
import { MoreComponent } from '../more/more.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule,
     NavbarComponent,
     HeroPageComponent,
      SearchBarComponent,
      CardComponent, MoreComponent, FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productsCardList: ProductsCard[] =  [];

  // a new property
  productsCard: DetailsService = inject(DetailsService);

  //a constructor function that pollulates the logic ishhh
  constructor(){
    this.productsCardList = this.productsCard.getAllProductCardList();
  }
}
