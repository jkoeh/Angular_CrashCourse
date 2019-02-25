import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from './author.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { InputFormComponent } from './inputform/inputform.component';
import { TitlePipe } from './title.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    FavoriteComponent,
    InputFormComponent,
    TitlePipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
