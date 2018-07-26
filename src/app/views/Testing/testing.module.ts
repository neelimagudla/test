import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// import { ButtonsComponent } from './buttons.component';
// import { BrandButtonsComponent } from './brand-buttons.component';

// // Dropdowns Component
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { DropdownsComponent } from './dropdowns.component';

// // Buttons Routing
// import { ButtonsRoutingModule } from './buttons-routing.module';

// // Angular
import { TestingRoutingModule } from './testing-routing.module';
import { Test2Component } from './test2.component';
import { Test3Component } from './test3.component';
import { Test4Component } from './test4.component';

@NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,
//     TestingRoutingModule,
//     TestingModule,
//     // Test3Module.forRoot(),
//     // Test4Module.forRoot()
//   ],
  declarations: [
    Test2Component,
    Test3Component,
    Test4Component
  ]
})
export class TestingModule { }