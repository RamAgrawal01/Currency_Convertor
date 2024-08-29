const populate = async (value, currency) => {
    try {
        const apiKey = 'cur_live_tQ0cYxelLZP3FeluyugUdaBtWVRBpfgr1ruHS6DX';
        const url = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&base_currency=${currency}`;

        let response = await fetch(url);
        let rJson = await response.json();
        
        // Display the output container
        document.querySelector(".output").style.display = "block";

        let myStr = "";
        for (let key in rJson["data"]) {
            myStr += `<tr>
                        <td>${key}</td>
                        <td>${rJson["data"][key]["code"]}</td>
                        <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
                    </tr>`;
        }

        const tableBody = document.querySelector('tbody');
        tableBody.innerHTML = myStr;
    } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error or display error message to user
    }
};

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("button is clicked");

    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='Currency']").value;

    populate(value, currency); // Pass value and currency to populate function
});


