from django.shortcuts import render, HttpResponse
import datetime

# Create your views here -- This is the controller!.
def index(request):

    context= {"time" : datetime.datetime.now(),
                "date": "im not actually a date"}

    return render(request, "first_app\index.html", context)

def show(request):
    context = {"stuff" : "here is different stuff"}
    print "8"*90
    response = "Did I get to show"
    print response
    print "8"*90
    return render(request, "first_app\show_users.html", context)
