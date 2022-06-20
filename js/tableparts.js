// Fill table
function createCyclistTableHeader() {
  const tableRow = createRow();

  tableRow.appendChild(createTableHeader("Fuldenavn"));
  tableRow.appendChild(createTableHeader("Alder"));
  tableRow.appendChild(createTableHeader("Tid"));
  tableRow.appendChild(createTableHeader("Hold"));
  tableRow.appendChild(createTableHeader("Opdater"));
  tableRow.appendChild(createTableHeader("Slet"));

  table.appendChild(tableRow);
}

function inputCyclistDataInTable(cyclist) {
  const tableRow = createRow();

  // Sammensæt alle dele af cyklists navne til et
  if (cyclist.middleName != null) {
    tableRow.appendChild(createTableData(
        cyclist.firstName
        + ' '
        + cyclist.middleName
        + ' '
        + cyclist.lastName
      )
    );
  } else {
    tableRow.appendChild(
      createTableData(cyclist.firstName + ' ' + cyclist.lastName)
    );
  }

  tableRow.appendChild(createTableData(cyclist.age));
  tableRow.appendChild(createTableData(cyclist.totalTime));
  tableRow.appendChild(createTableData(cyclist.cyclingTeam.name));

  // Update and delete buttons
  const update = document.createElement('td');
  update.appendChild(createUpdateButton(cyclist));
  tableRow.appendChild(update);

  const deletetd = document.createElement('td');
  deletetd.appendChild(createDeleteButton(cyclist, tableRow));
  tableRow.appendChild(deletetd);

  return tableRow;
}


// Elements for table creation
function createRow() {
  return document.createElement('tr');
}

function createTableHeader(name) {
  const th = document.createElement('th');
  th.innerText = name;
  return th;
}

function createTableData(data) {
  const td = document.createElement('td');

  td.innerText = data;

  return td;
}

// Create Buttons

function createUpdateButton(cyclist) {
  const button = createButton('Opdater', 'updateButton');

  button.onclick = () => {
    window.location.href = "update.html/?id=" + cyclist.id;
  }

  return button;
}

function createDeleteButton(cyclist, tableRow) {
  const button = createButton('Slet', 'deleteButton');

  button.onclick = async () => {
    if (confirm("Er du sikker på du vil slette cyklist?")) {
      await deleteElement(cyclist);
      tableRow.remove();
    }
  }

  return button;
}

function createButton(value, cssClass) {
  const button = document.createElement('button');

  button.type = "button";
  button.innerText = value;
  button.classList.add(cssClass);
  button.classList.add('button');

  return button;
}

async function deleteElement(cyclist) {
  await deleteFetch("https://eksamenbackend.azurewebsites.net/cyclist/" + cyclist.id);
}
