let range=parseInt(prompt("enter the number"))

if(range==1){
	document.write("1")
}
else{
	document.write("1<br>");
	for(i=2;i<range;i++){
		for(j=2;i%j!==0;j++){
				
		}
		if(i==j){
			document.write(j+"</br>")
		}
	}
}