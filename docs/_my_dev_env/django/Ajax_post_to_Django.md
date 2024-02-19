# Ajax post to Django
在 Client 端使用 Ajax Post ，對 Django App 進行 Post request

需要在 HTTP Request 的 Header 加入 X-CSRFToken

https://docs.djangoproject.com/en/dev/ref/csrf/#ajax


    $.ajaxSetup({ data: {csrfmiddlewaretoken: '{{ csrf_token }}' },});


    see more: https://stackoverflow.com/a/7715325/1743582

