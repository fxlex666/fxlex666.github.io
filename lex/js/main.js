$(function(){
	
	var caseList = [
		[
			{name:'消消乐三消游戏',img:'case1.png',link:'case1'},
		],
		[],
		[
			{name:'logo设计',img:'case3.png',link:'case3'}
		]
	]
	
	$(".nav li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var thisnum = $(this).index();
		var typename = $(this).find('a').text();
		var html = '';
		for(var i=0;i<caseList[thisnum].length;i++){
			html+=`<div class="box2 col-xs-12 col-sm-6 col-md-4 wow animate fadeInDown animated" style="visibility: visible; animation-name: fadeInDown;">
						<a target="_blank" href="${caseList[thisnum][i].link}" class="thumbnail">
							<img src="img/${caseList[thisnum][i].img}" alt="${typename}">
							<p class="mask">${typename}</p>
						</a>
						<div class="casename">${caseList[thisnum][i].name}</div>
					</div>`
		}
		$(".caseList").html(html);
	})
	$(".nav li").eq(0).click();
})