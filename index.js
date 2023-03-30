// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let id = '1234';
let companyName = 'aaaaaaaaaaaabbbbbbbbbbbbbbccdd';
let siteName = 'BBBBBBBBBBBBBBBB';

let invoice = updateInvoiceCustomField(id, {
  custom_fields: {
    0: {
      value: companyName,
      name: 'Company',
    },
    1: {
      value: siteName,
      name: 'Site',
    },
  },
});

function updateInvoiceCustomField(id, custom_fields) {
 /*  if (custom_fields.custom_fields[0].value.length > 30) {
    custom_fields.custom_fields[0].value = `${custom_fields.custom_fields[0].value.slice(0, 27)}...`;
  }
  if (custom_fields.custom_fields[1].value.length > 30) {
    custom_fields.custom_fields[1].value = `${custom_fields.custom_fields[1].value.slice(0, 27)}...`;
  } */
  console.log(custom_fields.custom_fields[0].value);
  console.log(custom_fields.custom_fields[1].value);
  console.log(custom_fields.custom_fields[0].value.length)
}
