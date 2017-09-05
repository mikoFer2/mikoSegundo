/*CÓDIGO EDITADO POR MICHAEL FERNANDEZ ORTEGA.*/

console.log("Hola");

//VARIABLES LOCALES

    var diasEnero = {"firstWeekDay": "sun", "days": 31}
    var eventosEnero = [];
    var diasFebrero = {"firstWeekDay": "wed", "days": 28}
    var eventosFebrero = [];
    var diasMarzo = {"firstWeekDay": "wed", "days": 31}
    var eventosMarzo = [];
    var diasAbril = {"firstWeekDay": "sat", "days": 30}
    var eventosAbril = [];
    var diasMayo = {"firstWeekDay": "mon", "days": 31}
    var eventosMayo = [];
    var diasJunio = {"firstWeekDay": "thu", "days": 30}
    var eventosJunio = [];
    var diasJulio = {"firstWeekDay": "sat", "days": 31}
    var eventosJulio = [];
    var diasAgosto = {"firstWeekDay": "tue", "days": 31}
    var eventosAgosto = [];
    var diasSeptiembre = {"firstWeekDay": "fri", "days": 30}
    var eventosSeptiembre = [];
    var diasOctubre = {"firstWeekDay": "sun", "days": 31}
    var eventosOctubre = [];
    var diasNoviembre = {"firstWeekDay": "wed", "days": 30}
    var eventosNoviembre = [];
    var diasDiciembre = {"firstWeekDay": "fri", "days": 31}
    var eventosDiciembre = [];
/*-----------------------------------------------------------------------------------------------------------*/
//
    
    function primerDia(selectedMonth)
    {
        switch(parseInt(selectedMonth))
        {
            case 0: return 6;
            case 1: return 2;
            case 2: return 2;
            case 3: return 5;
            case 4: return 0;
            case 5: return 3;
            case 6: return 5;
            case 7: return 2;
            case 8: return 4;
            case 9: return 6;
            case 10: return 2;
            case 11: return 4;
        }
    }


/*-----------------------------------------------------------------------------------------------------------*/
//

    function eventos(month)
    {
    	switch(parseInt(month))
        {
            case 0: return eventosEnero;
            case 1: return eventosFebrero;
            case 2: return eventosMarzo;
            case 3: return eventosAbril;
            case 4: return eventosMayo;
            case 5: return eventosJunio;
            case 6: return eventosJulio;
            case 7: return eventosAgosto;
            case 8: return eventosSeptiembre;
            case 9: return eventosOctubre;
            case 10: return eventosNoviembre;
            case 11: return eventosDiciembre;
        }
    }
/*---------------------------------------------------------------------------------------------------------*/
//
    function diasDelMes(selectedMonth)
    {
        switch(parseInt(selectedMonth)) 
        {
            case 0: return diasEnero.days;
            case 1: return diasFebrero.days;
            case 2: return diasMarzo.days;
            case 3: return diasAbril.days;
            case 4: return diasMayo.days;
            case 5: return diasJunio.days;
            case 6: return diasJulio.days;
            case 7: return diasAgosto.days;
            case 8: return diasSeptiembre.days;
            case 9: return diasOctubre.days;
            case 10: return diasNoviembre.days;
            case 11: return diasDiciembre.days;
        }
    }
/*---------------------------------------------------------------------------------------------------------*/
//Elimina el contenido del eventText.

    function eliminarContenido(mes,dia)
    {
    	if(confirm("Desea eliminar el Evento?"))
    	{
    		eventos(mes)[dia] = null;
    	}
    }

/*-----------------------------------------------------------------------------------------------------------*/
//
    
    function addEventToDay(month, day) 
    {
        console.log(month + " " + day);
        var eventText;
            console.log(eventText);
		if(eventos(month)[day] == null)
		{
			eventText = window.prompt("Ingrese texto del evento: ");
		}
        /* El chequeo de eventText es obligatorio */
       
        if(eventText) 
        {
       	    eventos(month)[day] = eventText;
        }
        else if(eventos(month)[day])
        {
            eliminarContenido(month,day);
        }

        renderSelectedMonth(month);
    }

