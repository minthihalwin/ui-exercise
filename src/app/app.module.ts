import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { MatchInfoComponent } from './match-info/match-info.component';
import { ResultComponent } from './result/result.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { HomePageContainerComponent } from './home-page-container/home-page-container.component';
import { UploadDocumentContainerComponent } from './upload-document-container/upload-document-container.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    MatchInfoComponent,
    ResultComponent,
    PaginatorComponent,
    FooterComponent,
    HomePageContainerComponent,
    UploadDocumentContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
