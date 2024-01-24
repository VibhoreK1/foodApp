import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css',
})
export class FoodPageComponent implements OnInit {
  food!: Food;

  constructor(
    activatedRoute: ActivatedRoute,
    foodservice: FoodService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        foodservice.getFoodById(params.id).subscribe((serverFoods)=>{
          this.food = serverFoods;
        });
      }
    });
  }
  ngOnInit(): void {}

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }
}
