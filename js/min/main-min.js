function loadScenarioScreen(e){currentScenarioScreen=e;var t=currentScenario.content[e];$("#scenario-screen-image").attr("src","img/"+t.image),$("#scenario-screen-text").text(t.text),$("#scenario-article-article").text(currentScenario.article),$("#scenario-article-title").text(currentArticle.title),$("#scenario-title").text(currentScenario.title);var r=(currentScenarioScreen+1)/currentScenario.content.length*100;$(".progress-bar").css("width",r+"%")}function changeTitle(e){$(".title").fadeOut(function(){$(this).text(e).fadeIn()})}var currentArticle,currentScenario,currentScenarioScreen,articles=[{id:0,article:"921.ARTICLE 121",title:"Larceny and Wrongful Appropriation",description:"eeeAliquam et mattis turpis. Etiam tincidunt ex vel leo luctus accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam commodo nisl ac vestibulum convallis.",image:"larceny.jpg",scenarios:[{id:0,article:"921.ARTICLE 121",title:"Scenario 1",content:[{image:"scenario-01.jpg",text:"Early in the morning, your fellow recruits prepare to move out on a busy training schedule."},{image:"scenario-02.jpg",text:"Later that day when no one is around, you notice something unusual."},{image:"scenario-03.jpg",text:"A couple of your fellow recruits have left their racks open."},{image:"scenario-04.jpg",text:"Upon closer inspection you clearly see a wallet inside."}],test:{prompt:"What do you do?",description:"Upon closer inspection, you clearly see a wallet inside",options:[{text:"Close the locker",correct:!0},{text:"Report the isue to a superior"},{text:"Take the unattended valuables"}],response:{title:"Close the Locker",description:"Any interaction with property that is not your own could be misconstrued. Wrongfully taking, obtaining, or withholding, by any means, from the possession of the owner or of any other person any money, personal, property, or article of value of any kind is a punishable offense."}}}]}];$(document).ready(function(){$.each(articles,function(){var e=$('<div class="col-md-4 tile-hover"><a href="'+this.id+'"><div class="absence green"><div class="tile-content"><span>'+this.article+"</span><h3>"+this.title+'</h3></div><div class="status"><p>0 of '+this.scenarios.length+" Completed</p></div></div></a></div>");e.appendTo("#articles-library")}),$("#articles-library a").click(function(){return $(".article-scenarios").empty(),currentArticle=articles[$(this).attr("href")],$.each(currentArticle.scenarios,function(e){var t=$('<div class="col-md-3 tile-hover grid"><a href="'+this.id+'"><div class="larcenyA green"><div class="tile-content"><span>'+currentArticle.article+"</span><h2>"+this.title+'</h2><p><i class="fa fa-check-circle" aria-hidden="true"></i>'+(e+1)+" of "+currentArticle.scenarios.length+'</p></div><div class="status"><button type="button" class="btn btn-default redo">Start<i class="fa fa-angle-right" aria-hidden="true"></i></button></div></div></a></div>');t.appendTo(".article-scenarios")}),$(".article-scenarios a").click(function(){return currentScenario=currentArticle.scenarios[$(this).attr("href")],currentScenarioScreen=0,loadScenarioScreen(0),changeTitle(currentScenario.title),$(".screen-article").fadeOut(function(){$(".screen-scenario").fadeIn()}),!1}),$("#article-article").text(currentArticle.article),$("#article-title").text(currentArticle.title),$("#article-description").text(currentArticle.description),$("#articles").fadeOut(function(){$(".screen-article").fadeIn()}),!1}),$("#btn-articles-back").click(function(){$(".screen-article").fadeOut(function(){$(".screen-articles").fadeIn()})}),$("#btn-article-back").click(function(){changeTitle("Primer"),$(".screen-scenario").fadeOut(function(){$(".screen-article").fadeIn()})}),$("#scenario-next").click(function(){currentScenarioScreen<currentScenario.content.length-1?loadScenarioScreen(currentScenarioScreen+1):($("#testModal .modal-title").text(currentScenario.test.prompt),$("#testModal .test-question").text(currentScenario.test.description),$("#testModal .modal-footer").empty(),$.each(currentScenario.test.options,function(){var e="";this.correct===!0&&(e="test-correct");var t=$('<a href="#" class="btn btn-primary btn-block '+e+'">'+this.text+"</a>");t.appendTo("#testModal .modal-footer")}),$("#testModal .modal-footer a").click(function(){$(this).hasClass("test-correct")?$("#responseModal .modal-subtitle").removeClass("correct incorrect").addClass("correct").text("Correct"):$("#responseModal .modal-subtitle").removeClass("correct incorrect").addClass("incorrect").text("Incorrect"),$("#responseModal .modal-title").text(currentScenario.test.response.title),$("#responseModal .test-response").text(currentScenario.test.response.description),$("#testModal").modal("hide"),$("#responseModal").modal()}),$("#testModal").modal())}),$("#scenario-back").click(function(){currentScenarioScreen>0&&loadScenarioScreen(currentScenarioScreen-1)}),$(".btn-test-toarticle").click(function(){$("#responseModal").modal("hide"),changeTitle("Primer"),$(".screen-scenario").fadeOut(function(){$(".screen-article").fadeIn()})}),$(".btn-test-tryagain").click(function(){$("#responseModal").modal("hide"),$("#testModal").modal()})});