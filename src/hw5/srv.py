from flask import Flask, request, abort, make_response
import mysql.connector as mysql
import json
import bcrypt
import uuid
from flask_cors import CORS

db = mysql.connect(
    host="localhost",
    user="root",
    passwd="Beniandsara2020",
    database="beni"
)

print(db)

app = Flask(__name__)
CORS(app)


@app.route('/posts', methods=['GET', 'POST'])
def manage_requests():
    if request.method == 'GET':
        return get_all_posts()
    else:
        return add_post()


@app.route('/post/<id>', methods=['GET'])
def Get_Post_by_Id(id):
    return get_post(id)


def add_post():
    data = request.get_json()
    query = "insert into posts (title,content,published,author,imageurl) values (%s,%s,%s,%s, %s)"
    values = (data['title'], data['content'], data['published'], data['author'], data['imageurl'])
    cursor = db.cursor()
    cursor.execute(query, values)
    db.commit()
    add_post_id = cursor.lastrowid
    cursor.close()
    return get_post(add_post_id)


def get_post(id):
    query = "select id, title, content, published, author, imageurl from posts where id = %s"
    value = (id,)
    cursor = db.cursor()
    cursor.execute(query, value)
    record = cursor.fetchone()
    header = ['id', 'title', 'content', 'published', 'author', 'imageurl']
    cursor.close()
    return json.dumps(dict(zip(header, record)))


def get_all_posts():
    query = "select id, title, content, published, author, imageurl from posts"
    cursor = db.cursor()
    cursor.execute(query)
    records = cursor.fetchall()
    cursor.close()
    print(records)
    header = ['id', 'title', 'content', 'published', 'author', 'imageurl']
    data = []
    for r in records:
        data.append(dict(zip(header, r)))
    return json.dumps(data)


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    print(data)
    query = "select id, password from users where name = %s"
    values = (data['name'],)
    cursor = db.cursor()
    cursor.execute(query, values)
    record = cursor.fetchone()
    if not record:
        abort(401)

    user_id = record[0]
    # hashed_pwd = record[1].encode('utf-8')
    # if bcrypt.hashpw(data['password'].encode('utf-8'), hashed_pwd) != hashed_pwd:
    if record[1] != data['password']:
        abort(401)

    session_id = str(uuid.uuid4())
    query = "insert into sessions (user_id, session_id) values (%s, %s) on duplicate key update session_id=%s"
    values = (user_id, session_id, session_id)
    cursor.execute(query, values)
    db.commit()
    resp = make_response()
    resp.set_cookie("session_id", session_id)
    return resp


@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    print(data)
    query = "select name from users where name = %s"
    values = (data['name'],)
    cursor = db.cursor()
    cursor.execute(query, values)
    record = cursor.fetchone()
    if record:
        abort(401)
    query = "insert into users (name, password) values (%s, %s)"
    values = (data['name'],data['password'])
    cursor.execute(query, values)
    db.commit()
    resp = make_response()
    return resp


if __name__ == "__main__":
    app.run()




















# @app.route('/sighing', methods=['POST'])
# def sighing():
#     data = request.get_json()
#     print(data)
#     query = "select name from users where name = %s"
#     values = (data['name'],)
#     cursor = db.cursor()
#     cursor.execute(query, values)
#     record = cursor.fetchone()
#     if record:
#         return false
#     query = "insert into users (name, password) values (%s, %s)"
#     values = (data['name'],data['password'])
#     cursor.execute(query, values)
#     db.commit()
#     resp = make_response()
#     return resp




    # query = "insert into my_users (user_id, session_id) values (%s, %s) on duplicate key update session_id=%s"
    # values = (data['name'], data['pas'])
    # cursor.execute(query, values)
    # db.commit()
    # resp = make_response()
    # resp.set_cookie("session_id", session_id)
    # return resp







# try
# @app.route('/login', methods=['POST'])
# def login():
#     data = request.get_json()
#     print(data)
#     query = "select id, name, password from users where name = %s"
#     values = (data['name'])
#     cursor = db.cursor()
#     cursor.execute(query, values)
#     record = cursor.fetchone()
#     if not record:
#         resp = "No userename like this exists, please sign in first"
#         loggedIn = false;
#     else:
#         user_id = record[0]
#         hashed_pwd = record[2].encode('utf-8')
#         if bcrypt.hashpw(data['password'].encode('utf-8'), hashed_pwd) != hashed_pwd:
#             resp = "Wrong password, plase try again"
#             loggedIn = false;
#         else:
#             resp = "Welcome to my Blog!"
#             loggenIn = true;
#
#             session_id = str(uuid.uuid4())
#
#             query = "insert into sessions (user_id, session_id) values (%s, %s) on duplicate key update session_id=%s"
#             values = (user_id, session_id, session_id)
#             cursor.execute(query, values)
#             db.commit()
#             ans = make_response()
#             ans.set_cookie("session_id", session_id)
#             return ans


# def add_user():
#     data = request.get_json()
#     query = "insert into users (user_id, session_id) values (%s, %s) on duplicate key update session_id=%s"
#     values = (data['name'], data['pas'])
#     cursor = db.cursor()
#     cursor.execute(query, values)
#     db.commit()
#     add_post_id = cursor.lastrowid
#     cursor.close()
#     return 'add_user_id:' + str(add_user())


# def check_login():
#     session_id = request.cookies.get('session_id')
#     if not session_id:
#         abort(401)
#     query = "select user_id from sessions where session_id = %s"
#     values = (session_id, )
#     cursor = db.cursor()
#     cursor.execute(query, values)
#     record = cursor.fetchone()
#     if not record:
#         abort(401)




# from flask import Flask, request, jsonify
# import mysql.connector as mysql
# import json
#
# db = mysql.connect(
#     host="localhost",
#     user="root",
#     passwd="beni2020",
#     database="beni"
# )
#
#
# print(db)
#
# app = Flask(__name__)
#
#

#
#
# def add_post():
#     data = request.get_json()
#     query = "insert into posts (id, title, content, author) values (%s, %s, %s, %s)"
#     values = (data['id'], data['title'], data['content'], data['author'])
#     cursor = db.cursor()
#     cursor.execute(query, values)
#     db.commit()
#     cursor.close()
#     return get_post(data['id'])
#
# def get_post(id):
# 	query = "select id, title, content, author from posts where id = %s"
# 	values = (id, )
# 	cursor = db.cursor()
# 	cursor.execute(query, values)
# 	record = cursor.fetchone()
# 	cursor.close()
# 	header = ['id', 'title', 'content', 'author']
# 	return json.dumps(dict(zip(header, record)))
#
# def get_all_posts():
#     query = "select * from posts"
#     data = []
#     cursor = db.cursor()
#     cursor.execute(query)
#     records = cursor.fetchall()
#     header = ['id', 'title', 'content', 'author']
#     for r in records:
#         data.append(dict(zip(header, r)))
#     cursor.close()
#     return json.dumps(data, default=str)
#
#
# @app.route('/posts/<id>')
# def get_post_by_ID(id):
#     query = "select * from posts where id=" + str(id)
#     data = []
#     cursor = db.cursor()
#     cursor.execute(query)
#     records = cursor.fetchall()
#     header = ['id', 'title', 'content', 'author']
#     cursor.close()
#     return json.dumps(dict(zip(header, records[0])), default=str)
#
#
# if __name__ == "__main__":
#     app.run()
