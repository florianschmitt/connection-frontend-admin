import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Request } from '../../../../shared/model/request';
import { FormatService } from '../../../../shared/services/format.service';
import { RequestService } from '../../../../shared/services/request.service';

@Component({
  selector: 'request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit {
  public o: Observable<Request[]>;

  constructor(private requestService: RequestService, private formatService: FormatService) { }

  ngOnInit() {
    this.o = this.requestService.all();
  }

  languages(v: Request) {
    return this.formatService.joinLanguages(v.languageIds);
  }

  address(v: Request) {
    return this.formatService.address(v);
  }

  timestringCreate(v: Request) {
    return this.formatService.timestring(v.createdAt);
  }

  timestring(v: Request) {
    if (v.datetime != null) {
      return this.formatService.timestring(v.datetime);
    } else {
      return v.dateDescription;
    }
  }
}
