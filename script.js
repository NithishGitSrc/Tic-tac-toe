
  var xox = document.getElementsByClassName('xox')[0];
  var td = xox.querySelectorAll('td');
  var blockFlag = true;
  var won=false;
  var play = true;

  for (var i=0; i<td.length; i++)
  {
    td[i].addEventListener("click",function(){
      setTimeout(function() {
        
      }, 1000);
      if(!won){
      var row = this.parentNode.rowIndex;
      var col = this.cellIndex;
      if(this.innerHTML=='' && play==true){
        play = false;
      this.innerHTML='x';
      this.style.background = "black";   

      checkForWin();
      if(won){
        var userScr = document.getElementById("usrScore") .innerHTML;
        document.getElementById("usrScore") .innerHTML = 1+parseInt(userScr);
        document.getElementById('popmsg').innerHTML =  "<p><span>&#x1F3C6;</span> Won</p>";
        document.getElementById('pop').style.animation = "popAnimation 3s ease-in-out";
      return;
    }

    setTimeout(function() {
        
    
      blockFlag = true;
      move();
     
      won=false;
      checkForWin();
      if(won){
        var agentScore = document.getElementById("agentScore").innerHTML;
        document.getElementById("agentScore") .innerHTML = 1+parseInt(agentScore);
        document.getElementById('popmsg').innerHTML =  "<span>&#x1F645;</span>Lost the match</p>";
        document.getElementById('pop').style.animation = "popAnimation 3s ease-in-out";        
      return;
    }
      if(blockFlag)
      block();
      play = true;
    
    }, 400);
    }
      else
      alert('Already Marked! Choose some other Box');      
      }
      
  })
  }


  function checkForWin() {
    const table = document.querySelector('.xox');
    const cells = table.querySelectorAll('td');
    
    const combinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];
    
    
    for (const combination of combinations) {
        const [a, b, c] = combination;
        const cellA = cells[a];
        const cellB = cells[b];
        const cellC = cells[c];
        
        if (cellA.innerText !== '' && cellA.innerText === cellB.innerText && cellB.innerText === cellC.innerText) {
          for (const cell of cells) {
            cell.style.opacity = 0.5;
        }
            cellA.style.opacity = 1;           
            cellB.style.opacity = 1;
            cellC.style.opacity = 1;
            cellA.style.boxShadow = "0 0 20px 8px rgba(255, 255, 255, 0.9)";
            cellB.style.boxShadow = "0 0 20px 8px rgba(255, 255, 255, 0.9)";
            cellC.style.boxShadow = "0 0 20px 8px rgba(255, 255, 255, 0.9)";
            cellA.classList.add('win-animation');
            cellB.classList.add('win-animation');
            cellC.classList.add('win-animation');
            won = true;
        }
    }
}

