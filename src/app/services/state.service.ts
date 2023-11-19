/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 18/11/2023 - 22:45:23
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/11/2023
    * - Author          :
    * - Modification    :
**/
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  componentSelectedChanged: BehaviorSubject<string> = new BehaviorSubject('')

  setComponentSelected(component: string){
    this.componentSelectedChanged.next(component)
  }

  constructor() { }
}
