import { Component, Input } from '@angular/core';
import { IProject } from '../../models/project.model';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-project-card',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './project-card.component.html',
	styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
	@Input() project!: IProject;

	public openLink(url: string) {
		window.open(url, '_blank');
	}
}
