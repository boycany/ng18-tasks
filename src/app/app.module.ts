import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/card/shared.module';
import { TasksModule } from './tasks/tasks.module';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [BrowserModule, SharedModule, TasksModule],
  exports: [],
  declarations: [AppComponent, HeaderComponent, UserComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
