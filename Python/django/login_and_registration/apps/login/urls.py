from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.index, name = "index"),
    #need to register
    url(r'^register$', views.register, name = "register"),
    url(r'^submit_register$', views.submit_register, name = "submit_register"),
        #need to login
    url(r'^login$', views.login, name = "login"),
        #need to success
    url(r'^success$', views.success, name = "success"),
        #need to logout
    url(r'^logout$', views.logout, name = "logout")
]
