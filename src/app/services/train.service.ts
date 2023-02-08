import { Injectable } from '@angular/core';
import { Train } from '../models/train';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor() { }

  train:Array<Train>=[
    {
    id:1,
    name:'Renfe',
    serie:252,
    type:'Locomotora electrica',
    speed:250,
    image:'1.jpg'
    }
  ];
}
