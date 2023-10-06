from django.urls import path
from . import views

urlpatterns = [
    path('sessions/monitor/', views.monitor, name='monitor'),
    path('images/getlist/',views.imagelist, name = 'imagelist'),
    path('images/getimage/',views.getimage, name = 'getimage'),
]