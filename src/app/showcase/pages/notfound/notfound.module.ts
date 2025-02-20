import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundRoutingModule } from './notfound-routing.module';
import { NotFoundComponent } from './notfound.component';
import { ButtonModule } from '@dwii5359/primeng/button';

@NgModule({
    imports: [CommonModule, NotFoundRoutingModule, ButtonModule],
    declarations: [NotFoundComponent]
})
export class NotFoundModule {}
