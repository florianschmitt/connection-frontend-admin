import { Component, OnInit, Input } from '@angular/core';
import { FeedbackService } from '../../shared/services/feedback.service';
import { Observable } from 'rxjs/Observable';
import { Feedback } from '../../shared/model/feedback';

@Component({
    selector: 'feedback',
    templateUrl: './feedback.component.html'
})
export class FeedbackComponent implements OnInit {
    @Input() requestId: string;

    public model: Feedback;

    constructor(private feedbackService: FeedbackService) { }

    ngOnInit() {
      this.refresh();
    }

    public refresh() {
        this.feedbackService.get(this.requestId)
            .subscribe(f => this.model = f)
    }

    answerToString(v: Feedback) {
      let a = v.positive;
      if (a == null) {
        return "keine Antwort";
      } else if (a) {
        return "Positiv";
      } else {
        return "Negativ";
      }
    }
}
