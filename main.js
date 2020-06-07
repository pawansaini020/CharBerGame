// @Author : Pawan_Saini
// @Github : pawanmawata020





function helpbtn(){
	document.getElementById("help-div").style.display = "block";
    document.getElementById("game-div").style.display = "none";
}

function backbtn(){
	document.getElementById("help-div").style.display = "none";
    document.getElementById("game-div").style.display = "block";
}







var N_SIZE=3,EMPTY='...',boxes=[],turn='X',moves;
var N_MAX_MOVES=6, prev_Erase;
var check_Matrix=[0, 0, 0, 0, 0, 0, 0, 0, 0];


// make the board and start

function init(){

	var identifier =0;

	var box1=document.getElementById('box1');
	var box2=document.getElementById('box2');
	var box3=document.getElementById('box3');
	var box4=document.getElementById('box4');
	var box5=document.getElementById('box5');
	var box6=document.getElementById('box6');
	var box7=document.getElementById('box7');
	var box8=document.getElementById('box8');
	var box9=document.getElementById('box9');

	for(var i=0;i<N_SIZE;i++){

		for(var j=0;j<N_SIZE;j++){

			var cell;

			if(i==0 & j==0){ cell = box1;}
			else if(i==0 & j==1){ cell = box2;}
			else if(i==0 & j==2){ cell = box3;}
			else if(i==1 & j==0){ cell = box4;}
			else if(i==1 & j==1){ cell = box5;}
			else if(i==1 & j==2){ cell = box6;}
			else if(i==2 & j==0){ cell = box7;}
			else if(i==2 & j==1){ cell = box8;}
			else if(i==2 & j==2){ cell = box9;}



			cell.identifier=identifier;//know 
			boxes.push(cell);
			identifier+=+1;
		}
	}
	

	startNewGame();

}


// new game

function startNewGame(){
	
	for(var i=0;i<N_SIZE*N_SIZE;i++){
		check_Matrix[i]=0;
	}
	
	prev_Erase=-1;
	moves=0;
	turn='X';
	boxes.forEach(function (square){// learn
		square.innerHTML=EMPTY;
	})
	boxes.forEach(function (square){// learn
		square.addEventListener('click',set);//clicking event is add
	})
	document.getElementById('turn').textContent='Player '+turn;
}


//win or lose
function win(clicked){

	// all the cell classes
	if((check_Matrix[0]==1 & check_Matrix[1]==1 & check_Matrix[2]==1)|(check_Matrix[0]==2 & check_Matrix[1]==2 & check_Matrix[2]==2)){
		return true;
	}
	else if((check_Matrix[3]==1 & check_Matrix[4]==1 & check_Matrix[5]==1)|(check_Matrix[3]==2 & check_Matrix[4]==2 & check_Matrix[5]==2)){
		return true;
	}
	else if((check_Matrix[6]==1 & check_Matrix[7]==1 & check_Matrix[8]==1)|(check_Matrix[6]==2 & check_Matrix[7]==2 & check_Matrix[8]==2)){
		return true;
	}
	else if((check_Matrix[0]==1 & check_Matrix[3]==1 & check_Matrix[6]==1)|(check_Matrix[0]==2 & check_Matrix[3]==2 & check_Matrix[6]==2)){
		return true;
	}
	else if((check_Matrix[1]==1 & check_Matrix[4]==1 & check_Matrix[7]==1)|(check_Matrix[1]==2 & check_Matrix[4]==2 & check_Matrix[7]==2)){
		return true;
	}
	else if((check_Matrix[2]==1 & check_Matrix[5]==1 & check_Matrix[8]==1)|(check_Matrix[2]==2 & check_Matrix[5]==2 & check_Matrix[8]==2)){
		return true;
	}
	else if((check_Matrix[0]==1 & check_Matrix[4]==1 & check_Matrix[8]==1)|(check_Matrix[0]==2 & check_Matrix[4]==2 & check_Matrix[8]==2)){
		return true;
	}
	else if((check_Matrix[2]==1 & check_Matrix[4]==1 & check_Matrix[6]==1)|(check_Matrix[2]==2 & check_Matrix[4]==2 & check_Matrix[6]==2)){
		return true;
	}
	else{
		return false;
	}
	return false;
}


