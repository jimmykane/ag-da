import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MybuttonComponent } from './mybutton/mybutton.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { PostDetailComponent } from './post-detail/post-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    MybuttonComponent,
    BlogpostComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
