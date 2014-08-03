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

    // Check to see if the browser supports the form attribute on the button
    if(!$('#registration-modal-submit')[0]['form'])
    {
        $('#registration-modal-submit').on('click', function() {
            var $form = $('#registration-form');
            var can_submit = true;

            $('input', $form).each(function() {
                var $parent = $(this).parent();
                var valid = this.checkValidity();
                can_submit &= valid;

                $parent.toggleClass('has-error', !valid);
            });

            if (can_submit)
            {
                $form.submit();
            }
            else
            {
                bootbox.alert("Please correct the errors in the form");
            }
        });
    }
});
