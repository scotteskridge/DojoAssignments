from django.shortcuts import render, HttpResponse, redirect
from . models import Email
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# Create your views here.
def index(request):


    return render(request, "validate/index.html")

def validate(request):
    #capture the email address
    email = request.POST["email"]
    valid = False
    context = {
    "email": email
    }
    #check the regex to see if the email is validate
    if EMAIL_REGEX.match(email):
        valid = True
        print("your email was correct" + email)
        #add input to the model
        Email.objects.create(email = request.POST["email"])
        #whats in the model?
        allemails = Email.objects.all()
        context = {
        "email": email,
        "emails": allemails
        }
        return render(request, "validate/success.html", context)
    else:
        valid = False
        print ("check regex")
        return render(request, "validate/validate.html")


#{% url email_validation:validate %}
