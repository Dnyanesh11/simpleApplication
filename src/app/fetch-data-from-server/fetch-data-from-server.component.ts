import { Input, Output, Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';



@Component({
  selector: 'app-fetch-data-from-server',
  templateUrl: './fetch-data-from-server.component.html',
  styleUrls: ['./fetch-data-from-server.component.css'],
  providers: [DataServiceService]
})
export class FetchDataFromServerComponent implements OnInit {
  val = [];
  test = {name:[]};

  constructor(private DataServiceService: DataServiceService) {
  }

  fetchToDisplay() {
    
    this.DataServiceService.fetch().then(data => {
       console.log('---()()()()()()>', typeof data,data);
      for(var prop in data){
        //console.log('---->',data[prop]);
        this.val[prop] = data[prop]
      } 
      for(var prop1 in this.val){
        console.log('---->',this.val[prop1]);
      }
      this.test = this.val[0];    
});
            
          
  }
  ngOnInit() {
    // this.value= this.DataServiceService.getData();
  }

}
