from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.index, name = "index"),
    url(r'^ninja$', views.ninja, name = "ninja"),
    url(r'^ninjas/(?P<color>.+)$', views.search)
    ]
