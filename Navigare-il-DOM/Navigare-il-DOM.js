      // Seleziono <ul>
      const ul = document.querySelector("ul");

      // 1) l'elemento padre di ul ➜ parentElement
      console.log(ul.parentElement);

      // 2) il secondo elemento figlio di ul ➜ children[1]
      const secondChild = ul.children[1];
      console.log(secondChild);
      console.log(secondChild.innerText);

      // 3) l'elemento fratello successivo del secondo <li> ➜ nextElementSibling
      const nextBrother = secondChild.nextElementSibling;
      console.log(nextBrother);
      console.log(nextBrother.innerText);

      // 4) l'elemento fratello precedente del secondo <li> ➜ previousElementSibling
      const previousBrother = secondChild.previousElementSibling;
      console.log(previousBrother);
      console.log(previousBrother.innerText);