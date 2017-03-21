from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.index, name = "index"),
    url(r'^create$', views.create, name = "create"),
    url(r'^destroy$', views.destroy, name = "destroy"),

    url(r'^destroy/confirm$', views.confirm, name = "confirm"),
    url(r'^destroy/(?P<id>\d+)$', views.destroy),

    ]
