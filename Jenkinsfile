pipeline {
    agent any

    stages {
        stage('Pull Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Divyaaffroi-07/jenkins-demo.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'sudo docker build -t docker-app:latest .'
            }
        }

        stage('Display Image Details') {
            steps {
                sh 'sudo docker images docker-app:latest'
            }
        }
    }
}
