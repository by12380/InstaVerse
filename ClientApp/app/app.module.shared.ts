import { VerseService } from './services/verse.service';
import { VerseParserService } from './services/verse-parser.service';
import { CounterComponent } from './components/counter/counter.component';
import { NavFooterComponent } from './components/nav-footer/nav-footer.component';
import { VerseContainerComponent } from './components/verse-container/verse-container.component';
import { LoginComponent } from './components/login/login.component';
import { StudySheetService } from './services/studysheet.service';
import { AuthService } from './services/auth.service';
import { StudysheetComponent } from './components/studysheet/studysheet.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from './environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        FetchDataComponent,
        HomeComponent,
        NavbarComponent,
        NavFooterComponent,
        StudysheetComponent,
        VerseContainerComponent,
        CounterComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent, data: { animation: 'home' } },
            { path: 'studysheet', component: StudysheetComponent, data: { animation: 'studysheet' } },
            { path: 'login', component: LoginComponent },
            { path: 'versecontainer', component: VerseContainerComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }
        ]),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule
    ],
    providers: [
        StudySheetService,
        VerseParserService,
        VerseService,
        AuthService
    ]
})
export class AppModuleShared {
}
