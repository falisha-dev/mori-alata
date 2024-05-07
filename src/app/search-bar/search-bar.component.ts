import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  searchTerm: string = '';
  searchResults: string[] = [];


  search = () => {
    console.log('Search term:', this.searchTerm);
    // Example: Assigning search results to an array
    this.searchResults = ['Result 1', 'Result 2', 'Result 3'];
  }

}
