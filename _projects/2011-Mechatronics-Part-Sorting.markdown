---
title: Parts Inspection and Sorting System
subtitle: Conveyor Belt, 4 sensors, 2 motors, Microcontroller
linktext: microcontroller-C-project
websiteurl: https://github.com/TT--/projects-portfolio/blob/master/sorting-system.c
websitename: C Code on GitHub
date: 2011-01-02
img: mecha.jpg
thumbnail: mecha-thumb.jpg
alt: Parts inspection and sorting system using AVR microcontroller.
description: >
    Sorting system for four types of object: white or black plastic, aluminum or steel.
    
    
    As it moves down the conveyor, the part's position is detected by phototransistor.  Another sensor is then activated to measure its relative surface reflectivity.  A container rotated by stepper motor is positioned to catch the object as it leaves the conveyor.


    **Implemented** interrupts handling ADC results and inputs from optical and Hall Effect sensors.


    **Linked queue** stores known objects: enqueue as part is classified and dequeue when part leaves the belt.  LEDs display a count of measured and sorted parts.


    **Adapted** design to address physical hardware constraints: Increased speed of parts bin rotation (system bottleneck) by dynamically adjusting delay between motor coil energizations.


    **Solved** switch bouncing in software by sampling a bit stream to detect transition edge.
---