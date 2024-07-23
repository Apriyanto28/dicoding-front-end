var key = "buku";
var data_buku = [];

//Fungsi untuk Mengubah Tabel
function update_table(){
    //Deklarasi 
    let pjg_arr = data_buku.length;
    let status = false;
    for(let i = 0;i<pjg_arr;i++){
        status = data_buku[i]['isComplete'];
        if(status){
            
        }
    }
}

//Fungsi untuk Menambahkan Buku
function tambah_buku(){

    //Deklarasi Nilai dari data form input
    let judul_buku = document.getElementById("judul").value;
    let penulis_buku = document.getElementById("tulis").value;
    let tahun_buku = document.getElementById("tahun").value;
    let status_baca_buku = document.getElementById("baca").checked;

    //Memasukkan ke dalam bentuk
    let tmp = {
        id: Number(new Date()),
        title: judul_buku,
        author: penulis_buku,
        year: tahun_buku,
        isComplete: status_baca_buku,
    }

    data_buku.push(tmp);
    update_table();
}