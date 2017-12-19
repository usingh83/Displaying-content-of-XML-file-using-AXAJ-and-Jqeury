
    $(document).ready(function()
      {
        $.get('books.xml', function(d){
        $('body').append('<table><tr><th>Title</th><th>Author</th><th>Category</th><th>Year</th><th>Price</th></tr></table>');

        $(d).find('book').each(function(){

            var $book = $(this); 
            var category = $book.attr("category");
            var title = $book.find('title').text();			
            var author = $book.find('author');
			var n=author.length;
			var authors = "";
			$.each(author, function(){
				n--;
				if(n>0) authors+= $(this).text() + ', ';
				else authors+= $(this).text();
			});			
            var year = $book.find('year').text();			
            var price = $book.find('price').text();
            var imageurl = $book.attr('imageurl');

            var html = '<tr><td>' + title + '</td><td>';
            html += authors+ '</td><td>';
            html += category + '</td><td>';
            html += year + '</td><td>' + price + '</td>' ;
            html += '</tr>';

            $('table').append($(html));
			$('table').css("border","1px solid black");			
			$('th').css("border","1px solid black");
			$('td').css("border","1px solid black");
			$('table').css("border-collapse","collapse");			
			$('table').css("width","100%");            
            $('.loadingPic').fadeOut(1400);
        });
    });
});