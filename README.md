# AWS IoT - Raspberry Pi RGB
A Node.js project which enables a Raspberry Pi to connect to the AWS IoT service and manage a set of LEDs. Using a device shadow, the Raspberry Pi will react to state changes as communicated by the AWS IoT over MQTT (using the AWS IoT SDK) and change the active LED.

* [Setup AWS IoT](#setup_aws)
 * [Create a Thing](#create_thing)
 * [Connect a Device](#connect_device)

<a name="setup_aws"></a>
# Setup 'thing' (aka device) in AWS IoT
Before a device can connect to the AWS IoT Hub, a 'thing' must be configured and assigned a private key and certificate. This tutorial will use the AWS web console, but power users might prefer using the AWS CLI or AWS SDK.

<a name="create_thing"></a>
## Create a Thing
From the AWS Console, choose the region you wish to create the device in. The default region for AWS IoT is 'us-east-1' (aka N. Virginia).

![Select AWS Region](/images/select_region.png)

Select the AWS IoT service from the AWS Console. If this is your first time using AWS IoT, select 'Get Started' to bypass the introduction screen.

![Select of AWS IoT service](/images/select_iot.png)

Select 'Create a Resource' (or 'Create A Thing' if this is your first time) and give the device a unique name. Skip thing type and attributes and select 'Create'.

![Create AWS IoT thing](/images/create_thing.png)

The thing will now appear in the list of resources.

<a name="connect_device"></a>
## Connect a Device
From the AWS IoT home page, select the newly created thing from the list of resources (or select 'View Thing' if this is your first time). A panel will appear with the thing's details.

![AWS IoT thing details](/images/thing_details.png)

Select 'Connect a device' to begin the process of creating a certificate. Select NodeJS as the SDK and click generate certificate and policy.

![AWS IoT thing certificate](/images/generate_cert.png)

Download the public and private keys and the certificate. The private key and certificate must be kept secure to avoid compromising your AWS IoT service. The public key is paired to the private key and will be used by AWS to authenticate the thing.

In addition, a root CA certificate must be downloaded and used for authentication. The root-CA.crt certificate is available from Symantec [(here)](https://www.symantec.com/content/en/us/enterprise/verisign/roots/VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem)

Skip the last screen, which defines some configuration which can be used with the official AWS IoT tutorial for Node.js.

There should now be three resources on the AWS IoT homepage:

* a thing
  * Defines the device (e.g. raspberry pi) within AWS IoT
* a certificate
  * Defines an identity for AWS to authenticate with a certificate
  * Must be attached to a thing, for that thing to assume this identity
* a policy
  * Defines what AWS IoT operations can be performed
  * Must be attached to a certificate, for that identity to be authorized for these operations