/*-----------------------------------------------------------------------------------------------------------*/
//    
    
    function getHTMLForMonthDay(month, day) 
    {
        var dayId = day;
        var dayHTML = "<td id=\"" + dayId + "\" ";
        dayHTML += "onclick=\"addEventToDay(" + month + "," + day + ")\">";
        dayHTML += day;

	        if(eventos(month)[day]) 
	        
	        {
	        dayHTML += "<hr/>";
	        dayHTML += eventos(month)[day];
	        }
	        
        dayHTML += "</td>";
        return dayHTML;
    }

/*-----------------------------------------------------------------------------------------------------------*/
//
    
    function funcionVacio(month, day) {
        var asd = "<td></td>";
        return asd;
    }

/*-----------------------------------------------------------------------------------------------------------*/
//   

    function getHTMLForMonthTable(selectedMonth) 
    {
        /*
        El valor de weekDayIdx debe cambiar
        si el primer dia del mes  no es lunes
        */
        var weekDayIdx = primerDia(selectedMonth);
        var newHTML = "";
        var newSemanaHTML = "";
        var vacio = "";
        

        for (var indice = 0; indice < weekDayIdx; indice++) 
        {
            newSemanaHTML += funcionVacio(selectedMonth,vacio);   
        }



        for(var i = 1; i <= diasDelMes(selectedMonth); i++) 
        {
            if(weekDayIdx == 0) {
                newSemanaHTML += "<tr>";
        }

        newSemanaHTML += getHTMLForMonthDay(selectedMonth, i);

        if(weekDayIdx == 6 || (i + 1) > diasDelMes(selectedMonth)) {
            newSemanaHTML += "</tr>";
            newHTML += newSemanaHTML;
            newSemanaHTML = "";
        }
        
            weekDayIdx = (weekDayIdx + 1) % 7;	
        }

        return newHTML;
    }

/*-----------------------------------------------------------------------------------------------------------*/
//

    function getMonthName(month) {
        switch(parseInt(month)) {
        case 0: return "Enero";
        case 1: return "Febrero";
        case 2: return "Marzo";
        case 3: return "Abril";
        case 4: return "Mayo";
        case 5: return "Junio";
        case 6: return "Julio";
        case 7: return "Agosto";
        case 8: return "Septiembre";
        case 9: return "Octubre";
        case 10: return "Noviembre";
        case 11: return "Diciembre";
        }

        throw new Error("No existe mes con indice: " + month);
    }

/*-----------------------------------------------------------------------------------------------------------*/
//

    function renderSelectedMonth(selectedMonth) {
        console.log(selectedMonth);

        var monthName = getMonthName(selectedMonth);
        console.log(monthName);

        // Ver: http://stackoverflow.com/questions/13775519/html-draw-table-using-innerhtml
        var newHTML = "";
        newHTML += "<h1>Mes: " + monthName + "</h1>";
        newHTML += "<table>";    
        newHTML += "<tr>";
        newHTML += "<th>Lunes</th>";
        newHTML += "<th>Martes</th>";
        newHTML += "<th>Miercoles</th>";
        newHTML += "<th>Jueves</th>";
        newHTML += "<th>Viernes</th>";
        newHTML += "<th>Sabado</th>";
        newHTML += "<th>Domingo</th>";
        newHTML += "</tr>";

        /*
        Aqui usted debe renderizar la tabla con los dias del mes
        Utilice la información en el objeto 'diasMayo' o el que
        corresponda según el mes seleccionado.

        A modo de demostración, el siguiente código renderiza
        la tabla con el mes de Mayo.
        */

        newHTML += getHTMLForMonthTable(selectedMonth);

        /* Fin de la tabla */
        newHTML += "</table>";

        /* Actualizamos el innerHTML del div currentMonth */
        var monthDiv = document.getElementById("currentMonth");    
        monthDiv.innerHTML = newHTML;
    }
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
