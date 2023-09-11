from django.urls import path
from . import views

urlpatterns = [
    path('api/voicerecognition/', views.voice_recognition, name='voice_recognition'),
]