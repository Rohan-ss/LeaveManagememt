from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy

DEBUG = True
SQLALCHEMY_DATABASE_URI='mysql://root:@localhost/opcito'
SECRET_KEY='opcitotechnologies'

app = Flask(__name__)
app.config.from_object('config')
db = SQLAlchemy(app)
api=Api(app)

