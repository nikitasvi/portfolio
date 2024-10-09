import { Routes } from '@angular/router';
import { MainPageComponent } from './features/main/components/main-page/main-page.component';
import { ProjectListComponent } from './features/projects/components/project-list/project-list.component';

export const routes: Routes = [
	{
		path: '',
		component: MainPageComponent,
	},
	{
		path: "projects",
		component: ProjectListComponent
	}
];
