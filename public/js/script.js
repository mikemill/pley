$(document).ready(function() {
    $('#show-registration-modal').on('click', function(event) {
        $('#registration-modal').modal('show');
        event.preventDefault();
    });

    $('#registration-form').on('submit', function(event) {
        var $this = $(this);
        var url = this.action;

        var data = {
            ajax: true,
        };

        $.each($this.serializeArray(), function (i, field) {
            data[field.name] = field.value;
        });

        $.post(url, data)
            .done(function(data) {
                $('#registration-modal').modal('hide');
                bootbox.alert(data.message);
            })
            .fail(function() {
                bootbox.alert("Registration submission failed");
            });

        event.preventDefault();
    });
});
