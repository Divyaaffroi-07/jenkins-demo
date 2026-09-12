pipeline {
    agent any

    stages {
        stage('Pull Code') {
            steps {
                echo 'Pulling code from GitHub'
            }
        }

        stage('Build') {
            steps {
                echo 'Building application'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing application'
            }
        }

        stage('Docker Compose Up') {
            steps {
                sh 'cd docker-compose-app && docker compose up -d'
            }
        }

        stage('Verify Deployment') {
            steps {
                sh 'cd docker-compose-app && docker compose ps'
            }
        }
    }
}
