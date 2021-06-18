import os

class Config:
    '''
    General Configuration parent class
    '''
    SECRET_KEY = os.environ.get('SECRET_KEY') for wtforms


    #Email configurations
    MAIL_SERVER = 'smtp.googlemail.com' #set up SMTP server
    MAIL_PORT = 587
    MAIL_USE_TLS = True #enables Transport Layer Security to secure the emails when sending them
    MAIL_USERNAME = os.environ.get('MAIL_USERNAME')
    MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD')

    


    @staticmethod
    def init_app(app):
        pass

class TestConfig(Config):
    SQLALCHEMY_DATABASE_URI = 'postgresql+psycopg2://naomichika1:220197@localhost/pitches_test' # THIS IS POSTGRES TEST 


class ProdConfig(Config):
    '''
    Production configuration child class

    Args:
        Config: The parent configuration class with General configuration settings
    '''
    pass


class DevConfig(Config):
    '''
    Development configuration child class

    Args:
        Config: The parent configuration class with General configuration settings
    '''
    SQLALCHEMY_DATABASE_URI = 'postgresql+psycopg2://naomichika1:220197@localhost/pitches'

    DEBUG = True

config_options = {
    'development':DevConfig,
    'production':ProdConfig,
    'test':TestConfig
}