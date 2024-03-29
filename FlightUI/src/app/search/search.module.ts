import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { Searchroutes } from '../routing/searchroutes';
import { SearchComponent } from './search.component';



@NgModule({
    declarations: [
        SearchComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(Searchroutes)
    ],
    providers: [],
    bootstrap: [SearchComponent]
})
export class SearchModule { }
