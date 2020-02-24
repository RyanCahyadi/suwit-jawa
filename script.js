function getPilihanKomputer() {
    const comp = Math.random();

    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function getHasil(comp, player) {
    if (player == comp) return 'SERI !';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG !' : 'KALAH !';
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH !' : 'MENANG !';
    if (player == 'semut') return (comp == 'orang') ? 'KALAH !' : 'MENANG !';
}

function putar() {
    const imgKomputer = document.querySelector('.img-komputer');
    const image = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgKomputer.setAttribute('src', 'img/' + image[i++] + '.png');
        if (i == image.length) i = 0;
    }, 100);
}

const pilihanImage = document.querySelectorAll('li img');

pilihanImage.forEach(function (e) {
    e.addEventListener('click', function () {
        const pilihanKomputer = getPilihanKomputer();
        const pilihanPlayer = e.className;
        const imgKomputer = document.querySelector('.img-komputer');
        console.log('Pilihan komputer adalah ' + pilihanKomputer);
        console.log('Pilihan player adalah ' + pilihanPlayer);
        putar();
        setTimeout(function () {
            imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');
            const hasil = getHasil(pilihanKomputer, pilihanPlayer);
            console.log('Hasil pertandingan adalah ' + hasil);
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1500);
    });
});

// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function () {
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pGajah.className;
//     const imgKomputer = document.querySelector('.img-komputer');
//     console.log('Pilihan komputer adalah ' + pilihanKomputer);
//     console.log('Pilihan player adalah ' + pilihanPlayer);
//     imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);
//     console.log('Hasil pertandingan adalah ' + hasil);
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function () {
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pOrang.className;
//     const imgKomputer = document.querySelector('.img-komputer');
//     console.log('Pilihan komputer adalah ' + pilihanKomputer);
//     console.log('Pilihan player adalah ' + pilihanPlayer);
//     imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);
//     console.log('Hasil pertandingan adalah ' + hasil);
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function () {
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pSemut.className;
//     const imgKomputer = document.querySelector('.img-komputer');
//     console.log('Pilihan komputer adalah ' + pilihanKomputer);
//     console.log('Pilihan player adalah ' + pilihanPlayer);
//     imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);
//     console.log('Hasil pertandingan adalah ' + hasil);
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });