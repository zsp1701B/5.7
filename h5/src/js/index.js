require.config({
	'paths': {
		"mui": "./libs/mui.min"
	}
})
define(["mui"], function(mui) {
	function init() {
		name();
		
	};

	function name() {
		document.querySelector('#ipt').oninput = function() {

			let val = document.querySelector('#ipt').value;
			let ipt = document.querySelector('#ipt');

			if (val) {
				document.querySelector('.box').style.display = "block";
				mui.ajax('/api/getData', {
					data: {
						name: val
					},
					dataType: 'json', //服务器返回json格式数据
					type: 'post', //HTTP请求类型
					timeout: 10000, //超时时间设置为10秒；
					success: function(res) {
						console.log(res.data)
						let str = "";
						res.data.forEach(function(item) {
							str += `<li>${item.name}</li>`
						})
						document.querySelector('.ul').innerHTML = str;
					}
				});
			} else {
				document.querySelector('.box').style.display = "none";
			}

		}
	};



	
	init();
})
