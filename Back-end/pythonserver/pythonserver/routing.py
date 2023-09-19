from channels.routing import ProtocolTypeRouter, URLRouter

application = ProtocolTypeRouter({
    "websocket": URLRouter(
        django.urls.path("ws/some_path/", YourConsumer.as_asgi()),
    ),
})