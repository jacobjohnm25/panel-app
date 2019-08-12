import { Component, OnInit } from '@angular/core';
import { ConfigService, Config } from '../app/config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'An Interactive Bottom Panel App';
  arrTabs: [{
      id: 0,
      tabName: "",
      subItems: [
      {
        id: 0,
        item: ""
      },
    ]
  },
  {
    id: 1,
    tabName: "",
    subItems: [
      {
        id: 0,
        item: ""
      },
    ]
  }];
  show = false;
  id = 0;
  tabId = 0;
  tabMenuIdArr = [
    {
      id: 0,
      inProgress: false,
      completed: false,
    },
    {
      id: 1,
      inProgress: false,
      completed: false,
    },
    {
      id: 2,
      inProgress: false,
      completed: false,
    },
    {
      id: 3,
      inProgress: false,
      completed: false,
    },
    {
      id: 4,
      inProgress: false,
      completed: false,
    },
    {
      id: 5,
      inProgress: false,
      completed: false,
    },
    {
      id: 6,
      inProgress: false,
      completed: false,
    }
  ];



  onMouseEnter(event){
    this.show = true;
    this.id = event.target.value;
  }

  onClickMenu(event) {
    alert(event.target.innerText);
  }

  onClickSubMenu(event) {
    this.tabId = event.target.getAttribute('parentId');
    if (this.tabId == 0 || this.tabId == 1){
      this.tabMenuIdArr[this.tabId].inProgress = true;
      var subTabLen = this.arrTabs[this.tabId].subItems.length;
      if (event.target.id == (subTabLen-1)){
        this.tabMenuIdArr[this.tabId].completed = true
      }
    }
    alert(event.target.innerText);
  }

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.configService.getJSON().subscribe(data => {
      this.arrTabs = data.tabs;
    });
  }

}
