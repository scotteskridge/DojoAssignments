from django.shortcuts import render, HttpResponse, redirect
import random
import string

# Create your views here.
def index(request):
    print "*"*90
    print "did i get to the index?"
    print "*"*90
    count = 0
    #''.join([random.choice(string.ascii_letters + string.digits) for n in xrange(20)])
    return render(request, "word_gen\index.html")

def newword(request):
    if request.method == "POST":
        print "*"*90
        print "did i get to the newword maker?"
        print "*"*90
        randomWord = ''.join([random.choice(string.ascii_letters + string.digits) for n in xrange(20)])
        if "count" not in context:
            count=0
        count += 1
        context ={"randomWord" : randomWord,
                    "count" : count}
        print context
        return render(request, "word_gen\index.html", context)
    else:
        return redirect("/")
    #''.join([random.choice(string.ascii_letters + string.digits) for n in xrange(20)])
    #return redirect(request, "word_gen\index.html")
