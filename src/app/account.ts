import {Kweet} from './kweet';
export class Account {
  constructor(public username: string,
              public firstname: string,
              public lastname: string,
              public photo?: string,
              public bio?: string,
              public website?: string,
              public location?: string,
              public roles?: string[],
              public followers?: number,
              public kweets?: Kweet[],
              public kweetSize?: number,
              public following?: number,
              public latestKweet?: Kweet) {
  }

}
