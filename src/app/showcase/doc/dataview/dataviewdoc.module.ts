import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@dwii5359/primeng/button';
import { DataViewModule } from '@dwii5359/primeng/dataview';
import { DropdownModule } from '@dwii5359/primeng/dropdown';
import { RatingModule } from '@dwii5359/primeng/rating';
import { TagModule } from '@dwii5359/primeng/tag';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { LayoutDoc } from './layoutdoc';
import { PaginationDoc } from './paginationdoc';
import { SortingDoc } from './sortingdoc';
import { StyleDoc } from './styledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, DataViewModule, DropdownModule, ButtonModule, RouterModule, RatingModule, TagModule, FormsModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, PaginationDoc, SortingDoc, LayoutDoc, StyleDoc, AccessibilityDoc]
})
export class DataViewDocModule {}
