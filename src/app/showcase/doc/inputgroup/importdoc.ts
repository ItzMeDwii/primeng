import { Component } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'import-doc',
    template: ` <app-code [code]="code" [hideToggleCode]="true"></app-code> `
})
export class ImportDoc {
    code: Code = {
        typescript: `import { InputGroupModule } from '@dwii5359/primeng/inputgroup';
import { InputGroupAddonModule } from '@dwii5359/primeng/inputgroupaddon';`
    };
}
