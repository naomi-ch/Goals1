from flask_wtf import FlaskForm 
from wtforms import StringField,TextAreaField,SubmitField
from wtforms.validators import Required 

class PitchForm(FlaskForm):
    title = StringField('Your pitch title',validators=[Required()])
    pitch = TextAreaField('Your pitch',validators=[Required()])
    submit = SubmitField('Submit')

class CommentForm(FlaskForm):

    #title = Stringfield('Comment title',validators=[Required()]) #should there be a comment title? 
    comment = TextAreaField('Pitch comment',validators=[Required()])
    submit = SubmitField('Submit')


#update profile form
class UpdateProfile(FlaskForm):
    bio = TextAreaField('Tell us about yourself',validators =[Required()])
    submit = SubmitField('Submit')