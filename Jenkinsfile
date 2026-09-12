pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t docker-cicd-app .'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing application...'
                sh 'docker run --rm docker-cicd-app node --check app.js'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                sh 'docker rm -f docker-cicd-app || true'
                sh 'docker run -d --name docker-cicd-app -p 3000:3000 docker-cicd-app'
            }
        }
    }
}
