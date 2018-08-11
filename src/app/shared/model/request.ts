export class Request {
  public requestIdentifier: string;
  public languageIds: number[];
  public datetime: number[];
  public occationEnum: string;
  public occationString: string;
  public street: string;
  public postalCode: string;
  public city: string;
  public email: string;
  public phone: string;
  public state: string;
  public acceptedByVolunteer: string;
  public requesterInstitution: string;
  public requesterName: string;
  public createdAt: number[];

  constructor(
  ) {  }

  // public address() : string {
  //   return this.street;// + " " + this.postalCode + " " + this.city;
  // }

  // timestring() {
  //   let year = this.datetime[0];
  //   let month = this.datetime[1];
  //   let day = this.datetime[2];
  //   let hour = this.datetime[3];
  //   let min = this.datetime[4];
  //   return day + "." + month + '.' + year + ' - ' + hour + ":" + min;
  // }
}
