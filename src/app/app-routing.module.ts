import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampeonesComponent } from './componentes/campeones/campeones.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'formulario', component: FormularioComponent},
{path: 'campeones', component: CampeonesComponent},
{path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
