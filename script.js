document.getElementById("Search").onclick = function() {myFunction()};
function myFunction() {

    var coins = document.getElementsByName('coin');
    var value;
    for(var i = 0; i < coins.length; i++) {
        if (coins[i].checked) {
            value = coins[i].value;
        }


            var cb = "&callback=JSON_CALLBACK";
            var url = " https://api.coinmarketcap.com/v1/ticker/";
            var theUrl = url + value + "/";

    }

    Function(theUrl);

}
    function Function(theUrle){

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var c = JSON.parse(this.responseText, (key, value)  => {
                return value;
        });


        var details=['name','symbol','rank','price_usd','available_supply','max_supply','percent_change_1h','percent_change_24h','percent_change_7d'];
                for(i=0; i<9; i++){

                    var coin_details=[c[0].name,c[0].symbol,c[0].rank,c[0].price_usd,c[0].available_supply,c[0].max_supply,c[0].percent_change_1h,c[0].percent_change_24h,c[0].percent_change_7d];
                    var p = document.createElement("p");
                    var n = document.createTextNode(coin_details[i]);
                    p.appendChild(n);
                    a=details[i];
                    var element = document.getElementById(a);
                    element.appendChild(p);

                }




        }
    };
    xmlhttp.open("GET", theUrle, true);
    xmlhttp.send();

}






