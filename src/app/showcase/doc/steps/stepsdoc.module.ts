import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from '@dwii5359/primeng/dropdown';
import { InputTextModule } from '@dwii5359/primeng/inputtext';
import { InputMaskModule } from '@dwii5359/primeng/inputmask';
import { CheckboxModule } from '@dwii5359/primeng/checkbox';
import { StepsModule } from '@dwii5359/primeng/steps';
import { ToastModule } from '@dwii5359/primeng/toast';
import { CardModule } from '@dwii5359/primeng/card';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/app.code.component';
import { BasicDoc } from './basicdoc';
import { ConfirmationDemo } from './confirmationdemo';
import { ImportDoc } from './importdoc';
import { InteractiveDoc } from './interactivedoc';
import { PaymentDemo } from './paymentdemo';
import { PersonalDemo } from './personaldemo';
import { RoutingDoc } from './routingdoc';
import { SeatDemo } from './seatdemo';
import { StyleDoc } from './styledoc';
import { TicketService } from '../../service/ticketservice';
import { AccessibilityDoc } from './accessibilitydoc';
import { ButtonModule } from '@dwii5359/primeng/button';

@NgModule({
    imports: [CommonModule, AppCodeModule, StepsModule, ToastModule, AppDocModule, FormsModule, DropdownModule, InputTextModule, InputMaskModule, CheckboxModule, CardModule, ButtonModule],
    declarations: [BasicDoc, ImportDoc, StyleDoc, InteractiveDoc, ConfirmationDemo, PaymentDemo, PersonalDemo, SeatDemo, RoutingDoc, AccessibilityDoc],
    exports: [AppDocModule],
    providers: [TicketService]
})
export class StepsDocModule {}
