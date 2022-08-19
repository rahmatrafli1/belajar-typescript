class Rekening {
    nama: string = "Rafli";
    umur: number = 24;
    saldo: number = 15_000_000;

    deposit(jumlahdeposit: number): void {
        this.saldo = this.saldo + jumlahdeposit;
    }

    withdraw(jumlahpenarikan: number): void {
        this.saldo = this.saldo - jumlahpenarikan;
    }
}

let rekeningRaf = new Rekening();

console.log(rekeningRaf.nama);

rekeningRaf.deposit(5_000_000);

console.log(rekeningRaf.saldo);