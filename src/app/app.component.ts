import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/components/header/header.component";
import { MainPageComponent } from "./features/main/components/main-page/main-page.component";
import { TranslateService } from '@ngx-translate/core';
import { FooterComponent } from "./shared/components/footer/footer.component";

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, HeaderComponent, MainPageComponent, FooterComponent, FooterComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
	})
export class AppComponent implements OnInit {
	private translateService = inject(TranslateService);

	public ngOnInit() {
		const savedLanguage = localStorage.getItem('language') || 'en';
		this.translateService.setDefaultLang(savedLanguage);
	}
}
