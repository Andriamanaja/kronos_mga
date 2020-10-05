import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth/auth.guard';
import { AppGuard } from './guard/appguard/app.guard';
import { ClientService } from './services/resolvers/client/client.service';
import { DetailsClientService } from './services/resolvers/details-client/details-client.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',canActivate:[AuthGuard],loadChildren: './home/home.module#HomePageModule' },
  { path: 'menu',canActivate:[AppGuard],loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'fiches-client',resolve:{ data : ClientService},  canActivate:[AppGuard],loadChildren: './clients/fiches-client/fiches-client.module#FichesClientPageModule' },
  { path: 'new-client',canActivate:[AppGuard],resolve:{ data : DetailsClientService},loadChildren: './clients/new-client/new-client.module#NewClientPageModule' },
  { path: 'discussion',canActivate:[AppGuard],loadChildren: './discussion/discussion.module#DiscussionPageModule' },
  { path: 'detail-fiche-client',resolve:{ data : DetailsClientService}, canActivate:[AppGuard],loadChildren: './clients/detail-fiche-client/detail-fiche-client.module#DetailFicheClientPageModule' },
  { path: 'liste-tournee',canActivate:[AppGuard],loadChildren: './tournees/liste-tournee/liste-tournee.module#ListeTourneePageModule' },
  { path: 'detail-tournee',canActivate:[AppGuard],loadChildren: './tournees/detail-tournee/detail-tournee.module#DetailTourneePageModule' },
  { path: 'fiche-visite',canActivate:[AppGuard],loadChildren: './fiche-visite/fiche-visite.module#FicheVisitePageModule' },
  { path: 'page-one',canActivate:[AppGuard],loadChildren: './fiche-visite/page-one/page-one.module#PageOnePageModule' },
  { path: 'page-two',canActivate:[AppGuard],loadChildren: './fiche-visite/page-two/page-two.module#PageTwoPageModule' },
  { path: 'page-three',canActivate:[AppGuard],loadChildren: './fiche-visite/page-three/page-three.module#PageThreePageModule' },
  { path: 'page-four',canActivate:[AppGuard],loadChildren: './fiche-visite/page-four/page-four.module#PageFourPageModule' },
  { path: 'page-five',canActivate:[AppGuard],loadChildren: './fiche-visite/page-five/page-five.module#PageFivePageModule' },
  { path: 'page-six',canActivate:[AppGuard],loadChildren: './fiche-visite/page-six/page-six.module#PageSixPageModule' },
  { path: 'page-seven',canActivate:[AppGuard],loadChildren: './fiche-visite/page-seven/page-seven.module#PageSevenPageModule' },
  { path: 'new-fiche-visite',canActivate:[AppGuard],loadChildren: './fiche-visite/new-fiche-visite/new-fiche-visite.module#NewFicheVisitePageModule' },
  { path: 'map',canActivate:[AppGuard],loadChildren: './map/map.module#MapPageModule' },
  { path: 'synchro',canActivate:[AppGuard],loadChildren: './synchro/synchro.module#SynchroPageModule' },
  { path: 'compte',canActivate:[AppGuard],loadChildren: './compte/compte.module#ComptePageModule' },
  { path: 'imgtest', loadChildren: './imgtest/imgtest.module#ImgtestPageModule' },
  { path: 'database', loadChildren: './database/database.module#DatabasePageModule' },  { path: 'new-sync', loadChildren: './new-sync/new-sync.module#NewSyncPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
