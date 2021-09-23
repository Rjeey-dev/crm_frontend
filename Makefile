.DEFAULT_GOAL := help

DOCKER_EXEC=docker-compose exec ${TTY}
DOCKER_RUN=docker-compose run --rm ${TTY}

.PHONY: help
help: ## Print this help message
	@echo 'Usage:'
	@echo "  make \033[33m<target>\033[0m"
	@echo ''
	@echo 'Targets:'
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-30s\033[0m %s\n", $$1, $$2}'
	@echo ''

.PHONY: start
start: ## Start local docker containers
	docker-compose up -d
	make rebuild-sass
	${DOCKER_EXEC} node-crm npm run watch-css

.PHONY: stop
stop: ## Stop local docker containers
	docker-compose stop

.PHONY: build
build:
	docker-compose pull

.PHONY: restart
restart: ## Restart local docker containers
	docker-compose down
	docker-compose up -d --build

.PHONY: build-css
build-css: ## Build css styles
	${DOCKER_EXEC} node-crm npm run build-css

.PHONY: install
install: ## Install vendors
	${DOCKER_EXEC} node-crm npm install

.PHONY: rebuild-sass
rebuild-sass: ## Rebuild node sass for environment
	${DOCKER_EXEC} node-crm npm rebuild node-sass
