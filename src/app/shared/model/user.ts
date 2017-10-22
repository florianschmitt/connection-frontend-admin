export class User {

  public id: number;
  public firstname: string;
  public lastname: string;
  public active: boolean;
  public hasAdminRight: boolean;
  public hasFinanceRight: boolean;
  public email: string;
  public cleartextPassword: string;

  constructor(
  ) {  }

  // the deserialized json object from rest service is not a "real" typescript class, so we cannot call this method right now
  // public isNew(): boolean {
  //   var result = this.id == null;
  //   return result;
  // }
}
