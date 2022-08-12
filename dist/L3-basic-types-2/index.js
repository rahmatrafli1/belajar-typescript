"use strict";
// Array
let namaSiswa = ["dwi", "skilvul"];
// Tuples
let karyawan = ['kenzo', 'programmer', 20];
let jomblo = {
    name: 'Rafli',
    age: 24,
    partner: null
};
// void & never
function log(message) {
    console.log(message);
}
function error(message) {
    throw new Error(message);
}
log('hello');
error('hello');
