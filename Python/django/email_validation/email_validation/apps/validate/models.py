from django.db import models

# Create your models here.
#Need a model with tite Description Date Added

class Email(models.Model):
     #  column_name = models.Column_Type(optional_params)
    email = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField( auto_now=True)
    def __str__(self):
        return str(self.id)
