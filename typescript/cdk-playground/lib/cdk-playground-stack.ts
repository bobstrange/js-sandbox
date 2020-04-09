import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3'

export class CdkPlaygroundStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new s3.Bucket(this, 'bob-aws-cdk-test-bucket', {
      versioned: true,
      encryption: s3.BucketEncryption.KMS_MANAGED
    })
  }
}
