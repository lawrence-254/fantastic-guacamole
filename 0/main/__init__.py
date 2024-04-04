#!/usr/bin/env python3
import os

from flask import Flask


def create_app(test_config=None):
    '''
    creates and configures the app
    '''
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='key',
        DATABASE=os.path.join(app.instance_path, 'main.sqlite'),
    )

    if test_config is None:
        '''
        checks if there is instance cheking before loading the instance
        '''
        app.config.from_pyfile('config.py', silent=True)
    else:
        '''
        load the test
        '''
        app.config.from_mapping(test_config)

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    @app.route('/hello')
    def hello():
        return 'hello world'

    from . import db
    db.init_app(app)

    from . import auth
    app.register_blueprint(auth.bp)

    return app

