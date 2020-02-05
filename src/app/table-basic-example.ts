import {Component} from '@angular/core';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  displayedColumns: string[] = ['name', 'save_count', 'engagement'];
  dataSource = [
    { display_url: 'https://scontent.frec7-1.fna.fbcdn.net/v/t51.2885-15/c160.0.640.640a/p640x640/75208808_561031921125059_2827147306306796635_n.jpg?_nc_cat=108&_nc_ohc=5hVzmIZluX0AX-tNVc7&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.frec7-1.fna&oh=751561df44fcf38c9f3d8cf7e97b417a&oe=5ED12312', metric: { save_count: 12, engagement: 3 } },
  ];
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */