// any
// let obj: any = { a: "some", b: "thing" }

// obj();

// Unknown
// let nilaiUjian: unknown;
// nilaiUjian = 100;

// console.log(typeof nilaiUjian);

// let nilaiAkhir;
// if (typeof nilaiUjian === 'number'){
//     nilaiAkhir = nilaiUjian + 100;
//     console.log('nilai akhir: '+nilaiAkhir);
// } else {
//     console.log('tidak diketahui nilai akhirnya');
// }

// Boolean 
// let benarAtausalah:boolean = true;
// let benar:true = true;
// let salah = false;

// benar = false;

// Number & bigint
// let harga1:number = 100;
// let harga2:number = 20_000_000;

// let angkaBesar:bigint = 100n;

// String
// const userName: string = 'Rafli';
// console.log(userName.charAt(0));
// console.log(userName.toUpperCase());

// symbol
// let a = Symbol('a');
// let b:symbol = Symbol('a');

// console.log(a === b);

// Object
let person: {
    name: string,
    umur: number,
    partner?: string
} = {
    name: 'Rafli',
    umur: 24
}

let daftarKursiBus: {
    [nomorKursi: string] : string
} = {
    '1A' : 'Rafli',
    '1B' : 'Ahmad'
}

console.log("Name:",person.name);

// Latihan Object Type
type Car = {t: string}; let car: Car = {t: 'Madza'}

console.log("Car:",car.t);


// Latihan 1
// let nilaiUjian: unknown;

// nilaiUjian = 100;

// if (typeof nilaiUjian === "number") {
// 	console.log("angka")
// }

// if (typeof nilaiUjian === "string") {
// 	console.log("string")
// }

// Latihan 2
// let a: true = true;

// a = false;

// console.log(a);
