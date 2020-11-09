/**
 *  This is generated file. Do not edit !!
 *
 *  @formatter:off
 *
 */
/* tslint:disable */
export const UserRule = 'class=User {    field {   	placeholder: "Enter a value";   }     field=(firstName, lastName) {     trait: required;    }      field=accountType {         trait:asRadio;         choices:["Personal", "Business"];     }      field=contactMethod {         choices:["Email", "Phone", "Mail"];     }      field=martialStatus {         trait:asSelect;         choices:["Single", "Married"];     }      field=numOfChildren {       visible: ${object.accountType === "Personal"};     }      zNone => *;     zLeft => uniqueName => firstName => lastName => birthdate => martialStatus;     zRight => employer => email => accountType => numOfChildren => contactMethod; }    class=User {    operation=(edit, view) {       zNone => *;       zLeft => firstName => lastName => birthdate => martialStatus;       zRight => employer => email => accountType => numOfChildren => contactMethod;    }    operation=(create) {       zNone => *;       zLeft => firstName => lastName => birthdate => martialStatus;    } }   role=admin class=User {    zNone => *;    zLeft => uniqueName => firstName => lastName => birthdate => martialStatus => employer => email => accountType => numOfChildren => contactMethod; }    ';
/* tslint:disable */
/**
 *  @formatter:on
 *
 */
 