pipeline {
    agent any

    stages {

        stage('Pull Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Divyaaffroi-07/jenkins-demo.git'
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

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t docker-app:latest .'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker rm -f docker-app || true'
                sh 'docker run -d --name docker-app -p 3000:3000 docker-app:latest'
            }
        }

        stage('Verify Deployment') {
            steps {
                sh 'docker ps'
            }
        }
    }
}
