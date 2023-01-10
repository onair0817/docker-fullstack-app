FROM node:10

WORKDIR /usr/src/app

# 로컬 파일들 전체 복사
COPY ./ ./

RUN npm install

CMD ["node", "server.js"]