import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from '@dwii5359/primeng/api';
import { Code } from '../../domain/code';

@Component({
    selector: 'confirm-popup-basic-demo',
    template: `
        <app-docsectiontext>
            <p>ConfirmPopup is defined using <i>p-confirmPopup</i> tag and an instance of <i>ConfirmationService</i> is required to display it bycalling confirm method.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center gap-2">
            <p-toast></p-toast>
            <p-confirmPopup></p-confirmPopup>
            <p-button (click)="confirm1($event)" icon="pi pi-check" label="Confirm"></p-button>
            <p-button (click)="confirm2($event)" icon="pi pi-times" label="Delete" severity="danger"></p-button>
        </div>
        <app-code [code]="code" selector="confirm-popup-basic-demo"></app-code>
    `,
    providers: [ConfirmationService, MessageService]
})
export class BasicDoc {
    constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

    confirm1(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Are you sure you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }

    confirm2(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Do you want to delete this record?',
            icon: 'pi pi-info-circle',
            acceptButtonStyleClass: 'p-button-danger p-button-sm',
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }

    code: Code = {
        basic: `<p-toast></p-toast>
    <p-confirmPopup></p-confirmPopup>
    <p-button (click)="confirm1($event)" icon="pi pi-check" label="Confirm"></p-button>
<p-button (click)="confirm2($event)" icon="pi pi-times" label="Delete" severity="danger"></p-button>`,

        html: `<div class="card flex justify-content-center gap-2">
    <p-toast></p-toast>
    <p-confirmPopup></p-confirmPopup>
    <p-button (click)="confirm1($event)" icon="pi pi-check" label="Confirm"></p-button>
    <p-button (click)="confirm2($event)" icon="pi pi-times" label="Delete" severity="danger"></p-button>
</div>`,

        typescript: `
import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from '@dwii5359/primeng/api';

@Component({
    selector: 'confirm-popup-basic-demo',
    templateUrl: './confirm-popup-basic-demo.html',
    providers: [ConfirmationService, MessageService]
})
export class ConfirmPopupBasicDemo {
    constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

    confirm1(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Are you sure you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }

    confirm2(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Do you want to delete this record?',
            icon: 'pi pi-info-circle',
            acceptButtonStyleClass: 'p-button-danger p-button-sm',
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }
}`
    };
}
