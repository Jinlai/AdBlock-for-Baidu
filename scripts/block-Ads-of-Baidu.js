setTimeout(function(){
	
	//EC_result
	var ec_result_list = document.getElementsByClassName('EC_result');
	if(ec_result_list != undefined && ec_result_list.length > 0)
	for (var i = ec_result_list.length - 1; i >= 0; i--) {
		ec_result_list[i].remove();
	};

	//EC_mr15
	var ec_mr15_list = document.getElementsByClassName('EC_mr15');
	if(ec_mr15_list != undefined && ec_mr15_list.length > 0){
		for(var i = 0;i < ec_mr15_list.length;i++){
			ec_mr15_list[i].remove();
		}
	}	

	//右侧品牌推广
	var adBlockList = document.querySelectorAll('div[data-rendered=true]');
	if(adBlockList != undefined && adBlockList.length > 0){		
		for (var i = adBlockList.length - 1; i >= 0; i--) {
			adBlockList[i].parentNode.remove();
		};
	}

	//右侧推广链接
	var ec_im_container = document.getElementById('ec_im_container');
	if(ec_im_container) ec_im_container.parentNode.remove();

	//hint_right_bottom
	var hint_right_bottom = document.getElementsByClassName('hint_right_bottom');
	if(hint_right_bottom != undefined && hint_right_bottom.length > 0) hint_right_bottom[0].remove();	

	//咨询广告联系方式
	var ec_bdtg = document.getElementsByClassName('ec_bdtg');
	if(ec_bdtg != undefined && ec_bdtg.length > 0) ec_bdtg[0].remove();
	
},1000);