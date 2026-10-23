const cartao = document.getElementById('cartao');

cartao.addEventListener('input', () => {
  let v = cartao.value.replace(/\D/g, ''); // remove tudo que não é número
  cartao.value = v.replace(/(.{4})/g, '$1 ').trim(); // espaço a cada 3
});

const cpf = document.getElementById('cpf');

cpf.addEventListener('input', () => {
  let v = cpf.value.replace(/\D/g, '').slice(0, 14); // só números, máx 14

  if (v.length > 9) {
    v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
  } else if (v.length > 6) {
    v = v.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
  } else if (v.length > 3) {
    v = v.replace(/(\d{3})(\d{1,3})/, '$1.$2');
  }

  cpf.value = v;
});


const ano = document.getElementById('ano');

ano.addEventListener('input', () => {
  let v = ano.value.replace(/\D/g, '').slice(0, 4); // só números, máx 4
  ano.value = v;
});

ano.addEventListener('blur', () => {
  let v = parseInt(ano.value);

  if (isNaN(v) || v < 2026) ano.value = '2026';        // mínimo 2026
  if (v > 3000) ano.value = '3000';                    // máximo 3000

  // formata com zero à esquerda: 5 → 05
  if (ano.value.length === 1) {
    ano.value = '0' + ano.value;
  }
});

const mes = document.getElementById('mes');

mes.addEventListener('input', () => {
  let v = mes.value.replace(/\D/g, '').slice(0, 2); // só números, máx 2
  mes.value = v;
});

mes.addEventListener('blur', () => {
  let v = parseInt(mes.value);

  if (isNaN(v) || v < 1) mes.value = '01';        // mínimo 01
  if (v > 31) mes.value = '12';                    // máximo 31

  // formata com zero à esquerda: 5 → 05
  if (mes.value.length === 1) {
    mes.value = '0' + mes.value;
  }
});

