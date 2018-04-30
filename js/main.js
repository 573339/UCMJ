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
		"description": "Wrongfully taking, obtaining, or withholding from the owner any money, personal property, or article of value of any kind.",
		"image": "larceny-1.jpg",
		"libraryImage": "larceny-article.jpg",
		"progress": "complete",
		"scenarios":[
			{
				"id": 0,
				"article": "921.ARTICLE 121",
				"title": "Scenario 1",
				"image": "larceny-1.jpg",
				"content":[
					{
						"image": "Larceny-1-01f.jpg",
						"text": "Early in the morning, your fellow recruits prepare to move out on a busy training schedule."
					},
					{
						"image": "Larceny-1-02f.jpg",
						"text": "Later that day when no one is around, you notice something unusual."
					},
					{
						"image": "Larceny-1-03f.jpg",
						"text": "A couple of your fellow recruits have left their racks open."
					},
					{
						"image": "Larceny-1-04f.jpg",
						"text": "Upon closer inspection you clearly see a wallet inside."
					}
				],
				"test":{
					"prompt": "What do you do?",
					"description": "Upon closer inspection, you clearly see a wallet inside",
					"options":[
						{
							"text": "Close the locker",
							"response":"Any interaction with property that is not your own could be misconstrued and therefore a bad idea. While securing their gear is not itself a crime, it is a bad idea.  Wrongfully taking, obtaining, or withholding, by any means, from the possession of the owner or of any other person any money, personal property, or article of value of any kind is a punishable offense."
						},
						{
							"text": "Report the issue to a superior",
							"correct": true,
							"response": "In the absence of the occupant, the unsecured state should be reported to a superior.  Wrongfully taking, obtaining, or withholding, by any means, from the possession of the owner or of any other person any money, personal property, or article of value of any kind is a punishable offense."
						},
						{
							"text": "Take the unattended valuables",
							"response":"Wrongfully taking, obtaining, or withholding, by any means, from the possession of the owner or of any other person any money, personal property, or article of value of any kind is a punishable offense."
						}
					]
				}
			},
			{
				"id": 1,
				"article": "921.ARTICLE 121",
				"title": "Scenario 2",
				"image": "larceny-2.jpg",
				"content":[
					{
						"image": "Larceny-2-01f.jpg",
						"text": "Getting ready for a busy day, you are one of the last of the recruits to use the head."
					},
					{
						"image": "Larceny-2-02f.jpg",
						"text": "As you are wrapping up, you notice that one of your fellow recruits accidently left their toiletries on a sink."
					},
					{
						"image": "Larceny-2-03f.jpg",
						"text": "Looking closer, you are pretty sure you know the owner and consider him a friend."
					},
					{
						"image": "Larceny-2-04f.jpg",
						"text": "Your friend seems to have a good sense of humor, so you consider playing a prank."
					}
				],
				"test":{
					"prompt": "What do you do?",
					"description": "Your friend seems to have a good sense of humor, so you consider playing a prank",
					"options":[
						{
							"text": "Tell them where you saw it",
							"correct": true,
							"response":"Any interaction with property that is not your own could be misconstrued.  Wrongfully taking, obtaining, or withholding, by any means, from the possession of the owner or of any other person any money, personal property, or article of value of any kind is a punishable offense."
						},
						{
							"text": "Hide the toothbrush",
							"response":"Wrongfully taking, obtaining, or withholding, by any means, from the possession of the owner or of any other person any money, personal property, or article of value of any kind is a punishable offense."
						},
						{
							"text": "Give it to them when you see them",
							"response":"Wrongfully taking, obtaining, or withholding, by any means, from the possession of the owner or of any other person any money, personal property, or article of value of any kind is a punishable offense."
						}
					]
				}
			}
		]
	},
	{
		"id": 1,
		"article": "886. ARTICLE 86.",
		"title": "Absence Without Leave",
		"slug":"awol",
		"description": "Failure to go to an appointed place of duty at the time prescribed or absenting yourself from your unit, organization, or place of duty.",
		"image": "awol-1.jpg",
		"libraryImage": "absence-article.jpg",
		"progress": "underway",
		"scenarios":[
			{
				"id": 0,
				"article": "886.ARTICLE 86",
				"title": "Scenario 1",
				"image": "awol-1.jpg",
				"content":[
					{
						"image": "AWOL-1-01f.jpg",
						"text": "Early in the morning, you are attending class."
					},
					{
						"image": "AWOL-1-02f.jpg",
						"text": "Your studies to date have not allowed you time to look around."
					},
					{
						"image": "AWOL-1-03f.jpg",
						"text": "As your last class of the morning winds down your instructor summarizes the lesson."
					},
					{
						"image": "AWOL-1-04f.jpg",
						"text": "As you are leaving, a RDC directs you to report to Remedial Swim Instruction."
					}
				],
				"test":{
					"prompt": "What do you do?",
					"description": "You are directed to report to Remedial Swim Instruction by 15:30",
					"options":[
						{
							"text": "Be on time, but look around",
							"response":"Failure to go to an appointed place without permission at the time prescribed is a punishable offense."
						},
						{
							"text": "Skip the RSI",
							"response":"Failure to go to an appointed place without permission at the time prescribed is a punishable offense."
						},
						{
							"text": "Go directly to RSI as instructed",
							"correct": true,
							"response":"Curb your curiosity and be diligent.  Failure to go to an appointed place without permission at the time prescribed is a punishable offense."
						}
					]
				}
			},
			{
				"id": 1,
				"article": "886.ARTICLE 86",
				"title": "Scenario 2",
				"image": "awol-2.jpg",
				"content":[
					{
						"image": "AWOL-2-01f.jpg",
						"text": "Taps just went down, and you should be fast asleep."
					},
					{
						"image": "AWOL-2-02f.jpg",
						"text": "It was a very full day, but you are wide awake and your mind is racing."
					},
					{
						"image": "AWOL-2-03f.jpg",
						"text": "Earlier in the day a fellow recruit had suggested that the two of you could sneak out for an hour."
					},
					{
						"image": "AWOL-2-04f.jpg",
						"text": "You are giving serious consideration to sneaking out of your compartment to meet up with a fellow recruit."
					}
				],
				"test":{
					"prompt": "What do you do?",
					"description": "You are giving serious consideration to sneaking out of your compartment to meet up with a fellow recruit",
					"options":[
						{
							"text": "Don’t do it",
							"correct": true,
							"response":"Consider the consequences and go back to sleep.  Absenting yourself without authority from your unit, organization, or place of duty at which you are required to be at the time prescribed is a punishable offense."
						},
						{
							"text": "Sneak out without being seen",
							"response":"Absenting yourself without authority from your unit, organization, or place of duty at which you are required to be at the time prescribed is a punishable offense."
						},
						{
							"text": "Get a lookout and make your exodus",
							"response":"Absenting yourself without authority from your unit, organization, or place of duty at which you are required to be at the time prescribed is a punishable offense."
						}
					]
				}
			}
		]
	},
	{
		"id": 2,
		"article": "892. ARTICLE 92.",
		"title": "Failure to Obey Order or Regulation",
		"slug":"failuretoobey",
		"description": "Violating or failing to obey a general order or regulation or dereliction of duties.",
		"image": "failuretoobey-1.jpg",
		"libraryImage": "failure-article.jpg",
		"progress": "new",
		"scenarios":[
			{
				"id": 0,
				"article": "892.ARTICLE 92",
				"title": "Scenario 1",
				"image": "failuretoobey-1.jpg",
				"content":[
					{
						"image": "FailureToObey-1-01f.jpg",
						"text": "Traveling back and forth across the base to attend classes and activities, there is a lot to see."
					},
					{
						"image": "FailureToObey-1-02f.jpg",
						"text": "Down time is at a premium and you miss your family and friends."
					},
					{
						"image": "FailureToObey-1-03f.jpg",
						"text": "You are ordered by a superior to report to Building 1405 and fill out some paperwork."
					},
					{
						"image": "FailureToObey-1-04f.jpg",
						"text": "Should be about a 10 minute walk, but you might have time for a quick phone call home."
					}
				],
				"test":{
					"prompt": "What do you do?",
					"description": "Should be about a 10 minute walk, but you might have time for a quick phone call home",
					"options":[
						{
							"text": "Make a quick call from the payphones",
							"response":"Recruits have standing orders to only use pay phones when with an RDC. Violating or failing to obey any lawful general order or regulation is a punishable offense."
						},
						{
							"text": "Go directly to Building 1405 as ordered",
							"correct": true,
							"response":"Always better to be early than risk a distraction and arrive late. Violating or failing to obey any lawful general order or regulation is a punishable offense."
						},
						{
							"text": "Stop by the payphones and see if you have time for a call",
							"response":"Violating or failing to obey any lawful general order or regulation is a punishable offense."
						}
					]
				}
			}
		]
	},
	{
		"id": 3,
		"article": "907. ARTICLE 107.",
		"title": "False official statements; false swearing",
		"slug":"falsestatements",
		"description": "Willfully signing any false record, return, regulation, order, or other official document, knowing it to be false or making false statements.",
		"image": "falsestatements-1.jpg",
		"libraryImage": "false-article.jpg",
		"progress": "underway",
		"scenarios":[
			{
				"id": 0,
				"article": "907.ARTICLE 107",
				"title": "Scenario 1",
				"image": "falsestatements-1.jpg",
				"content":[
					{
						"image": "False-Statements-1-01f.jpg",
						"text": "Based on your Swim Qualification score, you are not much of a swimmer."
					},
					{
						"image": "False-Statements-1-02f.jpg",
						"text": "You are concerned that this will negatively impact your ability to graduate."
					},
					{
						"image": "False-Statements-1-03f.jpg",
						"text": "You know where Hard Cards are kept within the berthing compartment.  You think you may be able to gain access to the cards."
					},
					{
						"image": "False-Statements-1-04f.jpg",
						"text": "You consider gaining access and placing a false entry on your Hard Card to positively impact your RSQ status."
					}
				],
				"test":{
					"prompt": "What do you do?",
					"description": "You consider gaining access and placing a false entry on your Hard Card to positively impact your RSQ status",
					"options":[
						{
							"text": "Correct the omission",
							"correct": true,
							"response":"Personal medical information is confidential and necessary.  Deceit with intent including signing a false record, return, regulation, order, or other official document, knowing it to be false is a punishable offense."
						},
						{
							"text": "Sign and turn in the form",
							"response":"Intent to deceive including signing a false record, return, regulation, order, or other official document, knowing it to be false is a punishable offense."
						},
						{
							"text": "Ask another recruit to fill it in for you",
							"response":"Deceit with intent including signing a false record, return, regulation, order, or other official document, knowing it to be false is a punishable offense."
						}
					]
				}
			},
			{
				"id": 1,
				"article": "907.ARTICLE 107",
				"title": "Scenario 2",
				"image": "falsestatements-2.jpg",
				"content":[
					{
						"image": "False-Statements-2-01f.jpg",
						"text": "Your recruit formation is being thoroughly grilled by an RDC."
					},
					{
						"image": "False-Statements-2-02f.jpg",
						"text": "Apparently, they found a few snack wrappers that were hidden in your compartment."
					},
					{
						"image": "False-Statements-2-03f.jpg",
						"text": "You were hungry and knew it was against the rules."
					},
					{
						"image": "False-Statements-2-04f.jpg",
						"text": "Your RDC looks directly at you and asks if you know who is responsible."
					}
				],
				"test":{
					"prompt": "What do you do?",
					"description": "Your RDC looks directly at you and asks if you know who is responsible",
					"options":[
						{
							"text": "Tell him you do not know who is responsible.",
							"response":"Making an intentionally deceitful false official statement knowing it to be false, is a punishable offense."
						},
						{
							"text": "Admit guilt",
							"correct": true,
							"response":"Be honorable and take your punishment.  Making an intentionally deceitful false official statement knowing it to be false, is a punishable offense."
						},
						{
							"text": "Falsely implicate others",
							"response":"Making an intentionally deceitful false official statement knowing it to be false, is a punishable offense."
						}
					]
				}
			}
		]
	},
	{
		"id": 4,
		"article": "911. ARTICLE 113.",
		"title": "Drunken or Reckless Operation of a Vehicle, Aircraft, or Vessel ",
		"slug":"drunkendriving",
		"description": "Operating any vehicle while drunk, in a reckless or wanton manner, or while impaired by a substance.",
		"image": "drunkendriving-1.jpg",
		"libraryImage": "drunken-article.jpg",
		"progress": "new",
		"scenarios":[
			{
				"id": 0,
				"article": "911.ARTICLE 113",
				"title": "Scenario 1",
				"image": "drunkendriving-1.jpg",
				"content":[
					{
						"image": "Drunken-1-01f.jpg",
						"text": "Post boot camp graduation, you have now entered A School for technical training."
					},
					{
						"image": "Drunken-1-02f.jpg",
						"text": "While on liberty you lose track of your alcohol consumption."
					},
					{
						"image": "Drunken-1-03f.jpg",
						"text": "3.	Now feeling light headed due to the ingredients of the cough medicine, you have to make sure you get back on time."
					},
					{
						"image": "Drunken-1-04f.jpg",
						"text": "One of the people you met offers to let you borrow their car to make the trek back."
					}
				],
				"test":{
					"prompt": "What do you do?",
					"description": "One of the people you met offers to let you borrow their car to make the trek back",
					"options":[
						{
							"text": "Borrow the car",
							"response":"Operating any vehicle while drunk, or in a reckless or wanton manner is a punishable offense."
						},
						{
							"text": "Borrow a bicycle",
							"response":"Operating any vehicle while drunk, or in a reckless or wanton manner is a punishable offense. "
						},
						{
							"text": "Take a cab",
							"correct": true,
							"response":"Compounding on your overindulgence could have dire consequences.  Operating any vehicle while drunk, or in a reckless or wanton manner is a punishable offense."
						}
					]
				}
			},
			{
				"id": 1,
				"article": "911.ARTICLE 113",
				"title": "Scenario 2",
				"image": "drunkendriving-2.jpg",
				"content":[
					{
						"image": "DWI-1-01f.jpg",
						"text": "Post boot camp graduation, you have now entered A School for technical training."
					},
					{
						"image": "DWI-1-02f.jpg",
						"text": "While on liberty you take a large dose of over the counter cough medicine."
					},
					{
						"image": "DWI-1-03f.jpg",
						"text": "Now feeling light headed, you have to make sure you get back on time."
					},
					{
						"image": "DWI-1-04f.jpg",
						"text": "One of the people you met offers to let you borrow their car to make the trek back."
					}
				],
				"test":{
					"prompt": "What do you do?",
					"description": "None of the people you met offers to let you borrow their car to make the trek back",
					"options":[
						{
							"text": "Borrow the car",
							"response":"Operating any vehicle while impaired by a substance is a punishable offense."
						},
						{
							"text": "Take a cab",
							"correct": true,
							"response":"You should have read the label first.  Operating any vehicle while impaired by a substance is a punishable offense."
						},
						{
							"text": "Borrow a bicycle",
							"response":"Operating any vehicle while impaired by a substance is a punishable offense."
						}
					]
				}
			}
		]
	},
	{
		"id": 5,
		"article": "912a. ARTICLE 112a.",
		"title": "Wrongful Use, Possession, Etc., of Controlled Substances",
		"slug":"wrongfuluse",
		"description": "Wrongful use, possession, manufacture, distribution, import/export or introduction of an illegal or specified controlled substances.",
		"image": "wrongfuluse-1.jpg",
		"libraryImage": "wrongful-article.jpg",
		"progress": "underway",
		"scenarios":[
			{
				"id": 0,
				"article": "912a.ARTICLE 112a",
				"title": "Scenario 1",
				"image": "wrongfuluse-1.jpg",
				"content":[
					{
						"image": "Wrongful-1-01f.jpg",
						"text": "Learning all of this information can be a stressful experience."
					},
					{
						"image": "Wrongful-1-02f.jpg",
						"text": "Quizzes are particularly hard."
					},
					{
						"image": "Wrongful-1-03f.jpg",
						"text": "In junior high school, you used a prescribed drug to keep your anxiety in check."
					},
					{
						"image": "Wrongful-1-04f.jpg",
						"text": "You eventually grew out of the need, but snuck in a few pills from your old prescription just in case."
					}
				],
				"test":{
					"prompt": "What do you do?",
					"description": "You eventually grew out of the need, but snuck in a few pills from your old prescription just in case",
					"options":[
						{
							"text": "Take a half dose to take the edge off",
							"response":"Wrongfully using, possessing, manufacturing, distributing, importing or introducing to an installation, vessel, vehicle, or aircraft of the armed forces of a prohibited substance is a punishable offense."
						},
						{
							"text": "Dispose of the substance",
							"correct": true,
							"response":"Focus and diligent study is the best path to success.  Wrongfully using, possessing, manufacturing, distributing, importing or introducing to an installation, vessel, vehicle, or aircraft of the armed forces of a prohibited substance is a punishable offense."
						},
						{
							"text": "Take a half pill and give the rest to a colleague",
							"response":"Wrongfully using, possessing, manufacturing, distributing, importing or introducing to an installation, vessel, vehicle, or aircraft of the armed forces of a prohibited substance is a punishable offense."
						}
					]
				}
			},
			{
				"id": 1,
				"article": "912.ARTICLE 112a",
				"title": "Scenario 2",
				"image": "wrongfuluse-2.jpg",
				"content":[
					{
						"image": "Wrongful-2-01f.jpg",
						"text": "You were recently issued Tylenol for a minor medical issue."
					},
					{
						"image": "Wrongful-2-02f.jpg",
						"text": "You only used a small portion, and have a pretty good amount left over."
					},
					{
						"image": "Wrongful-2-03f.jpg",
						"text": "You mention this to a few of your fellow recruits and the ideas started pouring in."
					},
					{
						"image": "Wrongful-2-04f.jpg",
						"text": "The most interesting idea would have you chop the pills into powder and share with the other recruits."
					}
				],
				"test":{
					"prompt": "What do you do?",
					"description": "The most interesting idea would have you chop the pills into powder and share with the other recruits",
					"options":[
						{
							"text": "Share as planned",
							"response":"Involving others in a bad decision just compounds is mistake.  Wrongfully use, possession, manufacture, distribution, import or introduction to an installation, vessel, vehicle, or aircraft of the armed forces of a prohibited substance is a punishable offense."
						},
						{
							"text": "Use all of it for yourself",
							"response":"A large dose of a seemingly benign drug can have unforeseen adverse effects.  Wrongfully use, possession, manufacture, distribution, import or introduction to an installation, vessel, vehicle, or aircraft of the armed forces of a prohibited substance is a punishable offense."
						},
						{
							"text": "Turn in the unused portion",
							"correct": true,
							"response":"You don’t need it anymore and should turn it in or get rid of it.  Wrongfully use, possession, manufacture, distribution, import or introduction to an installation, vessel, vehicle, or aircraft of the armed forces of a prohibited substance is a punishable offense."
						}
					]
				}
			}
		]
	},
	{
		"id": 6,
		"article": "920. ARTICLE 120.",
		"title": "Rape and Sexual Assault Generally",
		"slug":"rape",
		"description": "Committing an unwanted sexual act or sexual assault of any kind upon another person.",
		"image": "rape-1.jpg",
		"libraryImage": "rape-article.jpg",
		"progress": "underway",
		"scenarios":[
			{
				"id": 0,
				"article": "920. ARTICLE 120",
				"title": "Scenario 1",
				"image": "rape-1.jpg",
				"content":[
					{
						"image": "RASA-01f.jpg",
						"text": "Running late and have to change into clean clothes."
					},
					{
						"image": "RASA-02f.jpg",
						"text": "Another male recruit is also changing. The two of you joke around all the time but it's been limited to comments and gestures, without any physical contact."
					},
					{
						"image": "RASA-03f.jpg",
						"text": "His back is to you, and you are thinking of how to get back at him for his last prank."
					}
				],
				"test":{
					"prompt": "What do you do?",
					"description": "His back is to you, and you are thinking of how to get back at him for his last prank",
					"options":[
						{
							"text": "Do nothing",
							"correct": true,
							"response":"Touching, or causing another person to touch, either directly or through the clothing is a punishable offense."
						},
						{
							"text": "He messes with you all the time. Get him back by snapping him on the butt with the towel",
							"response":"Touching, or causing another person to touch, either directly or through the clothing is a punishable offense."
						},
						{
							"text": "You're friends. A snap on the butt with a towel is innocent joking around",
							"response":"Touching, or causing another person to touch, either directly or through the clothing is a punishable offense."
						}
					]
				}
			}
		]
	},
	{
		"id": 7,
		"article": "928. ARTICLE 128.",
		"title": "Assault",
		"slug":"assault",
		"description": "Attempting or threatening another with unlawful force or violence to do bodily harm.",
		"image": "assault-1.jpg",
		"libraryImage": "assault-article.jpg",
		"progress": "underway",
		"scenarios":[
			{
				"id": 0,
				"article": "928.ARTICLE 128",
				"title": "Scenario 1",
				"image": "assault-1.jpg",
				"content":[
					{
						"image": "Assault-1-01f.jpg",
						"text": "Everyone has been working hard and tension has been pretty thick."
					},
					{
						"image": "Assault-1-02f.jpg",
						"text": "Your bunkmate often talks in his sleep, and is keeping you awake."
					},
					{
						"image": "Assault-1-03f.jpg",
						"text": "You have tried to think of a nice way to bring it up, but to no avail."
					},
					{
						"image": "Assault-1-04f.jpg",
						"text": "One morning you had been robbed of sleep and consider making a threat to get them to stop."
					}
				],
				"test":{
					"prompt": "What do you do?",
					"description": "One morning you had been robbed of sleep and consider making a threat to get them to stop",
					"options":[
						{
							"text": "Talk to your RDC",
							"correct": true,
							"response":"You’re not a civilian anymore, and actions have consequences. Attempting or threatening to do bodily harm to another person is a punishable offense. Your RDC might change your bunk assignment."
						},
						{
							"text": "Use a clenched fist to threaten them",
							"response":"Attempting or threatening to do bodily harm to another person is a punishable offense."
						},
						{
							"text": "Intimidate them with an implied threat",
							"response":"Attempting or threatening to do bodily harm to another person is a punishable offense."
						}
					]
				}
			},
			{
				"id": 1,
				"article": "928.ARTICLE 128",
				"title": "Scenario 2",
				"image": "assault-2.jpg",
				"content":[
					{
						"image": "Assault-2-01f.jpg",
						"text": "Everyone has been working hard to learn new skills and succeed."
					},
					{
						"image": "Assault-2-02f.jpg",
						"text": "Unfortunately, your bunkmate is a chronic snorer, and is robbing you of sleep."
					},
					{
						"image": "Assault-2-03f.jpg",
						"text": "You have mentioned it before, but the issue has continued."
					},
					{
						"image": "Assault-2-04f.jpg",
						"text": "After a particularly difficult night you consider pushing him out of his bunk to teach him a lesson."
					}
				],
				"test":{
					"prompt": "What do you do?",
					"description": "After a particularly difficult night you consider pushing him out of his bunk to teach him a lesson.",
					"options":[
						{
							"text": "Push them onto the floor",
							"response":"Intentionally committing an assault with or without a dangerous weapon or other means or force likely to produce death or grievous bodily harm is a punishable offense."
						},
						{
							"text": "Thump them on the side of the head.",
							"response":"Intentionally committing an assault with or without a dangerous weapon or other means or force likely to produce death or grievous bodily harm is a punishable offense."
						},
						{
							"text": "Talk to your RDC.",
							"correct": true,
							"response":"Everyone is stressed and accidents happen. Intentionally committing an assault with or without a dangerous weapon or other means or force likely to produce death or grievous bodily harm is a punishable offense. Your RDC might change your bunk assignment."
						}
					]
				}
			}
		]
	},
	{
		"id": 8,
		"article": "895. ARTICLE 95.",
		"title": "Offenses By Sentinel or Lookout",
		"slug":"sentinel",
		"description": "Misbehavior while performing the duties of a lookout or sentinel.",
		"image": "failuretoobey-2.jpg",
		"libraryImage": "failure-article.jpg",
		"progress": "new",
		"scenarios":[
			{
				"id": 0,
				"article": "895.ARTICLE 95",
				"title": "Scenario 1",
				"image": "failuretoobey-2.jpg",
				"content":[
					{
						"image": "FailureToObey-2-01f.jpg",
						"text": "You are assigned fire watch for your compartment, and should be up most of the night."
					},
					{
						"image": "FailureToObey-2-02f.jpg",
						"text": "After a few hours it becomes increasingly harder to stay alert."
					},
					{
						"image": "FailureToObey-2-03f.jpg",
						"text": "Everyone is sound asleep and nobody is checking on you."
					},
					{
						"image": "FailureToObey-2-04f.jpg",
						"text": "You figure you have done your part and consider slipping into your rack for the last couple of hours."
					}
				],
				"test":{
					"prompt": "What do you do?",
					"description": "You figure you have done your part and consider slipping into your rack for the last couple of hours",
					"options":[
						{
							"text": "Take the rest of the night off",
							"response":"Being derelict in the performance of your duties is a punishable offense."
						},
						{
							"text": "Sleep standing up",
							"response":"Being derelict in the performance of your duties is a punishable offense."
						},
						{
							"text": "Stay focused",
							"correct": true,
							"response":"How you perform your duties is a reflection on your character.  Being derelict in the performance of your duties is a punishable offense."
						}
					]
				}
			}
		]
	}
];


