import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Test2Component } from './test2.component';
import { Test3Component } from './test3.component';
import { Test4Component } from './test4.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Testing'
    },
    children: [
      {
        path: 'test2',
        component: Test2Component,
        data: {
          title: 'Test2'
        }
      },
      {
        path: 'test3',
        component: Test3Component,
        data: {
          title: 'Test3'
        }
      },
      {
        path: 'test4',
        component: Test4Component,
        data: {
          title: 'Test4'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestingRoutingModule {}
