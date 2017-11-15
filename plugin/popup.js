

$(function() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:8888/is-logged-in.php", true);

    xhr.onreadystatechange = function () {
        try {
            if (4 === xhr.readyState) {
                response = JSON.parse(xhr.responseText);
                chrome.storage.local.set(response);



                if (response.isLoggedIn) {
                    chrome.browserAction.setIcon({path : {
                       "32" : "assets/icon_on.png"
                    }});
                } else {
                    chrome.browserAction.setIcon({path : {
                        "32" : "assets/icon_off.png"
                    }});
                }
            }
        } catch (e) {

        }
    };
    xhr.send();


    $('#check-login-button').click( function(e){

        $.ajax('http://127.0.0.1:8888/is-logged-in.php', {
            success: function(data) {
                if (data.isLoggedIn) {
                    $('#login-response').html('You are logged in as ' + data.user)
                } else {
                    $('#login-response').html(':(');
                }
                console.log(data);
            }
        })
    });

    $('#open-user-page-button').click( function(e) {
        chrome.tabs.create({ url: 'http://127.0.0.1:8888/index.php' });
    });

});

