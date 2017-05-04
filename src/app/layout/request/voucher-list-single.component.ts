import { Component, OnInit, Input } from '@angular/core';
import { RequestService } from '../../shared/services/request.service';
import { Observable } from 'rxjs/Observable';
import { Voucher } from '../../shared/model/voucher';
import { FormatService } from '../../shared/services/format.service';

@Component({
    selector: 'voucher-list-single',
    templateUrl: './voucher-list-single.component.html'
})
export class VoucherListSingleComponent implements OnInit {
    @Input() requestId: string;

    public o: Observable<Voucher[]>;

    constructor(private requestService: RequestService, private formatService: FormatService) { }

    ngOnInit() {
      this.refresh();
    }

    public refresh() {
        this.o = this.requestService.getAnswers(this.requestId);
    }

    answerToString(v: Voucher) {
      let a = v.answer;
      if (a == null) {
        return "keine Antwort";
      } else if (a) {
        return "Angenommen";
      } else {
        return "Abgelehnt";
      }
    }
}
