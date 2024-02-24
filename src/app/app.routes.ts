import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ToggleMenuComponent } from './toggle-menu/toggle-menu.component';
import { PrivacyComponent } from './rights/privacy/privacy.component';


export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'toggle', component: ToggleMenuComponent},
    { path: 'privacy', component: PrivacyComponent},
];
