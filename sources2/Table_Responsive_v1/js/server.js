console.log('online');

function sortTable() {

    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    /*Make a loop that will continue until no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the first, which contains table headers):*/

        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare, one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("td")[0];
            y = rows[i + 1].getElementsByTagName("td")[0];

            //check if the two rows should switch place:
            if (parseInt(x.textContent) > parseInt(y.textContent)) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }


    
};

function compare_unis() {
    var element = document.querySelector('.hiddentext');
    element.classList.toggle("hiddentext");
    element.classList.toggle("mystyle");
}

function compare() {
    var check_array = [];
    var size;
    size = document.getElementById("myTable")
    
    for (i = 0; i < size.length; i++) {
        if (document.getElementById(`uni_${i}`).checked = true) {
            x = getElementsByTagName("td")[1];
            console.log(x);
            check_array.push(x);
        } 
    }
}