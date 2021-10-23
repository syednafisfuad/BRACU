let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = 
[

    'Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.',
    'We must not allow other people’s limited perceptions to define us.',
    'Do what you can, with what you have, where you are.',
    'Be yourself; everyone else is already taken.',
    'This above all: to thine own self be true.',
    'If you cannot do great things, do small things in a great way.',
     'If opportunity doesn’t knock, build a door.',    
     'Strive not to be a success, but rather to be of value.',
     'Do not let what you cannot do interfere with what you can do.',
     'I haven’t failed. I’ve just found 10,000 ways that won’t work.',
];

btn.addEventListener('click',function(){
   var randomQuote=quotes[Math.floor(Math.random() * quotes.length)]
   output.innerHTML=randomQuote;


})







function red()
{
    document.getElementById('container').style.backgroundColor="red";
    document.getElementById('container').style.borderColor="violet";
}

function green()
{
    document.getElementById('container').style.backgroundColor="green";
    document.getElementById('container').style.borderColor="red";
}

function yellow()
{
    document.getElementById('container').style.backgroundColor="yellow";
    document.getElementById('container').style.borderColor="green";
}

function lawngreen()
{
    document.getElementById('container').style.backgroundColor="lawngreen";
    document.getElementById('container').style.borderColor="blue";
}


  function convert()
  {
  var button=document.getElementById('button');
  var result=document.getElementById('result');

  button.addEventListener('click',function()
  {
     var input=document.getElementById('weightInput').value;
     var choice=document.getElementById('choice').value;

     if(choice=="kg"){
         
         result.innerHTML=(input*0.45359237).toFixed(4)+" kilograms";
     }
     else if(choice=="lb"){
         result.innerHTML=(input*2.2046).toFixed(4)+" pounds";
     }

    })
  }





    function calculate() {
        var values = document.getElementById('box1').value.split(/,/g);
        var sum = values.reduce(function(a, b) { return parseInt(a) + parseInt(b); });
        document.querySelector('#max').innerHTML = values.max();
        document.querySelector('#min').innerHTML = values.min();
        document.querySelector('#sum').innerHTML = sum;
        document.querySelector('#avg').innerHTML = sum / values.length;
        document.querySelector('#reverse').innerHTML = values.reverse().join(',');
      }
      
      Array.prototype.max = function() {
        return Math.max.apply(null, this);
      };
      
      Array.prototype.min = function() {
        return Math.min.apply(null, this);
      };






 
      
      function clearAll() {
        document.getElementById("textarea1").value = "";
    }

 
    function capital()
    {
        var x=document.getElementById("textarea1");
        x.value=x.value.toUpperCase();
    }

    








    










