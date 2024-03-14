import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DialogModule } from '@dwii5359/primeng/dialog';
import { ButtonModule } from '@dwii5359/primeng/button';
import { DropdownModule } from '@dwii5359/primeng/dropdown';
import { InputTextModule } from '@dwii5359/primeng/inputtext';
import { AutoFocusModule } from '@dwii5359/primeng/autofocus';
import { AvatarModule } from '@dwii5359/primeng/avatar';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/app.code.component';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';
import { LongContentDoc } from './longcontentdoc';
import { ResponsiveDoc } from './responsivedoc';
import { PositionDoc } from './positiondoc';
import { MaximizableDoc } from './maximizabledoc';
import { TemplateDoc } from './templatedoc';
import { OverlaysInsideDoc } from './overlaysinsidedoc';
import { ModalDoc } from './modaldoc';
import { HeadlessDoc } from './headlessdoc';
import { AccessibilityDoc } from './accessibilitydoc';
@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, FormsModule, DialogModule, ButtonModule, DropdownModule, AppDocModule, InputTextModule, AvatarModule, AutoFocusModule],
    declarations: [BasicDoc, ImportDoc, StyleDoc, LongContentDoc, ResponsiveDoc, PositionDoc, MaximizableDoc, TemplateDoc, OverlaysInsideDoc, ModalDoc, AccessibilityDoc, HeadlessDoc],
    exports: [AppDocModule]
})
export class DialogDocModule {}
