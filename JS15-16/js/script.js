// function GoogleCallback (func, data) {
//     window[func](data);
//     console.log(data);
// };
// function Search (){
//     var inputValue = $('.search__input').val();
//     $.getJSON("http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q="+encodeURIComponent(inputValue)+"&callback=GoogleCallback&context=?",
//         function(data){
//             var ul = document.createElement("ul");
//             $.each(data.results, function(i, val){
//                 var li = document.createElement("li");
//                 li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a><br><p>"+val.content+"</p>";                            
//                 ul.appendChild(li);
//             });
//             $('body').append(ul);
//     });
// };
function GoogleCallback (func, data) {
    window[func](data);
    console.log(data);
};
function Search (){
    var inputValue = $('.search__input').val();

    $.ajax({
            url:"http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q="+encodeURIComponent(inputValue)+"&callback=GoogleCallback&context=?",
            method:'POST',
            dataType: 'jsonp',
            success: function(data){

                var ul = document.createElement("ul");
                $.each(data.results, function(i, val){
                    var li = document.createElement("li");
                    li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a><br><p>"+val.content+"</p>";                            
                    ul.appendChild(li);
                });
                $('.results').css({"padding":"0 10px 15px 10px"});
                $('.results').append(ul);
            },
            error: function(){
            }
        });
};