# Types of Networks
**Network:** a group of devices connected in a manner that allows communication among them.

**Local area network (LAN)** A LAN connects devices within a confined geographical area, such as a building or living complex. A LAN is typically used to connect network devices over a short distance and generally owned or controlled by the end user.

**Wireless local area network (WLAN)** A WLAN is a wireless LAN.

**Campus area network (CAN)** A CAN connects multiple LANs in a limited geographical area such as a university campus or a cluster of buildings.

**Metropolitan area network (MAN)** A MAN is a communications network that covers a geographic area, such as a suburb or city.

**Wide area network (WAN)** A WAN covers a wide geographic area, such as a state or country. The Internet is the largest WAN—it covers the earth. LANs are connected to WANs through routers, which are discussed later in this chapter.

**Storage area network (SAN)** A SAN is a high-speed, special-purpose network (or subnetwork) that interconnects data-storage devices.

**Virtual local area network (VLAN)** A VLAN is created when network devices on separate LAN segments are joined to form a logical group, thereby spanning the logical LANs to which they are connected.

**Personal area network (PAN)** A PAN is a limited-range wireless network that serves a single person or small workgroup.

# Network Topology
**Network Topology:** The way that the physical connections are made to accomplish communication among devices in networks

**Nodes:** The devices on the network

## Star Topology 
In a star topology, all of the nodes are connected to a central point that may be a switch or router.

Example:
![[CTS Certified Technology Specialist Exam Guide, Third -- InfoComm International, Andy Ciddor, Staff Avixa Inc -- 3rd Edition, PS.png|250]]
## Bus Topology 
In a bus network, all nodes are connected to via a single cable, looping from node to node.

![[CTS Certified Technology Specialist Exam Guide, Third -- InfoComm International, Andy Ciddor, Staff Avixa Inc -- 3rd Edition, PS 2.png|250]]

## Ring Topology 
Similar to a bus network, a ring network connects nodes one after another in sequence. The biggest difference between these technologies is that with a ring topology, the ends of the network are then connected to form a continuous loop.

![[CTS Certified Technology Specialist Exam Guide, Third -- InfoComm International, Andy Ciddor, Staff Avixa Inc -- 3rd Edition, PS 3.png|250]]

## Mesh Topology 
In a mesh network, each node is connected via bridges, switches, or routers to at least one other node.

![[CTS Certified Technology Specialist Exam Guide, Third -- InfoComm International, Andy Ciddor, Staff Avixa Inc -- 3rd Edition, PS 4.png|500]]

# Ethernet
Ethernet is the most commonly used method of transferring data on a LAN.

A common Ethernet connection is made with an eight-position, eight-conductor (8P8C) modular connector, as shown in Figure 6-5, which is attached, or terminated, to the cabling. An 8P8C connector is commonly referred to as an RJ-45 connector.

There are two wiring formats within the IEEE 802 standard: T568-A and T568-B; the overwhelming majority of installations and premade cables use the T568-B format.

# Fiber-Optic Connections
Fiber-optic cabling is commonly used for Ethernet where long cable runs and high data speeds are required. Fiber-optic cables work by sending information coded in a beam of light through a glass or plastic pipe.

There are two types of fiber-optic cable:

**Single-mode:** Single-mode means that the transmitted light travels on a single light path. You can typically identify single-mode fiber-optic cable by its yellow outer protective jacket.

**Multimode:** Multimode means it travels on multiple light paths. Multimode fiber-optic cable is identified by an orange jacket.

# Wireless Connections
**Access Point:** The network device that handles the wireless connection

# The OSI Reference Model 
The OSI model separates communication connectivity into seven different layers, each with a specific duty.

![[CTS Certified Technology Specialist Exam Guide, Third -- InfoComm International, Andy Ciddor, Staff Avixa Inc -- 3rd Edition, PS 5.png]]
As data is sent out, each layer adds some information to keep track of the file or data stream as it passes through a network. This system allows packets to be tracked and recombined at the receiving end to recover the file or stream. 

## Layer 1: Physical Layer
the Physical layer, covers cabling and other connection mediums, such as patchbays and more. The Physical layer does the following:

• Defines the relationship between the device and a physical means of sending data over network devices (such as a cable)

• Defines optical, electrical, and mechanical characteristics

## Layer 2: Data Link Layer
the Data Link layer, includes the Ethernet standard and unique hardware addresses. Switches and Bridges operate at this layer. The Data Link layer does the following:

• Defines procedures for operating the communication links

• Encapsulates data into Ethernet frames

• Detects and corrects packet-transmission errors

## Layer 3: Network Layer
the Network layer, is where the Internet Protocol (IP) comes into play. Routers and layer 3 switches operate at this level. The Network layer does the following:

• Determines how data is transferred between network devices

• Routes packets according to unique network device addresses

• May provide flow and congestion control to prevent network resource depletion

## Layer 4: Transport Layer
the Transport layer, governs the transfer of data. Gateways operate at this level. The Transport layer does the following:

• Provides reliable and sequential packet delivery through error-recovery and flow-control mechanisms

• Provides connection-oriented or connectionless packet delivery

• Provides flow and congestion control to prevent network resource depletion

## Layer 5: Session Layer
the Session layer, is the first of the upper layers and concerns the data itself, ensuring data passes properly through the network. The Session layer does the following:

• Manages user sessions and dialogues

• Controls the establishment and termination of connections between users

• Reports upper-layer errors

## Layer 6: Presentation Layer
the Presentation layer, unpackages data for use by the Application layer. It also does the following:

• Masks data format differences between dissimilar systems so they can communicate

• Specifies an architecture-independent data-transfer format

• Encodes and decodes data, encrypts and decrypts data, and compresses and decompresses data

## Layer  7: Application Layer
the Application layer, presents data to the application software for use. The Application layer also does the following:

• Defines an interface to user processes for communication and data transfer in a network

• Provides standardized services, such as file and job transfer, and operations

# The TCP/IP Networking Model
the communications model used in the TCP/IP system nominates only four layers:

• **Application** The Application layer includes the functions of the Application, Presentation, and Session layers (layers 5 through 7) of the OSI model.

• **Transport** The Transport layer matches the Transport layer of the OSI model.

• **Internet** The Internet layer matches the function of the Network layer of the OSI model.

• **Network Access** The Network Access layer includes the functions of the Data Link and Physical layers (layers 1 and 2) of the OSI model.

# Network Interface Cards and MAC Addresses
A media access control address (MAC address) is the actual hardware address, or number, of a NIC device. Each device has a globally unique MAC address to identify its connection on a network. It is part of the IEEE 802 standard.

The MAC address uses a 48-bit (248 ) number that consists of six groups of two hexadecimal numbers, separated by a hyphen or colon. Here are two examples:

01-23-45-67-89-ab

01:23:45:67:89:ab

# Internet Protocol Addressing

## Subnet Mask
A subnet allows IP networks to be logically subdivided, increasing performance and enhancing network security.

## Static IP Addressing 

