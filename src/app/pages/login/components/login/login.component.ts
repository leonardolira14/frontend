import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _api: AuthService) { }

  ngOnInit(): void {
  }
  nglogin() {
    this._api.login({}).subscribe(data => {
      console.log(data);
    });
  }
}
