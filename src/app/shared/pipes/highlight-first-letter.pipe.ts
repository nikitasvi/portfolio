import { DestroyRef, inject, Pipe, PipeTransform } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
	name: 'highlightFirstLetter',
	standalone: true
})
export class HighlightFirstLetterPipe implements PipeTransform {
	private sanitizer = inject(DomSanitizer);

	transform(value: string, color: string = '#C778DD'): SafeHtml {
		console.log('value', value);
		if (!value || value.length === 0) return value;
		
		const firstLetter = value[0];
		const restOfText = value.slice(1);

		const result = `<span style="color: ${color}">${firstLetter}</span>${restOfText}`
		return this.sanitizer.bypassSecurityTrustHtml(result);
	}
}
