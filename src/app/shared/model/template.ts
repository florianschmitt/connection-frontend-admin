export class Template {

  public id: number;
  public identifier: string;
  public description: string;
  public template: string;

  constructor(
  ) {  }

  // the deserialized json object from rest service is not a "real" typescript class, so we cannot call this method right now
  // public isNew(): boolean {
  //   var result = this.id == null;
  //   return result;
  // }
}
