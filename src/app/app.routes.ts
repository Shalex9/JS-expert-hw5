import { Routes } from "@angular/router";

import { ProductCardComponent } from "./product-card/product-card.component";


export const routes: Routes = [
    { path: "", redirectTo: "dashboard", pathMatch: "full" },
    { path: "product-card",    component: ProductCardComponent }
];
