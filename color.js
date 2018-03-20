$(function(){


/*var COLORS = [
						    '#e21400', '#91580f', '#f8a700', '#f78b00',
						    '#58dc00', '#287b00', '#a8f07a', '#4ae8c4',
						    '#3b88eb', '#3824aa', '#a700ff', '#d300e7'
						  ];*/

	var nameColor = function(str) {
				    var hash = 0;
				    for (var i = 0; i < str.length; i++) {
				        hash = str.charCodeAt(i) + ((hash << 5) - hash);
				    }
				    var colour = '#';
				    for (var i = 0; i < 3; i++) {
				        var value = (hash >> (i * 8)) & 0xFF;
				        colour += ('00' + value.toString(16)).substr(-2);
				    }
				    return colour;
				}
});