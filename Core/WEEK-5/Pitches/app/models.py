from . import db
from werkzeug.security import generate_password
from flask_login import UserMixin
from . import login_manager
#from datetime import datetime
#In watchlist there is a review class, for pitches make a view models potentially

@login_manager.user_loader #decorator
def load_user(user_id):
    return User.query.get(int(user_id))

#User model
class User(UserMixin,db.Model): #helps us create new users
    '''
    User class to define User objects and database table content
    '''
    __tablename__ = 'users' #allows us to give users in database proper names

    id = db.Column(db.Interger,primary_key = True)
    username = db.Column(db.String(255), index = True)
    email = db.Column(db.String(255), unique = True, index = True)
    #role id?
    #bio?
    comments = db.relationship ('Comment',backref = 'user', lazy = "dynamic") #define relationship between user and comment?
    
    password_hash = db.Column(db.String(255))

    @property
    def password(self):
        raise AttributeError('You cannot read the password attribute') #blocks access to the password property
      



#Comment model