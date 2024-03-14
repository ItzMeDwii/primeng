import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@dwii5359/primeng/button';
import { InputSwitchModule } from '@dwii5359/primeng/inputswitch';
import { RadioButtonModule } from '@dwii5359/primeng/radiobutton';
import { SidebarModule } from '@dwii5359/primeng/sidebar';
import { AppConfigComponent } from './app.config.component';
import { SelectButtonModule } from '@dwii5359/primeng/selectbutton';
@NgModule({
    imports: [CommonModule, FormsModule, SidebarModule, InputSwitchModule, ButtonModule, RadioButtonModule, SelectButtonModule],
    exports: [AppConfigComponent],
    declarations: [AppConfigComponent]
})
export class AppConfigModule {}
