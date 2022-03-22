/*
 * @Author: r1ngo
 * @Date: 2022-03-22 11:40:16
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-22 11:41:13
 * @Description: ez pz lemon squezzy
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
  styleUrls: ['./dir.component.scss'],
})
export class DirComponent implements OnInit {
  constructor() {}

  flag: boolean = true;
  type: number = 0;
  score: number | string = '';
  list: any[] = [
    {
      id: 1,
      name: 'ringo',
      gender: 1,
    },
    {
      id: 2,
      name: 'iris',
      gender: 0,
    },
  ];
  ngOnInit(): void {}
}
