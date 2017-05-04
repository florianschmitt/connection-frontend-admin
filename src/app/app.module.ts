import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { CustomRequestOptions } from './shared/customrequest.options';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { LanguageService } from './shared/services/language.service';
import { PingService } from './shared/services/ping.service';
import { RequestService } from './shared/services/request.service';
import { BaseAdminService } from './shared/services/baseadmin.service';
import { FormatService } from './shared/services/format.service';
import { PaymentService } from './shared/services/payment.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        })
    ],
    providers: [AuthGuard, LanguageService, RequestService, PingService, BaseAdminService, FormatService, PaymentService,
      { provide: RequestOptions, useClass: CustomRequestOptions },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
