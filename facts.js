// whatsup globals?
var theGoodBits = [];
var thisOne = 0;

function startDoingThings()
{
	$('#go').click(startQuery);

	$('#next').click(function(){
						thisOne = thisOne === theGoodBits.length-1 ? 0 : thisOne+1
						haveAFact();
						});
	$('#prev').click(function(){
						thisOne = thisOne === 0 ? theGoodBits.length -1 : thisOne-1
						haveAFact();
						});

	$("#query").keyup(function(event){
	    if(event.keyCode == 13){
	        startQuery();
	    }
	});

	startQuery();
}

function startQuery()
{
	theGoodBits = [];
	var query = $('#query').val();

	var url="http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20answers.search%20where%20query%3D%22" +
			query + "%22&format=json";	

	$.ajax({
	  url: url,
	  success: function(data) { parseTheGoodBits(data, query ); haveAFact() },
	  dataType: "json"
	});
}

function parseTheGoodBits(data, query){
	if (data.query.count == 0)
	{
		theGoodBits.push({});
		theGoodBits[0].subject = query;
		theGoodBits[0].content = "But what is it???";
		theGoodBits[0].answer = "The internet doesn't know.";	
		return;
	}

	var questions = data.query.results.Question;
	for (i in questions)
	{
		theGoodBits.push({});
		theGoodBits[i].subject = questions[i].Subject;
		theGoodBits[i].content = questions[i].Content;
		theGoodBits[i].answer = questions[i].ChosenAnswer;	
	}
}

function haveAFact()
{
	// this is a lie. it isn't random at all
	$('#the-why').text(theGoodBits[thisOne].subject);
	$('#the-what').text(theGoodBits[thisOne].content);
	$('#the-how').text(theGoodBits[thisOne].answer);
}


