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

  getContributionsById(projectId: string) {
    return this.database.list(`projects/${projectId}/contributions`);
  }

  submitContribution(projectId: string, name, amount, comment) {
    const contributionsEntryInFirebase = this.getContributionsById(projectId);
    contributionsEntryInFirebase.push({contributorName: name, comment: comment, amountUSD: amount});
  }
}
