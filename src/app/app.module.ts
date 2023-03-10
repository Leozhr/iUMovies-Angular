import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
//TEMPLATES
import { FooterComponent } from './models/footer/footer.component';
import { HeaderComponent } from './models/header/header.component';
//HOME
import { HomeModule } from './pages/home/home.module';
//SERVICES
import { MoviesService } from './services/movies.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  providers: [MoviesService],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule, HttpClientModule],
  exports: [],
})
export class AppModule {}
