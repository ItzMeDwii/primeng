import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@dwii5359/primeng/button';
import { SplitButtonModule } from '@dwii5359/primeng/splitbutton';
import { InputTextModule } from '@dwii5359/primeng/inputtext';
import { AvatarModule } from '@dwii5359/primeng/avatar';
import { ToolbarModule } from '@dwii5359/primeng/toolbar';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, ToolbarModule, RouterModule, ButtonModule, SplitButtonModule, InputTextModule, AvatarModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, TemplateDoc, StyleDoc, AccessibilityDoc]
})
export class ToolbarDocModule {}
