// Dapatkan tombol "Kembali ke Atas"
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Ketika pengguna menggulir ke bawah 20px dari atas dokumen, tampilkan tombol
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// Ketika tombol diklik, gulir ke atas dokumen
scrollToTopBtn.addEventListener("click", function() {
    // Untuk Safari
    document.body.scrollTop = 0;
    // Untuk Chrome, Firefox, IE dan Opera
    document.documentElement.scrollTop = 0;
});