import {Account} from './account';
export class Kweet {
  constructor(public message: string,
              public account: Account | Object,
              public id?: Number,
              public timestamp?: string,
              public trends?: string[],
              public hearts?: number) {
  }
}
