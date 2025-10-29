// Minimal JS:
// 1) Tampilkan/sembunyikan flashcard Visi/Misi sesuai tombol
// 2) Flip masing-masing kartu saat kartu diklik (tidak saling tukar konten)

document.addEventListener('DOMContentLoaded', () => {
  const btnVisi = document.getElementById('btnVisi');
  const btnMisi = document.getElementById('btnMisi');
  const cardVisi = document.getElementById('cardVisi');
  const cardMisi = document.getElementById('cardMisi');

  // Helper show/hide
  const showCard = (cardEl, btn) => {
    // sembunyikan kartu lain
    [cardVisi, cardMisi].forEach(el => {
      if (el !== cardEl) {
        el.classList.add('is-hidden');
        el.classList.remove('is-flipped');
      }
    });
    // toggle kartu target (bisa buka/tutup)
    cardEl.classList.toggle('is-hidden');
    btn.setAttribute('aria-expanded', String(!cardEl.classList.contains('is-hidden')));
  };

  btnVisi.addEventListener('click', () => showCard(cardVisi, btnVisi));
  btnMisi.addEventListener('click', () => showCard(cardMisi, btnMisi));

  // Flip per kartu (klik pada area kartu)
  [cardVisi, cardMisi].forEach(card => {
    card.addEventListener('click', () => {
      // flip hanya jika kartu sedang terlihat
      if (!card.classList.contains('is-hidden')) {
        card.classList.toggle('is-flipped');
      }
    });
    // dukung keyboard
    card.setAttribute('tabindex', '0');
    card.addEventListener('keypress', (e) => {
      if ((e.key === 'Enter' || e.key === ' ') && !card.classList.contains('is-hidden')) {
        e.preventDefault();
        card.classList.toggle('is-flipped');
      }
    });
  });
});
