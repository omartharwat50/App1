import { Routes } from '@angular/router';
import { Startframework } from './components/startframework/startframework';
import { About } from './components/about/about';
import { Portifolio } from './components/portifolio/portifolio';
import { Contact } from './components/contact/contact';
import { Notfound } from './components/notfound/notfound';

export const routes: Routes = [
 {path:'',redirectTo:'startframework',pathMatch:'full'},

    {path:'startframework',component:Startframework,title:'Start framework'},
    {path:'about',component:About,title:'About'},
    {path:'portifolio',component:Portifolio,title:'Portifolio'},
    {path:'contact',component:Contact,title:'Contact'},
    {path:'**',component:Notfound,title:'Not found page'}


];
