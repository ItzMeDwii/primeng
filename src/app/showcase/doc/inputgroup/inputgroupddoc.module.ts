import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@dwii5359/primeng/button';
import { CheckboxModule } from '@dwii5359/primeng/checkbox';
import { InputTextModule } from '@dwii5359/primeng/inputtext';
import { RadioButtonModule } from '@dwii5359/primeng/radiobutton';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/app.code.component';
import { BasicDoc } from './basicdoc';
import { ButtonDoc } from './buttondoc';
import { CheckboxDoc } from './checkboxdoc';
import { ImportDoc } from './importdoc';
import { MultipleDoc } from './multipledoc';
import { InputGroupModule } from '@dwii5359/primeng/inputgroup';
import { InputGroupAddonModule } from '@dwii5359/primeng/inputgroupaddon';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, FormsModule, InputTextModule, ButtonModule, CheckboxModule, RadioButtonModule, InputGroupModule, InputGroupAddonModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, MultipleDoc, ButtonDoc, CheckboxDoc]
})
export class InputGroupDocModule {}
