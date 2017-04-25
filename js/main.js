//PLUGIN::containsIN
$.extend($.expr[":"], {
	"containsIN": function(elem, i, match, array) {
	return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
}
});


var currentArticle,
	currentScenario,
	currentScenarioScreen,
	$isotope;

var articles=[
	{
		"id": 0,
		"article": "921.ARTICLE 121.",
		"title": "Larceny and Wrongful Appropriation",
		"slug":"larceny",
		"description": "Aliquam et mattis turpis. Etiam tincidunt ex vel leo luctus accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam commodo nisl ac vestibulum convallis.",
		"image": "larceny.jpg",
		"libraryImage": "larceny-article.jpg",
		"progress": "complete",
		"scenarios":[
			{
				"id": 0,
				"article": "921.ARTICLE 121",
				"title": "Scenario 1",
				"content":[
					{
						"image": "scenario-01.jpg",
						"text": "Early in the morning, your fellow recruits prepare to move out on a busy training schedule."
					},
					{
						"image": "scenario-02.jpg",
						"text": "Later that day when no one is around, you notice something unusual."
					},
					{
						"image": "scenario-03.jpg",
						"text": "A couple of your fellow recruits have left their racks open."
					},
					{
						"image": "scenario-04.jpg",
						"text": "Upon closer inspection you clearly see a wallet inside."
					}
				],
				"test":{
					"prompt": "What do you do?",
					"description": "Upon closer inspection, you clearly see a wallet inside",
					"options":[
						{
							"text": "Close the locker"
						},
						{
							"text": "Report the issue to a superior",
							"correct": true
						},
						{
							"text": "Take the unattended valuables"
						}
					],
					"response":{
						"title": "Report the issue to a superior",
						"description": "Any interaction with property that is not your own could be misconstrued. Wrongfully taking, obtaining, or withholding, by any means, from the possession of the owner or of any other person any money, personal, property, or article of value of any kind is a punishable offense."
					}
				}
			},
			{
				"id": 1,
				"article": "921.ARTICLE 121",
				"title": "Scenario 2",
				"content":[
					{
						"image": "larceny02-1.jpg",
						"text": "Getting ready for a busy day, you are one of the last of the recruits to use the head."
					},
					{
						"image": "larceny02-2.jpg",
						"text": "As you are walking out of the head, you notice that one of your fellow recruits accidently left their toothbrush on a sink."
					},
					{
						"image": "larceny02-3.jpg",
						"text": "Looking closer, you are pretty sure you know the owner and consider him a friend."
					},
					{
						"image": "larceny02-4.jpg",
						"text": "Your friend seems to have a good sense of humor, so you consider playing a prank."
					}
				],
				"test":{
					"prompt": "What do you do?",
					"description": "Your friend seems to have a good sense of humor, so you consider playing a prank",
					"options":[
						{
							"text": "Tell them where you saw it",
							"correct": true
						},
						{
							"text": "Hide the toothbrush"
						},
						{
							"text": "Give it to them when you see them"
						}
					],
					"response":{
						"title": "Tell them where you saw it",
						"description": "Any interaction with property that is not your own could be misconstrued.  Wrongfully taking, obtaining, or withholding, by any means, from the possession of the owner or of any other person any money, personal property, or article of value of any kind is a punishable offense."
					}
				}
			}
		]
	},
	{
		"id": 1,
		"article": "886. ARTICLE 86.",
		"title": "Absence Without Leave",
		"slug":"awol",
		"description": "Aliquam et mattis turpis. Etiam tincidunt ex vel leo luctus accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam commodo nisl ac vestibulum convallis.",
		"image": "larceny.jpg",
		"libraryImage": "absence-article.jpg",
		"progress": "underway",
		"scenarios":[
			{
				"id": 0,
				"article": "886.ARTICLE 86",
				"title": "Scenario 1",
				"content":[
					{
						"image": "awol01-1.jpg",
						"text": "Early in the morning, you are attending class."
					},
					{
						"image": "awol01-2.jpg",
						"text": "Your studies to date have not allowed you time to look around."
					},
					{
						"image": "awol01-3.jpg",
						"text": "As your last class of the morning winds down your instructor summarizes the lesson."
					},
					{
						"image": "awol01-4.jpg",
						"text": "You are directed to report to Remedial Swim Instruction by 15:30."
					}
				],
				"test":{
					"prompt": "What do you do?",
					"description": "You are directed to report to Remedial Swim Instruction by 15:30",
					"options":[
						{
							"text": "Be on time, but look around"
						},
						{
							"text": "Skip the RSI"
						},
						{
							"text": "Go directly to RSI as instructed",
							"correct": true
						}
					],
					"response":{
						"title": "Go directly to RSI as instructed",
						"description": "Curb your curiosity and be diligent.  Failure to go to an appointed place without permission at the time prescribed is a punishable offense."
					}
				}
			},
			{
				"id": 1,
				"article": "886.ARTICLE 86",
				"title": "Scenario 2",
				"content":[
					{
						"image": "awol02-1.jpg",
						"text": "Taps just went down, and you should be fast asleep."
					},
					{
						"image": "awol02-2.jpg",
						"text": "It was a very full day, but you are wide awake and your mind is racing."
					},
					{
						"image": "awol02-3.jpg",
						"text": "Earlier in the day a fellow recruit had suggested that the two of you could sneak out for an hour."
					},
					{
						"image": "awol02-4.jpg",
						"text": "You are giving serious consideration to sneaking out of your compartment to meet up with a fellow recruit."
					}
				],
				"test":{
					"prompt": "What do you do?",
					"description": "You are giving serious consideration to sneaking out of your compartment to meet up with a fellow recruit",
					"options":[
						{
							"text": "Don’t risk it",
							"correct": true
						},
						{
							"text": "Sneak out without being seen"
						},
						{
							"text": "Get a lookout and make your exodus"
						}
					],
					"response":{
						"title": "Don’t risk it",
						"description": "Consider the consequences and go back to sleep. Absenting yourself without authority from your unit, organization, or place of duty at which you are required to be at the time prescribed is a punishable offense."
					}
				}
			}
		]
	},
	{
		"id": 2,
		"article": "892. ARTICLE 92.",
		"title": "Failure to Obey Order or Regulation",
		"slug":"failuretoobey",
		"description": "Aliquam et mattis turpis. Etiam tincidunt ex vel leo luctus accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam commodo nisl ac vestibulum convallis.",
		"image": "larceny.jpg",
		"libraryImage": "failure-article.jpg",
		"progress": "new",
		"scenarios":[
			{
				"id": 0,
				"article": "892.ARTICLE 92",
				"title": "Scenario 1",
				"content":[
					{
						"image": "failure01-1.jpg",
						"text": "Traveling back and forth across the base to attend classes and activities, there is a lot to see."
					},
					{
						"image": "failure01-2.jpg",
						"text": "Down time is at a premium and you miss your family and friends."
					},
					{
						"image": "failure01-3.jpg",
						"text": "You are ordered by a superior to report to Building 1405 and fill out some paperwork."
					},
					{
						"image": "failure01-4.jpg",
						"text": "Should be about a 10 minute walk, but you might have time for a quick phone call home."
					}
				],
				"test":{
					"prompt": "What do you do?",
					"description": "Should be about a 10 minute walk, but you might have time for a quick phone call home",
					"options":[
						{
							"text": "Make a quick call from the payphones"
						},
						{
							"text": "Go directly to Building 1405 as ordered",
							"correct": true
						},
						{
							"text": "Stop by the payphones and see if you have time for a call"
						}
					],
					"response":{
						"title": "Go directly to Building 1405 as ordered",
						"description": "Always better to be early than risk a distraction and arrive late. Violating or failing to obey any lawful general order or regulation is a punishable offense."
					}
				}
			},
			{
				"id": 1,
				"article": "892.ARTICLE 92",
				"title": "Scenario 2",
				"content":[
					{
						"image": "failure02-1.jpg",
						"text": "You are assigned fire watch for your compartment, and should be up most of the night."
					},
					{
						"image": "failure02-2.jpg",
						"text": "After a few hours it becomes increasingly harder to stay alert."
					},
					{
						"image": "failure02-3.jpg",
						"text": "Everyone is sound asleep and nobody is checking on you."
					},
					{
						"image": "failure02-4.jpg",
						"text": "You figure you have done your part and consider slipping into your rack for the last couple of hours."
					}
				],
				"test":{
					"prompt": "What do you do?",
					"description": "You figure you have done your part and consider slipping into your rack for the last couple of hours",
					"options":[
						{
							"text": "Take the rest of the night off"
						},
						{
							"text": "Sleep standing up"
						},
						{
							"text": "Stay focused",
							"correct": true
						}
					],
					"response":{
						"title": "Stay focused",
						"description": "How you perform your duties is a reflection on your character. Being derelict in the performance of your duties is a punishable offense."
					}
				}
			}
		]
	},
	{
		"id": 3,
		"article": "907. ARTICLE 107.",
		"title": "False Statements",
		"slug":"falsestatements",
		"description": "Aliquam et mattis turpis. Etiam tincidunt ex vel leo luctus accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam commodo nisl ac vestibulum convallis.",
		"image": "larceny.jpg",
		"libraryImage": "false-article.jpg",
		"progress": "underway",
		"scenarios":[
			{
				"id": 0,
				"article": "907.ARTICLE 107",
				"title": "Scenario 1",
				"content":[
					{
						"image": "false01-1.jpg",
						"text": "Based on your Swim Qualification score, you are not much of a swimmer."
					},
					{
						"image": "false01-2.jpg",
						"text": "You are concerned that this will negatively impact your ability to graduate."
					},
					{
						"image": "false01-3.jpg",
						"text": "You noticed that the Hard Card area is often unattended at specific times of the day."
					},
					{
						"image": "false01-4.jpg",
						"text": "You consider gaining access and placing a false entry on your Hard Card to positively impact your RSQ status."
					}
				],
				"test":{
					"prompt": "What do you do?",
					"description": "You consider gaining access and placing a false entry on your Hard Card to positively impact your RSQ status",
					"options":[
						{
							"text": "Correct the omission",
							"correct": true
						},
						{
							"text": "Sign and turn in the form"
						},
						{
							"text": "Ask an authority figure for advice"
						}
					],
					"response":{
						"title": "Correct the omission",
						"description": "Personal medical information is confidential and necessary.  Deceit with intent including signing a false record, return, regulation, order, or other official document, knowing it to be false is a punishable offense."
					}
				}
			},
			{
				"id": 1,
				"article": "907.ARTICLE 107",
				"title": "Scenario 2",
				"content":[
					{
						"image": "false02-1.jpg",
						"text": "Your recruit formation is being thoroughly grilled by an RDC."
					},
					{
						"image": "false02-2.jpg",
						"text": "Apparently, they found a few snack wrappers that were hidden in your compartment."
					},
					{
						"image": "false02-3.jpg",
						"text": "You were hungry and knew it was against the rules."
					},
					{
						"image": "false02-4.jpg",
						"text": "Your RDC looks directly at you and asks if you know who is responsible."
					}
				],
				"test":{
					"prompt": "What do you do?",
					"description": "Your RDC looks directly at you and asks if you know who is responsible",
					"options":[
						{
							"text": "Take no action"
						},
						{
							"text": "Admit guilt",
							"correct": true
						},
						{
							"text": "Falsely implicate others"
						}
					],
					"response":{
						"title": "Admit guilt",
						"description": "Be honorable and take your punishment. Making an intentionally deceitful false official statement knowing it to be false, is a punishable offense."
					}
				}
			}
		]
	},
	{
		"id": 4,
		"article": "911. ARTICLE 111.",
		"title": "Drunken or Reckless Driving",
		"slug":"drunkendriving",
		"description": "Aliquam et mattis turpis. Etiam tincidunt ex vel leo luctus accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam commodo nisl ac vestibulum convallis.",
		"image": "larceny.jpg",
		"libraryImage": "drunken-article.jpg",
		"progress": "new",
		"scenarios":[
			{
				"id": 0,
				"article": "911.ARTICLE 111",
				"title": "Scenario 1",
				"content":[
					{
						"image": "drunken01-1.jpg",
						"text": "Post boot camp graduation, you have now entered A School for technical training."
					},
					{
						"image": "drunken01-2.jpg",
						"text": "While on liberty you lose track of your alcohol consumption."
					},
					{
						"image": "drunken01-3.jpg",
						"text": "Now feeling light headed, you have to make sure you get back on time."
					},
					{
						"image": "drunken01-4.jpg",
						"text": "One of the people you met offers to let you borrow their car to make the trek back."
					}
				],
				"test":{
					"prompt": "What do you do?",
					"description": "One of the people you met offers to let you borrow their car to make the trek back",
					"options":[
						{
							"text": "Borrow the car"
						},
						{
							"text": "Borrow a bicycle"
						},
						{
							"text": "Take a cab",
							"correct": true
						}
					],
					"response":{
						"title": "Take a cab",
						"description": "Compounding on your overindulgence could have dire consequences.  Operating any vehicle while drunk, or in a reckless or wanton manner is a punishable offense."
					}
				}
			},
			{
				"id": 1,
				"article": "911.ARTICLE 111",
				"title": "Scenario 2",
				"content":[
					{
						"image": "drunken02-1.jpg",
						"text": "Post boot camp graduation, you have now entered A School for technical training."
					},
					{
						"image": "drunken02-2.jpg",
						"text": "While on liberty you take a large dose of over the counter cough medicine."
					},
					{
						"image": "drunken02-3.jpg",
						"text": "Now feeling light headed, you have to make sure you get back on time."
					},
					{
						"image": "drunken02-4.jpg",
						"text": "None of the people you met offers to let you borrow their car to make the trek back."
					}
				],
				"test":{
					"prompt": "What do you do?",
					"description": "None of the people you met offers to let you borrow their car to make the trek back",
					"options":[
						{
							"text": "Borrow the car"
						},
						{
							"text": "Take a cab",
							"correct": true
						},
						{
							"text": "Borrow a bicycle"
						}
					],
					"response":{
						"title": "Take a cab",
						"description": "You should have read the label first. Operating any vehicle while impaired by a substance is a punishable offense."
					}
				}
			}
		]
	},
	{
		"id": 5,
		"article": "912a. ARTICLE 112a.",
		"title": "Wrongful Use, Possession, Etc., of Controlled Substances",
		"slug":"wrongfuluse",
		"description": "Aliquam et mattis turpis. Etiam tincidunt ex vel leo luctus accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam commodo nisl ac vestibulum convallis.",
		"image": "larceny.jpg",
		"libraryImage": "wrongful-article.jpg",
		"progress": "underway",
		"scenarios":[
			{
				"id": 0,
				"article": "912a.ARTICLE 112a",
				"title": "Scenario 1",
				"content":[
					{
						"image": "wrongful01-1.jpg",
						"text": "Learning all of this information can be a stressful experience."
					},
					{
						"image": "wrongful01-2.jpg",
						"text": "Quizzes are particularly hard."
					},
					{
						"image": "wrongful01-3.jpg",
						"text": "In junior high school, you used a prescribed drug to keep your anxiety in check."
					},
					{
						"image": "wrongful01-4.jpg",
						"text": "You eventually grew out of the need, but snuck in a few pills from your old prescription just in case."
					}
				],
				"test":{
					"prompt": "What do you do?",
					"description": "You eventually grew out of the need, but snuck in a few pills from your old prescription just in case",
					"options":[
						{
							"text": "Take a half dose to take the edge off"
						},
						{
							"text": "Dispose of the substance",
							"correct": true
						},
						{
							"text": "Take a half pill and give the rest to a colleague"
						}
					],
					"response":{
						"title": "Dispose of the substance",
						"description": "Focus and diligent study is the best path to success. Wrongfully using, possessing, manufacturing, distributing, importing or introducing to an installation, vessel, vehicle, or aircraft of the armed forces of a prohibited substance is a punishable offense."
					}
				}
			},
			{
				"id": 1,
				"article": "912.ARTICLE 112a",
				"title": "Scenario 2",
				"content":[
					{
						"image": "wrongful02-1.jpg",
						"text": "You were recently issued Tylenol for a minor medical issue."
					},
					{
						"image": "wrongful02-2.jpg",
						"text": "You only used a small portion, and have a pretty good amount left over."
					},
					{
						"image": "wrongful02-3.jpg",
						"text": "You mention this to a few of you fellow recruits and the ideas started pouring in."
					},
					{
						"image": "wrongful02-4.jpg",
						"text": "The most interesting idea would have you chop the pills into powder and share with the other recruits."
					}
				],
				"test":{
					"prompt": "What do you do?",
					"description": "The most interesting idea would have you chop the pills into powder and share with the other recruits",
					"options":[
						{
							"text": "Share as planned"
						},
						{
							"text": "Use all of it for yourself"
						},
						{
							"text": "Turn in the unused portion",
							"correct": true
						}
					],
					"response":{
						"title": "Turn in the unused portion",
						"description": "You don’t need it anymore and should turn it in or get rid of it. Wrongfully use, possession, manufacture, distribution, import or introduction to an installation, vessel, vehicle, or aircraft of the armed forces of a prohibited substance is a punishable offense."
					}
				}
			}
		]
	},
	{
		"id": 6,
		"article": "920. ARTICLE 120.",
		"title": "Rape and Carnal Knowledge",
		"slug":"rape",
		"description": "Aliquam et mattis turpis. Etiam tincidunt ex vel leo luctus accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam commodo nisl ac vestibulum convallis.",
		"image": "larceny.jpg",
		"libraryImage": "rape-article.jpg",
		"progress": "underway",
		"scenarios":[
			{
				"id": 0,
				"article": "902.ARTICLE 120",
				"title": "Scenario 1",
				"content":[
					{
						"image": "rape01-1.jpg",
						"text": "Running late and have to change into clean clothes."
					},
					{
						"image": "rape01-2.jpg",
						"text": "Another male recruit is also changing. The two of you joke around all the time but it's been limited to comments and gestures, without any physical contact."
					},
					{
						"image": "rape01-3.jpg",
						"text": "His back is to you, and you are thinking of how to get back at him for his last prank."
					}
				],
				"test":{
					"prompt": "What do you do?",
					"description": "His back is to you, and you are thinking of how to get back at him for his last prank",
					"options":[
						{
							"text": "Do nothing, you're already running late",
							"correct": true
						},
						{
							"text": "He messes with you all the time. Get him back by snapping him on the butt with the towel"
						},
						{
							"text": "You're friends. A snap on the butt with a towel is innocent joking around"
						}
					],
					"response":{
						"title": "Do nothing, you're already running late",
						"description": "Touching, or causing another person to touch, either directly or through the clothing is a punishable offense."
					}
				}
			}
		]
	},
	{
		"id": 7,
		"article": "928. ARTICLE 128.",
		"title": "Assault",
		"slug":"assault",
		"description": "Aliquam et mattis turpis. Etiam tincidunt ex vel leo luctus accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam commodo nisl ac vestibulum convallis.",
		"image": "larceny.jpg",
		"libraryImage": "assault-article.jpg",
		"progress": "underway",
		"scenarios":[
			{
				"id": 0,
				"article": "928.ARTICLE 128",
				"title": "Scenario 1",
				"content":[
					{
						"image": "assault01-1.jpg",
						"text": "Everyone has been working hard and tension has been pretty thick."
					},
					{
						"image": "assault01-2.jpg",
						"text": "Your bunkmate often talks in his sleep, and is keeping you awake."
					},
					{
						"image": "assault01-3.jpg",
						"text": "You have tried to think of a nice way to bring it up, but to no avail."
					},
					{
						"image": "assault01-4.jpg",
						"text": "One morning you had been robbed of sleep and consider making a threat to get them to stop."
					}
				],
				"test":{
					"prompt": "What do you do?",
					"description": "One morning you had been robbed of sleep and consider making a threat to get them to stop",
					"options":[
						{
							"text": "Talk to your RDC",
							"correct": true
						},
						{
							"text": "Use a clenched fist to threaten them"
						},
						{
							"text": "Intimidate them with an implied threat"
						}
					],
					"response":{
						"title": "Talk to your RDC",
						"description": "You’re not a civilian anymore, and actions have consequences. Attempting or threatening to do bodily harm to another person is a punishable offense. Your RDC might change your bunk assignment."
					}
				}
			},
			{
				"id": 1,
				"article": "928.ARTICLE 128",
				"title": "Scenario 2",
				"content":[
					{
						"image": "assault02-01.jpg",
						"text": "Everyone has been working hard to learn new skills and succeed."
					},
					{
						"image": "assault02-02.jpg",
						"text": "Unfortunately, your bunkmate is a chronic snorer, and is robbing you of sleep."
					},
					{
						"image": "assault02-03.jpg",
						"text": "You have mentioned it before, but the issue has continued."
					},
					{
						"image": "assault02-04.jpg",
						"text": "After a particularly difficult night you consider pushing him out of his bunk to teach him a lesson."
					}
				],
				"test":{
					"prompt": "What do you do?",
					"description": "After a particularly difficult night you consider pushing him out of his bunk to teach him a lesson",
					"options":[
						{
							"text": "Push them onto the floor"
						},
						{
							"text": "Thump them on the side of the head."
						},
						{
							"text": "Talk to your RDC.",
							"correct": true
						}
					],
					"response":{
						"title": "Talk to your RDC.",
						"description": "Everyone is stressed and accidents happen. Intentionally committing an assault with or without a dangerous weapon or other means or force likely to produce death or grievous bodily harm is a punishable offense. Your RDC might change your bunk assignment."
					}
				}
			}
		]
	}
];


