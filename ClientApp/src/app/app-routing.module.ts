import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AuthGuard } from './_helpers;

import { Role } from '@app/_models';

import { HomeComponent } from '@app/_components';
import { CounterComponent } from '@app/_components';
import { FetchDataComponent } from '@app/_components';
import { ImagesListComponent } from '@app/_components/images/images-list';

import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';

// import { AboutUsComponent } from './_components';
// import { AboutWebsiteComponent } from './_components';
// import { AlertComponent } from './_components';
// import { BootstrapComponent } from './_components';
// import { ContactUsComponent } from './_components';
// import { DashboardComponent } from './_components';
// import { LinkAddEditComponent } from './_components';
// import { LinksListComponent } from './_components';
// import { NextStepsComponent } from './_components';
// import { ImageAddEditComponent } from './_components';
// import { ImagesCarouselComponent } from './_components';
// import { ImagesGalleryComponent } from './_components';
// import { ImagesGridComponent } from './_components';
// import { ImagesListComponent } from './_components';
// import { TestNavComponent } from './_components';
// import { VideoAddEditComponent } from './_components';
// import { VideosGalleryComponent } from './_components';
// import { VideosGridComponent } from './_components';
// import { FormsComponent } from './_components';
// import { TablesComponent } from './_components';
// import { CardsComponent } from './_components';
// import { AdminMenuComponent } from './_components';
// import { WhoAmIComponent } from './core';
// import { Sweetalert2Component } from './core';
// const adminModule = () => import('./admin/admin.module').then(x => x.AdminModule);
// const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
// const profileModule = () => import('./profile/profile.module').then(x => x.ProfileModule);

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
  { path: 'images', component: ImagesListComponent, canActivate: [AuthorizeGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
  
  /*
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    { path: 'profile', loadChildren: profileModule, canActivate: [AuthGuard] },
    { path: 'admin', loadChildren: adminModule, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
    { path: 'about-us', component:AboutUsComponent},
    { path: 'about-website', component:AboutWebsiteComponent},
    { path: 'bootstrap', component:BootstrapComponent},
    { path: 'contact-us', component:ContactUsComponent},
    { path: 'dashboard', component:DashboardComponent},
    { path: 'link-add-edit', component:LinkAddEditComponent},
    { path: 'links', component:LinksListComponent},
    { path: 'next-steps', component:NextStepsComponent},
    { path: 'image-add-edit', component:ImageAddEditComponent},
    { path: 'images-carousel', component:ImagesCarouselComponent},
    { path: 'images-gallery', component:ImagesGalleryComponent},
    { path: 'images-grid', component:ImagesGridComponent},
    { path: 'images', component: ImagesListComponent },
    { path: 'sweetalert', component:Sweetalert2Component},
    { path: 'test-nav', component:TestNavComponent},
    { path: 'video-add-edit', component:VideoAddEditComponent},
    { path: 'videos-gallery', component:VideosGalleryComponent},
    { path: 'videos-grid', component: VideosGridComponent },
    { path: 'forms', component: FormsComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'cards', component: CardsComponent },
    { path: 'whoami', component: WhoAmIComponent },
    { path: 'admin-menu', component: AdminMenuComponent },
*/

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
