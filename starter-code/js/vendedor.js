

var g_dataObjects ;
window.onload = function () {

        loadData();
        
}

function loadData() {
        fetch(myRequest)
        .then(response => response.json())
        .then(l_data => {
                console.log(l_data)
                g_dataObjects = l_data;
        });
}