

var base={
	
	list : [["0"],["1"],["2"],["3"],["4"],["5"],["6"],["7"],["8"],["9"]],
	
	listType:[["question"],["size"],["hd"],["tail"],["hdoftail"],["append"]],
	
	question:"",
	arrayQuestion:[],
	questionSize:0,
	hd:"",
	lt:"",
	hdoftail:"",
	
	
	
}





/*
*Generates a random integer
*/
 base.getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

 base.clear = function(){
	 this.question="";
	 this.hd="";
	 this.tail="";
	 this.hdoftail="";
 }

/*
*Generates a random Question
*/
base.generateRandomQuestion = function(){
	
	this.question="xs = [ ";
	
	this.questionSize=this.getRandomInt(0,6);
	
	
	for(var i=0;i<this.questionSize;i++){
		
		var randomInt=this.getRandomInt(0,9);
		
		this.arrayQuestion[i]=this.list[randomInt];
		
		this.question=this.question+this.arrayQuestion[i];
		
		
		if(i+1!=this.questionSize){
						
			this.question=this.question+" , ";
			
		}
	}
	
	this.question=this.question+" ]";
}



base.getHead = function(){
	
	if(this.arrayQuestion[0]!=null)
	return this.arrayQuestion[0];
	return null;
}



base.getTail = function(){
	var temp="[ ";
	
	if(this.questionSize!=0){
	for(var i=1;i<this.questionSize;i++){
		
		temp=temp+this.arrayQuestion[i];
		
		if(i+1!=this.questionSize)
			temp=temp+",";
		
	}
	
	temp=temp+" ]";
	
	}
return temp;	
}


base.generateListAnswers = function(){
	
	
	this.generateRandomQuestion();
	var hd=this.getHead();
	var tail=this.getTail();
	var hdoftail1="";
	
	if(tail.length>0){
		hdoftail1=tail[2];
		
	}
	
	this.hd=hd;
	this.lt=tail;
	this.hdoftail=hdoftail1;
	
}

base.generateResult= function(){
	this.clear();
	this.generateListAnswers();
	

	
}

