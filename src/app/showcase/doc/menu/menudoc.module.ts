import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AvatarModule } from '@dwii5359/primeng/avatar';
import { BadgeModule } from '@dwii5359/primeng/badge';
import { ButtonModule } from '@dwii5359/primeng/button';
import { MenuModule } from '@dwii5359/primeng/menu';
import { ToastModule } from '@dwii5359/primeng/toast';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { CommandDoc } from './commanddoc';
import { CustomContentDoc } from './customdoc';
import { GroupDoc } from './groupdoc';
import { ImportDoc } from './importdoc';
import { NavigationDoc } from './navigationdoc';
import { PopupDoc } from './popupdoc';
import { StyleDoc } from './styledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, MenuModule, ToastModule, ButtonModule, AvatarModule, AppDocModule, BadgeModule],
    declarations: [BasicDoc, CommandDoc, CustomContentDoc, GroupDoc, ImportDoc, NavigationDoc, PopupDoc, StyleDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class MenuDocModule {}
