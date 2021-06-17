from flask import render_template,redirect,url_for,abort #add request if it is needed
from . import main
from ..models import User,Comment #add other classes if theyre any
from .forms import CommentForm #add updateprofile form
from flask_login import login_required,current_user
from .. import db #we need the db when saving profile info changes to database

#Views
@main.route('/')
def index():
    '''
    View root page function that returns the index page and its data
    '''

    title = 'Welcome to Pitches'
    return render_template('index.html', title = title) #add pitches?

#pitch route
#@main.route('/pitch/<int:id>')


@main.route('/pitch/comment/new/<int:id>', methods = ['GET','POST'])
@login_required
def new_comment(id):
    form = CommentForm()
    pitch = get_pitch(id)

    if form.validate_on_submit():
        #title = form.title.data
        comment = form.comment.data
      
        new_comment = Comment(pitch_id = pitch.id, pitch_title = pitch.title,pitch_comment = comment,user = current_user) #create a pitch model
        new_coment.save_comments() #should it be save_comment()?
        return redirect(url_for('.pitch', id = pitch.id))
    
    title = f'{pitch.title} comments' #double check if this is what you want the title to be. should it even be a new page? new page with all the comments.
    return render_template('new_comment.html', title = title, comment_form = form,pitch = pitch) #SHOLD WE HAVE AN HTML FOR NEW_COMMENT?

#Profile Route
@main.route('/user/<uname>') #maybe do 'pitch/user/<uname>' and then redirect to the profile html
def profile(uname):
    user = User.query.filter_by(username = uname).first() #query the databse to find 'user' according to username passed

    if user is None: #if no user is found then 'abort'
        abort(404)
    return render_template("profile/profile.html", user = user)


#updateprofile route
@main.route('/user/<uname>/update', methods = ["GET","POST"])
@login.required
def update_profile(uname):
    user = User.query.filter_by(username = uname).first()
    if user is None:
        abort
    
    form = UpdateProfile() #form from main/forms.py

    if form.validate_on_submit():
        user.bio = form.bio.data

        db.session.add(user)
        db.session.commit()

        return redirect(url_for('.profile, uname = user.username'))
    return render_template('profile/update.html', form = form)

#update pic?