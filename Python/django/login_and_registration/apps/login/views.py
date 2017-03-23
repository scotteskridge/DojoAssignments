from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import User

# Create your views here.

def index(request):
    # if you want to force the user to login before taking any othere actions then
    # use the following code:
    ########################################################
    # if not "user_id" in request.session:
    #     messages.error(request, "Must be logged in to continue")
    #     return render(request, "login/login.html")
    ##########################################################
    #this will reroute them to the login page if there is not a user id in session

    return render(request, "login/index.html")

def login(request):


    responce_from_model = User.objects.login(request.POST)
    print('8'*80)
    print("get a responce?")

    #ok so I might be trying to get to fancy but... if post data is being passed in I want to process the login if not I want to render the login page and display errors

    if responce_from_model["status"]:

            #if the responce is true we know we registered a user so
        request.session["user_id"] = responce_from_model["user"].id
        request.session["first_name"] = responce_from_model["user"].first_name
                #save the user id in session
                #and redirect to the succes page

        return redirect("login:success")
        #else
    else:
        for error in responce_from_model["errors"]:
            messages.error(request, error)
                #send the errors to the client
                #redirect back to the try again but remeber to provide a back button
        return render(request, "login/login.html")
    return render(request, "login/login.html")

def register(request):
    #I want a seperate signup page that will route to the register route
    #the template will show the error message from register but this is just a landing route


        # dont forget to save the user_id in session
    return render(request, "login/register.html")

def submit_register(request):
        #invoke the method from the models and captue the responce_from_model
        responce_from_model = User.objects.register_user(request.POST)
        #check if responce is true
        if responce_from_model["status"]:
            #if the responce is true we know we registered a user so
            request.session["user_id"] = responce_from_model["user"].id
            request.session["first_name"] = responce_from_model["user"].first_name
                #save the user id in session
                #and redirect to the succes page

            return redirect("login:success")
        #else
        else:
            for error in responce_from_model["errors"]:
                messages.error(request, error)
                #send the errors to the client
                #redirect back to the try again but remeber to provide a back button
            return redirect("login:register")

        #use messages and not a context

        # dont forget to save the user_id in session


def success(request):

    # don't forget to filter to ensure that there is a user_id in sessions
    if not "user_id" in request.session:
        messages.error(request, "Must be logged in to continue")
        return redirect("/")
    return render(request, "login/success.html")

def logout(request):
    request.session.clear()
    messages.error(request, "You are now logged out")
    return redirect("/")
