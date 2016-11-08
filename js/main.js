
var sections=[
	{
		"article": "921.ARTICLE 121",
		"title": "Larceny and Wrongful Appropriation",
		"description": "Aliquam et mattis turpis. Etiam tincidunt ex vel leo luctus accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam commodo nisl ac vestibulum convallis.",
		"image": "larceny.jpg",
		"scenarios":[
			{
				"article": "921.ARTICLE 121",
				"title": "Scenario 1",
				"content":[
					{
						"image": "larceny1.jpg",
						"text": "Early in the morning, your fellow recruits prepare to move out on a busy training schedule."
					},
					{
						"image": "larceny2.jpg",
						"text": "Then somebody finds something."
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
							"text": "Reportt he isue to a superior",
							"correct": true
						},
						{
							"text": "take the unattended valuables"
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


$(document).ready(function(){


	//populates article library
	$.each(sections, function(){
		var newArticle=$('<div class="col-md-4 tile-hover">'+
				'<a href="#">'+
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
});