import { Component, OnInit } from '@angular/core';
import { EditPlayerComponent } from '../edit-player/edit-player.component';
import { CreatePlayerComponent } from '../create-player/create-player.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
