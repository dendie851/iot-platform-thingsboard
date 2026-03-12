# ThingsBoard IoT Platform Project

This project demonstrates the implementation and configuration of the ThingsBoard IoT Platform using Docker Compose. It covers everything from basic IoT concepts to advanced device monitoring and mobile connectivity.

## Table of Contents
- [1. The IoT Phenomenon](#1-the-iot-phenomenon)
- [2. What is an IoT Platform?](#2-what-is-an-iot-platform)
- [3. Introduction to ThingsBoard](#3-introduction-to-thingsboard)
- [4. ThingsBoard Key Features](#4-thingsboard-key-features)
- [5. System Architecture](#5-system-architecture)
- [6. Installation Guide](#6-installation-guide)
- [7. Configuration and Usage Guide](#7-configuration-and-usage-guide)
- [8. Configuration Steps](#8-configuration-steps)



## 1. The IoT 
The Internet of Things (IoT) represents a massive shift in how we interact with the physical world. It involves connecting billions of devices to the internet to gather data and automate processes. For companies, this phenomenon brings challenges like managing massive amounts of data, ensuring security, and scaling thousands of sensors. 

**How an IoT Platform helps:**
An IoT Platform like ThingsBoard helps companies overcome these challenges by providing a centralized hub for device management, data processing, and visualization. It acts as the "brain" of the operation, allowing businesses to focus on their use cases rather than building infrastructure from scratch.

## 2. What is an IoT Platform?
An IoT Platform is a middleware layer that sits between sensors (devices) and end-user applications. It provides essential services such as device connectivity, data storage, security authentication, and a rule engine for automation. It simplifies the complexity of connecting diverse hardware to various cloud services.

## 3. Introduction to ThingsBoard
ThingsBoard is an open-source IoT platform for data collection, processing, visualization, and device management. It is highly scalable, fault-tolerant, and supports both cloud and on-premises deployments. It enables developers to build professional IoT solutions with minimal effort.

## 4. ThingsBoard Key Features
- **Device Management:** Provision, monitor, and control thousands of IoT devices.
- **Data Collection:** Collect and store data from sensors in a scalable way.
- **Visualization:** Build beautiful, interactive dashboards to monitor real-time data.
- **Rule Engine:** Create complex logic for data processing and alerts without writing code.
- **Multi-tenancy:** Support multiple customers and users securely.
- **Security:** Robust authentication and authorization for devices and users.
- **Multiple Connectivity:** Support for multiple protocols including HTTP, MQTT, and HTTP to ensure flexible device integration.
- **Mobile Support:** Access dashboards and monitor devices on the go with dedicated mobile application support for Android and iOS.

## 5. System Architecture
ThingsBoard uses a microservices-ready architecture that ensures high availability and scalability. Below is the architectural diagram showing how devices connect to the platform services and how data flows to the database.

![Architecture](./design/architecture.jpg)

The architecture includes the Transport layer (MQTT, HTTP, CoAP), the Core services for processing logic, and the Database layer (PostgreSQL) for persistent storage.

## 6. Installation Guide

### Prerequisites
- Docker and Docker Compose installed on your system.

### Steps
1. **Initialize the Database:**
   Run the following command to install the database schema and load demo data:
   ```bash
   docker compose run --rm -e INSTALL_TB=true -e LOAD_DEMO=true thingsboard-ce
   ```

2. **Start the Platform:**
   Start all services in the background:
   ```bash
   docker compose up -d
   ```

3. **Access the Dashboard:**
   Open your browser and go to `http://localhost:8080`.

**Default Credentials:**
- **System Administrator:** `sysadmin@thingsboard.org` / `sysadmin`
- **Tenant Administrator:** `tenant@thingsboard.org` / `tenant`
- **Customer User:** `customer@thingsboard.org` / `customer`



## 7. Configuration and Usage Guide
All configuration steps, from setting up device profiles to creating public dashboards, are documented through the screenshots in the `ss/` folder.



## 8. Configuration Steps

Below are the detailed explanations for each step of the configuration process, ordered by the numerical sequence of the screenshots.

### Docker Compose Initialization
![1-docker-compose.jpg](./ss/1-docker-compose.jpg)
This screenshot shows the initial execution of the Docker Compose commands in the terminal. You can see the containers being pulled and started, confirming that the environment is being set up correctly for the ThingsBoard service and its PostgreSQL database dependency.

### Container Status Verification
![2-docker-compose-2.jpg](./ss/2-docker-compose-2.jpg)
This image displays the status of the running containers after the `docker compose up` command. It verifies that both the database and the ThingsBoard application are up and running, showing the port mappings and health status essential for a stable installation.

### Authentication and Portal Access
![3-thinksboard-login.jpg](./ss/3-thinksboard-login.jpg)
The login screen is the primary entry point for managing the platform. Here, users enter their credentials to access different levels of the system, such as System Administrator or Tenant Administrator, depending on their role and permissions within the project.

### Centralized Management Dashboard
![4-thinksboard-dashaboard.jpg](./ss/4-thinksboard-dashaboard.jpg)
The main dashboard overview provides a high-level summary of the system's state. It shows active devices, recent alerts, and navigation links to various modules like Device Groups, Asset Groups, and Rule Chains, giving the administrator full control over the entire IoT ecosystem.

### Device Profile Templates
![5-thinksboard-device-profile.jpg](./ss/5-thinksboard-device-profile.jpg)
This screen shows the list of Device Profiles. Device profiles act as templates for similar devices, defining common settings, metadata, and rule engine processing logic. This feature is crucial for maintaining consistency when scaling up to hundreds or thousands of similar sensors.

### Transport and Queue Configuration
![6-thinksboard-device-profile-2.jpg](./ss/6-thinksboard-device-profile-2.jpg)
In this step, we are editing a specific device profile. The interface allows us to configure advanced settings like queue management and transport configurations, ensuring that data from these specific devices is handled exactly according to the business requirements and technical constraints.

### Condition-Based Alarm Rules
![7-thinksboard-device-profile-3.jpg](./ss/7-thinksboard-device-profile-3.jpg)
Continuing the device profile setup, this screenshot highlights the alarm rules section. Administrators can define specific conditions that trigger alarms, such as a temperature exceeding a certain threshold, ensuring that critical issues are flagged automatically for immediate action by the operators.

### Manual Device Provisioning
![8-thinksboard-device-membuat-device.jpg](./ss/8-thinksboard-device-membuat-device.jpg)
This screenshot shows the process of adding a new device to the platform. By clicking the plus button and filling out the basic information such as the device name and label, users can manually provision individual hardware units into the system for tracking.

### Mapping Device to Profile
![9-thinksboard-device-membuat-device.jpg](./ss/9-thinksboard-device-membuat-device.jpg)
After defining the basic info, we select the appropriate Device Profile for the new device. This ensures the device inherits all the pre-configured settings, alarm rules, and data processing logic assigned to that profile, significantly simplifying the deployment of new hardware units.

### Device Security and Credentials
![10-thinksboard-device-membuat-device-next-credential.jpg](./ss/10-thinksboard-device-membuat-device-next-credential.jpg)
Credential management is a critical step in device security. This screen shows the configuration of connectivity credentials, allowing the administrator to choose between different types of authentication, such as Access Tokens or X.509 certificates, to ensure only authorized devices can connect.

### Access Token Generation
![11-thinksboard-device-membuat-device-next-credential-create-token.jpg](./ss/11-thinksboard-device-membuat-device-next-credential-create-token.jpg)
Here, a specific Access Token is being generated for the device. This unique token must be used by the physical device hardware (or simulation script) when communicating with the platform, providing a secure method for identifying and authenticating the incoming data stream.

### HTTP Telemetry API Endpoint
![12-thinksboard-device-connectivity-http-api.jpg](./ss/12-thinksboard-device-connectivity-http-api.jpg)
This screen provides technical details for HTTP connectivity. It includes the API endpoints and JSON formats required for a device to send telemetry data via HTTP POST requests, which is a common and easy-to-implement method for web-based IoT sensors and gateways.

### MQTT Transport Configuration
![13-thinksboard-device-connectivity-mqtt.jpg](./ss/13-thinksboard-device-connectivity-mqtt.jpg)
MQTT is one of the most popular protocols for IoT due to its lightweight nature. This screenshot shows the MQTT connection parameters, including the topic structure and authentication requirements, enabling devices to publish their sensor readings more efficiently over the network.

### CoAP Protocol Support
![14-thinksboard-device-connectivity-coap.jpg](./ss/14-thinksboard-device-connectivity-coap.jpg)
For extremely resource-constrained devices, CoAP is an excellent choice. This image shows the CoAP configuration settings provided by ThingsBoard, allowing developers to integrate specialized industrial or battery-powered sensors that require a minimal communication overhead while maintaining reliable data delivery.

### Real-Time Telemetry Monitoring
![15-thinksboard-monitoring.jpg](./ss/15-thinksboard-monitoring.jpg)
The monitoring dashboard demonstrates real-time data visualization. In this view, we can see the incoming telemetry values from various devices, displayed in a list format that allows administrators to quickly check the last known values and the health status of their sensor network.

### Advanced Metric Visualization
![15-thinksboard-monitoring-2.jpg](./ss/15-thinksboard-monitoring-2.jpg)
This additional monitoring view provides a different widget configuration, focusing on specific metrics that might be critical for a different user persona. It highlights the platform's flexibility in presenting the same data in multiple ways to suit various business needs and technical requirements.

### Gauge and Index Tuning
![16-thinksboard-monitoring-2-setting-parameter.jpg](./ss/16-thinksboard-monitoring-2-setting-parameter.jpg)
This screen shows the detailed parameter settings for the secondary monitoring widgets. It ensures that the specific data keys are correctly mapped to the gauge or chart, providing accurate and reliable feedback to the operations team during their daily monitoring tasks.

### Widget Selection Library
![17-thinksboard-monitoring-select-widget.jpg](./ss/17-thinksboard-monitoring-select-widget.jpg)
ThingsBoard offers a rich library of pre-built widgets. This image shows the widget selection screen, where users can choose from various categories like digital gauges, analog meters, or complex maps to best represent their data in a visually appealing and intuitive manner.

### Historical Trend Analysis
![18-thinksboard-monitoring-select-widget-timeseries.jpg](./ss/18-thinksboard-monitoring-select-widget-timeseries.jpg)
Timeseries widgets are essential for analyzing trends over time. This screen demonstrates selecting a historical data chart, which allows users to see how sensor values have changed in the past, helping in identifying patterns, anomalies, or long-term behavioral shifts in the monitored environment.

### Mapping Data Keys to Visuals
![19-thinksboard-monitoring-select-widget-timeseries-2.jpg](./ss/19-thinksboard-monitoring-select-widget-timeseries-2.jpg)
After selecting the widget, we configure its data source. This screenshot shows the mapping of timeseries data keys (like temperature or humidity) to the chart elements, ensuring that the visual representation accurately reflects the underlying data stored in the PostgreSQL database.

### Detailed Widget Data Configuration
![19-thinksboard-monitoring-select-widget-timeseries-2-2.jpg](./ss/19-thinksboard-monitoring-select-widget-timeseries-2-2.jpg)
This screen shows the detailed configuration for the timeseries widget, allowing for fine-tuning of the data processing and visualization parameters. It ensures that the specific metrics are captured and displayed with the highest precision for the monitoring team.

### Time Window and Refresh Cycles
![20-thinksboard-monitoring-select-widget-timeseries-3.jpg](./ss/20-thinksboard-monitoring-select-widget-timeseries-3.jpg)
The final step in widget configuration involves setting the time window and refresh intervals. This ensures the chart stays up-to-date with real-time data while allowing users to zoom in or out of specific historical periods to perform detailed forensic analysis of the sensor logs.

### Device Telemetry Simulation
![21-simulation-client-device-iot-sent-data-sensor.jpg](./ss/21-simulation-client-device-iot-sent-data-sensor.jpg)
This terminal screenshot shows an external simulation client sending live data to ThingsBoard. It confirms that the external connectivity is working as expected, with the platform receiving and acknowledging the JSON payloads sent by the MQTT or HTTP client script.

### Global Device Fleet Status
![22-thingsboard-monitoring-all-device-.jpg](./ss/22-thingsboard-monitoring-all-device-.jpg)
This dashboard view shows all provisioned devices in a single unified interface. It provides a comprehensive status check for the entire fleet, making it easy to identify which devices are currently online, which are inactive, and if any have triggered critical alarms.

### Public Dashboard Visibility
![23-thingsboard-share-public.jpg](./ss/23-thingsboard-share-public.jpg)
ThingsBoard allows sharing dashboards with external stakeholders. This screen shows the security settings where a dashboard can be made "Public", allowing anyone with the link to view the data without needing a formal user account on the platform, which is great for transparency.

### External Access URL Generation
![24-thingsboard-share-public-link.jpg](./ss/24-thingsboard-share-public-link.jpg)
Once a dashboard is made public, a unique sharing link is generated. This screenshot shows the generated URL that can be distributed to clients or embedded in other websites, providing a secure and controlled way to present IoT insights to a broader audience.

### Public Data Permissions
![25-thingsboard-share-public-link-device-make-public.jpg](./ss/25-thingsboard-share-public-link-device-make-public.jpg)
In addition to the dashboard, the underlying devices must also be set to public for their data to be visible. This image shows the toggle for individual devices, ensuring that the platform's security model correctly handles data visibility for anonymous public viewers.

### Live Public Monitoring View
![26-thingsboard-share-public-show.jpg](./ss/26-thingsboard-share-public-show.jpg)
This screenshot displays the final public-facing dashboard. It is a clean, read-only view that focuses entirely on the visualizations, proving that the sharing mechanism is successful and the data is being correctly rendered for external parties in real-time.

### Mobile Application Setup
![27-connect-mobile.jpg](./ss/27-connect-mobile.jpg)
ThingsBoard supports mobile access for monitoring on the go. This screen shows the initial setup for mobile connectivity, allowing administrators to enable mobile application support and configure the necessary settings for users to access their dashboards from Android or iOS devices.

### Responsive Mobile Layouts
![28-connect-mobile-2.jpg](./ss/28-connect-mobile-2.jpg)
In this step, we are configuring the mobile dashboard layout. Users can customize how components appear on smaller screens, ensuring that the mobile user experience is optimized for touch interaction and quick reading while in the field or away from their desks.

### QR Code Pairing
![29-connect-mobile-3-scan-qr-code.jpg](./ss/29-connect-mobile-3-scan-qr-code.jpg)
To simplify the mobile setup, ThingsBoard provides a QR code for quick configuration. By scanning this code with the mobile app, users can instantly link their device to the platform without manually typing in complex server addresses or long, cumbersome authentication tokens.

### Mobile Authentication Success
![30-connect-mobile-4.jpg](./ss/30-connect-mobile-4.jpg)
This image shows the mobile application's connection status. It confirms that the smartphone has successfully authenticated with the ThingsBoard server and is ready to load the assigned dashboards, providing a truly portable and flexible monitoring solution for professional IoT users.

### MobileField Monitoring on Smartphone
![31-connect-mobile-5.jpg](./ss/31-connect-mobile-5.jpg)
The final screenshot shows the live data appearing on the mobile application. It demonstrates that the end-to-end connectivity from the sensor device to the platform and finally to the user's mobile screen is complete, enabling real-time responses to environment changes from anywhere.


© 2024 ThingsBoard IoT Project. Documented with care for professional deployment.
