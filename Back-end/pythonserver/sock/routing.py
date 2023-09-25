from channels.routing import URLRouter
from django.urls import path
from .consumer import CustomConsumer

websocket_urlpatterns = URLRouter([
    path("ws/mark",  CustomConsumer.as_asgi()),
])