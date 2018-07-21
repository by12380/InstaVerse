import { VerseService } from './services/verse.service';
import { VerseParserService } from './services/verse-parser.service';
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
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent, data: { animation: 'home' } },
            { path: 'studysheet', component: StudysheetComponent, data: { animation: 'studysheet' } },
            { path: 'versecontainer', component: VerseContainerComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        StudySheetService,
        VerseParserService,
        VerseService
    ]
})
export class AppModuleShared {
}
