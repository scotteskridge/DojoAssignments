from django.conf.urls import url
from . import views

#Models -- views -- Templates --

urlpatterns = [
    url(r'^$', views.index),
    url(r'^users$', views.show)
]
