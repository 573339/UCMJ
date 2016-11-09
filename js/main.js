var currentArticle,
	currentScenario,
	currentScenarioScreen;

var articles=[
	{
		"id": 0,
		"article": "921.ARTICLE 121",
		"title": "Larceny and Wrongful Appropriation",
		"description": "eeeAliquam et mattis turpis. Etiam tincidunt ex vel leo luctus accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam commodo nisl ac vestibulum convallis.",
		"image": "larceny.jpg",
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
							"text": "Report the isue to a superior",
							"correct": true
						},
						{
							"text": "Take the unattended valuables"
						}
					],
					"response":{
						"title": "Close the Locker",
						"description": "Any interaction with property that is not your own could be misconstrued. Wrongfully taking, obtaining, or withholding, by any means, from the possession of the owner or of any other person any money, personal, property, or article of value of any kind is a punishable offense."
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

$(document).ready(function(){


	//populates article library
	$.each(articles, function(){
		var newArticle=$('<div class="col-md-4 tile-hover">'+
				'<a href="'+this.id+'">'+
					'<div class="absence green">'+
						'<div class="tile-content">'+
							'<span>'+this.article+'</span>'+
							'<h3>'+this.title+'</h3>'+
						'</div>'+
						'<div class="status">'+
							'<p>0 of '+this.scenarios.length+' Completed</p>'+
						'</div>'+
					'</div>'+
				'</a>'+
			'</div>');

		newArticle.appendTo('#articles-library');
	});

	//makes article links active
	$('#articles-library a').click(function(){
			
		//empty article scenarios bin, set current article
		$('.article-scenarios').empty();
		currentArticle=articles[$(this).attr('href')];

		//populates article scenarios
		$.each(currentArticle.scenarios, function(index){

			var newScenario=$('<div class="col-md-3 tile-hover grid">'+
				'<a href="'+this.id+'">'+
					'<div class="larcenyA green">'+
						'<div class="tile-content">'+
							'<span>'+currentArticle.article+'</span>'+
							'<h2>'+this.title+'</h2>'+
							'<p><i class="fa fa-check-circle" aria-hidden="true"></i>'+(index+1)+' of '+currentArticle.scenarios.length+'</p>'+
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


		$('#articles').fadeOut(function(){
			$('.screen-article').fadeIn();
		});

		return false;
	});

	//back to articles
	$('#btn-articles-back').click(function(){
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
		$('.screen-scenario').fadeOut(function(){
			$('.screen-article').fadeIn();
		});
	});

	$('.btn-test-tryagain').click(function(){
		$('#responseModal').modal('hide');
		$('#testModal').modal();
	});
});