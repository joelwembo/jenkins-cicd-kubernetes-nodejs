pipeline {
    agent any
    options {
        buildDiscarder(logRotator(numToKeepStr: '5'))
      }
      environment {
        DOCKERHUB_CREDENTIALS = credentials('globaldockerhub')
      }

    tools { nodejs "NodeJS"}
    
    stages{
        stage('Code'){
            steps{
                git url: 'https://token@github.com/joelwembo/jenkins-cicd-kubernetes-nodejs.git' 
            }
        }
        stage('Dependencies') {
            steps{
            sh 'npm ci'
            }
        }

        stage('Unit Test 1'){
            steps{
                sh "npm run test"
            }
        }
        
        stage('Build'){
            steps{
                // sh 'docker stop $(docker ps | grep "joelwembo/nodeprodx:latest" | cut -d " " -f 1)'
                sh 'docker build -t joelwembo/nodeprodx:latest .'
            }
        }
         stage('Login') {
          steps {
            sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
          }
        }
        stage('Push') {
          steps {
            sh 'docker push joelwembo/nodeprodx:latest'
          }
        }
        stage('Manuel Test'){
            steps{
                sh "npm run test"
            }
        }
        stage('Deploy'){
            steps{
                // sh "docker run -d --name node-todo-app -p 3000:3000 joelwembo/nodeprodx:latest"
                sh 'docker image ls'
                sh 'docker images --filter "reference=nodeprodx*"'                 
            }
        }

        //  stage('Kubernetes') {
        //   steps {
        //     sh 'sudo minikube start'
        //     sh 'minikube ip'
        //     sh 'kubectl cluster-info'
        //     sh 'kubectl delete namespace nodeprodx'
        //     sh 'kubectl create namespace nodeprodx'
        //     sh 'kubectl config set-context --current --namespace=nodeprodx'
        //     sh 'kubectl apply -f deployment.yaml'
        //       }    
        //    }

        }
    //   stage('Deploy to AWS') {
    //         steps {
    //              dir('deployments') {
    //                 sh "pwd"
    //                 sh "chmod +x -R ./deploy-aws-ec2.sh"
    //                 sh 'docker images --filter "reference=nodeprodx*"' 
    //                 sh './deploy-aws-ec2.sh'
    //              }
              
    //         }
    //     } 
    }  

        // post {
    //         success {
    //             script {
    //                 currentBuild.result = 'SUCCESS'
    //                 slackSend(color: 'good', message: "Deployment successful! :tada:", channel: "#DEV")
    //                 emailext subject: 'Deployment Successful',
    //                         body: 'Deployment was successful!',
    //                         recipientProviders: [[$class: 'CulpritsRecipientProvider']]
    //             }
    //         }
    //         failure {
    //             script {
    //                 currentBuild.result = 'FAILURE'
    //                 slackSend(color: 'danger', message: "Deployment failed. :x:", channel: "#DEV")
    //                 emailext subject: 'Deployment Failed',
    //                         body: 'Deployment failed!',
    //                         recipientProviders: [[$class: 'CulpritsRecipientProvider']]
    //             }
    //         }

    //     }
   
    

