//
// Main JS
//
class Produk {
  constructor(productCode, product, qty, perPrice) {
    this.productCode = productCode;
    this.product = product;
    this.qty = qty;
    this.perPrice = perPrice;
  }

  save() {
    const index = produkList.findIndex(
      (p) => p.productCode === this.productCode,
    );
    if (index !== -1) {
      produkList[index] = this;
    } else {
      produkList.push(this);
    }
    localStorage.setItem('produkList', JSON.stringify(produkList));
    renderTable();
  }

  static delete(productCode) {
    produkList = produkList.filter((p) => p.productCode !== productCode);
    localStorage.setItem('produkList', JSON.stringify(produkList));
    renderTable();
  }
}

var produkList = JSON.parse(localStorage.getItem('produkList')) || [];

document.addEventListener('DOMContentLoaded', function () {
  renderTable();
});

document
  .getElementById('formPegawai')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = readFormData();
    new Produk(
      formData.productCode,
      formData.product,
      formData.qty,
      formData.perPrice,
    ).save();
    resetForm();
  });

function readFormData() {
  return {
    productCode: document.getElementById('productCode').value,
    product: document.getElementById('product').value,
    qty: document.getElementById('qty').value,
    perPrice: document.getElementById('perPrice').value,
  };
}

function renderTable() {
  var table = document
    .getElementById('storeList')
    .getElementsByTagName('tbody')[0];
  table.innerHTML = ''; // Clear previous rows
  produkList.forEach((data) => {
    let row = table.insertRow();
    row.insertCell(0).innerHTML = data.productCode;
    row.insertCell(1).innerHTML = data.product;
    row.insertCell(2).innerHTML = data.qty;
    row.insertCell(3).innerHTML = data.perPrice;
    row.insertCell(
      4,
    ).innerHTML = `<button onClick="onEdit('${data.productCode}')">Edit</button>
                                     <button onClick="onDelete('${data.productCode}')">Delete</button>`;
  });
}

function onEdit(productCode) {
  var found = produkList.find((p) => p.productCode === productCode);
  if (found) {
    document.getElementById('productCode').value = found.productCode;
    document.getElementById('product').value = found.product;
    document.getElementById('qty').value = found.qty;
    document.getElementById('perPrice').value = found.perPrice;
  }
}

function onDelete(productCode) {
  Produk.delete(productCode);
}

function resetForm() {
  document.getElementById('productCode').value = '';
  document.getElementById('product').value = '';
  document.getElementById('qty').value = '';
  document.getElementById('perPrice').value = '';
  selectedRow = null; // Pastikan untuk mengatur kembali baris yang dipilih
}