//loads scenario screen of specified index into scenario
function loadScenarioScreen(screenIndex){
	currentScenarioScreen=screenIndex;
	var currentScreen=currentScenario.content[screenIndex];
	$('#scenario-screen-image').attr('src','articles/'+currentArticle.slug+'/'+currentScreen.image);
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

	$.each(articles, function(){
		$('<div>').load('ucmj.html #'+this.slug).unwrap().appendTo('#primer .modal-body .primer-articles');
		$('<li><a href="#'+this.slug+'">'+this.title+'</a></li>').appendTo('#primer .modal-body .primer-nav');
	});

	
	//populates article library
	function reloadLibrary(){
		$('#articles-library').empty();
		$.each(articles, function(){
			
			//determine progress states
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

			//create tile and append to article library
			var newArticle=$('<div class="col-md-4 tile-hover article-tile progress-'+progressString+'">'+
					'<a href="'+this.id+'">'+
						'<div class="tile" style="background-image: url(articles/'+this.slug+'/'+this.image+'">'+
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
					'<div class="scenario-tile" style="background-image: url(\'articles/'+currentArticle.slug+'/'+this.image+'\')">'+
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
		$('#article-banner').css('background-image','url("articles/'+currentArticle.slug+'/banner.jpg")');
		$('#article-title').text(currentArticle.title);
		$('#article-description').text(currentArticle.description);
		$('.btn-read').attr('data-slug',currentArticle.slug);
	}

	//make read article buttons work
	$('body').on('click','.btn-read',function(){
		var el=$(this);
		$('#primer').modal().on('shown.bs.modal',function(){
			$('.primer-articles').scrollTop($('.primer-articles #'+el.attr('data-slug')).offset().top-139);
		});
		return false;
	});

	function isScrolledIntoView(elem)
	{
	    var docViewTop = $('.primer-articles').scrollTop();
	    var docViewBottom = docViewTop + $('.primer-articles').height();

	    var elemTop = $(elem).offset().top;
	    var elemBottom = elemTop + $(elem).height();

	    console.log(docViewTop,docViewBottom,elemTop,elemBottom);

	    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}

	$('.primer-articles').scroll(function(){
		console.log($('.primer-articles').scrollTop());

		$('.primer-articles div[id]').each(function(){
			console.log(isScrolledIntoView($(this))+' '+$(this).attr('id'));
		});
	});


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
		changeTitle('UCMJ Primer');
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

			$.each(currentScenario.test.options,function(index){
				var testClass='';
				if(this.correct===true){
					testClass='test-correct';
				}
				var newOption=$('<a href="#" class="btn btn-primary btn-block '+testClass+'" data-answerID="'+index+'">'+this.text+'</a>');
				newOption.appendTo('#testModal .modal-footer');
			});

			$('#testModal .modal-footer a').click(function(){
				if($(this).hasClass('test-correct')){
					$('#responseModal').addClass('modal-correct');
					$('#responseModal .modal-subtitle').removeClass('correct incorrect').addClass('correct').text('Correct');
					currentScenario.complete=true;
					
					var localdata=[];
					$.each(articles,function(index){

						var currentIndex=index;
						if(arrayScan(this.scenarios,'complete')){
							localdata.push({"articleIndex": currentIndex,"scenarios":[]});
							$.each(this.scenarios,function(index){
								if(this.complete){
									localdata[localdata.length-1].scenarios.push(index);
								}
							});
						}
					});

				}
				else{
					$('#responseModal').removeClass('modal-correct');
					$('#responseModal .modal-subtitle').removeClass('correct incorrect').addClass('incorrect').text('Incorrect');
				}

				$('#responseModal .modal-title').text(currentScenario.test.options[$(this).attr('data-answerID')].text);
				$('#responseModal .test-response').text(currentScenario.test.options[$(this).attr('data-answerID')].response);
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
		changeTitle('UCMJ Primer');
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