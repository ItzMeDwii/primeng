import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabMenuModule } from '@dwii5359/primeng/tabmenu';
import { ButtonModule } from '@dwii5359/primeng/button';
import { RippleModule } from '@dwii5359/primeng/ripple';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/app.code.component';
import { ActiveDoc } from './activedoc';
import { BasicDoc } from './basicdoc';
import { ControlledDoc } from './controlleddoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';
import { ScrollableDoc } from './scrollabledoc';
import { TemplateDoc } from './templatedoc';
import { AccessibilityDoc } from './accessibilitydoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, TabMenuModule, ButtonModule, RippleModule, AppDocModule],
    declarations: [BasicDoc, ScrollableDoc, ImportDoc, StyleDoc, ControlledDoc, ActiveDoc, TemplateDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class TabMenuDocModule {}
