
var score=0;
var user = [];

  function disp() {
      var s = $("#s");

      s.html(function () {
          return "YOUR SCORE IS : " + score;
          ;
      });
  }

  function updateScore()
  {
      score=0;
      user=['1','4','11','14','18', '21','24','29','32','39'];
    for(var i=0;i<10;i++)
    {
        if($('#'+user[i]).is(":checked"))
          score++;
    }

    disp();
  }
