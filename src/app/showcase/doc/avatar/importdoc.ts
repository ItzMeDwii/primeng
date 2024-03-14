import { Component } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'import-doc',
    template: ` <app-code [code]="code" [hideToggleCode]="true"></app-code> `
})
export class ImportDoc {
    code: Code = {
        html: `import { AvatarModule } from '@dwii5359/primeng/avatar';
import { AvatarGroupModule } from '@dwii5359/primeng/avatargroup';`
    };
}
