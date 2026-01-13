async function convertCurrency() {
  const date = new Date().toLocaleDateString('en-CA');
  const from = document.querySelector('#fromCurrency').value;
  const to = document.querySelector('#toCurrency').value;
  const amount = document.querySelector('#amount').value;
  const result = document.querySelector('#result');

  if (!amount || amount <= 0) {
    result.innerHTML = 'Enter a valid amount';
    return;
  }

  const URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${from}.json`;

  try {
    const response = await fetch(URL);

    const data = await response.json();

    const rate = data[from][to];
    const convertedAmount = (amount * rate).toFixed(2);

    
    result.innerHTML =
      `${amount} ${from.toUpperCase()} = ${convertedAmount} ${to.toUpperCase()}`;
  } catch (error) {
    result.innerHTML = 'Error fetching currency data';
    console.error(error);
  }
}
