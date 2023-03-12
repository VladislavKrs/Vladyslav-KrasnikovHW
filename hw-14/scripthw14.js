'use strict';

const tableContainer = document.querySelector('.table_container');
tableContainer.style.border = "1px";
let k = 1;
for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr');


    for (let i = 0; i < 10; i++) {
        let td = document.createElement('td');
        td.style.width = "40px"
        td.style.border = "1px solid #000"
        td.style.textAlign = "center"

        td.textContent = k;
        k++;

        tr.append(td);
    }

    tableContainer.append(tr);
}

