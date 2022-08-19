function tambahAngka(a: number, b: number): number {
    return a + b;
};

console.log(tambahAngka(2,2));

// Latihan 1
// const tambah = (a: number, b: number) => a + b;

// console.log(tambah(1,2));

// Latihan 2
function tambah(a?: number, b?: number): number {
	return (a ?? 0) + (b ?? 0);
};

console.log(tambah(1,2));