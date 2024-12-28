# Passport를 이용한 인증

## 사용한 모듈
- cookie-parser
- cors
- dotenv
- express
- mongoose
- nodemon
- passport
- passport-google-oauth20
- passport-local

## Docker로 mongoDB 설치하기
1. MongoDB 이미지를 Docker를 통해 내려받습니다.  
```
> docker pull mongo
```
2. 내려받은 MongoDB 이미지를 구동합니다.
```
> docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=1234 -d mongo
```
[참고. 로컬에서 Docker로 MongoDB 설치하는 법](https://khjeong0423.tistory.com/6)


