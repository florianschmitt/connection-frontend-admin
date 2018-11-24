import { Component, OnInit, Input } from '@angular/core';
import { FeedbackService } from '../../shared/services/feedback.service';
import { Observable } from 'rxjs/Observable';
import { FeedbackVolunteer } from '../../shared/model/feedbackvolunteer';

@Component({
    selector: 'feedbackvolunteer',
    templateUrl: './feedbackvolunteer.component.html'
})
export class FeedbackVolunteerComponent implements OnInit {
    @Input() requestId: string;

    public model: FeedbackVolunteer;

    constructor(private feedbackService: FeedbackService) { }

    ngOnInit() {
      this.refresh();
    }

    public refresh() {
        this.feedbackService.getVolunteer(this.requestId)
            .subscribe(f => this.model = f)
    }

    booleanToString(value: boolean) {
      if (value == null) {
        return "";
      } else if (value) {
        return "Ja";
      } else {
        return "Nein";
      }
    }
}
