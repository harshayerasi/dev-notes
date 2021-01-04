---
id: azure-fundamentals-cloud-computing
title: Azure Fundamentals - Cloud Computing
sidebar_label: Azure Fundamentals - Cloud Computing
---

## The cloud defined
1. Availability
2. Software and licensing
3. Hardware
4. IT systems and data responsibility

Cloud computing is Computing services made available over a network such as the internet

### Cloud Computing characteristics
1. Resource pooling
2. Rapid elasticity
3. Metered usage
4. Broad access
5. Self-provisioning

### Cloud Computing Considerations
1. Cloud services that meet business needs
2. On-premises system/data cloud migration
3. Technical expertise of IT staff
4. Total cost of Ownership (TCO)
5. Data privacy and laws/regulations

### Cloud Computing Benefits
1. No up-front capital expenditure
2. Cloud provider security accreditations
3. Quick IT solution deployment
4. Underlying technical complexities are hidden
5. Less on-premises space, power, HVAC

## Virtualization of the Cloud
- Cloud computing depends on Virtualization
- The use of Virtualization does not unto itself imply cloud computing

### Hypervisors
Physical servers that host virtual machines (guests)

There are 2 types of Hypervisors
1. Type 1 - Bare metal
2. Type 2 - Runs within standard OS

Running Type 1 provides more options and features than Type 2

### Virtualization types
1. Operating system
2. Application
3. Networking - Software Defined Networking (SDN)
4. Desktop

### Virtualization Benefits
1. Cloud tenant isolation
2. Rapid provisioning of VMs
3. Easy provisioning of VMs

## Cloud Computing and Economics of Space

### Considerations
- This are cheaper in bulk
- Numerous cloud tenants
  - Monthly subscription cost
  - Cloud service usage fees
- On-premises: Capital expenditure (Capex)
- Cloud: Operating expenditure (Opex)

### Resource pooling
1. Storage
2. Hypervisors
3. Routers
4. Switches
5. Inter-data center network links

## Public Clouds
- The cloud provider will own the underlying IT infrastructure
- The responsibility for IT configurations and ongoing management could be split between cloud provider and the cloud customer depending on the specific service used.
- Cloud service offerings may vary from between geographical regions

### Characteristics
1. Broad access - Having access to cloud services over a network, in this case, the internet
2. Resource pooling - The Underlying Hardware infrastructure, the network configurations, routers, and also things like storage arrays, physical storage, hypervisor serivce
3. Rapid elasticity - How quickly and easy it is to provision these cloud resources such as virtual machines or a new storage account
4. Self-provisioning - Cloud customer provides the resources, we do the provisioning ourself
5. Metered usage - We are charged based on what we use

### Cloud Resource Management
1. Web Browser - Azure portal
2. Other GUI tools from azure
3. Command line tools
5. APIs - Working with Resources programmatically

## Private clouds
All IT responsibility falls on the organization

Just because we have Virtualization we cannot say that we have a private cloud.
The characteristics below are required to say that we have a private cloud
### Characteristics
1. Broad access - Can't be used over public internet, limited to a private network
2. Resource pooling - Underlying hardware infrastructure owned by the private organization
3. Rapid elasticity - Only people from organization can used private cloud services
4. Self-provisioning - Only organization users can do provisioning
5. Metered usage - All of the usage is tracked even in a single organization, for charging the department

## Hybrid Clouds
In this context, we are using IT systems or services on-premises and in the cloud types like public and private
### Characteristics
1. Broad access - Will Vary depending on the type of cloud
2. Resource pooling - Having all underlying hardware infrastructure that makes these cloud services available to cloud consumers
3. Rapid elasticity - Quickly deploy and destroy the services
4. Self-provisioning - Combination of both public and private
5. Metered usage - Based on consumption or IT department if the case is private cloud

## Community clouds

### Characteristics
