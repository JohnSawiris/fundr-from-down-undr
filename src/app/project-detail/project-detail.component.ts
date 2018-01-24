import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { FirebaseObjectObservable } from 'angularfire2/database';

import { Project } from '../project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  providers: [ProjectsService]
})
export class ProjectDetailComponent implements OnInit {
  project;
  projectId: string;
  selectedProjectKey: string = null;

  constructor(
    private projectsService: ProjectsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.project = this.projectsService.getProjectById(this.projectId);
  }

  fundButtonClicked() {
    this.selectedProjectKey = this.projectId;
    console.log(this.selectedProjectKey);
  }

}
