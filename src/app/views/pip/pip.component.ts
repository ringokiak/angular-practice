/*
 * @Author: r1ngo
 * @Date: 2022-03-22 13:45:59
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-22 13:47:01
 * @Description: ez pz lemon squezzy
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pip',
  templateUrl: './pip.component.html',
  styleUrls: ['./pip.component.scss'],
})
export class PipComponent implements OnInit {
  constructor() {}
  today: number = new Date().getTime();
  ngOnInit(): void {}
}
