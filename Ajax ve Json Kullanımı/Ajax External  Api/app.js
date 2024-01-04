document.getElementById("change").addEventListener("click",change);



function change(){

    const xhr = new XMLHttpRequest();

    //??????????????? link

    xhr.open("GET","https://api.exchangeratesapi.io/v1/convert");

    xhr.onload = function(){
        if(this.status) {
            const response = JSON.parse(this.responseText);
            // console.log(this.responseText);

            const rate = response.rates.TRY
            const amount = Number(document.getElementById("amount").value);
            document.getElementById("tl").value = amount * rate;

        }

    }

    xhr.send();


}