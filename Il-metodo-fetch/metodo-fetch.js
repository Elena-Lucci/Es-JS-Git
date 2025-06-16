async function fetchCard(cardCode) {
    try {
      const res = await fetch(`https://ringsdb.com/api/public/card/${cardCode}.json`);
      const card = await res.json();
      document.getElementById('card-name').textContent = card.name;

      const imageUrl = `https://ringsdb.com/${card.imagesrc}`;
      const imgEl = document.getElementById('card-image');
      imgEl.src = imageUrl;
      imgEl.alt = card.name;
    } catch (err) {
      console.error(err);
      document.getElementById('card-name').textContent = 'Errore nel caricamento';
    }
  }

  // Fetch di prova: carta 01001
  fetchCard('01001');