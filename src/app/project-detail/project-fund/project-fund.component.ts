import { Component, OnInit, Input } from '@angular/core';

import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-project-fund',
  templateUrl: './project-fund.component.html',
  styleUrls: ['./project-fund.component.scss'],
  providers: [ProjectsService]
})
export class ProjectFundComponent implements OnInit {
  @Input() childSelectedProjectKey: string;

  constructor(
    private projectsService: ProjectsService
  ) { }

  ngOnInit() {
  }

  submitForm(name, amount, comment) {
    console.log(this.childSelectedProjectKey);
    this.projectsService.submitContribution(this.childSelectedProjectKey, name, amount, comment);
  }

}
