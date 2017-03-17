from django.shortcuts import render, HttpResponse, redirect
import random
import string

# Create your views here.
def index(request):
    request.session["color"] = "tmnt.png"
    findcolor = 1
    print(findcolor)
    return render(request, "disappear\index.html")

def ninja(request):
    findcolor = 1
    print(findcolor)
    if request.method == "POST":
        findcolor = request.POST["color"]

        print("8"*90)
        print("do i get a color?")
        print(findcolor)

    if findcolor !=1:
        return redirect("ninjas/{}".format(findcolor))
    return render(request, "disappear/ninjas.html")

def search(request, color):
    print("8"*90)
    print("do i get a color?")
    if color != ("blue" or "red" or "purple" or "orange"):
        request.session["color"] = "april.jpg"
    else:
        request.session["color"] = "{}.jpg".format(color)
    return render(request, "disappear/ninjas.html")
