import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TooltipModule } from '@dwii5359/primeng/tooltip';
import { ButtonModule } from '@dwii5359/primeng/button';
import { InputTextModule } from '@dwii5359/primeng/inputtext';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/app.code.component';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';
import { PositionDoc } from './positiondoc';
import { EventDoc } from './eventdoc';
import { AutoHideDoc } from './autohidedoc';
import { DelayDoc } from './delaydoc';
import { OptionsDoc } from './optionsdoc';
import { AccessibilityDoc } from './accessibilitydoc';
import { TemplateDoc } from './templatedoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, TooltipModule, ButtonModule, InputTextModule, AppDocModule],
    declarations: [BasicDoc, ImportDoc, StyleDoc, PositionDoc, EventDoc, AutoHideDoc, DelayDoc, TemplateDoc, OptionsDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class TooltipDocModule {}
