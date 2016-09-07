// Contact form
// augustahammock.com/contact

$(function() {

    var
        formItems           = $('.form-item.validate'),
        checkboxOptions     = $('.checkbox-options'),
        contactSubmit       = $('.button.submit'),
        contactFailureCTA   = $('.contact-failure-cta'),
        directInterest,
        directMessage;

    // Validate the entire form when contactSubmit is clicked
    var validateForm = function (e) {
        e.preventDefault();
        
        // Loop through each .form-item and validate its child field according to the .form-item's 'data-validate' and 'data-required' attribute
        $.each(formItems, function (i, item) {
            var
                formItem    = $($(item)[0]),
                field       = formItem.find('input, textarea'),
                validateAs  = formItem.attr('data-validate'),
                required    = formItem.attr('data-required'),
                errorList   = formItem.find('.errors'),
                data = {
                    formItem:   formItem,
                    validateAs: validateAs,
                    required:   required,
                    errorList:  errorList,
                    value:      $(field).val()
                };

            validate(data);
        });

        var errors = $('.has-error').length;

        if (errors === 0) {

            var emailData = {
                name:           $('.form-item.name input').val(),
                email:          $('.form-item.email input').val(),
                interest:       'No interests specified',
                message:        $('.form-item.message textarea').val()
            };

            var selectedInterests = $('.form-item.interest').find('.selected');
            
            if (selectedInterests.length != 0) {
                
                emailData['interest'] = '';

                $.each(selectedInterests, function (i, interest) {
                    emailData['interest'] += $(interest).attr('data-value');

                    if (i == selectedInterests.length - 2 && selectedInterests.length == 2) {
                        emailData['interest'] += ' and ';

                    } else if (i == selectedInterests.length - 2 && selectedInterests.length > 2) {
                        emailData['interest'] += ', and ';
                    
                    } else if (i != selectedInterests.length - 1) {
                        emailData['interest'] += ', ';    
                    }
                });
            }

            sendEmail(emailData);
        }
    };



    // Validate a single .form-item and its child field item

    var validateItem = function (e) {
        var
            field       = $(e.currentTarget),
            value       = field.val(),
            formItem    = field.parent(),
            validateAs  = formItem.attr('data-validate'),
            required    = formItem.attr('data-required'),
            errorList   = formItem.find('.errors')
            data = {
                formItem: formItem,
                field:      field,
                value:      value,
                validateAs: validateAs,
                required:   required,
                errorList:  errorList
            }
        ;
        
        if (e.type == 'focusin') {
            formItem.removeClass('has-error');
            errorList.find('li').hide();

        } else {
            // Validate an .form-item's child field according to the .form-item's 'data-validate' attribute
            validate(data);
        }

    }



    // Validate
    // TODO: Abstract this as a stand-alone object

    var validate = function (data) {

        var
            errorList       = data.errorList,
            value           = data.value,
            validateAs      = data.validateAs,
            expressions     = {
                required: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/,  // requires at least one character
                string: /^[A-z0-9\s\.\,\:\;\!\?\(\)\/\-\'\"]*$/,  // basic string including letters, numbers, and punctuation
                email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,  // basic email
                options: []
            },
            exp             = expressions[validateAs],
            required        = data.required,
            invalidError    = requiredError = errorList.find('.invalid'),
            requiredError
        ;


        // If the field is required, define the requiredError variable
        if (required) {
            requiredError = errorList.find('.required');

            // Hide the requiredError if a value is present
            if ($.trim(value) !== '') {
                requiredError.hide();
                data.formItem.removeClass('has-error');

            // Show the requiredError is no value is present
            } else {
                data.formItem.addClass('has-error');
                requiredError.show();
                invalidError.hide();
                return false;
            }

        // If the field is NOT required and no value is given
        } else if (!required && value === '') {
            return false;
        }


        // If the above conditions are met, evaluate the value against regex

        // If evaluating inputs and textareas
        if(!data.options){

            // Pass
            if (exp.test(value)) {
                data.formItem.removeClass('has-error');
                invalidError.hide();

            // Fail
            } else {
                data.formItem.addClass('has-error');
                invalidError.show();
            }
        }
    }


    // Toggle options
    var toggleOptions = function (e) {
        var clicked = $(e.currentTarget);

        if (clicked.hasClass('selected')) {
            clicked.removeClass('selected');
        } else {
            clicked.addClass('selected');
        }

    }



    // Send the email!
    var sendEmail = function (data) {

        console.log(data);

        directInterest  = data.interest;
        directMessage   = data.message;

        // $('.spinner').addClass('show');

        $.ajax({
            type:   'POST',
            url:    'https://mandrillapp.com/api/1.0/messages/send-template1.json',
            data: {
                key: 'srG-xJXHlA6YNZAYKGq_wg',
                template_name: 'augustahammock-com-contact-form',
                template_content: [
                    {
                        name: 'name1',
                        content: 'name1'
                    }
                ],
                message: {
                    global_merge_vars: [
                        {
                            name: 'Name',
                            content: data.name
                        },
                        {
                            name: 'Email',
                            content: data.email
                        },
                        {
                            name: 'Interest',
                            content: data.interest
                        },
                        {
                            name: 'Message',
                            content: data.message
                        }
                    ],
                    merge: true,
                    from_email: 'augusta@augustahammock.com',
                    to: [{
                        email:  'augusta@augustahammock.com',
                        name:   'Augusta Hammock',
                        type:   'to'
                    }],
                    'headers': {
                        'Reply-To': data.email
                    },
                    autotext:   'true',
                    subject:    'Inquiry: ' + data.interest
                }
            },
            success: function (result) {

                $('.form')
                    .animate({opacity: 0}, 200)
                    .slideUp("slow");

                $('.direct-contact-info')
                    .animate({opacity: 0}, 200)
                    .slideUp("slow");

                $('.contact-success')
                    .slideDown("slow")
                    .animate({opacity: 1}, 200);
            },
            error: function(result) {

                contactFailureCTA.attr('href', 'mailto:augusta@augustahammock.com?subject=Inquiry: ' + directInterest + '&body=' + directMessage);

                $('.form')
                    .animate({opacity: 0}, 200)
                    .slideUp("slow");

                $('.direct-contact-info')
                    .animate({opacity: 0}, 200)
                    .slideUp("slow");

                $('.contact-failure')
                    .slideDown("slow")
                    .animate({opacity: 1}, 200);
            }
        });
    }


    checkboxOptions.on('click', 'li', toggleOptions);
    $('input, textarea').on('focusin focusout', validateItem);
    contactSubmit.on('click', validateForm);
});
