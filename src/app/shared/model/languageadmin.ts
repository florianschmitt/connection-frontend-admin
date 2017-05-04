import { Localized } from './localized';

export class LanguageAdmin {
  public id: number;
  public identifier: string;
  public viewOrder: number;
  public localized: Array<Localized>;

  constructor(
  ) {  }

  initEmpty() {
    this.localized = new Array<Localized>();
    var locales = ["de", "en", "ar"];
    for (let loc of locales) {
      var l = new Localized(null, null, loc);
      this.localized.push(l);
    }
  }
}
