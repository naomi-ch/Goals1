from flask import Flask # from flask module we imported Flask Class
app = Flask(__name__) # created an instance of that class called 'app' by passing in the __name__ variable
# Flask uses the __name__ variable to determine the root path for the application

@app.route('/') #app.route() is a decorator. We have defined the route for the index page
def index(): #index() is a VIEW FUNCTION. It is the handler for the route defined above
    return '<h1> Hello World </h1>'

if __name__ == '__main__':
    app.run(debug = True) #run() method that launches flask development server