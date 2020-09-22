function init()
{
	addEvent(document.getElementById("calculate"), "click", calculate);
	addEvent(document.getElementById("rules"), "click", rules);
	addEvent(document.getElementById("clear"), "click", clear);
}

function addEvent (obj, type, fn)
{
	if(obj.addEventListener){
		obj.addEventListener(type, fn, false);
	}
	else if(obj.attachEvent){
		obj.attachEvent("on"+type, fn);
	}
}

function clear (e)
{
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	document.getElementById("weakestLinkArea").innerHTML = "";
}

function rules(e)
{
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	document.getElementById("weakestLinkArea").style.backgroundColor = "yellow";
	document.getElementById("weakestLinkArea").innerHTML = "<p style=\"color: black\"><b>HOW THE WEAKEST LINK IS CALCULATED</b></p>";
	document.getElementById("weakestLinkArea").innerHTML += "<p style=\"color: black\">It's simple. Beat your average to avoid being The Weakest Link of the team." + 
															" Play exactly it, or play below it, and be ready to face some criticism." + 
															" The higher your individual average, the more leeway that you have in preventing yourself from being called The Weakest Link.</p>";
	document.getElementById("weakestLinkArea").innerHTML += "<p style=\"color: black\"><b>Average of 100 to 150:</b> 0-1 Weakest Link points if average is matched, 1 Weakest Link point if game score is 1-9 points below average, 2-3 Weakest Link points if game score is 10-25 points below average, & 3-4 Weakest Link points if game score is 25 points or more below average.</p>";
	document.getElementById("weakestLinkArea").innerHTML += "<p style=\"color: black\"><b>Average of 150 to 175:</b> 0-1 Weakest Link points if average is matched, 1 Weakest Link point if game score is 1-14 points below average, 2-3 Weakest Link points if game score is 15-25 points below average, & 3-4 Weakest Link points if game score is 25 points or more below average.</p>";
	document.getElementById("weakestLinkArea").innerHTML += "<p style=\"color: black\"><b>Average of 175 to 200:</b> 0-1 Weakest Link points if average is matched, 1 Weakest Link point if game score is 1-19 points below average, 2-3 Weakest Link points if game score is 20-30 points below average, & 3-4 Weakest Link points if game score is 30 points or more below average.</p>";
	document.getElementById("weakestLinkArea").innerHTML += "<p style=\"color: black\"><b>Average of 200 and up:</b> 0-1 Weakest Link points if average is matched, 1 Weakest Link point if game score is 1-24 points below average, 2-3 Weakest Link points if game score is 25-40 points below average, & 3-4 Weakest Link points if game score is 40 points or more below average.</p>";
}


