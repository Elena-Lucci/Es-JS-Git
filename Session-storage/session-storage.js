//Lo scopo di questo task è di salvare tutti i dati di un form nel session storage. -Fai in modo che nello span venga inserito il testo che si è inserito nell'input nome -Fai in modo che questi dati si salvino nel session storage

  const firstnameInput = document.querySelector('.firstname');
  const lastnameInput  = document.querySelector('.lastname');
  const emailInput     = document.querySelector('.email');
  const saveBtn        = document.querySelector('.btn');
  const titleNameSpan  = document.querySelector('.title-name');
  const printedFormP   = document.querySelector('.printedform');

  // 1. All’avvio, recupero i dati da sessionStorage (o oggetto vuoto)
  const savedData = JSON.parse(sessionStorage.getItem('formData')) || {};

  // 2. Se esiste firstname, lo mostro nello span e nell’input
  if (savedData.firstname) {
    titleNameSpan.textContent   = savedData.firstname;
    firstnameInput.value        = savedData.firstname;
  }
  if (savedData.lastname) {
    lastnameInput.value         = savedData.lastname;
  }
  if (savedData.email) {
    emailInput.value            = savedData.email;
  }

  // 3. Funzione di rendering del riepilogo sotto il form
  function renderPrintedForm(data) {
    printedFormP.textContent =
      `Nome: ${data.firstname || '-'}; ` +
      `Cognome: ${data.lastname || '-'}; ` +
      `Email: ${data.email || '-'}`;
  }

  // Se c’erano dati, mostro subito il riepilogo
  if (savedData.firstname || savedData.lastname || savedData.email) {
    renderPrintedForm(savedData);
  }

  // 4. Al click su “Salva” creo l’oggetto formDatax
  saveBtn.addEventListener('click', () => {
    const formData = {
      firstname: firstnameInput.value.trim(),
      lastname:  lastnameInput.value.trim(),
      email:     emailInput.value.trim()
    };

    // salvo in sessionStorage
    sessionStorage.setItem('formData', JSON.stringify(formData));

  })
