// random js:
//
// $("h1").css("color","yellow");
//
// $("#surprise").click(function() {
//   $("p").fadeOut("slow");
// });
//
//
//
//
// <section class="container">
// </section>
//
// var container = $('.container');
// container.append(`<p>Hello!</p>`);


// event listeners in jQuery!: $("button").click(function() {
//
// })
// animations in jQuery: $('p').fadeout("slow")
// change css properties in jquery: $('p').css("background-color", "pink");

var listContainer = $('.card-container');
var submitButton = $('.submit-btn');


submitButton.click(function(){
  var name = $('.name').val();
  listContainer.append(name);
  listContainer.append(" ");

});

// ANOTHER WAY TO DO IT WITH AN ORDERED LIST
// var list = $('.orderedList');
// $('button').click(function(){
//   var box = $('.item').val();
//   var li = "<li>" + box + "<li>";
//   list.append(li);
// });
