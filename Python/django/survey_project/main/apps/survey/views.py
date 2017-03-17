from django.shortcuts import render, HttpResponse, redirect
import random
import string

# Create your views here.
def index(request):


    return render(request, "survey\index.html")

def result(request):


    return render(request, "survey/result.html")

def process(request):

    if request.method == "POST":
        if "count" not in request.session:
            print ("*"*90)
            print ("you made a count")
            request.session["count"] = 0
        request.session["count"] += 1
        request.session["UserName"] = request.POST["UserName"]
        request.session["DojoLocation"] = request.POST["DojoLocation"]
        request.session["FavoriteLanguage"] = request.POST["FavoriteLanguage"]
        request.session["comment"] = request.POST["comment"]
        return redirect("/result")

        # context ={"UserName" : request.POST["UserName"],
        #           "DojoLocation" : request.POST["DojoLocation"],
        #           "FavoriteLanguage" : request.POST["FavoriteLanguage"],
        #           "comment" : request.POST["comment"]}
        # print ("8"*90)
        # print ("did i make a context variable?")
        # print ("8"*90)
        # return render(request, "survey/result.html", context)
    else:
        redirect ("/result")
