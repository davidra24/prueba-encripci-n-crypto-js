function ejecutar() {
  const radio_encriptar = document.getElementById('radio_encriptar').checked;
  const radio_desencriptar = document.getElementById('radio_desencriptar')
    .checked;
  const txt_cadena = document.getElementById('cadena').value;
  const resultado = document.getElementById('resultado');
  resultado.innerText = '';

  if (radio_encriptar) {
    const encriptado = CryptoJS.AES.encrypt(txt_cadena, 'SECRET');
    resultado.innerText = encriptado;
  } else if (radio_desencriptar) {
    const desencriptado = CryptoJS.AES.decrypt(txt_cadena, 'SECRET');
    console.log(desencriptado);
    resultado.innerHTML = desencriptado.toString(CryptoJS.enc.Utf8);
  } else {
    alert('Seleccione la acción a ejecutar');
  }
}

function limpiar() {
  document.getElementById('cadena').value = '';
  document.getElementById('resultado').innerText = '';
}
