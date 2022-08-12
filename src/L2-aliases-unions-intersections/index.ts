// aliases type
type Person = {
    name: string,
    age: number
}

let rafli: Person = {
    name: 'Rafli',
    age: 24
}

// union type
type Hewan = 'mamalia' | 'amfibi' | 'unggas';
let ayam: Hewan = 'unggas';

console.log("Ayam termasuk hewan",ayam);

// intersection type
type Karyawan = {
    id: string,
    name: string
}

type KaryawanTetap = {
    umur: number,
    jabatan: string
}

type KaryawandanTetap = Karyawan & KaryawanTetap;
let karyawanyangTetap: KaryawandanTetap = {
    id: 'ID1',
    name: 'Rafli',
    umur: 24,
    jabatan: 'Back End Developer'
}

console.log("Nama karyawan:",karyawanyangTetap.name);