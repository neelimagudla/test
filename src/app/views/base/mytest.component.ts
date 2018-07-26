// import { Component } from '@angular/core';

// @Component({
//   templateUrl: 'mytest.component.html'
// })
// export class MyTestComponent {

//   constructor() { }

// }



import { Component, ViewChild } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-root',
  templateUrl: 'mytest.component.html',
  // styleUrls: ['./app.component.css']
})
export class MyTestComponent {

  @ViewChild('table') table: any;
  title = 'app';

  
  // columns = [ { prop: 'name' },
  //   { name: 'Company' },
  //   { name: 'Gender' }
  // ];
  columns = [ { prop: 'Id' },
    { prop: 'AccountId' },
    { prop: 'Email' },
    { prop: 'Name' },
    { prop: 'Phone' }
  ];

  rows = [
    { Id: '1', AccountId: 'gfhdfh', Email: 'neelima@gmail.com',  Name:'Neelu',Phone:'1234563456'},
    { Id: '2', AccountId: 'fghdfh', Email: 'Shar@gmail.com',  Name:'Shar',Phone:'7567'},
    { Id: '3', AccountId: 'fgnfhd', Email: 'Loki@gmail.com',  Name:'Loki',Phone:'647657'},
    { Id: '4', AccountId: 'fgnxf', Email: 'Sambu@gmail.com',  Name:'Sambu',Phone:'976446'},
    { Id: '5', AccountId: 'vncv', Email: 'shakeer@gmail.com',  Name:'shakeer',Phone:'46789769'},
    { Id: '6', AccountId: 'xfvnxvn', Email: 'Praveen@gmail.com',  Name:'Praveen',Phone:'678569'},
    { Id: '7', AccountId: 'fghfgh', Email: 'venu@gmail.com',  Name:'venu',Phone:'07890'},
    { Id: '8', AccountId: 'fghf', Email: 'Nikhil@gmail.com',  Name:'Nikhil',Phone:'346234'},
    { Id: '9', AccountId: 'fghf', Email: 'Saradi@gmail.com',  Name:'Saradi',Phone:'32456'},
  ];

  temp = [];

  ngOnInit() {
    this.temp = this.rows;
  }


  search = (event) => {

    // const val = event.value.toLowerCase();
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter((d) => {

      // console.log(d.name.toLowerCase().indexOf(val) == 0 || )
      // console.log(d.name.toLowerCase().indexOf(val) == -1)
     return   (d.Id.toLowerCase().indexOf(val) == 0 || d.AccountId.toLowerCase().indexOf(val) == 0 || d.Email.toLowerCase().indexOf(val) == 0 || d.Name.toLowerCase().indexOf(val) == 0 || d.Phone.toLowerCase().indexOf(val) == 0) || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

}
