import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageContainerComponent } from './home-page-container/home-page-container.component';
import { UploadDocumentContainerComponent } from './upload-document-container/upload-document-container.component';

const routes: Routes = [
  {path: '', component: HomePageContainerComponent},
  {path: 'upload', component: UploadDocumentContainerComponent}
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
