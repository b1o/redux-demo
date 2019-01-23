import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { TodoModule } from './todo/todo.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TodoModule,
    UsersModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
    SocketIoModule.forRoot({url: 'http://localhost:3000'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
