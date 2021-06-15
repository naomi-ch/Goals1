from flask import render_template,redirect,url_for,abort #add request if it is needed
from . import main
from .models import User,Comment #add other classes if theyre any
from .forms import #import forms once created
from flask_login import login_required,current_user
from .. import db #we need the db when saving profile info changes to database