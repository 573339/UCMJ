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
			}
		]
	},
	{
		"id": 1,
		"article": "886. ARTICLE 86.",
		"title": "Absence Without Leave",
		"description": "Aliquam et mattis turpis. Etiam tincidunt ex vel leo luctus accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam commodo nisl ac vestibulum convallis.",
		"image": "larceny.jpg",
		"libraryImage": "absence-article.jpg",
		"progress": "underway",
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
			}
		]
	},
	{
		"id": 2,
		"article": "892. ARTICLE 92.",
		"title": "Failure to Obey Order or Regulation",
		"description": "Aliquam et mattis turpis. Etiam tincidunt ex vel leo luctus accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam commodo nisl ac vestibulum convallis.",
		"image": "larceny.jpg",
		"libraryImage": "failure-article.jpg",
		"progress": "new",
		"scenarios":[]
	},
	{
		"id": 3,
		"article": "907. ARTICLE 107.",
		"title": "False Statements",
		"description": "Aliquam et mattis turpis. Etiam tincidunt ex vel leo luctus accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam commodo nisl ac vestibulum convallis.",
		"image": "larceny.jpg",
		"libraryImage": "false-article.jpg",
		"progress": "underway",
		"scenarios":[]
	},
	{
		"id": 4,
		"article": "911. ARTICLE 111.",
		"title": "Drunken or Reckless Driving",
		"description": "Aliquam et mattis turpis. Etiam tincidunt ex vel leo luctus accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam commodo nisl ac vestibulum convallis.",
		"image": "larceny.jpg",
		"libraryImage": "drunken-article.jpg",
		"progress": "new",
		"scenarios":[]
	},
	{
		"id": 5,
		"article": "912a. ARTICLE 112a.",
		"title": "Wrongful Use, Possession, Etc., of Controlled Substances",
		"description": "Aliquam et mattis turpis. Etiam tincidunt ex vel leo luctus accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam commodo nisl ac vestibulum convallis.",
		"image": "larceny.jpg",
		"libraryImage": "wrongful-article.jpg",
		"progress": "underway",
		"scenarios":[]
	},
	{
		"id": 6,
		"article": "920. ARTICLE 120.",
		"title": "Rape and Carnal Knowledge",
		"description": "Aliquam et mattis turpis. Etiam tincidunt ex vel leo luctus accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam commodo nisl ac vestibulum convallis.",
		"image": "larceny.jpg",
		"libraryImage": "rape-article.jpg",
		"progress": "underway",
		"scenarios":[]
	},
	{
		"id": 7,
		"article": "928. ARTICLE 128.",
		"title": "Assault",
		"description": "Aliquam et mattis turpis. Etiam tincidunt ex vel leo luctus accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam commodo nisl ac vestibulum convallis.",
		"image": "larceny.jpg",
		"libraryImage": "assault-article.jpg",
		"progress": "underway",
		"scenarios":[]
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

			var newScenario=$('<div class="col-md-3 tile-hover grid">'+
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
	}

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