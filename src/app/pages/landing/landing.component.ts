import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { OptionsComponent } from './../../extras/options/options.component'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheet) {
   
  }

  openBottomSheet(): void {
    this.bottomSheet.open(OptionsComponent);
    
  }

  ngOnInit() {
  }

}


