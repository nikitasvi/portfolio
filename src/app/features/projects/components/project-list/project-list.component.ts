import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HighlightFirstLetterPipe } from '../../../../shared/pipes/highlight-first-letter.pipe';
import { IProject } from '../../../../shared/models/project.model';
import { ProjectCardComponent } from '../../../../shared/components/project-card/project-card.component';
import { ProjectService } from '../../../../shared/services/project.service';

@Component({
	selector: 'app-project-list',
	standalone: true,
	imports: [TranslateModule, HighlightFirstLetterPipe, ProjectCardComponent],
	templateUrl: './project-list.component.html',
	styleUrl: './project-list.component.scss'
})
export class ProjectListComponent implements OnInit {
	private projectService = inject(ProjectService);

	public projects: IProject[] = [];

	constructor() {}

	public ngOnInit() {
		this.projects = this.projectService.getProjects();
	}

	public get productProjects(): IProject[] {
		return this.projects.filter(project => project.type === 'Product');
	}

	public get smallProjects() : IProject[] {
		return this.projects.filter(project => project.type === 'Small');
	}
}
