import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';

import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideHttpClient(),
		provideRouter(routes),
		TranslateService,
		{
		  provide: TranslateLoader,
		  useFactory: HttpLoaderFactory,
		  deps: [HttpClient]
		},
		//@ts-ignore
		TranslateModule.forRoot({
		  loader: {
			provide: TranslateLoader,
			useFactory: HttpLoaderFactory,
			deps: [HttpClient]
		  }
		}).providers
  	]
};

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}
