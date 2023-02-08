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
    },
    {
    id:2,
    name:'Renfe',
    serie:333,
    type:'Locomotora diesel',
    speed:180,
    image:'2.jpg'
    },
    {
    id:3,
    name:'Renfe',
    serie:269,
    type:'Locomotora electrica',
    speed:200,
    image:'3.jpg'
    }
  ];
}
