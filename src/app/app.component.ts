/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 18/11/2023 - 22:49:54
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/11/2023
    * - Author          :
    * - Modification    :
**/
import { Component, OnInit } from '@angular/core';
import { StateService } from './services/state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pc4';
  titleModule$!:Observable<string>;

  constructor(
    private _stateService: StateService
  ) {}

  ngOnInit(): void {
    this.titleModule$ = this._stateService.componentSelectedChanged;
  }
}
