import { Component } from '@angular/core';

@Component({
  templateUrl: 'test1.component.html'
})
export class Test1Component {

  constructor() { }

}

// import { Component, ViewChild } from '@angular/core';

// @Component({
//   selector: 'my-table',
//   templateUrl: 'C:\Users\hp\Desktop\Admin Panel\coreui-free-angular-admin-template\src\app\views\base\test1.component.html'
// })
// export class MyTestComponent {

//   @ViewChild('mytable') myTable: any
//   @ViewChild('input') input: any
//   constructor() { }



//   search() {
//   // var input, filter, table, tr, td, i;
//   console.log(this.input.nativeElement.value)

//     console.log(this.myTable.nativeElement.rows)
//     let rows = this.myTable.nativeElement.rows;

//     for(let i=1; i<rows.length; i++) {
//       let cols = this.myTable.nativeElement.rows[i].cells;
//       for(let j=0; j<cols.length; j++){
//         console.log(this.input.nativeElement.value.toLowerCase())
//         console.log(cols[j].textContent.toLocaleLowerCase())
//         if(cols[j].textContent.toLocaleLowerCase() == this.input.nativeElement.value.toLowerCase()){
//           console.log(cols[j].textContent + " * * * * *")
//           rows[i].style.display='inline';
//         } else {
//           rows[i].style.display = "none";
//         }
//       }
//     }
//   }
// }