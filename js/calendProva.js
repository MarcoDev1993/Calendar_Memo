let Calendario = (function(){



    // creazione della struttura tabellare
    function creation_structure_Table(mese, anno, giorniMesePrecedente, giorniMese){
        var celleTotali = giorniMesePrecedente + giorniMese;
        var gg = 1;
        var day=1;
        while (gg<=celleTotali) {
            var tr = document.createElement("tr");
            tbody.appendChild(tr);
            for(var i=0; i<=6; i++){
            gg++;
            var td = document.createElement("td");
            tr.appendChild(td);
            var div = document.createElement("div");
            div.classList.add("dayFrame");
            div.classList.add("mostly-customized-scrollbar");
            td.appendChild(div);
            var divDate = document.createElement("div");
            divDate.classList.add("divDate");
            div.appendChild(divDate);
            if (giorniMesePrecedente === 0) {
                tdDate(mese, anno, div, day);
                ActualDay(div);
                divDate.innerHTML=day++; 
            }else if(gg < giorniMesePrecedente+2){
                divDate.innerHTML="";                    
            }else{
                tdDate(mese, anno, div, day);
                ActualDay(div);
                day==0 ? day++ : divDate.innerHTML=day++;
            }
            if (day > giorniMese) {
                return;
            }
        }   
        }
    }

    function ActualDay(div){
        var da = new Date();
        var me = "0" + (da.getMonth() + 1);
        var an = da.getFullYear();
        var gi = da.getDate();
        gi.toString().length == 1 ? gi = "0" + gi.toString() : "" + gi.toString();
        var dataAttuale = gi + "/" + me + "/" + an;
        if (div.parentElement.getAttribute("data-date") == dataAttuale) {
            div.parentElement.style.backgroundColor = "#00008b";
            div.style.backgroundColor = "#00008b";
            div.style.color = "white";
            document.getElementsByTagName("select")[1].value = me;
        }
    }

    function tdDate(mese, anno, div, day){
        let data_date = day + "/" + mese + "/" + anno;
        data_date.length == 9 ? data_date = "0" + data_date : data_date;
        div.parentElement.setAttribute("data-date", data_date);   
    }

    
    function searchInitDay(mese, anno, giorniMese){
        var initDay = GetDayofWeek("01", mese, anno);
        var td = document.getElementsByTagName("td");
        var giorniMesePrecedente = -1;
        for (const key in td) {
            if (Object.hasOwnProperty.call(td, key)) {
                const InitDayCell_Id = td[key].id;
                giorniMesePrecedente++;
                if (initDay == InitDayCell_Id) {
                    creation_structure_Table(mese, anno, giorniMesePrecedente, giorniMese);
                }
            }
        }
    }

    function DaysInMonth(mese, anno){
        var d = (y, m) => new Date(y, m, 0).getDate();
        return d(anno, mese);
    }


    // riempimento della tabella con i dati memorizzati in DB WebSql

    function fill_Table(event){
        var table = document.getElementById("table");
        var tcorpo = table.lastElementChild;
        var d = new Date();
        var me = "0" + (d.getMonth() + 1);
        var an = d.getFullYear();
        var gi = d.getDate();
        var dataAttuale = gi + "/" + me + "/" + an;
        dataAttuale.length == 9 ? dataAttuale = "0" + dataAttuale : dataAttuale;

        creation_row_Table(tcorpo, event);
        
    }

    function creation_row_Table(tcorpo, event){
        for (let index = 0; index < tcorpo.childNodes.length; index++) {
            const tr = tcorpo.childNodes[index];
            creation_cell_Tables(tr, event);
        }
    }

    function creation_cell_Tables(tr, event){ 
        for (let i = 0; i < tr.childNodes.length; i++) {
            const td = tr.childNodes[i];
            fill_cell_Table(td, event); 
        }
    }

    function fill_cell_Table(td, event){
        for (var ind = 0; ind < event.length; ind++) {
            var element = event[ind].dataEvento;  
            var el = element;
            var data_data = td.childNodes[0].parentElement.getAttribute("data-date");
            if (data_data == el) {
                var a = event[ind].titolo;
                var divContent = document.createElement("div");
                divContent.setAttribute("id", event[ind].id);
                divContent.classList.add("divContent");
                td.childNodes[0].appendChild(divContent);
                divContent.innerHTML += a;
            }          
        }
    }


    return {
        init: function(mese, anno, evento){
            document.getElementById("tbody").innerHTML= "";
            var tbody = document.getElementById("tbody");
            var giorni = ["LUNEDI", "MARTEDI", "MERCOLEDI", "GIOVEDI", "VENERDI", "SABATO", "DOMENICA"]; 
            var giorniMese = DaysInMonth(mese, anno);
            searchInitDay(mese, anno, giorniMese);
            fill_Table(evento);
        }
    }
})();
