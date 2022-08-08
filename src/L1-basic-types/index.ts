// any
// let obj: any = { a: "some", b: "thing" }

// obj();

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

// Unknown
let nilaiUjian: unknown;
nilaiUjian = 100;

console.log(typeof nilaiUjian);

let nilaiAkhir;
if (typeof nilaiUjian === 'number'){
    nilaiAkhir = nilaiUjian + 100;
    console.log('nilai akhir: '+nilaiAkhir);
} else {
    console.log('tidak diketahui nilai akhirnya');
}