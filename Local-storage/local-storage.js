//Lo scopo di questo task è di salvare tutti i dati di un form nel local storage. -Fai in modo che nello span venga inserito il testo che si è inserito nell'input nome -Fai in modo che questi dati si salvino nel local storage -Controlla che al reload il nome nel titolo non scompaia

  const firstnameInput = document.querySelector('.firstname');
  const lastnameInput  = document.querySelector('.lastname');
  const emailInput     = document.querySelector('.email');
  const saveBtn        = document.querySelector('.btn');
  const titleNameSpan  = document.querySelector('.title-name');
  const printedFormP   = document.querySelector('.printedform');

  // 1. Al caricamento, recupero eventuali dati da localStorage
  const savedData = JSON.parse(localStorage.getItem('formData')) || {};

  // 2. Se c'è un nome salvato, lo metto nello span e nei campi
  if (savedData.firstname) {
    titleNameSpan.textContent    = savedData.firstname;
    firstnameInput.value         = savedData.firstname;
  }
  if (savedData.lastname) {
    lastnameInput.value          = savedData.lastname;
  }
  if (savedData.email) {
    emailInput.value             = savedData.email;
  }

  // 3. Funzione per aggiornare il paragrafo riepilogativo
  function renderPrintedForm(data) {
    printedFormP.textContent = 
      `Nome: ${data.firstname || '-'}; ` +
      `Cognome: ${data.lastname || '-'}; ` +
      `Email: ${data.email || '-'}`;
  }

  // mostro fin da subito il riepilogo se c'erano dati
  if (savedData.firstname || savedData.lastname || savedData.email) {
    renderPrintedForm(savedData);
  }

  // 4. Al click su “Salva” creo l’oggetto formData
  saveBtn.addEventListener('click', () => {
    const formData = {
      firstname: firstnameInput.value.trim(),
      lastname:  lastnameInput.value.trim(),
      email:     emailInput.value.trim()
    };

    // lo salvo nel localStorage
    localStorage.setItem('formData', JSON.stringify(formData));

    // aggiorno lo span del titolo e il paragrafo di riepilogo. In questo modo al reload della pagina il nome nel titolo rimane e l’intero form può essere recuperato e mostrato.
    titleNameSpan.textContent = formData.firstname;
    renderPrintedForm(formData);
  });
