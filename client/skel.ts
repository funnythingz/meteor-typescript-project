/// <reference path="../packages/typescript-libs/node.d.ts" />
/// <reference path="../packages/typescript-libs/meteor.d.ts" />

Template['hello'].helpers({

    greeting: function() {
        return "Typescript-compile of Meteor";
    }

});
