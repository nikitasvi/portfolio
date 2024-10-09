import { Component, HostListener, inject, OnInit } from '@angular/core';
import { HighlightFirstLetterPipe } from '../../pipes/highlight-first-letter.pipe';
import { HttpClient } from '@angular/common/http';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [
		HighlightFirstLetterPipe,
		TranslateModule
	],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
	private translateService = inject(TranslateService);

	public links: Array<ILink> = [];
	
	public activeLink: string = "";
	private messages: Record<string, string> = {}

	public ngOnInit() {
		this.translateService.get([
			'HEADER.LINKS.HOME',
			'HEADER.LINKS.WORKS',
			'HEADER.LINKS.ABOUT_ME',
			'HEADER.LINKS.CONTACTS'
		])
		// .pipe(tap(value => console.log(value)))
		.subscribe((messages: Record<string, string>) => {
			this.messages = messages;
			this.setUpLinks(this.messages);
		});
	}

	private setUpLinks(messages: Record<string, string>) {
		this.links = [
			{ key: "home", value: `#${messages['HEADER.LINKS.HOME']}` },
			{ key: "works", value: `#${messages['HEADER.LINKS.WORKS']}` },
			{ key: `about-me`, value: `#${messages['HEADER.LINKS.ABOUT_ME']}` }, 
			{ key: `contacts`, value: `#${messages['HEADER.LINKS.CONTACTS']}` }
		];

		this.activeLink = this.links[0].key;
	}

	public switchLanguage(language: string) {
		this.translateService.use(language);
		localStorage.setItem('language', language);
	}

	@HostListener('window:scroll')
	public onWindowScroll() {
		const scrollPosition = window.scrollY;

		for (let i = 0; i < this.links.length; i++) {
			const section = document.getElementById(this.links[i].key);

			if (section) {
				const offsetTop = section.offsetTop;
				const offsetHeight = section.offsetHeight;
				
				if (scrollPosition + 61 >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
					this.activeLink = this.links[i].key;
				}
			}
		}
	}
}

export interface ILink {
	key: string,
	value: string
}
