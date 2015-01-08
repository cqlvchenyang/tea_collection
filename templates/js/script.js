$(document).ready(function() {
	$('#j_wall').css('height',$(window).height()-200-70+'px');
	$(window).resize(function(){
		$('#j_wall').css('height',($(window).height()-200-70)<500?500:($(window).height()-200-70));
	});

	$(".selectList").each(function(){
		var url="js/category.json";
		var category_json;
		var temp_html;
		var oFirst_level=$(this).find(".first_level");
		var oSecond_level=$(this).find(".second_level");
		$.ajaxSetup({ async: false});
		$.getJSON(url,function(data){
            category_json = data;
        });
        var first_level=function(){
			$.each(category_json,function(i,first_level){
				temp_html+="<option value='"+first_level.f+"'>"+first_level.f+"</option>";
			});
			oFirst_level.html(temp_html);
			second_level();
		};
		var second_level=function(){
			temp_html="";
			$.each(category_json[0].s,function(i,second_level){
				temp_html+="<option value='"+second_level.sl+"'>"+second_level.sl+"</option>";
			});
			oSecond_level.html(temp_html);
		};
		oFirst_level.change(function() {
			second_level();
		});
		first_level();
		
	});


	$("#tea_album_file").on("change",function(){
		var filenames=[];
		$.each($(this).prop("files"),function(k,v){
			filenames.push(v['name']);
		});
	});
	$(".album-img-cell").hover(function(){
		$(this).children('button').css("display","inline");
	},function(){
		$(this).children('button').css("display","none");
	});
	$(".describe-img-cell").hover(function(){
		$(this).children('button').css("display","inline");
	},function(){
		$(this).children('button').css("display","none");
	});
	$(".album-img-cell .btn-delete").click(function(){
		$(this).parent().remove();
	});
	$(".describe-img-cell .btn-delete").click(function(){
		$(this).parent().remove();
	});


	$(".btn-group").click(function(){
		$(this).children('button').removeClass('btn-default');
		$(this).children('button').addClass('btn-primary');
		$(this).siblings().children('button').addClass('btn-default');
		$(this).siblings().children('button').removeClass('btn-primary');
	});
});
