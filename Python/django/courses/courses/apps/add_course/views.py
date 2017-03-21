from django.shortcuts import render, HttpResponse, redirect
from .models import Course
import random
import string

# Create your views here.
def index(request):

    courses = Course.objects.all()
    context ={
    "courses" : courses
    }

    return render(request, "add_course/index.html", context)

def create(request):
    print (Course.objects.all())
    Course.objects.create(title = request.POST["title"], description = request.POST["description"])
    courses = Course.objects.all()
    context ={
    "courses" : courses
    }

    return render(request, "add_course/index.html", context)

def destroy(request, id):

    request.session["currentID"] = id
    #add I think this route only needs to go to the page the destroy logic will be on the confirm button
    #pass in the id and use it to push the course from that id into a context
    course = Course.objects.get(id=id) #this grabs everything how do i grab just the ID
    context = {
    "course" : course
    }

    return render(request, "add_course/destroy.html", context)

def confirm(request):
    #process logic to remove courses refrence the ID

    if request.POST["confirm"] == "No":
        print("you wanted to go back")
        return redirect("/")

    course = Course.objects.get(id=request.session["currentID"])

    print("you wanted to delete the record")
    return redirect("/")
