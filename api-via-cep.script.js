document.getElementById('buscarCep').addEventListener('click', consultarCEP);

function consultarCEP() {
    const cep = document.getElementById('cep').value.trim();
    const result = document.getElementById('result');

    // Validação: Verifica se tem 8 dígitos numéricos
    if (!/^\d{8}$/.test(cep)) {
        result.textContent = 'CEP inválido! Digite apenas números.';
        result.style.color = 'red';
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                result.textContent = 'CEP não encontrado!';
                result.style.color = 'red';
            } else {
                result.textContent = `Endereço: ${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
                result.style.color = 'green';
            }
        })
        .catch(() => {
            result.textContent = 'Erro na consulta!';
            result.style.color = 'red';
        });
              }
