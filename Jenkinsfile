pipeline {
    agent any

    tools { nodejs "NodeJS"}
    
    stages{
        stage('Code'){
            steps{
                git url: 'https://github.com/joelwembo/jenkins-cicd-nodejs.git', branch: 'main' 
            }
        }
        stage('Build'){
            steps{
                sh 'docker build -t node-app:latest .'
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
                sh "docker run -d --name node-todo-app -p 80:80 node-app:latest"
            }
        }

        stage('Manuel Test'){
            steps{
                sh "npm run test"
            }
        }
    }
}
