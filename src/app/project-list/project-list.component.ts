import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseListObservable } from 'angularfire2/database';

// import model
import { Project } from '../project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  providers: [ProjectsService]
})

export class ProjectListComponent implements OnInit {

  projects: FirebaseListObservable<any[]>;
  filter: string[] = [];
  showNameInput: boolean = false;

  constructor(
    private projectsService: ProjectsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
    
  }

  showProject(projectId) {
    this.router.navigate(['projects', projectId]);
  }

  filterByValue(filterValue) {
    this.filter = [filterValue, ''];
    if (filterValue !== "name") {
      this.showNameInput = false;
    } else if (filterValue === "name") {
      this.showNameInput = true;
    }
  }

  filterByName(name) {
    this.filter[1] = name;
  }
}
