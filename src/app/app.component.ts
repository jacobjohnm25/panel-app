import { Component, OnInit } from '@angular/core';
import { ConfigService, Config } from '../app/config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'An Interactive Bottom Panel App';
  arrTabs: [];
  show = false;
  id = 0;
  tabId = '';
  inProgress=false;
  completed=false;

  onMouseEnter(event){
    this.show = true;
    this.id = event.target.value;
  }

  onClickMenu(event) {
    alert(event.target.innerText);
  }

  onClickSubMenu(event) {
    this.inProgress = true;
    this.tabId = event.target.getAttribute('parentId');
    alert(event.target.innerText);
    console.log('object', this.tabId);
  }

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.configService.getJSON().subscribe(data => {
      this.arrTabs = data.tabs;
    });
  }

}
