from __future__ import unicode_literals
from django.db import models
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class UserManager(models.Manager):
    def register_user(self, postData):

        errors = [] #make a list of strings and append erros
        reply_to_veiws = {} # make an object to give a status and user_id back
        #put in valdatations can I validate for both login and register i don;t think so so I'm going to make two methods but thats ok becuase my .Models pulls from the object?
        #check if firstname >2
        #check if last_name >2
        #check if email matches regex and is not empty
        #check if email is unique
        #check is password is null
        #Dump all the errors into errors{} so you can pass it back
        #return errors and a status of false

        # if no errors then
            #hash the password
            #create the user self.create?
            #push the user and a status true back to veiws




    def login(self, postData):
    #put in valdatations can I validate for both login and register i don;t think so so I'm going to make two methods but thats ok becuase my .Models pulls from the object?
        #check if firstname >2
        #check if last_name >2
        #check if email matches regex
        #


# Create your models here.
class User(model.Models):
    first_name = models.CharField(max_length = 45)
    last_name = models.CharField(max_length = 45)
    email = models.CharField(max_length = 255)
    password = models.CharField(max_length = 255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = UserManager()
