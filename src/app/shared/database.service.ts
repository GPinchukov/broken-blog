import { Injectable } from '@angular/core';
import {Post} from './interfaces';
import {any} from 'codelyzer/util/function';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {


    public Data  = {
        MmmLRk_94BGAKD03QHf: {
            author: 'Hleb',
            date: '2021-10-24T12:50:02.410Z',
            id: 'MmmLRk_94BGAKD03QHf',
            text: 'Sample Post',
            title: 'Sample Post 1'
        },
        MmmLsqvhIshkcPIrVRd: {
            author: 'Hleb',
            date: '2021-10-24T12:50:02.410Z',
            id: 'MmmLsqvhIshkcPIrVRd',
            text: 'Sample Post',
            title: 'Sample Post 2'}
    };

  constructor() { }
}
