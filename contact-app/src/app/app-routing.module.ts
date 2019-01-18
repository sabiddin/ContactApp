import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';  
import { ContactlistComponent } from './contactlist/contactlist.component';  
import { ContactformComponent } from './contactform/contactform.component';  
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationFormComponent  } from "./application-form/application-form.component";
import { HomeComponent  } from "./home/home.component";
const appRoutes: Routes = [
  { path: '',  pathMatch: 'full', component: ApplicationListComponent  },
  { path: 'contactform', component: ContactformComponent  },
  { path: 'contacts', component: ContactlistComponent  },
  { path: 'applications', component:ApplicationListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'applicationform', component: ApplicationFormComponent}
];  
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
