import $ from 'jquery';

$('#submit').click(function() {
	let data = {
		name: $('#name').val(),
		id: $('#eventId').val()
	};
	$.ajax({
		type: 'POST',
		data: data,
		url: 'http://v2.mashupcloud.cn/ADD/Active/',
		dataType: 'json',
		cache: false,
		success: function(data) {
			console.log(data);
			console.log(data.name, data.id);
		},
		error: function(jqXHL, textStatus, errorThrown) {
			console.log('error' + textStatus + '' + errorThrown);
		}
	});
});