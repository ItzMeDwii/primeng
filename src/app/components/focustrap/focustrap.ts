import { DomHandler } from '@dwii5359/primeng/dom';

import { CommonModule } from '@angular/common';
import { Directive, ElementRef, HostListener, Input, NgModule, inject } from '@angular/core';
/**
 * Focus Trap keeps focus within a certain DOM element while tabbing.
 * @group Components
 */
@Directive({
    selector: '[pFocusTrap]',
    host: {
        class: 'p-element'
    }
})
export class FocusTrap {
    /**
     * When set as true, focus wouldn't be managed.
     * @group Props
     */
    @Input() pFocusTrapDisabled: boolean = false;

    host: ElementRef = inject(ElementRef);

    @HostListener('keydown.tab', ['$event'])
    @HostListener('keydown.shift.tab', ['$event'])
    onkeydown(e: KeyboardEvent) {
        if (this.pFocusTrapDisabled !== true) {
            e.preventDefault();
            const focusableElement = DomHandler.getNextFocusableElement(this.host.nativeElement, e.shiftKey);
            if (focusableElement) {
                focusableElement.focus();
                focusableElement.select?.();
            }
        }
    }
}

@NgModule({
    imports: [CommonModule],
    exports: [FocusTrap],
    declarations: [FocusTrap]
})
export class FocusTrapModule {}
