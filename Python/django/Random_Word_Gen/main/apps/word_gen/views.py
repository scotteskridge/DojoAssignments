from django.shortcuts import render, HttpResponse, redirect
import random
import string

# Create your views here.
def index(request):
    print ("*"*90)
    print ("did i get to the index?")
    print ("*"*90)

    return render(request, "word_gen\index.html")

def newword(request):

    if request.method == "POST":
        request.session['wordlength'] = request.POST['length']
        if "count" not in request.session:
            request.session["count"] = 0
            print("you didn't have a count now it is:")

        else:
            request.session["count"] += 1
            print("you now have a count and it is:" )
        if not request.session['wordlength']:
            request.session['wordlength'] = 1

        randomWord = ''.join([random.choice(string.ascii_letters + string.digits) for n in range(int(request.session['wordlength']) )])

        context ={"randomWord" : randomWord,
                "count" : request.session["count"]}
        return render(request, "word_gen\index.html", context)
    else:
        return redirect("/")

def clear(request):
    request.session.clear()
    return redirect("/")
