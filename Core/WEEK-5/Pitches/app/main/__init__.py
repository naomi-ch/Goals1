from flask import Blueprint 
main = Blueprint('main',__name__) #initialize Blueprint by creating 'main' variable
from . import views