from flask import Flask 
from config import config_options
from flask_bootstrap import Bootstrap
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_mail import Mail
#add flask uploads?


bootstrap = Bootstrap() #bootstrap instance
db = SQLAlchemy() #create a db(database) instance

login_manager = LoginManager
login_manager.session_protection = 'strong'
login_manager.login_view = 'auth.login'

mail = Mail()

def create_app(config_name):

    #Initializing application
    app = Flask(__name__)

    #Creating app configurations
    app.config.from_object(config_options[config_name])
    config_options[config_name].init_app(app)

    #Initializing Flask Extentions
    bootstrap.init_app(app)
    db.init_app(app)
    login_manager.init_app(app)
    mail.init_app(app)

    #Registering the bluepring
    from .main import main as main_blueprint
    app.register_blueprint(main.blueprint)

    from .auth import auth as auth_blueprint
    app.register_blueprint(auth.blueprint,url_prefix = '/authenticate')

    #Setting config - MIGHT NOT NEED BUT OBVS DOUBLE CHECK. SEE THE LMS OR ASK BARCLAY
    #from .request import configure_request
    #configure_request(app) 

    return app