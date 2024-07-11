res = document.getElementById('resistant')
volt = document.getElementById('voltage')
curr = document.getElementById('current')
err = document.getElementById('errormsg')

function calc() {
	res.value = volt.value / curr.value
	volt.value = res.value * curr.value
	curr.value = volt.value / res.value
}

function voltage(){
	//console.log(typeof(curr.value))
	//console.log(typeof(res.value))
	console.log(volt.value)
	console.log(curr.value)
	console.log(res.value)
	if((parseFloat(curr.value) !=NaN) && (parseFloat(res.value)) != NaN){
		volt.value = parseFloat(res.value)  * parseFloat(curr.value)
		err.textContent = ""
	}else{
		err.textContent = "Current and Resistant Shuld not empty"
		volt.value = 0
	}
}

function current(){
	//console.log(typeof(curr.value))
	//console.log(typeof(res.value))
	console.log(isNaN(volt.value))
	console.log(curr.value)
	console.log(res.value)
	if((parseFloat(volt.value) !=NaN) && (parseFloat(res.value)) != NaN){
		curr.value = parseFloat(volt.value)  / parseFloat(res.value)
		err.textContent = ""
	}else{
		err.textContent = "Voltage and Resistant Shuld not empty"
		curr.value = 0
	}
}

function resistant(){
	//console.log(typeof(curr.value))
	//console.log(typeof(res.value))
	console.log(isNaN(volt.value))
	console.log(isNaN(curr.value))
	console.log(isNaN(res.value))




	if((parseFloat(volt.value) !=NaN) && (parseFloat(curr.value)) != NaN){
		res.value = parseFloat(volt.value)  / parseFloat(curr.value)
		err.textContent = ""
	}else{
		err.textContent = "Current and Voltage Shuld not empty"
		res.value = 0
	}
}