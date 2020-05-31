from flask import Flask, request, jsonify
import mysql.connector as mysql
import json

db = mysql.connect(
    host="localhost",
    user="root",
    passwd="beni2020",
    database="beni"
)


print(db)

app = Flask(__name__)


@app.route('/posts', methods=['GET', 'POST'])
def manage_requests():
    if request.method == 'GET':
        return get_all_posts()
    else:
        return add_post()


def add_post():
    data = request.get_json()
    query = "insert into posts (id, title, content, author) values (%s, %s, %s, %s)"
    values = (data['id'], data['title'], data['content'], data['author'])
    cursor = db.cursor()
    cursor.execute(query, values)
    db.commit()
    cursor.close()
    return get_post(data['id'])

def get_post(id):
	query = "select id, title, content, author from posts where id = %s"
	values = (id, )
	cursor = db.cursor()
	cursor.execute(query, values)
	record = cursor.fetchone()
	cursor.close()
	header = ['id', 'title', 'content', 'author']
	return json.dumps(dict(zip(header, record)))

def get_all_posts():
    query = "select * from posts"
    data = []
    cursor = db.cursor()
    cursor.execute(query)
    records = cursor.fetchall()
    header = ['id', 'title', 'content', 'author']
    for r in records:
        data.append(dict(zip(header, r)))
    cursor.close()
    return json.dumps(data, default=str)


@app.route('/posts/<id>')
def get_post_by_ID(id):
    query = "select * from posts where id=" + str(id)
    data = []
    cursor = db.cursor()
    cursor.execute(query)
    records = cursor.fetchall()
    header = ['id', 'title', 'content', 'author']
    cursor.close()
    return json.dumps(dict(zip(header, records[0])), default=str)


if __name__ == "__main__":
    app.run()
