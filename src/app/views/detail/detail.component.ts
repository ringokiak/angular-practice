/*
 * @Author: r1ngo
 * @Date: 2022-03-23 11:11:30
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-23 11:38:06
 * @Description: ez pz lemon squezzy
 */
import { Component, OnInit } from '@angular/core';
// 引入路由参数依赖，用于接收路由传递的参数
import { ActivatedRoute } from '@angular/router';
// 引入历史栈依赖，用于操作页面栈的回退
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  id: number | undefined | null;
  // 拿到路由对象
  constructor(private route: ActivatedRoute, private location: Location) {
    // 订阅路由参数
    this.route.params.subscribe((params: Params) => {
      params.id && (this.id = params.id);
    });
    // 订阅路由参数
    this.route.queryParams.subscribe((queryParams: Params) => {
      queryParams.id && (this.id = queryParams.id);
    });
  }

  // 页面栈后退一级
  prevPage(): void {
    this.location.back();
  }

  ngOnInit(): void {}
}
interface Params {
  id?: number;
}
