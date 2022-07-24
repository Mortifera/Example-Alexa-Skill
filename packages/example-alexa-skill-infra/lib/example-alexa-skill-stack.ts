import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lb from 'aws-cdk-lib/aws-lambda';
import { Skill } from './skill';
import * as path from 'path';

export interface ExampleAlexaSkillStackProps extends cdk.StackProps {
    ssmPrefix: string;
    alexaVendorId: string;
    lwaClientId: string;
    lwaClientSecret: string;
    lwaRefreshToken: string;
}

export class ExampleAlexaSkillStack extends cdk.Stack {
constructor(scope: Construct, id: string, props: ExampleAlexaSkillStackProps) {
        super(scope, id, props);

        const skillBackend = new lb.Function(this, 'ExampleSkillLambda', {
            runtime: lb.Runtime.NODEJS_14_X,
            handler: 'index.handler',
            code: lb.Code.fromAsset(path.resolve(__dirname, '../../example-alexa-skill-code')),
            timeout: cdk.Duration.seconds(7),
            tracing: lb.Tracing.ACTIVE,
            memorySize: 512,
            environment: {},
        });

        new Skill(this, 'ExampleSkill', {
            endpointLambdaFunction: skillBackend,
            skillPackagePath: 'skill-package',
            alexaVendorId: props.alexaVendorId,
            lwaClientId: props.lwaClientId,
            lwaClientSecret: props.lwaClientSecret,
            lwaRefreshToken: props.lwaRefreshToken,
        });
    }
}