//loads scenario screen of specified index into scenario
function loadScenarioScreen(screenIndex){
	currentScenarioScreen=screenIndex;
	var currentScreen=currentScenario.content[screenIndex];
	$('#scenario-screen-image').attr('src','img/'+currentScreen.image);
	$('#scenario-screen-text').text(currentScreen.text);
	$('#scenario-article-article').text(currentScenario.article);
	$('#scenario-article-title').text(currentArticle.title);
	$('#scenario-title').text(currentScenario.title);

	var percent=((currentScenarioScreen+1)/currentScenario.content.length)*100;
	$('.progress-bar').css('width',percent+'%');
}


function changeTitle(newTitle){
	$('.title').fadeOut(function(){
		$(this).text(newTitle).fadeIn();
	});
}

function arrayScan(target, key){
	var found=0;
	$.each(target,function(){
		if(this[key]){
			found++;
		}
	});
	return found;
}

$(document).ready(function(){

	//restore saved article data
	if(localStorage.getItem('ucmjArticles')){
		articles=JSON.parse(localStorage.getItem('ucmjArticles'));
	}

	
	//populates article library
	function reloadLibrary(){
		$('#articles-library').empty();
		$.each(articles, function(){
			
			var progressString;
			switch (arrayScan(this.scenarios,'complete')/this.scenarios.length){
				case 1:
					progressString='complete';
					break;
				case 0:
					progressString='new';
					break;
				default:
					progressString='underway';		
			}

			var newArticle=$('<div class="col-md-4 tile-hover article-tile progress-'+progressString+'">'+
					'<a href="'+this.id+'">'+
						'<div class="absence " style="background-image: url(img/'+this.libraryImage+'">'+
							'<div class="tile-content">'+
								'<span>'+this.article+'</span>'+
								'<h3>'+this.title+'</h3>'+
							'</div>'+
							'<div class="status">'+
								'<p>'+arrayScan(this.scenarios,'complete')+' of '+this.scenarios.length+' Completed</p>'+
							'</div>'+
						'</div>'+
					'</a>'+
				'</div>');

			newArticle.appendTo('#articles-library');
		});

		//init isotope
		if($isotope){
			$isotope.isotope('destroy');
		}
		else{
			$isotope=$('#articles-library').isotope({
				// options
				itemSelector: '.article-tile',
				layoutMode: 'fitRows'
			});
		}
		

	}
	reloadLibrary();

	//update filter function, search and progress
	function updateFilter(){
		
		$isotope.isotope({filter: function(){

			var selectedProgress=$('#articles-progress-filter li.active a').attr('data-progress');
			var searchVal=$('#search-box').val();

			if(selectedProgress!=='all' && !$(this).hasClass('progress-'+selectedProgress)){
				return false;
			}

			if(searchVal && $(this).find('.tile-content *:containsIN("'+searchVal+'")').length==0){
				return false;
			}
			return true;


		}});
	}

	//when progress filter changes
	$('#articles-progress-filter a').click(function(){
		
		$('#articles-progress-filter li').removeClass('active');
		$(this).parent().addClass('active');
		
		updateFilter();

		return false;
	});

	//edit filter as user types
	$('#search-box').keyup(function(){
		if($(this).val()){
			$('.search-clear').show();
		}
		else{
			$('.search-clear').hide();
		}
		updateFilter();
	});

	//clear search and filter when clear button clicked
	$('.search-clear').click(function(){
		$('#search-box').val('').change();
		$('.search-clear').hide();
	})

	//when search box changes, update filter
	$('#search-box').change(function(){
		updateFilter();
	});

	function reloadScenarios(){
		//empty article scenarios bin, set current article
		$('.article-scenarios').empty();

		//populates article scenarios
		$.each(currentArticle.scenarios, function(index){
			var completeIcon='times-circle',
			progressString='progress-new';

			if(this.complete){
				completeIcon='check-circle';
				progressString='progress-complete';
			}

			var newScenario=$('<div class="col-md-3 tile-hover grid '+progressString+'"">'+
				'<a href="'+this.id+'">'+
					'<div class="larcenyA green">'+
						'<div class="tile-content">'+
							'<span>'+currentArticle.article+'</span>'+
							'<h2>'+this.title+'</h2>'+
							'<p><i class="fa fa-'+completeIcon+'" aria-hidden="true"></i>'+(index+1)+' of '+currentArticle.scenarios.length+'</p>'+
						'</div>'+
						'<div class="status">'+
							'<button type="button" class="btn btn-default redo">Start<i class="fa fa-angle-right" aria-hidden="true"></i></button>'+
						'</div>'+
					'</div>'+
				'</a>'+
			'</div>');


			newScenario.appendTo('.article-scenarios');
		});

		//when you touch a scenario, load into scenario screen
		$('.article-scenarios a').click(function(){
			currentScenario=currentArticle.scenarios[$(this).attr('href')];
			currentScenarioScreen=0;
			loadScenarioScreen(0);
			changeTitle(currentScenario.title);
			$('.screen-article').fadeOut(function(){
				$('.screen-scenario').fadeIn();
			});

			return false;
		});

		$('#article-article').text(currentArticle.article);
		$('#article-title').text(currentArticle.title);
		$('#article-description').text(currentArticle.description);
		$('.btn-read').attr('data-slug',currentArticle.slug);
	}

	//make read article buttons work
	$('body').on('click','.btn-read',function(){
		$('#primer .modal-body').load('ucmj.html #'+$(this).attr('data-slug'));
		$('#primer').modal();
		return false;
	})

	//makes article links active
	$('#articles-library').on('click','a',function(){
		
		currentArticle=articles[$(this).attr('href')];
		reloadScenarios();

		$('#articles').fadeOut(function(){
			$('.screen-article').fadeIn();
		});

		return false;
	});

	//back to articles
	$('#btn-articles-back').click(function(){
		reloadLibrary();
		$('.screen-article').fadeOut(function(){
			$('.screen-articles').fadeIn();
		});
	});

	//back to article
	$('#btn-article-back').click(function(){
		changeTitle('Primer');
		$('.screen-scenario').fadeOut(function(){
			$('.screen-article').fadeIn();
		});
	});

	$('#scenario-next').click(function(){
		if(currentScenarioScreen<(currentScenario.content.length-1)){
			loadScenarioScreen(currentScenarioScreen+1);
		}
		else{
			$('#testModal .modal-title').text(currentScenario.test.prompt);
			$('#testModal .test-question').text(currentScenario.test.description);
			$('#testModal .modal-footer').empty();

			$.each(currentScenario.test.options,function(){
				var testClass='';
				if(this.correct===true){
					testClass='test-correct';
				}
				var newOption=$('<a href="#" class="btn btn-primary btn-block '+testClass+'">'+this.text+'</a>');
				newOption.appendTo('#testModal .modal-footer');
			});

			$('#testModal .modal-footer a').click(function(){
				if($(this).hasClass('test-correct')){
					$('#responseModal .modal-subtitle').removeClass('correct incorrect').addClass('correct').text('Correct');
					currentScenario.complete=true;
					localStorage.setItem('ucmjArticles',JSON.stringify(articles));
				}
				else{
					$('#responseModal .modal-subtitle').removeClass('correct incorrect').addClass('incorrect').text('Incorrect');
				}

				$('#responseModal .modal-title').text(currentScenario.test.response.title);
				$('#responseModal .test-response').text(currentScenario.test.response.description);
				$('#testModal').modal('hide');
				$('#responseModal').modal();
			});
			$('#testModal').modal();
		}
	});

	$('#scenario-back').click(function(){
		if(currentScenarioScreen>0){
			loadScenarioScreen(currentScenarioScreen-1);
		}
		/*else{
			changeTitle('Primer');
			$('.screen-scenario').fadeOut(function(){
				$('.screen-article').fadeIn();
			});
		}*/
	});

	$('.btn-test-toarticle').click(function(){
		$('#responseModal').modal('hide');
		changeTitle('Primer');
		reloadScenarios();
		$('.screen-scenario').fadeOut(function(){
			$('.screen-article').fadeIn();
		});
	});

	$('.btn-test-tryagain').click(function(){
		$('#responseModal').modal('hide');
		$('#testModal').modal();
	});
});