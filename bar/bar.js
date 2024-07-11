 bar = document.getElementById('file')


duration = 30000

interval = 10

 time = new Date().getTime()
 last = time + duration
 bar.max = (time + duration) - time


setInterval(function() {
	if (time < last) {
		console.log("cout..")

	}else{
		console.log("done")
	}
	time = new Date().getTime()
	bar.value = bar.value + interval
	console.log(bar.max)
	console.log(bar.value)
	console.log(new Date().getTime())
}, interval )
	