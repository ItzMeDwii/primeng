import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/app.code.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@dwii5359/primeng/button';
import { InputTextModule } from '@dwii5359/primeng/inputtext';
import { DropdownModule } from '@dwii5359/primeng/dropdown';
import { FocusTrapModule } from '@dwii5359/primeng/focustrap';
import { ImportDoc } from './importdoc';
import { BasicDoc } from './basicdoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, FormsModule, ButtonModule, InputTextModule, DropdownModule, FocusTrapModule],
    declarations: [ImportDoc, BasicDoc],
    exports: [AppDocModule]
})
export class FocusTrapDocModule {}
