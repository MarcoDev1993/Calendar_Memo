class Calendario{
    constructor(mese, anno, event){
        this.mese = mese;
        this.anno = anno;
        this.event = event;
    }
    getMese(){
        return this.mese;
    }
    setMese(mese){
        this.mese = mese;
    }
    getAnno(){
        return this.anno;
    }
    setAnno(anno){
        this.anno = anno;
    }
    getEvent(){
        return this.event;
    }
    setEvent(event){
        this.event = event;
    }
    DaysInMonth(mese, anno){
        var d = (y, m) => new Date(y, m, 0).getDate();
        return d(anno, mese);
    }
    format(d){
        var a = d.substring(0,4);
        var m = d.substring(5,7);
        var g = d.substring(8,10);
        var dataFormat = g + "/" + m + "/" + a;
        return dataFormat;
    }
    ActualDay(div){
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
    tdDate(div, day){
        let data_date = day + "/" + this.getMese() + "/" + this.getAnno();
        data_date.length == 9 ? data_date = "0" + data_date : data_date;
        div.parentElement.setAttribute("data-date", data_date);   
    }
    fillTable(giorniMesePrecedente, giorniMese){
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
            /* creazione e posizionamento DIV celle */
            var div = document.createElement("div");
            div.classList.add("dayFrame");
            div.classList.add("mostly-customized-scrollbar");
            td.appendChild(div);
            /****************************************/
            /* creazione e posizionamento DIV data*/
            var divDate = document.createElement("div");
            divDate.classList.add("divDate");
            div.appendChild(divDate);
            /****************************************/
            /* creazione e posizionamento DIV content*/
            /*
            var divContent = document.createElement("div");
            divContent.classList.add("divContent");
            div.appendChild(divContent);
            */
            /****************************************/
            if (giorniMesePrecedente === 0) {
                this.tdDate(div, day);
                this.ActualDay(div);
                divDate.innerHTML=day++; 
            }else if(gg < giorniMesePrecedente+2){
                divDate.innerHTML="";                    
            }else{
                this.tdDate(div, day);
                this.ActualDay(div);
                day==0 ? day++ : divDate.innerHTML=day++;
            }
            if (day > giorniMese) {
                return;
            }
        }   
        }
    }
    searchInitDay(giorniMese){
        var initDay = GetDayofWeek("01", this.getMese(), this.getAnno());
        var td = document.getElementsByTagName("td");
        var giorniMesePrecedente = -1;
        for (const key in td) {
            if (Object.hasOwnProperty.call(td, key)) {
                const InitDayCell_Id = td[key].id;
                giorniMesePrecedente++;
                if (initDay == InitDayCell_Id) {
                    this.fillTable(giorniMesePrecedente, giorniMese);
                }
            }
        }
    }
    
    scrivereTabella(){
        var table = document.getElementById("table");
        var tcorpo = table.lastElementChild;
        var d = new Date();
        var me = "0" + (d.getMonth() + 1);
        var an = d.getFullYear();
        var gi = d.getDate();
        var dataAttuale = gi + "/" + me + "/" + an;
        dataAttuale.length == 9 ? dataAttuale = "0" + dataAttuale : dataAttuale;
        for (let index = 0; index < tcorpo.childNodes.length; index++) {
            const tr = tcorpo.childNodes[index];
            for (let i = 0; i < tr.childNodes.length; i++) {
                const td = tr.childNodes[i];
                for (var ind = 0; ind < this.getEvent().length; ind++) {
                    var element = this.getEvent()[ind].dataEvento;  
                    console.log(element);
                    //var el = this.format(element);
                    var el = element;
                    var data_data = td.childNodes[0].parentElement.getAttribute("data-date");
                    //console.log(data_data);
                    //console.log(el);
                    if (data_data == el) {
                        var a = this.getEvent()[ind].titolo;
                        var divContent = document.createElement("div");
                        divContent.setAttribute("id", this.getEvent()[ind].id);
                        divContent.classList.add("divContent");
                        td.childNodes[0].appendChild(divContent);
                        divContent.innerHTML += a;
                    }          
                } 
            } 
        }  
    }

    init(){
        document.getElementById("tbody").innerHTML= "";
        var tbody = document.getElementById("tbody");
        var giorni = ["LUNEDI", "MARTEDI", "MERCOLEDI", "GIOVEDI", "VENERDI", "SABATO", "DOMENICA"]; 
        var giorniMese = this.DaysInMonth(this.getMese(), this.getAnno());
        this.searchInitDay(giorniMese);
        this.scrivereTabella();
    }
}

