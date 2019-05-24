import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermsAndUseComponent } from './terms-and-use/terms-and-use.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SupportComponent } from './support/support.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {
    path: 'terms',
    component: TermsAndUseComponent
  },
  {
    path: 'privacypolicy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'support',
    component: SupportComponent
  },
  {
    path: 'constact',
    component: ContactUsComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
