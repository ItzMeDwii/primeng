import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InplaceModule } from '@dwii5359/primeng/inplace';
import { InputTextModule } from '@dwii5359/primeng/inputtext';
import { TableModule } from '@dwii5359/primeng/table';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { DataDoc } from './datadoc';
import { ImageDoc } from './imagedoc';
import { ImportDoc } from './importdoc';
import { InputDoc } from './inputdoc';
import { StyleDoc } from './styledoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, InplaceModule, InputTextModule, TableModule],
    declarations: [BasicDoc, DataDoc, ImageDoc, ImportDoc, InputDoc, StyleDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class InplaceDocModule {}
