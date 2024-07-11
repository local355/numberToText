console.log("numberToText")



function Puluhan(number) {
		result = ""
		if ((number[number.length - 2] == 1) && (number[number.length - 1] == 0)) {
			result = satuan[number]
			//console.log('1')
		}else if ((number[number.length - 2] == 1) && (number[number.length - 1] == 1)){
			result = puluhan[0]
			//console.log('2')
		}else if ((number[number.length - 2] == 1) && (number[number.length - 1] > 1)){
			result = satuan[number[number.length - 1]] + puluhan[1]
			//console.log('3')
		}else if ((number[number.length - 2] > 1) && (number[number.length - 1] == 0)){
			result = satuan[number[number.length - 2]] + puluhan[2]
			//console.log('4')
		}else if ((number[number.length - 2] > 1) && (number[number.length - 1] > 0)){
			result = satuan[number[number.length - 2]] + puluhan[2] + " " + satuan[number[number.length - 1]]
			//console.log('6')
		}else if ((number[number.length - 2] == 0) && (number[number.length - 1] == 0)){
			result = " "
			//console.log('7')
		}else{
			result = satuan[number[0]]
			//console.log('8')
		}
		return result
	}

function Ratusan(number){
	number = number.toString()

	while(number[0] == 0){
		number = number.replace(number.charAt(0), "")
	}

		result = ""
		if (number.length == 3) {
			pul = ""
			

			if (number.substring(1) != "00" && number.substring(1)[0] == "0") {
				pul = number.substring(1).replace('0','')
			}
			else{
				pul = number.substring(1)
			}


			if (number[0] == 1) {
				result = ratusan[0] + " " + Puluhan(pul)
				//console.log("r 1")
			}
			else if (number[0] > 1){
				result = satuan[number[0]] + ratusan[1] + " " + Puluhan(pul)
			}
		}
		else if(number.length < 3){
			result =  Puluhan(number)
			//console.log("r 2")
		}
		return result
	}	

function Digit(number){
	number = number.toString()
	m = []
 	n = number
	for (var i = n.length - 1; i >= 0; i--) {

		if(n.length >= 3){
			m.push(n.slice(n.length-3))
			n = n.replace(n.slice(n.length-3),'')
		}
		else if((n.length < 3) && (n.length != 0)){
			m.push(n)
			n = n.replace(n.slice(0),'')
		}
		else{
		break
		}
	
	}
	return m
	console.log(m)
}	

satuan = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", ]
puluhan = ["sebelas", "belas", "puluh"]
ratusan =["seratus","ratus"]
ribuan = ["seribu", "ribu"]

function show() {
	number = document.getElementById('num').value

	lastres = ""
	console.log(Digit(number))

	digit = Digit(number)

	txt = digit.toReversed().join().replaceAll(',','.')

	lastres = Ratusan(digit[0])

	if ((digit[digit.length - (digit.length-1)] == 1) && (digit[digit.length - (digit.length)] == "000")){
		lastres = ribuan[0]
	}
	else if((digit[digit.length - (digit.length-1)] == 1) && (digit[digit.length - (digit.length)] > 0)){
		lastres = ribuan[0] + " " + Ratusan(digit[digit.length - (digit.length)])
	}
	else if((digit[digit.length - (digit.length-1)] > 1) && (digit[digit.length - (digit.length)] == "000")){
		lastres = Ratusan(digit[digit.length - (digit.length-1)]) +  ribuan[1]
	}
	else if((digit[digit.length - (digit.length-1)] > 1) && (digit[digit.length - (digit.length)] > 0)){
		lastres = Ratusan(digit[digit.length - (digit.length-1)]) +  ribuan[1] + " " + Ratusan(digit[digit.length - (digit.length)])
	}
	

	document.getElementById('numText').textContent = lastres
	document.getElementById('textNum').innerHTML = "<b>" + txt + "</b>"
	//console.log(typeof(number))
}

c = '0000000000000000000000000300'



console.log(c)
console.log(Ratusan("08"))

