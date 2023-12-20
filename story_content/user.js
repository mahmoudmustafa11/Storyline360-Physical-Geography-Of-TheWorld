function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6OcYnKnMSh9":
        Script1();
        break;
      case "5uahBmwjFZG":
        Script2();
        break;
      case "6j2kbL8JVDP":
        Script3();
        break;
  }
}

function Script1()
{
  var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1; // Months are zero-based
var year = today.getFullYear();

var currentDate = day + '/' + month + '/' + year;

var player = GetPlayer();
player.SetVar("CurrentDate", currentDate);
}

function Script2()
{
  var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1; // Months are zero-based
var year = today.getFullYear();

var currentDate = day + '/' + month + '/' + year;

var player = GetPlayer();
player.SetVar("CurrentDate2", currentDate);
}

function Script3()
{
  var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1; // Months are zero-based
var year = today.getFullYear();

var currentDate = day + '/' + month + '/' + year;

var player = GetPlayer();
player.SetVar("CurrentDate3", currentDate);
}

