from django.urls import path
from . import views
from .views import recognize_motion

urlpatterns = [
    path('recog/', views.recognize_motion, name='recognize_motion'),
]