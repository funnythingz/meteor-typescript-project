/// <reference path="../packages/typescript-libs/node.d.ts" />
/// <reference path="../packages/typescript-libs/meteor.d.ts" />

/// <reference path="./hoge.ts" />

module HOGE {

    export class Ahya {

        constructor(private message: string) {}

        say(): string {
            return this.message;
        }

    }

}


Template['hello'].helpers({

    greeting: function() {
        var ahya: HOGE.Ahya = new HOGE.Ahya('unko');
        return ahya.say();
    }

});
