export default async function fetchBitcoin(url, target) {
  try {
    const bitcoinResponse = await fetch(url);
    const bitcoinJson = await bitcoinResponse.json();
    const btcPreco = document.querySelector(target);
    btcPreco.innerHTML = (1000 / bitcoinJson.BRL.sell).toFixed(4);
  } catch (erro) {
    console.error("Erro ao buscar o preço do Bitcoin:", erro);
  }
}
