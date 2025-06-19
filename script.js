function getPilihanComputer () {
    const comp = Math.random() * 10

    if(comp < 3.4) return "kertas"
    if(comp < 6.7) return "gunting"
    return "batu"
}

function getHasil(comp, player) {
    if(comp == player) return "seri"
    if(player == "gunting") return (comp == "kertas" ) ? "Hoki Dekk!" : "Bott Kalah"
    if(player == "kertas") return (comp == "batu" ) ? "Hoki Dekk!" : "Bott Kalah"
    if(player == "batu") return (comp == "gunting" ) ? "Hoki Dekk!" : "Bott Kalah"
}

function putar() {
    const gambar = [
        lGambar.gunting,
        lGambar.kertas,
        lGambar.batu
    ];

    let i = 0;
    const waktuMulai = new Date().getTime();

    const interval = setInterval(function () {
        // Perbaikan typo dan clearInterval
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }

        imgComputer.src = gambar[i++];
        if (i === gambar.length) i = 0;
    }, 150);
}

const lGambar = {
    gunting: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rock-paper-scissors_(scissors).png/600px-Rock-paper-scissors_(scissors).png",
    kertas: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rock-paper-scissors_(paper).png/600px-Rock-paper-scissors_(paper).png",
    batu: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Rock-paper-scissors_(rock).png/600px-Rock-paper-scissors_(rock).png"
}

const imgComputer = document.querySelector('.imgComputer')

const pilihan = document.querySelectorAll('li img');

pilihan.forEach(function(pil) {
    pil.addEventListener('click', function() {
        const comp = getPilihanComputer();
        const player = pil.classList[0];
        const hasil = getHasil(comp, player);

        putar();

        setTimeout(function() {
            imgComputer.src = lGambar[comp];

            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000); // <- ini tanda tutup yang benar
    });
});



// const gunting = document.querySelector('.gunting')
// const kertas = document.querySelector('.kertas')
// const batu = document.querySelector('.batu')




// gunting.addEventListener('click', function(){
//     const comp = getPilihanComputer()
//     const player = "gunting"
//     const hasil = getHasil(comp, player)

//  imgComputer.src = lGambar[comp]

//  const info = document.querySelector('.info')
//  info.innerHTML = hasil
// })
// kertas.addEventListener('click', function(){
//     const comp = getPilihanComputer()
//     const player = "kertas"
//     const hasil = getHasil(comp, player)

//  imgComputer.src = lGambar[comp]

//  const info = document.querySelector('.info')
//  info.innerHTML = hasil
// })
// batu.addEventListener('click', function(){
//     const comp = getPilihanComputer()
//     const player = "batu"
//     const hasil = getHasil(comp, player)

//  imgComputer.src = lGambar[comp]

//  const info = document.querySelector('.info')
//  info.innerHTML = hasil
// })
