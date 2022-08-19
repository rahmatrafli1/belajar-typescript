"use strict";
class Rekening {
    constructor() {
        this.nama = "Rafli";
        this.umur = 24;
        this.saldo = 15000000;
    }
    deposit(jumlahdeposit) {
        this.saldo = this.saldo + jumlahdeposit;
    }
    withdraw(jumlahpenarikan) {
        this.saldo = this.saldo - jumlahpenarikan;
    }
}
let rekeningRaf = new Rekening();
console.log(rekeningRaf.nama);
rekeningRaf.deposit(5000000);
console.log(rekeningRaf.saldo);
