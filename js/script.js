welcomeAlert();

function welcomeAlert() {
  let userinput = prompt("Siapa namamu?");
  if (userinput === null || userinput.trim() === "") {
    userinput = "Guest";
  }
  document.getElementById("nav-title").innerText = `Welcome, ${userinput}! to Deniz Website`;
}

// pastikan JS dijalankan setelah DOM siap
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formMessage");
  const hasil = document.getElementById("hasil");

  // cek dulu apakah selector berhasil
  if (!form) return console.error("Form tidak ditemukan!");
  if (!hasil) return console.error("Div hasil tidak ditemukan!");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // mencegah halaman reload

    const nama = document.querySelector(".nama").value;
    const email = document.querySelector(".email").value;
    const pesan = document.querySelector(".pesan").value;

    // output di sebelah kanan
    hasil.innerHTML = `
      <h3>✓ Pesan Terkirim</h3>
      <p><b>Nama:</b> ${nama}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Pesan:</b> ${pesan}</p>
    `;

    // reset form after send
    form.reset();
  });
});