/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 18/11/2023 - 23:04:07
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/11/2023
    * - Author          :
    * - Modification    :
**/
import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styles: [
  ]
})
export class Page2Component implements OnInit {


  constructor(
    private _stateService: StateService
  ) { }

  ngOnInit(): void {
    this._stateService.setComponentSelected('Módulo C (Componente 2)')
  }

}
