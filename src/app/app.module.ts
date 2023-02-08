import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
//TEMPLATES
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';
//PAGES
import { PagesModule } from './pages/pages.module';
//SERVICES
import { MoviesService } from './services/movies.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  providers: [MoviesService],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PagesModule, HttpClientModule],
})
export class AppModule {}
