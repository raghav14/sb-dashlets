import { Component, OnInit, Input } from '@angular/core';
import { DashletResourceService } from '../../service/dashlets-resource.service';
import { DashletUsageService } from '../../service/dashlets-usage.service';

interface ReportSummary {
  label: string;
  text: Array<string>;
  createdOn: string;
}

@Component({
  selector: 'app-report-summary',
  templateUrl: './report-summary.component.html',
  styleUrls: ['./report-summary.component.scss']
})
export class ReportSummaryComponent implements OnInit {

  @Input() inputData: Array<ReportSummary>;

  constructor(public usageService: DashletUsageService, public resourceService: DashletResourceService) {
    console.log('initializer new');
  }

  ngOnInit() {
  }

}