// set when clicked as well change the turn

function set(){
	if(this.innerHTML !=EMPTY){
		if(moves==N_MAX_MOVES ){
			if(this.innerHTML==turn ){
				if(this.identifier==0 &(check_Matrix[1]==0 | check_Matrix[3]==0 | check_Matrix[4]==0)){
					
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					moves -=1;
					prev_Erase=this.identifier;
				}
				else if(this.identifier==1 &(check_Matrix[0]==0 | check_Matrix[2]==0 | check_Matrix[4]==0)){
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					moves -=1;
					prev_Erase=this.identifier;
				}
				else if(this.identifier==2 &(check_Matrix[1]==0 | check_Matrix[4]==0 | check_Matrix[5]==0)){
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					moves -=1;
					prev_Erase=this.identifier;
				}
				else if(this.identifier==3 &(check_Matrix[0]==0 | check_Matrix[4]==0 | check_Matrix[6]==0)){
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					moves -=1;
					prev_Erase=this.identifier;
				}
				else if(this.identifier==4 &(check_Matrix[0]==0 | check_Matrix[1]==0 | check_Matrix[2]==0 | check_Matrix[3]==0 | check_Matrix[5]==0 | check_Matrix[6]==0 | check_Matrix[7]==0 | check_Matrix[8]==0)){
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					moves -=1;
					prev_Erase=this.identifier;
				}
				else if(this.identifier==5 &(check_Matrix[2]==0 | check_Matrix[4]==0 | check_Matrix[8]==0)){
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					moves -=1;
					prev_Erase=this.identifier;
				}
				else if(this.identifier==6 &(check_Matrix[3]==0 | check_Matrix[4]==0 | check_Matrix[7]==0)){
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					moves -=1;
					prev_Erase=this.identifier;
				}
				else if(this.identifier==7 &(check_Matrix[4]==0 | check_Matrix[6]==0 | check_Matrix[8]==0)){
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					moves -=1;
					prev_Erase=this.identifier;
				}
				else if(this.identifier==8 &(check_Matrix[4]==0 | check_Matrix[5]==0 | check_Matrix[7]==0)){
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					moves -=1;
					prev_Erase=this.identifier;
				}
				else{
					document.getElementById('turn').textContent='Select Another Box That Can Move';					
				}
				
			}
			else{
				document.getElementById('turn').textContent='Select Your Own Box';
			}
		}
		else{
			document.getElementById('turn').textContent='Click On Empty Box';	
		}
	
	}
	else{
		if(moves<N_MAX_MOVES){
			if(prev_Erase==-1){
				console.log(this);
				this.innerHTML=turn;
				
				moves +=1;
				if(turn=='X'){
					check_Matrix[this.identifier]=1;
				}
				else{
					check_Matrix[this.identifier]=2;
				}
				
				
				if(win(this)){
					
					document.getElementById('turn').textContent='Player '+turn+' is the WINNER';
					
					boxes.forEach(function (square){// learn
					square.removeEventListener('click',set);//clicking event is removed
					})
					
		

				}
				else{
					turn = turn === 'X' ? 'O' : 'X';
					document.getElementById('turn').textContent='Player '+turn;
				}
			}
			else{
				if(prev_Erase==0 &(this.identifier==1 | this.identifier==3 | this.identifier==4)){
					console.log(this);
					this.innerHTML=turn;
					
					moves +=1;
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
					}
					else{
						check_Matrix[this.identifier]=2;
					}

					if(win(this)){
		
						document.getElementById('turn').textContent='Player '+turn+' is the WINNER';

						boxes.forEach(function (square){// learn
						square.removeEventListener('click',set);//clicking event is removed
						})
					
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(prev_Erase==1 &(this.identifier==0 | this.identifier==2 | this.identifier==4)){
					console.log(this);
					this.innerHTML=turn;
					
					moves +=1;
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
					}
					else{
						check_Matrix[this.identifier]=2;
					}
					if(win(this)){
		
						document.getElementById('turn').textContent='Player '+turn+' is the WINNER';

						boxes.forEach(function (square){// learn
						square.removeEventListener('click',set);//clicking event is removed
						})
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(prev_Erase==2 &(this.identifier==1 | this.identifier==4 | this.identifier==5)){
					console.log(this);
					this.innerHTML=turn;
					
					moves +=1;
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
					}
					else{
						check_Matrix[this.identifier]=2;
					}

					if(win(this)){
		
						document.getElementById('turn').textContent='Player '+turn+' is the WINNER';

						boxes.forEach(function (square){// learn
						square.removeEventListener('click',set);//clicking event is removed
						})
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(prev_Erase==3 &(this.identifier==0 | this.identifier==4 | this.identifier==6)){
					console.log(this);
					this.innerHTML=turn;
					
					moves +=1;
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
					}
					else{
						check_Matrix[this.identifier]=2;
					}

					if(win(this)){
		
						document.getElementById('turn').textContent='Player '+turn+' is the WINNER';

						boxes.forEach(function (square){// learn
						square.removeEventListener('click',set);//clicking event is removed
						})
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(prev_Erase==4 &(this.identifier==0 | this.identifier==1 | this.identifier==2 | this.identifier==3 | this.identifier==5 | this.identifier==6 | this.identifier==7 | this.identifier==8)){
					console.log(this);
					this.innerHTML=turn;
					
					moves +=1;
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
					}
					else{
						check_Matrix[this.identifier]=2;
					}

					if(win(this)){
		
						document.getElementById('turn').textContent='Player '+turn+' is the WINNER';

						boxes.forEach(function (square){// learn
						square.removeEventListener('click',set);//clicking event is removed
						})
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(prev_Erase==5 &(this.identifier==2 | this.identifier==4 | this.identifier==8)){
					console.log(this);
					this.innerHTML=turn;
					
					moves +=1;
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
					}
					else{
						check_Matrix[this.identifier]=2;
					}

					if(win(this)){
		
						document.getElementById('turn').textContent='Player '+turn+' is the WINNER';

						boxes.forEach(function (square){// learn
						square.removeEventListener('click',set);//clicking event is removed
						})
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(prev_Erase==6 &(this.identifier==3 | this.identifier==4 | this.identifier==7)){
					console.log(this);
					this.innerHTML=turn;
					
					moves +=1;
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
					}
					else{
						check_Matrix[this.identifier]=2;
					}

					if(win(this)){
		
						document.getElementById('turn').textContent='Player '+turn+' is the WINNER';

						boxes.forEach(function (square){// learn
						square.removeEventListener('click',set);//clicking event is removed
						})
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(prev_Erase==7 &(this.identifier==4 | this.identifier==6 | this.identifier==8)){
					console.log(this);
					this.innerHTML=turn;
					
					moves +=1;
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
					}
					else{
						check_Matrix[this.identifier]=2;
					}

					if(win(this)){
		
						document.getElementById('turn').textContent='Player '+turn+' is the WINNER';

						boxes.forEach(function (square){// learn
						square.removeEventListener('click',set);//clicking event is removed
						})
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(prev_Erase==8 &(this.identifier==4 | this.identifier==5 | this.identifier==7)){
					console.log(this);
					this.innerHTML=turn;
					
					moves +=1;
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
					}
					else{
						check_Matrix[this.identifier]=2;
					}

					if(win(this)){
		
						document.getElementById('turn').textContent='Player '+turn+' is the WINNER';

						boxes.forEach(function (square){// learn
						square.removeEventListener('click',set);//clicking event is removed
						})
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else{
					document.getElementById('turn').textContent='Select A Neighbour Of Erased Box';			
				}
				
			}


		}
		else{
		
				document.getElementById('turn').textContent='Select Your Own Block To Next Move';

			
		}
	}


}


init();


