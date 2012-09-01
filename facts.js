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

	// default search
	loadHardcodedStuff();
	haveAFact();
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

function loadHardcodedStuff()
{	
	// all the typos are from yahoo answers and are preserved, you know, for reasons.
	theGoodBits = [
		{
		id: "20070827155017AA8GDlE",
		answer: "Yes, llamas are domesticated animals.  The best place to by a llama is from a reputable breeder who will have the llama trained to accept halter & lead, having toenails trimmed, vet work, and shearing.  Don't go looking for a 'bargain' llama, because you will most likely just be taking in someone else's problem animal.  A well behaved llama sweet, gentle, and a joy to have around.  Do a search for llama breeders in your state, I bet you will be surprised at how many you find.",
		content: "are llamas considered tamed animals? and were can i get one?",
		subject: "llamas????"
		},
		{
		id: "20090531102030AASgMak",
		answer: "of course, he'll sing the llama song:  here's a llama there's a llama and another little llama fuzzy llama funny llama llama llama duck  llama llama cheesecake llama tablet brick potato llama llama llama mushroom llama llama llama duck  i was once a treehouse i lived in a cake but i never saw the way the orange slayed the rake i was only three years dead but it told a tale and now listen, little child to the safety rail  did you ever see a llama kiss a llama on the llama llama's llama tastes of llama llama llama duck  half a llama twice the llama not a llama farmer llama llama in a car alarm a llama llama duck  is THIS how it's told now? is it all so old? is it made of lemon juice? doorknob ankle cold now my song is getting thin i've run out of luck time for me to retire now and become a duck  http://www.youtube.com/watch?v=HbPDKHXWlLQ",
		content: "do you think a llama will win american idol next year? ",
		subject: "LLAMAS?!?!!!!!!!?!!?!??!!?!?"
		},
		{
		id: "20070719153538AAoFKt0",
		answer: "I ride llamas every wednesday.  Not really, but I could. Their underbites are awesome.",
		content: "Are awesome. I want one. What about you? ",
		subject: "Llamas.....?"
		},
		{
		id: "20110409155409AAhiFeb",
		answer: "Stop feeding it chestnuts.  Try grass instead. http://library.thinkquest.org/CR0210360/llama.htm",
		content: "My daughter recently got assigned a school project to study a llamas eating habits. So i bought her one. However whenever i try to feed it a chestnut it turns periwinkle. How do i keep this from happening? ",
		subject: "How do llamas eat their chestnuts without turning periwinkle?"
		},
		{
		id: "20080927154152AATvZ5g",
		answer: "llamas have four legs. Always. And they are legal in canada. ",
		content: "Before I had a llama and it only had one leg. But people say that llamas have 3.  ",
		subject: "How many legs do llamas have and are they legal in canada?"
		},
		{
		id: "20091004162820AAIXgK1",
		answer: "he'd wrangle all the llamas the best wrangler could wrangle, if the best wrangler wrangled in these wrangling conditions.",
		content: "This is assuming the llamas are full grown Peruvian llamas with full wool, the llamas have to be wrangled fifty four yards, the ground in packed dirt, the weather is sunny, and the wrangler had five large eggs for breakfast. ",
		subject: "How many llamas can the best llama wrangler wrangle in one hour?"
		},
		{
		id: "20090220201834AAOp1EL",
		answer: "Go streaking. Or:  At my friend's party we had boys vs. girls, and the team that lost had to go streaking. The guys knew it was an easy win for the girls but they thought they were all 'tough' so they tried and of course, failed.  I still remember my neighbours' faces when they went streaking down the street. Btw, this street is longg. :)  Hope it helps!",
		content: "We were interested in llama riding, but we live in the Bay Area (CA) and that wasn't an option.  Plus, you have to be under 60 pounds to ride the llamas.  We have a group of about 10 people.  Do you have any similar activities to llama riding, or some other original idea for a party?  Oh, and we're really not horse-fans...so no horseback-riding.  THANKS! ",
		subject: "What are good teen birthday party ideas for girls interested in quirky activities like riding llamas?"
		},
		{
		id: "20090228181537AAUOKzP",
		answer: "You are persistent.  First, you need to identify which is the Head of llama. Then, you need to train it to read the map to your hiding...pssst...(disguise yourself as a llama...ssshh!)  It will do all the work coz the rest of the llamas will just follow the leader.  Good luck man!",
		content: "I need to steal a herd of llamas without being caught. I'm going to use them to start a  nomadic band. I don't want to get caught, going to jail tends to put a stop to any other plans you may have.  I asked this question a few days ago but it was removed without a given reason so I am reposting it. ",
		subject: "How can I steal a herd of llamas without getting caught?"
		},
		{
		id: "20100205155204AAyuHkf",
		answer: "you can get them all over the place,but more than likely they hired an animal trainer who had a Llama,my neighbor has one,hes insane though (the llama not the neighbor) you can get them at auctions and really all over,they got theirs in payment for a bunch of hay,cause the people didnt have cash,but 3 of them died,the only one they have left is the son of the two parent ones.",
		content: "Like, I was watching this TV show and the llama was only in the last two minutes of it and I noticed some TV shows or movies use llamas and a llama is really not popular animal, it seems to only be used in random cases. So do they have to go and buy a llama for the show? Or can you rent a llama? Where would you buy and or rent a llama? How much would it cost? It's not like a typical farm animal and I'm curious where you rent llamas or get llamas. ",
		subject: "How do movie producers or Tv show producers get llamas?"
		},
		{
		id: "20090716084441AAo2Gd9",
		answer: "I'm not sure if it's all of EA, but it's definitely a Maxis thing.  They're the ones that made Sim City and the original Sims.  There has always been llama stuff.  Just some kind of inside joke.  They must love llamas.",
		content: "The cheats for the Sims games always have something about enabling Llamas or, in the case of SimCity, making your town advisors look like them. Is there some kind of relationship between EA and Llamas? ",
		subject: "What is it with the Sims games and Llamas?"
		}
		]	
}


