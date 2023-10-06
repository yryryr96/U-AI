from django.urls import path
from . import views

urlpatterns = [
    path('api/review/', views.review, name='review'),
]