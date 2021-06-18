from . import db
from werkzeug.security import generate_password_hash,check_password_hash
from flask_login import UserMixin
from . import login_manager
from datetime import datetime
#In watchlist there is a review class, for pitches make a view models potentially
#Should i make a category model? where we can return a response in a 'get_category' def

@login_manager.user_loader #decorator
def load_user(user_id):
    return User.query.get(int(user_id))


#Pitch Model
class Pitch(db.Model): #should there be db.Model?
    '''
    Pitch class to define Pitch objects
    '''
    #all_pitches = []
        #def __init__(self,id,user_username,title,pitch):
        #self.id = id
        #self.user_username = user_username
        #self.title = title
        #self.pitch = pitch
    __tablename__ = 'pitch'
    id = db.Column(db.Integer,primary_key = True)
    user_username = db.Column(db.String)
    title = db.Column(db.String)
    pitch = db.Column(db.String)
    
    def save_pitch(self):
          db.session.add(self)
          db.session.commit()
          #Pitch.all_pitches.append(self)

    @classmethod
    def clear_pitch(cls):
        Pitch.all_pitches.clear() #this is for the test module. might have to alter this idk. 

    @classmethod
    def get_pitch(cls,id):
        pitch = Pitch.query.filter_by(id = id).all()
        return pitch 

#User Model
class User(UserMixin,db.Model): #helps us create new users
    '''
    User class to define User objects and database table content
    '''
    __tablename__ = 'users' #allows us to give users in database proper names

    id = db.Column(db.Integer,primary_key = True)
    username = db.Column(db.String(255), index = True)
    email = db.Column(db.String(255), unique = True, index = True)
    bio = db.Column(db.String(255))
    #role id?
    comments = db.relationship ('Comment',backref = 'user', lazy = "dynamic") #define relationship between user and comment?
    
    password_hash = db.Column(db.String(255))

    @property
    def password(self):
        raise AttributeError('You cannot read the password attribute') #blocks access to the password property
    
    @password.setter
    def password(self,password): #method
        self.password_hash = generate_password_hash(password)
    
    def verify_password(self,password): #check if password is the same
        return check_password_hash(self.password_hash,password)

    def __repr__(self):
        return f'User {self.username}'




#Comment Model
class Comment(db.Model): #pass db class to create a connection to our database
    __tablename__ = 'comments'
    id = db.Column(db.Integer,primary_key = True)
    pitch_id = db.Column(db.Integer)
    pitch_comment = db.Column(db.String)
    posted = db.Column(db.DateTime,default = datetime.utcnow)
    user_id = db.Column(db.Integer,db.ForeignKey("users.id")) #Foreign key stores the id of the person who posted the comment

    def save_comments(self):
        db.session.add(self)
        db.session.commit()
    
    @classmethod
    def clear_comments(cls):
        Comment.all_comments.clear()
    
    @classmethod
    def get_comments(cls,id):
        comments = Comment.query.filter_by(pitch_id = id).all() #create a pitch model. and a pitch submit form. 
        return comments



