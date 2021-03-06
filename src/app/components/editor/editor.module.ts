import {NgModule}           from '@angular/core';
import {CommonModule}       from '@angular/common';
import {FormsModule}        from '@angular/forms';
import {EditorComponent}   from './editor.component';
import {TreeViewComponent} from "./widget-tree/tree-view.component";
import {ContextMenuComponent, ContextMenuService} from "angular2-contextmenu/angular2-contextmenu";
import {DraggableWidget} from "../../directives/draggable-widget.directive";
import {WidgetDialogComponent} from "./widget-dialogs/widget-dialog.component";
import {LoggingComponent} from "./logging/logging.component";
import {WidgetCanvasComponent} from "./widget-canvas/widget-canvas.component";
import {WidgetTreeComponent} from "./widget-tree/widget-tree.component";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {ModalModule, TabsModule} from "ng2-bootstrap";
import {HttpModule} from "@angular/http";
import {routing} from "../../app.routing";
import {DND_PROVIDERS, DND_DIRECTIVES} from 'ng2-dnd/';
import {DraggableWindow} from "../../directives/draggable-window.directive";
import {FocusOnVisible} from "../../directives/focus.directive";
import {Ng2UploaderModule} from 'ng2-uploader/ng2-uploader'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        ModalModule.forRoot(),
        TabsModule.forRoot(),
        routing,
        Ng2UploaderModule,
    ],
    declarations: [
        EditorComponent,
        TreeViewComponent,
        TreeViewComponent,
        WidgetDialogComponent,
        DraggableWidget,
        DraggableWindow,
        FocusOnVisible,
        ContextMenuComponent,
        ToolbarComponent,
        WidgetTreeComponent,
        WidgetCanvasComponent,
        LoggingComponent,
        DND_DIRECTIVES
    ],
    providers: [
        ContextMenuService,
        DND_PROVIDERS
    ],
    exports: [
        EditorComponent
    ]
})
export class EditorModule {
}
