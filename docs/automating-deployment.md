# Automating Deployment

## Command-Line Interface

The Helios Command-Line Interface (CLI) streamlines the deployment, configuration and management of Helios infrastructure on AWS.

This interface simplifies what would otherwise be complex AWS operations, allowing users to quickly set up, manage, and tear down their Helios environment without navigating multiple AWS interfaces or writing custom scripts.

How it works:

<div class="icon-list">
<p><Icon name="CloudIcon" /><span>When deploying Helios with the CLI, a user will be prompted for an AWS profile name and an optional ChatGPT API key.</span></p>
<p><Icon name="KeyIcon" /><span> Once credentials are provided, the CLI uses the stored AWS credentials in your local AWS environment configuration files to deploy all Helios infrastructure within your AWS account.</span></p>
<p><Icon name="CubeTransparentIcon" /><span> Under the hood, Helios leverages the AWS Cloud Development Kit (AWS CDK) which we will go into more detail below.</span></p>
</div>

![CLI](/case_study/cli_dropshadow.png)

## AWS CDK

<!-- ![testTerraform](./public/terraform.png) -->

To automate deployment for our users, we evaluated the AWS CDK and Terraform.

<div class="icon-list">
<p><Icon name="terraform-icon" /><span><strong>Terraform</strong>: an open source infrastructure as code tool that enables declarative configuration of cloud resources across multiple providers, using its own domain-specific language.</span></p>
<p><Icon name="aws-icon" /><span><strong>AWS CDK</strong>: an infrastructure as code framework for defining cloud infrastructure, which then compiles into CloudFormation YAML templates. This process combines the flexibility of a programming language with the reliability of declarative deployments, allowing developers to use object-oriented techniques to model their infrastructure.</span></p>
</div>

Comparing the AWS CDK and Terraform, while we found Terraform easier to use and quicker for initial deployments, however, we ultimately preferred the CDK. In our opinion, it offered us slightly better debugging capabilities and greater control in defining our infrastructure, particularly for complex, interconnected resources.

After careful consideration, we opted for the AWS CDK as our infrastructure-as-code solution.
