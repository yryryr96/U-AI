from django.urls import path
from . import views

urlpatterns = [
    path('api/oxquiz/', views.ox_quiz, name='ox_quiz'),
]