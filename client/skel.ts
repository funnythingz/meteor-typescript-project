/// <reference path="../packages/typescript-libs/node.d.ts" />
/// <reference path="../packages/typescript-libs/meteor.d.ts" />

if (Meteor.isClient) {

  Template['hello']['greeting'] = function () {
    return "Typescript-compile of Meteor";
  };

}
