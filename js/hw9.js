//========= task 1 ===================

$('.enter_Task1').on('click', function(){

	$.post( "php/a1.php",
		{ "num1" : $(".inpNum1").val(),
		"num2" : $(".inpNum2").val() },

		function (data){
			$('.output1').text(data);	
		});
})

//========= task 2 ===================
$('.enter_Task2').on('click', function(){

	$.post( "php/a2.php",
		{ "year" : $(".yearOfBirth").val()},

		function (data){
			$('.output2').text(data);	
		});
})

//========= task 3 ===================
$('.enter_Task3').on('click', function(){

	$.post( "php/a3.php",
		{ "sex" : $("input[name='sex']:checked").val(),
		"height" : $(".inpHeight").val() },

		function (data){
			$('.output3').text(data);	
		});
})

//========= task 4 ===================
$('.enter_Task4').on('click', function(){

	$.post( "php/a3.php",
		{ "sex" : $("input[name='sex']:checked").val(),
		"height" : $(".inpHeight2").val() },

		function (data){
			$('.output4').text(data);	
		});
})



//========= task 5 ===================
$('.enter_Task5').on('click', function(){

	$.post( "php/mail.php",
		{ "fio" : $("input[name='fio']").val(),
		"email" : $("input[name='email']").val(),
		"phone" : $("input[name='phone']").val() },

		function (data){
			$('.output5').text(data);	
		});
})


//========= task 6 ===================
$('.enter_Task6').on('click', function(){
	
	$.get( "php/goods.php",
		{ "art" : $(".inpArticleNumber").val()},
		
		function (data){

			let goods = JSON.parse(data);
			let out = "";
			out = out + '<div> Имя товара:' + goods.name + '</div>';
			out = out + '<div> Вес:' + goods.weight+ '</div> ';
			out = out + '<div> Стоимость:' + goods.cost + '</div> ';
			out = out + '<img src="' + goods.img + '"> ';

			$('.output6').html(out);
		});
})

//====================================































