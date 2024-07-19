export default function initBitCoin() {}

async function fetchBitcoin(url) {
  try {
    const bitcoinResponse = await fetch(url);
    const bitcoinJson = await bitcoinResponse.json();
    const btcPreco = document.querySelector(".btc-preco");
    btcPreco.innerHTML = (1000 / bitcoinJson.BRL.sell).toFixed(4);
  } catch (erro) {
    console.log(Error(erro));
  }
}

fetchBitcoin("https://blockchain.info/ticker");
