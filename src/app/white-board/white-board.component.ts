import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  constructor(private cookieService: CookieService) {



  }

  userRole = this.cookieService.get('role');
  userName = this.cookieService.get('username');

  ngOnInit() {
  }

}
