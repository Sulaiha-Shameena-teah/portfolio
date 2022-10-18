function openOrCloseTerminal(state){
	var terminalDiv = document.getElementById('terminal');
	var terminalTaskbarIcon = document.getElementById('taskbar-icon__terminal');
	if(state === 'open' && terminalDiv.style.display == 'none'){
		terminalDiv.style.display = 'block'
		terminalTaskbarIcon.style.display = 'block'
		terminalTaskbarIcon.classList.add("active");
	}
	else if(state === 'close'){
		terminalDiv.style.display = 'none'
		terminalTaskbarIcon.style.display = 'none'
		terminalTaskbarIcon.classList.remove("active");
	}
	else if(state === 'minimize'){
		terminalDiv.style.display = 'none'
		terminalTaskbarIcon.classList.remove("active");
	}
}

function padLeadingZeros(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function generateDate(){
	var today_time = document.getElementById('today_time');
	var today_date = document.getElementById('today_date');
	var current_date = new Date();


	var current_date_date = padLeadingZeros(current_date.getDate(),2)
	var current_date_month = padLeadingZeros((current_date.getMonth() + 1), 2)
	var current_date_year = current_date.getFullYear();
	today_date.innerHTML = current_date_date +'/'+ current_date_month +'/'+ current_date_year;

	var current_date_hours = padLeadingZeros(current_date.getHours(),2)
	var current_date_minutes = padLeadingZeros(current_date.getMinutes(),2)
	var current_date_seconds = padLeadingZeros(current_date.getSeconds(),2)

	today_time.innerHTML =  current_date_hours + ":" + current_date_minutes + ":" + current_date_seconds;
}


setInterval(generateDate, 1000);
