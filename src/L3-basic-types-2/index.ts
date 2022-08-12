// Array
let namaSiswa: string[] = ["dwi", "skilvul"];

// Tuples
let karyawan: [string, string, number] = ['kenzo', 'programmer', 20];

// null & undefined
type Orang = {
    name: string,
    age: number,
    partner: string | null
}

let jomblo: Orang = {
    name: 'Rafli',
    age: 24,
    partner: null
}

// void & never
function log(message:string):void {
    console.log(message);
}

function error(message:string): never {
    throw new Error(message);
}

log('hello');
error('hello');