function calculate(e)
{
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;

	var p1Avg, p2Avg, p3Avg, p4Avg, p5Avg, p6Avg, p1Score, p2Score, p3Score, p4Score, p5Score, p6Score;
	var p1wlp, p2wlp, p3wlp, p4wlp, p5wlp, p6wlp;
	
	p1Avg = document.getElementById("p1Avg").value;
	p2Avg = document.getElementById("p2Avg").value;
	p3Avg = document.getElementById("p3Avg").value;
	p4Avg = document.getElementById("p4Avg").value;
	p5Avg = document.getElementById("p5Avg").value;
	p6Avg = document.getElementById("p6Avg").value;

	p1Score = document.getElementById("p1Score").value;
	p2Score = document.getElementById("p2Score").value;
	p3Score = document.getElementById("p3Score").value;
	p4Score = document.getElementById("p4Score").value;
	p5Score = document.getElementById("p5Score").value;
	p6Score = document.getElementById("p6Score").value;

	/*Data Validation*/
	if ( (p1Avg < 0 || p1Avg > 300) || (p2Avg < 0 || p2Avg > 300) || (p3Avg < 0 || p3Avg > 300) ||
		 (p4Avg < 0 || p4Avg > 300) || (p5Avg < 0 || p5Avg > 300) || (p6Avg < 0 || p6Avg > 300) ||
		 (p1Score < 0 || p1Score > 300) || (p2Score < 0 || p2Score > 300) || (p3Score < 0 || p3Score > 300) ||
		 (p4Score < 0 || p4Score > 300) || (p5Score < 0 || p5Score > 300) || (p6Score < 0 || p6Score > 300) )
	{
		document.getElementById("weakestLinkArea").innerHTML = "<p>You provided invalid input. Please try again with all numbers between 0 and 300.</p>";
	}
	else
	{
		/*If invalid data was previously submitted*/
		document.getElementById("weakestLinkArea").innerHTML = "";
		document.getElementById("weakestLinkArea").style.backgroundColor = "crimson";
		
		//Player 1
		if (p1Score == p1Avg) {
			if (Math.random() < 0.5)
			{
				p1wlp = 0;
			}
			else
			{
				p1wlp = 1;
			}
		}
		else
		{
			//TODO
			if (p1Avg >= 100 && p1Avg < 150)
			{
				if (p1Score > p1Avg)
				{
					p1wlp = 0;
				}
				else if ((p1Avg - p1Score) >= 1 && (p1Avg - p1Score) < 10)
				{
					p1wlp = 1;
				}
				else if ((p1Avg - p1Score) >= 10 && (p1Avg - p1Score) < 25)
				{
					if (Math.random () < 0.5)
					{
						p1wlp = 2;
					}
					else
					{
						p1wlp = 3;
					}
				}
				else
				{
					if (Math.random () < 0.5)
					{
						p1wlp = 3;
					}
					else
					{
						p1wlp = 4;
					}
				}
			}
			else if (p1Avg >= 150 && p1Avg < 175)
			{
				if (p1Score > p1Avg)
				{
					p1wlp = 0;
				}
				else if ((p1Avg - p1Score) >= 1 && (p1Avg - p1Score) < 15)
				{
					p1wlp = 1;
				}
				else if ((p1Avg - p1Score) >= 15 && (p1Avg - p1Score) < 25)
				{
					if (Math.random () < 0.5)
					{
						p1wlp = 2;
					}
					else
					{
						p1wlp = 3;
					}
				}
				else
				{
					if (Math.random () < 0.5)
					{
						p1wlp = 3;
					}
					else
					{
						p1wlp = 4;
					}
				}
			}
			else if (p1Avg >= 175 && p1Avg < 200)
			{
				if (p1Score > p1Avg)
				{
					p1wlp = 0;
				}
				else if ((p1Avg - p1Score) >= 1 && (p1Avg - p1Score) < 20)
				{
					p1wlp = 1;
				}
				else if ((p1Avg - p1Score) >= 20 && (p1Avg - p1Score) < 30)
				{
					if (Math.random () < 0.5)
					{
						p1wlp = 2;
					}
					else
					{
						p1wlp = 3;
					}
				}
				else
				{
					if (Math.random () < 0.5)
					{
						p1wlp = 3;
					}
					else
					{
						p1wlp = 4;
					}
				}
			}
			else
			{
				if (p1Score > p1Avg)
				{
					p1wlp = 0;
				}
				else if ((p1Avg - p1Score) >= 1 && (p1Avg - p1Score) < 25)
				{
					p1wlp = 1;
				}
				else if ((p1Avg - p1Score) >= 25 && (p1Avg - p1Score) < 40)
				{
					if (Math.random () < 0.5)
					{
						p1wlp = 2;
					}
					else
					{
						p1wlp = 3;
					}
				}
				else
				{
					if (Math.random () < 0.5)
					{
						p1wlp = 3;
					}
					else
					{
						p1wlp = 4;
					}
				}
			}
		}
		
		//Player 2
		if (p2Score == p2Avg) {
			if (Math.random() < 0.5)
			{
				p2wlp = 0;
			}
			else
			{
				p2wlp = 1;
			}
		}
		else
		{
			//TODO
			if (p2Avg >= 100 && p2Avg < 150)
			{
				if (p2Score > p2Avg)
				{
					p2wlp = 0;
				}
				else if ((p2Avg - p2Score) >= 1 && (p2Avg - p2Score) < 10)
				{
					p2wlp = 1;
				}
				else if ((p2Avg - p2Score) >= 10 && (p2Avg - p2Score) < 25)
				{
					if (Math.random () < 0.5)
					{
						p2wlp = 2;
					}
					else
					{
						p2wlp = 3;
					}
				}
				else
				{
					if (Math.random () < 0.5)
					{
						p2wlp = 3;
					}
					else
					{
						p2wlp = 4;
					}
				}
			}
			else if (p2Avg >= 150 && p2Avg < 175)
			{
				if (p2Score > p2Avg)
				{
					p2wlp = 0;
				}
				else if ((p2Avg - p2Score) >= 1 && (p2Avg - p2Score) < 15)
				{
					p2wlp = 1;
				}
				else if ((p2Avg - p2Score) >= 15 && (p2Avg - p2Score) < 25)
				{
					if (Math.random () < 0.5)
					{
						p2wlp = 2;
					}
					else
					{
						p2wlp = 3;
					}
				}
				else
				{
					if (Math.random () < 0.5)
					{
						p2wlp = 3;
					}
					else
					{
						p2wlp = 4;
					}
				}
			}
			else if (p2Avg >= 175 && p2Avg < 200)
			{
				if (p2Score > p2Avg)
				{
					p2wlp = 0;
				}
				else if ((p2Avg - p2Score) >= 1 && (p2Avg - p2Score) < 20)
				{
					p2wlp = 1;
				}
				else if ((p2Avg - p2Score) >= 20 && (p2Avg - p2Score) < 30)
				{
					if (Math.random () < 0.5)
					{
						p2wlp = 2;
					}
					else
					{
						p2wlp = 3;
					}
				}
				else
				{
					if (Math.random () < 0.5)
					{
						p2wlp = 3;
					}
					else
					{
						p2wlp = 4;
					}
				}
			}
			else
			{
				if (p2Score > p2Avg)
				{
					p2wlp = 0;
				}
				else if ((p2Avg - p2Score) >= 1 && (p2Avg - p2Score) < 25)
				{
					p2wlp = 1;
				}
				else if ((p2Avg - p2Score) >= 25 && (p2Avg - p2Score) < 40)
				{
					if (Math.random () < 0.5)
					{
						p2wlp = 2;
					}
					else
					{
						p2wlp = 3;
					}
				}
				else
				{
					if (Math.random () < 0.5)
					{
						p2wlp = 3;
					}
					else
					{
						p2wlp = 4;
					}
				}
			}
		}
		
		//Player 3
		if (p3Score == p3Avg) {
			if (Math.random() < 0.5)
			{
				p3wlp = 0;
			}
			else
			{
				p3wlp = 1;
			}
		}
		else
		{
			//TODO
			if (p3Avg >= 100 && p3Avg < 150)
			{
				if (p3Score > p3Avg)
				{
					p3wlp = 0;
				}
				else if ((p3Avg - p3Score) >= 1 && (p3Avg - p3Score) < 10)
				{
					p3wlp = 1;
				}
				else if ((p3Avg - p3Score) >= 10 && (p3Avg - p3Score) < 25)
				{
					if (Math.random () < 0.5)
					{
						p3wlp = 2;
					}
					else
					{
						p3wlp = 3;
					}
				}
				else
				{
					if (Math.random () < 0.5)
					{
						p3wlp = 3;
					}
					else
					{
						p3wlp = 4;
					}
				}
			}
			else if (p3Avg >= 150 && p3Avg < 175)
			{
				if (p3Score > p3Avg)
				{
					p3wlp = 0;
				}
				else if ((p3Avg - p3Score) >= 1 && (p3Avg - p3Score) < 15)
				{
					p3wlp = 1;
				}
				else if ((p3Avg - p3Score) >= 15 && (p3Avg - p3Score) < 25)
				{
					if (Math.random () < 0.5)
					{
						p3wlp = 2;
					}
					else
					{
						p3wlp = 3;
					}
				}
				else
				{
					if (Math.random () < 0.5)
					{
						p3wlp = 3;
					}
					else
					{
						p3wlp = 4;
					}
				}
			}
			else if (p3Avg >= 175 && p3Avg < 200)
			{
				if (p3Score > p3Avg)
				{
					p3wlp = 0;
				}
				else if ((p3Avg - p3Score) >= 1 && (p3Avg - p3Score) < 20)
				{
					p3wlp = 1;
				}
				else if ((p3Avg - p3Score) >= 20 && (p3Avg - p3Score) < 30)
				{
					if (Math.random () < 0.5)
					{
						p3wlp = 2;
					}
					else
					{
						p3wlp = 3;
					}
				}
				else
				{
					if (Math.random () < 0.5)
					{
						p3wlp = 3;
					}
					else
					{
						p3wlp = 4;
					}
				}
			}
			else
			{
				if (p3Score > p3Avg)
				{
					p3wlp = 0;
				}
				else if ((p3Avg - p3Score) >= 1 && (p3Avg - p3Score) < 25)
				{
					p3wlp = 1;
				}
				else if ((p3Avg - p3Score) >= 25 && (p3Avg - p3Score) < 40)
				{
					if (Math.random () < 0.5)
					{
						p3wlp = 2;
					}
					else
					{
						p3wlp = 3;
					}
				}
				else
				{
					if (Math.random () < 0.5)
					{
						p3wlp = 3;
					}
					else
					{
						p3wlp = 4;
					}
				}
			}
		}
		
		//Player 4
		if (p4Score == p4Avg) {
			if (Math.random() < 0.5)
			{
				p4wlp = 0;
			}
			else
			{
				p4wlp = 1;
			}
		}
		else
		{
			//TODO
			if (p4Avg >= 100 && p4Avg < 150)
			{
				if (p4Score > p4Avg)
				{
					p4wlp = 0;
				}
				else if ((p4Avg - p4Score) >= 1 && (p4Avg - p4Score) < 10)
				{
					p4wlp = 1;
				}
				else if ((p4Avg - p4Score) >= 10 && (p4Avg - p4Score) < 25)
				{
					if (Math.random () < 0.5)
					{
						p4wlp = 2;
					}
					else
					{
						p4wlp = 3;
					}
				}
				else
				{
					if (Math.random () < 0.5)
					{
						p4wlp = 3;
					}
					else
					{
						p4wlp = 4;
					}
				}
			}
			else if (p4Avg >= 150 && p4Avg < 175)
			{
				if (p4Score > p4Avg)
				{
					p4wlp = 0;
				}
				else if ((p4Avg - p4Score) >= 1 && (p4Avg - p4Score) < 15)
				{
					p4wlp = 1;
				}
				else if ((p4Avg - p4Score) >= 15 && (p4Avg - p4Score) < 25)
				{
					if (Math.random () < 0.5)
					{
						p4wlp = 2;
					}
					else
					{
						p4wlp = 3;
					}
				}
				else
				{
					if (Math.random () < 0.5)
					{
						p4wlp = 3;
					}
					else
					{
						p4wlp = 4;
					}
				}
			}
			else if (p4Avg >= 175 && p4Avg < 200)
			{
				if (p4Score > p4Avg)
				{
					p4wlp = 0;
				}
				else if ((p4Avg - p4Score) >= 1 && (p4Avg - p4Score) < 20)
				{
					p4wlp = 1;
				}
				else if ((p4Avg - p4Score) >= 20 && (p4Avg - p4Score) < 30)
				{
					if (Math.random () < 0.5)
					{
						p4wlp = 2;
					}
					else
					{
						p4wlp = 3;
					}
				}
				else
				{
					if (Math.random () < 0.5)
					{
						p4wlp = 3;
					}
					else
					{
						p4wlp = 4;
					}
				}
			}
			else
			{
				if (p4Score > p4Avg)
				{
					p4wlp = 0;
				}
				else if ((p4Avg - p4Score) >= 1 && (p4Avg - p4Score) < 25)
				{
					p4wlp = 1;
				}
				else if ((p4Avg - p4Score) >= 25 && (p4Avg - p4Score) < 40)
				{
					if (Math.random () < 0.5)
					{
						p4wlp = 2;
					}
					else
					{
						p4wlp = 3;
					}
				}
				else
				{
					if (Math.random () < 0.5)
					{
						p4wlp = 3;
					}
					else
					{
						p4wlp = 4;
					}
				}
			}
		}
		
		//Player 5
		if (p5Score == p5Avg) {
			if (Math.random() < 0.5)
			{
				p5wlp = 0;
			}
			else
			{
				p5wlp = 1;
			}
		}
		else
		{
			//TODO
			if (p5Avg >= 100 && p5Avg < 150)
			{
				if (p5Score > p5Avg)
				{
					p5wlp = 0;
				}
				else if ((p5Avg - p5Score) >= 1 && (p5Avg - p5Score) < 10)
				{
					p5wlp = 1;
				}
				else if ((p5Avg - p5Score) >= 10 && (p5Avg - p5Score) < 25)
				{
					if (Math.random () < 0.5)
					{
						p5wlp = 2;
					}
					else
					{
						p5wlp = 3;
					}
				}
				else
				{
					if (Math.random () < 0.5)
					{
						p5wlp = 3;
					}
					else
					{
						p5wlp = 4;
					}
				}
			}
			else if (p5Avg >= 150 && p5Avg < 175)
			{
				if (p5Score > p5Avg)
				{
					p5wlp = 0;
				}
				else if ((p5Avg - p5Score) >= 1 && (p5Avg - p5Score) < 15)
				{
					p5wlp = 1;
				}
				else if ((p5Avg - p5Score) >= 15 && (p5Avg - p5Score) < 25)
				{
					if (Math.random () < 0.5)
					{
						p5wlp = 2;
					}
					else
					{
						p5wlp = 3;
					}
				}
				else
				{
					if (Math.random () < 0.5)
					{
						p5wlp = 3;
					}
					else
					{
						p5wlp = 4;
					}
				}
			}
			else if (p5Avg >= 175 && p5Avg < 200)
			{
				if (p5Score > p5Avg)
				{
					p5wlp = 0;
				}
				else if ((p5Avg - p5Score) >= 1 && (p5Avg - p5Score) < 20)
				{
					p5wlp = 1;
				}
				else if ((p5Avg - p5Score) >= 20 && (p5Avg - p5Score) < 30)
				{
					if (Math.random () < 0.5)
					{
						p5wlp = 2;
					}
					else
					{
						p5wlp = 3;
					}
				}
				else
				{
					if (Math.random () < 0.5)
					{
						p5wlp = 3;
					}
					else
					{
						p5wlp = 4;
					}
				}
			}
			else
			{
				if (p5Score > p5Avg)
				{
					p5wlp = 0;
				}
				else if ((p5Avg - p5Score) >= 1 && (p5Avg - p5Score) < 25)
				{
					p5wlp = 1;
				}
				else if ((p5Avg - p5Score) >= 25 && (p5Avg - p5Score) < 40)
				{
					if (Math.random () < 0.5)
					{
						p5wlp = 2;
					}
					else
					{
						p5wlp = 3;
					}
				}
				else
				{
					if (Math.random () < 0.5)
					{
						p5wlp = 3;
					}
					else
					{
						p5wlp = 4;
					}
				}
			}
		}
		
		//Player 6
		if (p6Score == p6Avg) {
			if (Math.random() < 0.5)
			{
				p6wlp = 0;
			}
			else
			{
				p6wlp = 1;
			}
		}
		else
		{
			//TODO
			if (p6Avg >= 100 && p6Avg < 150)
			{
				if (p6Score > p6Avg)
				{
					p6wlp = 0;
				}
				else if ((p6Avg - p6Score) >= 1 && (p6Avg - p6Score) < 10)
				{
					p6wlp = 1;
				}
				else if ((p6Avg - p6Score) >= 10 && (p6Avg - p6Score) < 25)
				{
					if (Math.random () < 0.5)
					{
						p6wlp = 2;
					}
					else
					{
						p6wlp = 3;
					}
				}
				else
				{
					if (Math.random () < 0.5)
					{
						p6wlp = 3;
					}
					else
					{
						p6wlp = 4;
					}
				}
			}
			else if (p6Avg >= 150 && p6Avg < 175)
			{
				if (p6Score > p6Avg)
				{
					p6wlp = 0;
				}
				else if ((p6Avg - p6Score) >= 1 && (p6Avg - p6Score) < 15)
				{
					p6wlp = 1;
				}
				else if ((p6Avg - p6Score) >= 15 && (p6Avg - p6Score) < 25)
				{
					if (Math.random () < 0.5)
					{
						p6wlp = 2;
					}
					else
					{
						p6wlp = 3;
					}
				}
				else
				{
					if (Math.random () < 0.5)
					{
						p6wlp = 3;
					}
					else
					{
						p6wlp = 4;
					}
				}
			}
			else if (p6Avg >= 175 && p6Avg < 200)
			{
				if (p6Score > p6Avg)
				{
					p6wlp = 0;
				}
				else if ((p6Avg - p6Score) >= 1 && (p6Avg - p6Score) < 20)
				{
					p6wlp = 1;
				}
				else if ((p6Avg - p6Score) >= 20 && (p6Avg - p6Score) < 30)
				{
					if (Math.random () < 0.5)
					{
						p6wlp = 2;
					}
					else
					{
						p6wlp = 3;
					}
				}
				else
				{
					if (Math.random () < 0.5)
					{
						p6wlp = 3;
					}
					else
					{
						p6wlp = 4;
					}
				}
			}
			else
			{
				if (p6Score > p6Avg)
				{
					p6wlp = 0;
				}
				else if ((p6Avg - p6Score) >= 1 && (p6Avg - p6Score) < 25)
				{
					p6wlp = 1;
				}
				else if ((p6Avg - p6Score) >= 25 && (p6Avg - p6Score) < 40)
				{
					if (Math.random () < 0.5)
					{
						p6wlp = 2;
					}
					else
					{
						p6wlp = 3;
					}
				}
				else
				{
					if (Math.random () < 0.5)
					{
						p6wlp = 3;
					}
					else
					{
						p6wlp = 4;
					}
				}
			}
		}
		
		document.getElementById("weakestLinkArea").innerHTML += "<p style=\"font-size: 14pt\"><b>WEAKEST LINK RESULTS</b><br/><br/>" + document.getElementById("name1").value + ": " + p1wlp + 
								"<br/>" + document.getElementById("name2").value + ": " + p2wlp + 
								"<br/>" + document.getElementById("name3").value + ": " + p3wlp + 
								"<br/>" + document.getElementById("name4").value + ": " + p4wlp +
								"<br/>" + document.getElementById("name5").value + ": " + p5wlp +
								"<br/>" + document.getElementById("name6").value + ": " + p6wlp + "</p>";
	}
}

window.onload = init;