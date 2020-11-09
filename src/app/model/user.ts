import {Entity} from '@ngx-metaui/rules';
import {Airline} from './airline';
import {Animal} from './animal';

/**
 * This is generated class
 */
export class User implements Entity {


  constructor(
    public uniqueName?: string,
    public firstName?: string,
    public lastName?: string,
    public birthdate?: Date,
    public martialStatus?: string,
    public numOfChildren?: number,
    public employer?: string,
    public email?: string,
    public accountType?: string,
    public contactMethod?: string[]) {
  }

  identity(): string {
    return this.uniqueName;
  }


  getTypes(): any {
    return {
      uniqueName: String,
      firstName: String,
      lastName: String,
      birthdate: Date,
      martialStatus: String,
      numOfChildren: Number,
      employer: String,
      email: String,
      accountType: String,
      contactMethod: Array(String)
    };
  }


  /**
   * Used by MetaUI to identify the name of the class once everything is minified
   */
  className(): string {
    return 'User';
  }

  toString(): string {
    return this.lastName;
  }
}
