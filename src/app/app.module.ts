import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpModule, Http, XHRBackend, RequestOptions, ConnectionBackend} from '@angular/http';
import {UserService} from "./services/user.service";
import {LoggedInGuard} from "./services/logged-in.guard";
import {LoggerService} from "./services/logger.service";
import {FormsModule} from "@angular/forms";
import {routing} from './app.routing';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {ClowdFlowsDataService} from './services/clowdflows-data.service';
import {EditorModule} from "./components/editor/editor.module";
import {WorkflowsComponent} from "./components/workflows/workflows.component";
import {UserWorkflowsComponent} from "./components/workflows/user-workflows.component";
import {WorkflowDetailComponent} from "./components/workflows/workflow-detail.component";
import {FooterComponent} from "./components/footer/footer.component";
import {LoadingService} from "./services/loading.service";
import {HttpLoading} from "./services/http-loading.service";

@NgModule({
    imports: [
        BrowserModule,
        routing,
        FormsModule,
        HttpModule,
        EditorModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        FooterComponent,
        WorkflowsComponent,
        UserWorkflowsComponent,
        WorkflowDetailComponent,
    ],
    providers: [
        ClowdFlowsDataService,
        UserService,
        LoggerService,
        LoggedInGuard,
        LoadingService,
        {
            provide: Http,
            useClass: HttpLoading,
            deps: [XHRBackend, RequestOptions, LoadingService],
            useFactory: (backend:XHRBackend, defaultOptions:RequestOptions, loadingService:LoadingService) => new HttpLoading(backend, defaultOptions, loadingService)
        }
    ],
    bootstrap: [
        AppComponent,
    ]
})
export class AppModule {
}
