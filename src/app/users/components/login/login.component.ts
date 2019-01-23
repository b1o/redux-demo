import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../todo/reducers/todo.reducer';
import { UserRegister } from '../../actions/user.actions';
import { createLocalAction } from '../../../reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  enter() {
    this.store.dispatch(createLocalAction(new UserRegister({name: this.username})));
  }

}
