/*
 * @Author: r1ngo
 * @Date: 2022-03-22 10:16:34
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-23 10:21:29
 * @Description: ez pz lemon squezzy
 */
import { Component, OnInit } from '@angular/core';
// 引入 http 依赖
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss'],
})
export class HttpComponent implements OnInit {
  // 构造时获取 http 依赖
  constructor(public http: HttpClient) {}
  // 声明一个变量来装载返回数据
  person: Person = Object.create({});
  personList: Person[] = [];
  // 声明一个 get 请求
  getList(): void {
    this.http
      .get(`http://127.0.0.1:4523/mock/762788/persons/${1}`)
      // 通过 subscribe 订阅返回值
      .subscribe((res: Result | any) => {
        this.person = res.data;
      });
  }
  // 声明一个 post 请求
  postList(): void {
    this.http
      .post(
        // 地址
        `http://127.0.0.1:4523/mock/762788/personList`,
        // 参数
        {
          page: 1,
          size: 10,
          asd: 'asd',
        },
        // 设置
        {
          // 引入 HttpHeaders 来自定义头文件
          headers: new HttpHeaders({
            'content-type': 'application/json',
          }),
        }
      )
      // 通过 subscribe 订阅返回值
      .subscribe((res: Result | any) => {
        this.personList = res.data;
      });
  }
  // 在初始化时调用接口
  ngOnInit(): void {}
}
// 声明接口
interface Result {
  code: number;
  data: Person | null;
  message: string;
}
interface Person {
  name: string;
  age: number;
  hobbies?: Hobby[];
}
interface Hobby {
  name: string;
  rank: number;
}
