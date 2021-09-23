#### Frontend:
github: https://github.com/Travelix/frontend

git repository: git@github.com:Travelix/frontend.git

working branch: develop 

release branch: master 

1) clone the project ```git clone -b develop git@github.com:Travelix/frontend.git && cd ./frontend```
2) run command  ```make build```
3) run command  ```make start```
4) go to page ```https://travelix.io.localhost``` (by default, config file with setup domains: ```.env.dist```)

# Run environment

| Env | Start | Stop | Restart |
| ------ | ------ | ------ |------ |
| Local | ``` $ make start``` |``` $ make stop```| ``` $ make restart```|
| Local production | ``` $ make local_prod_start``` | ``` $ make local_prod_stop```| ``` $ make local_prod_restart```|