from django.conf.urls import url
from . import views



urlpatterns = [

    url(r'^$', views.index),
    url(r'^newword$', views.newword),
    url(r'^clear$', views.clear)
]