document.getElementById("playAgain").addEventListener("click",function(){
  won = false
  const table = document.querySelector('.xox');
  const cells = table.querySelectorAll('td');
  for (const cell of cells) {
    cell.style.opacity = 1;
    cell.style.boxShadow = "";
    cell.innerHTML='';
    cell.style.background='white';
    cell.classList.remove('win-animation');
  }
  document.getElementById('pop').style.animation="none";
  play = true;
 })

  function move(){
    //Horizontal
    var ind=0,emty=0;
    for(var i=0;i<3;i++)
      {
        ind =0,userMrk=0;
        var tr = document.getElementsByTagName('tr')[i];
        for(var j=0;j<3;j++)
        {
            var val = tr.getElementsByTagName('td')[j].innerHTML;
            if(val==''){
              ind =(i*3) + j; ++emty;
            }
            else if(val=='x'){
              ++userMrk;
            }
        }

        if(emty==1 && userMrk==0)
        {
          document.getElementsByTagName('td')[ind].innerHTML='o';
          document.getElementsByTagName('td')[ind].style.backgroundColor="red";
          blockFlag=false;
          return ;
        }
        emty=0;
      }

      //Vertical
      for(var i=0;i<3;i++)
      {
        ind =0, userMrk=0;
        var tr = document.getElementsByTagName('tr')[i];

        for(var j=0; j<3;j++)
        {          
          var val = document.getElementsByTagName('td')[(i+(j*3))].innerHTML;
         if(val==''){
            ind = i+(j*3) ; ++emty;
          }
          else if(val=='x'){
            ++userMrk;
          }
      }

      if(emty==1 && userMrk==0)
      {
        document.getElementsByTagName('td')[ind].innerHTML='o';
        document.getElementsByTagName('td')[ind].style.backgroundColor="red";
        blockFlag=false; 
        return ;
      }
      emty=0;
      }
      
      //Diagonal
      ind=0,userMrk=0,emty=0;
      for(var i=1;i<=3;i++)
      { 
        var val = document.getElementsByTagName('td')[(i*2)].innerHTML;
        if(val==''){
           ind = i*2 ; ++emty;
         }
         else if(val=='x'){
           ++userMrk;
         }
      }

     if(emty==1 && userMrk==0)
     {
       document.getElementsByTagName('td')[ind].innerHTML='o';
       document.getElementsByTagName('td')[ind].style.backgroundColor="red";
       blockFlag=false; 
       return ;
     }

     ind=0,userMrk=0,emty=0;
     for(var i=0;i<3;i++)
     {
       var val = document.getElementsByTagName('td')[(i*4)].innerHTML;
       if(val==''){
          ind = i*4 ; ++emty;
        }
        else if(val=='x'){
          ++userMrk;
        }
     }

    if(emty==1 && userMrk==0)
    {
      document.getElementsByTagName('td')[ind].innerHTML='o';
      document.getElementsByTagName('td')[ind].style.backgroundColor="red";
      blockFlag=false; 
      return ;
    }


}  

  function block(){
    //Horizontal
    var ind=0,emty=0;
    for(var i=0;i<3;i++)
      {
        ind =0,userMrk=0;
        var tr = document.getElementsByTagName('tr')[i];
        for(var j=0;j<3;j++)
        {
            var val = tr.getElementsByTagName('td')[j].innerHTML;
            if(val==''){
              ind =(i*3) + j; ++emty;
            }
            else if(val=='x'){
              ++userMrk;
            }
        }
        if(emty==1 && userMrk==2)
        {
          document.getElementsByTagName('td')[ind].innerHTML='o';
          blockFlag=false; 
          document.getElementsByTagName('td')[ind].style.backgroundColor="red";
          return ;
        }
        emty=0;
      }

      //Vertical
      for(var i=0;i<3;i++)
      {
        ind =0, userMrk=0;
        var tr = document.getElementsByTagName('tr')[i];

        for(var j=0; j<3;j++)
        {          
          var val = document.getElementsByTagName('td')[(i+(j*3))].innerHTML;
         if(val==''){
            ind = i+(j*3) ; ++emty;
          }
          else if(val=='x'){
            ++userMrk;
          }
      }

      if(emty==1 && userMrk==2)
      {
        document.getElementsByTagName('td')[ind].innerHTML='o';
        document.getElementsByTagName('td')[ind].style.backgroundColor="red";
        blockFlag=false; 
        return ;
      }
      emty=0;
      }
      
      //Diagonal
      ind=0,userMrk=0,emty=0;
      for(var i=1;i<=3;i++)
      {
        var val = document.getElementsByTagName('td')[(i*2)].innerHTML;
        if(val==''){
           ind = i*2 ; ++emty;
         }
         else if(val=='x'){
           ++userMrk;
         }
      }

     if(emty==1 && userMrk==2)
     {
       document.getElementsByTagName('td')[ind].innerHTML='o';       
       document.getElementsByTagName('td')[ind].style.backgroundColor="red";
       blockFlag=false; 
       return ;
     }

     ind=0,userMrk=0,emty=0;
     for(var i=0;i<3;i++)
     {
       var val = document.getElementsByTagName('td')[(i*4)].innerHTML;
       if(val==''){
          ind = i*4 ; ++emty;
        }
        else if(val=='x'){
          ++userMrk;
        }
     }

    if(emty==1 && userMrk==2)
    {
      document.getElementsByTagName('td')[ind].innerHTML='o';
      document.getElementsByTagName('td')[ind].style.backgroundColor="red";
      blockFlag=false; 
return ;
    }

    //Random
    var emptyBoxs=[]
    for(var i=0;i<3;i++){
        var tr = document.getElementsByTagName('tr')[i];
        for(var j=0;j<3;j++){
            var val = tr.getElementsByTagName('td')[j].innerHTML;
            if(val==''){
              emptyBoxs.push((i*3) + j); 
              }
            }         
          }
        if(emptyBoxs.length==0){
         document.getElementById('popmsg').innerHTML = "&#x1F91E; Match Draw!";
         document.getElementById('pop').style.animation = "popAnimation 3s ease-in-out";
          return;
        }
        else{
        ind=Math.floor(Math.random() * (emptyBoxs.length-1 - 0 + 1)) + 0;
        document.getElementsByTagName('td')[emptyBoxs[ind]].innerHTML="o";
        document.getElementsByTagName('td')[emptyBoxs[ind]].style.backgroundColor="red";
    blockFlag=false; 
return ;}
}



