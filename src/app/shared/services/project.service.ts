import { Injectable } from "@angular/core";
import { IProject } from "../models/project.model";
import { projects } from "../data/projects-data";

@Injectable({
	providedIn: "root"
})
export class ProjectService {
	constructor() {}

	public getProjects(): IProject[] {
		return JSON.parse(projects);
	}
}