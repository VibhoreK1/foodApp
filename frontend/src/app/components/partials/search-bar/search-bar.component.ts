import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent implements OnInit {
  searchItem = '';

  constructor(activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchItem) {
        this.searchItem=params.searchItem;
      }
    });
  }

  ngOnInit(): void {
  }

  search(item:String){
      if(item){
        this.router.navigateByUrl('/search/' + item)
      }
      else{
        this.router.navigateByUrl('')
      }
  }
}
