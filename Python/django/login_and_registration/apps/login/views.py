from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import User

# Create your views here.

def index(request):

    return render(request, "login/index.html")

def login(request):


        # dont forget to save the user_id in session
    return redirect("/")

def register(request):


        # dont forget to save the user_id in session
    return redirect("/")

def success(request):
    # don't forget to filter to ensure that there is a user_id in sessions
    if not "user_id" in request.session:
        messages.error(request, "Must be logged in to continue")
        return redirect("login:index")


    return render(request, "login/success.html")

def logout(request):
    request.session.clear()
    messages.error(request, "You are now logged out")
    return redirect("/")
