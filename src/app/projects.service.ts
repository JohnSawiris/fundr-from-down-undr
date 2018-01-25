import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

// import model
import { Project } from './project.model';

@Injectable()
export class ProjectsService {

  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  getProjectById(projectId: string) {
    return this.database.object(`projects/${projectId}`);
  }

  submitContribution(projectId: string, name, amount, comment) {
    console.log(this.database.object(`projects/${projectId}`)
    // this.database.object(`projects/${projectId}`).contributions.push({name, amount, comment});
  }

}
