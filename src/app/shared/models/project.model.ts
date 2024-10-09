export interface IProject {
	id: number;
	name: string;
	description: string;
	technologies: string[];
	type: ProjectType;
	imagePreviewUrl?: string;
	githubUrl?: string;
	liveUrl?: string;
}

export enum ProjectType {
	Product = "Product",
	Small = "Small",
}

export class Project implements IProject {
	id: number;
	name: string;
	description: string;
	technologies: string[];
	type: ProjectType;
	imagePreviewUrl?: string | undefined;
	githubUrl?: string | undefined;
	liveUrl?: string | undefined;

	constructor(project: IProject) {
		this.id = project.id;
		this.name = project.name;
		this.description = project.description;
		this.technologies = project.technologies;
		this.type = project.type;
	}
}