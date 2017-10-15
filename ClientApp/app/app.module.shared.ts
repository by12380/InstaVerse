import { CounterComponent } from './components/counter/counter.component';
import { NavFooterComponent } from './components/nav-footer/nav-footer.component';
import { VerseContainerComponent } from './components/verse-container/verse-container.component';
import { StudySheetService } from './services/studysheet.service';
import { StudysheetComponent } from './components/studysheet/studysheet.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';

@NgModule({
    declarations: [
        AppComponent,
        FetchDataComponent,
        HomeComponent,
        NavbarComponent,
        NavFooterComponent,
        StudysheetComponent,
        VerseContainerComponent,
        CounterComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        BsDropdownModule.forRoot(),
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'studysheet', component: StudysheetComponent },
            { path: 'versecontainer', component: VerseContainerComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        StudySheetService
    ]
})
export class AppModuleShared {
}
