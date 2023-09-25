from django.urls import path
from . import views

urlpatterns = [
    path('sessions/monitor/', views.monitor, name='monitor'),
]