pipeline {
    agent any

    tools { nodejs "NodeJS"}
    
    stages{
        stage('Code'){
            steps{
                git url: 'https://github.com/joelwembo/jenkins-cicd-nodejs.git', branch: 'main' 
            }
        }
        stage('Build and Test'){
            steps{
                bat 'docker build . -t joelwembo/node-todo-test:latest'
            }
        }
        // stage('Upload to Docker'){
        //     steps{
        //         // withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
        // 	     bat "docker login -u joelwembo"
        //          bat "docker pubat joelwembo.com/node-todo-test:latest"
        //         // }
        //     }
        // }
        stage('Deploy'){
            steps{
                bat "docker-compose down && docker-compose up -d"
            }
        }

        stage('Manuel Test'){
            steps{
                bat "node test.js"
            }
        }
    }
}
