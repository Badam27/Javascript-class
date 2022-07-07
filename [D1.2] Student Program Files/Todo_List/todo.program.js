$(function() {
    $(document).on("click", "[type=checkbox]", function(event){
        $('#checkboxes').click(function(event){
            if($(event.target).is(':checked')) {
                $(event.target).next().css("text-decoration", "line-through");
            }
        });
    });
    $('#checkboxs').siblings();
});

$(function () {
    $("#my-button").on('click', function(event) {
        var string = $("#item").val();
        $('#checkboxes').append('<input type="checkbox"/><span>' + string + '</span>');
    });
});