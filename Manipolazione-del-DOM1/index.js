function addProduct() {

  const input = document.querySelector('input');
  const list  = document.querySelector('ul');
  
  const taskText = input.value //contenuto testuale dell'input
  if (!taskText) return;             // non fa nulla se è vuoto
  input.value = '';                  // se è pieno, svuota l'input perché poi io possa di nuovo scrivere nella casella

  //Creo gli elementi <li> e <input type="checkbox">
  const li       = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type  = 'checkbox';

  const label = document.createElement('label'); //label è un contenitore dentro cui viene appeso il checkbox, così se clicco sul testo seleziono tutto il checkbox
  label.appendChild(checkbox);
//appende il testo del task, con uno spazio, sennò viene tutto attaccato
  label.appendChild(document.createTextNode(' ' + taskText));

  //metto label dentro li
  li.appendChild(label);
  //aggiungo li alla list
  list.appendChild(li);
}