import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@dwii5359/primeng/button';
import { CalendarModule } from '@dwii5359/primeng/calendar';
import { ConfirmDialogModule } from '@dwii5359/primeng/confirmdialog';
import { ContextMenuModule } from '@dwii5359/primeng/contextmenu';
import { DialogModule } from '@dwii5359/primeng/dialog';
import { DropdownModule } from '@dwii5359/primeng/dropdown';
import { FileUploadModule } from '@dwii5359/primeng/fileupload';
import { SelectButtonModule } from '@dwii5359/primeng/selectbutton';
import { InputSwitchModule } from '@dwii5359/primeng/inputswitch';
import { InputNumberModule } from '@dwii5359/primeng/inputnumber';
import { InputTextModule } from '@dwii5359/primeng/inputtext';
import { InputTextareaModule } from '@dwii5359/primeng/inputtextarea';
import { MultiSelectModule } from '@dwii5359/primeng/multiselect';
import { ProgressBarModule } from '@dwii5359/primeng/progressbar';
import { RadioButtonModule } from '@dwii5359/primeng/radiobutton';
import { RatingModule } from '@dwii5359/primeng/rating';
import { SkeletonModule } from '@dwii5359/primeng/skeleton';
import { SliderModule } from '@dwii5359/primeng/slider';
import { TableModule } from '@dwii5359/primeng/table';
import { TabViewModule } from '@dwii5359/primeng/tabview';
import { TagModule } from '@dwii5359/primeng/tag';
import { ToastModule } from '@dwii5359/primeng/toast';
import { ToggleButtonModule } from '@dwii5359/primeng/togglebutton';
import { ToolbarModule } from '@dwii5359/primeng/toolbar';
import { TooltipModule } from '@dwii5359/primeng/tooltip';
import { AppCodeModule } from 'src/app/showcase/layout/doc/app.code.component';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { ContextMenuDoc } from './contextmenudoc';
import { BasicDoc } from './basicdoc';
import { CellEditDoc } from './celleditdoc';
import { CheckboxSelectionDoc } from './checkboxselectiondoc';
import { ColumnGroupDoc } from './columngroupdoc';
import { ColumnResizeExpandModeDoc } from './columnresizeexpandmodedoc';
import { ColumnResizeScrollableModeDoc } from './columnresizescrollablemodedoc';
import { ColumnSelectionDoc } from './columnselectiondoc';
import { ColumnToggleDoc } from './columntoggledoc';
import { ControlledSelectionDoc } from './controlledselectiondoc';
import { CustomersDoc } from './customersdoc';
import { CustomSortDoc } from './customsortdoc';
import { DynamicDoc } from './dynamicdoc';
import { ExpandableRowGroupDoc } from './expandablerowgroupdoc';
import { ExportDoc } from './exportdoc';
import { FilterMenuDoc } from './filtermenudoc';
import { FilterRowDoc } from './filterrowdoc';
import { FlexibleScrollDoc } from './flexiblescrolldoc';
import { FrozenColumnsDoc } from './frozencolumnsdoc';
import { FrozenRowsDoc } from './frozenrowsdoc';
import { GridlinesDoc } from './gridlinesdoc';
import { ImportDoc } from './importdoc';
import { HorizontalAndVerticalScrollDoc } from './horizontalandverticaldoc';
import { LazyLoadDoc } from './lazyloaddoc';
import { MultipleSelectionDoc } from './multipleselectiondoc';
import { PageOnlySelectionDoc } from './pageonlyselectiondoc';
import { PaginatorBasicDoc } from './paginatorbasicdoc';
import { PaginatorProgrammaticDoc } from './paginatorprogrammaticdoc';
import { ProductsDoc } from './productsdoc';
import { RadioButtonSelectionDoc } from './radiobuttonselectiondoc';
import { ReorderDoc } from './reorderdoc';
import { ResponsiveScrollDoc } from './responsivescrolldoc';
import { ResponsiveStackDoc } from './responsivestackdoc';
import { RowEditDoc } from './roweditdoc';
import { RowExpandDoc } from './rowexpanddoc';
import { RowspanGroupingDoc } from './rowspangroupingdoc';
import { SingleColumnSortDoc } from './singlecolumnsortdoc';
import { MultipleColumnSortDoc } from './multiplecolumnsortdoc';
import { SingleSelectionDoc } from './singleselectiondoc';
import { SizeDoc } from './sizedoc';
import { StatefulDoc } from './statefuldoc';
import { StripedDoc } from './stripeddoc';
import { StyleDoc } from './styledoc';
import { SubheaderGroupingDoc } from './subheadergroupingdoc';
import { TemplateDoc } from './templatedoc';
import { VerticalScrollDoc } from './verticalscrolldoc';
import { VirtualScrollDoc } from './virtualscrolldoc';
import { VirtualScrollLazyDoc } from './virtualscrolllazydoc';
import { ColumnResizeFitModeDoc } from './columnresizefitmodedoc';
import { StylingDoc } from './stylingdoc';
import { SelectionEventsDoc } from './selectioneventsdoc';
import { AccessibilityDoc } from './accessibilitydoc';
import { PaginatorLocaleDoc } from './paginatorlocaledoc';
import { DeferredDemo } from '../../demo/deferreddemo';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TableModule,
        CalendarModule,
        SliderModule,
        DialogModule,
        ConfirmDialogModule,
        MultiSelectModule,
        ContextMenuModule,
        DropdownModule,
        ButtonModule,
        TagModule,
        ToastModule,
        InputTextModule,
        InputSwitchModule,
        InputNumberModule,
        InputTextareaModule,
        ProgressBarModule,
        TooltipModule,
        RadioButtonModule,
        ToolbarModule,
        FileUploadModule,
        TabViewModule,
        ToggleButtonModule,
        RatingModule,
        SkeletonModule,
        SelectButtonModule,
        AppCodeModule,
        AppDocModule,
        DeferredDemo
    ],
    declarations: [
        ImportDoc,
        BasicDoc,
        DynamicDoc,
        CellEditDoc,
        CheckboxSelectionDoc,
        ColumnGroupDoc,
        ColumnResizeExpandModeDoc,
        ColumnResizeScrollableModeDoc,
        ColumnResizeFitModeDoc,
        ColumnSelectionDoc,
        ColumnToggleDoc,
        ContextMenuDoc,
        ControlledSelectionDoc,
        CustomersDoc,
        CustomSortDoc,
        DynamicDoc,
        ExpandableRowGroupDoc,
        ExportDoc,
        FilterMenuDoc,
        FilterRowDoc,
        FlexibleScrollDoc,
        FrozenColumnsDoc,
        FrozenRowsDoc,
        GridlinesDoc,
        HorizontalAndVerticalScrollDoc,
        LazyLoadDoc,
        MultipleSelectionDoc,
        PageOnlySelectionDoc,
        PaginatorBasicDoc,
        MultipleSelectionDoc,
        PageOnlySelectionDoc,
        PaginatorProgrammaticDoc,
        ProductsDoc,
        RadioButtonSelectionDoc,
        ReorderDoc,
        ResponsiveScrollDoc,
        ResponsiveStackDoc,
        RowEditDoc,
        RowExpandDoc,
        RowspanGroupingDoc,
        SingleColumnSortDoc,
        MultipleColumnSortDoc,
        SingleSelectionDoc,
        SizeDoc,
        StatefulDoc,
        StripedDoc,
        StyleDoc,
        SubheaderGroupingDoc,
        TemplateDoc,
        VerticalScrollDoc,
        VirtualScrollDoc,
        VirtualScrollLazyDoc,
        StylingDoc,
        SelectionEventsDoc,
        AccessibilityDoc,
        PaginatorLocaleDoc
    ],
    exports: [AppDocModule]
})
export class TableDocModule {}
