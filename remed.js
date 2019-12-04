
//soal nomor 2

segitigaAngka = tinggi => {
	let output = '';
	let angka = 1;

	for (a = 0; a < tinggi; a++) {
		for (b = tinggi; b > a; b--) {
			output += ' ';
		}
		for (c = 0; c <= a; c++) {
			if (angka % 2 === 0) {
				output += ' ';
			} else {
				output += `${angka}`;
			}
			angka++;
		}
		for (d = 1; d <= a; d++) {
			if (angka % 2 === 0) {
				output += ' ';
			} else {
				output += `${angka}`;
			}
			angka++;
		}
		if (a < tinggi - 1) {
			output += '\n';
		}
		angka += 1;
	}
	return output;
};


//soal nomor 1

const population=(awal,persen,pendatang,target)=>{
    var tahun = 0
    var penduduk= awal
    do{
        penduduk+=pendatang+(penduduk*(persen/100))
        tahun++


    }while(penduduk<target)
    return tahun+'tahun'

}
console.log(population(1000,2,50,1200))

//soal nomor 3

const tickets = x => {
    var dualima = 0
    var limapuluh = 0
    var seratus = 0
    for (i = 0;i < x.length; i++){
        if (x[i]==25) {
            dualima +=1
        }else if (x[i]==50){
            dualima -=1
        }else if (x[i]==100){
            seratus +=1
            dualima -=1
            limapuluh -=1
        }
    }
    if (dualima<0 || limapuluh<0 || seratus<0){
        return "NO"
    }else{
        return "YES"
    }
}

console.log(tickets([25, 25, 50])) // => YES 
console.log(tickets([25, 100])) // => NO. Vasya tidak punya uang kembalian yang cukup untuk 100 dollar
console.log(tickets([25, 25, 50, 50, 100])) // => NO. Vasya tidak punya pecahan uang yang tepat untuk mengembalikan 75 dollar.




