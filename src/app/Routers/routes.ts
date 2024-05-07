import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { CheckOutComponent } from "../check-out/check-out.component";
const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home-page'
    },
    {
        path: 'details/:id',
        component: CheckOutComponent,
        title: 'details page'


    }
];

export default routeConfig;